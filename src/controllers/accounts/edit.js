'use strict';

const user = require('../../user');
const meta = require('../../meta');
const helpers = require('../helpers');
const groups = require('../../groups');
const privileges = require('../../privileges');
const plugins = require('../../plugins');
const accountHelpers = require('./helpers');
const file = require('../../file');

const editController = module.exports;

editController.get = async function (req, res) {
	const [{
		username,
		userslug,
		isSelf,
		reputation,
		groups: _groups,
		groupTitleArray,
		allowMultipleBadges,
	}, canUseSignature, canManageUsers] = await Promise.all([
		accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query),
		privileges.global.can('signature', req.uid),
		privileges.admin.can('admin:users', req.uid),
	]);

	const payload = {};
	payload.maximumSignatureLength = meta.config.maximumSignatureLength;
	payload.maximumAboutMeLength = meta.config.maximumAboutMeLength;
	payload.maximumProfileImageSize = meta.config.maximumProfileImageSize;
	payload.allowMultipleBadges = meta.config.allowMultipleBadges === 1;
	payload.allowAccountDelete = meta.config.allowAccountDelete === 1;
	payload.allowWebsite = !isSelf || !!meta.config['reputation:disabled'] || reputation >= meta.config['min:rep:website'];
	payload.allowAboutMe = !isSelf || !!meta.config['reputation:disabled'] || reputation >= meta.config['min:rep:aboutme'];
	payload.allowSignature = canUseSignature && (!isSelf || !!meta.config['reputation:disabled'] || reputation >= meta.config['min:rep:signature']);
	payload.profileImageDimension = meta.config.profileImageDimension;
	payload.defaultAvatar = user.getDefaultAvatar();

	payload.groups = _groups.filter(g => g && g.userTitleEnabled && !groups.isPrivilegeGroup(g.name) && g.name !== 'registered-users');

	if (req.uid === res.locals.uid || canManageUsers) {
		const { associations } = await plugins.hooks.fire('filter:auth.list', { uid: res.locals.uid, associations: [] });
		payload.sso = associations;
	}

	if (!allowMultipleBadges) {
		payload.groupTitle = groupTitleArray[0];
	}

	payload.groups.sort((a, b) => {
		const i1 = groupTitleArray.indexOf(a.name);
		const i2 = groupTitleArray.indexOf(b.name);
		if (i1 === -1) {
			return 1;
		} else if (i2 === -1) {
			return -1;
		}
		return i1 - i2;
	});
	payload.groups.forEach((group) => {
		group.userTitle = group.userTitle || group.displayName;
		group.selected = groupTitleArray.includes(group.name);
	});
	payload.groupSelectSize = Math.min(10, Math.max(5, payload.groups.length + 1));

	payload.title = `[[pages:account/edit, ${username}]]`;
	payload.breadcrumbs = helpers.buildBreadcrumbs([
		{
			text: username,
			url: `/user/${userslug}`,
		},
		{
			text: '[[user:edit]]',
		},
	]);
	payload.editButtons = [];

	res.render('account/edit', payload);
};

editController.password = async function (req, res, next) {
	await renderRoute('password', req, res, next);
};

editController.username = async function (req, res, next) {
	await renderRoute('username', req, res, next);
};

editController.email = async function (req, res, next) {
	const targetUid = await user.getUidByUserslug(req.params.userslug);
	if (!targetUid) {
		return next();
	}

	const [isAdminOrGlobalMod, canEdit] = await Promise.all([
		user.isAdminOrGlobalMod(req.uid),
		privileges.users.canEdit(req.uid, targetUid),
	]);

	if (!isAdminOrGlobalMod && !canEdit) {
		return next();
	}

	req.session.returnTo = `/uid/${targetUid}`;
	req.session.registration = req.session.registration || {};
	req.session.registration.updateEmail = true;
	req.session.registration.uid = targetUid;
	helpers.redirect(res, '/register/complete');
};

async function renderRoute(name, req, res) {
	const [isAdmin, { username, userslug }, hasPassword] = await Promise.all([
		privileges.admin.can('admin:users', req.uid),
		user.getUserFields(res.locals.uid, ['username', 'userslug']),
		user.hasPassword(res.locals.uid),
	]);

	if (meta.config[`${name}:disableEdit`] && !isAdmin) {
		return helpers.notAllowed(req, res);
	}

	const payload = { hasPassword };
	if (name === 'password') {
		payload.minimumPasswordLength = meta.config.minimumPasswordLength;
		payload.minimumPasswordStrength = meta.config.minimumPasswordStrength;
	}

	payload.title = `[[pages:account/edit/${name}, ${username}]]`;
	payload.breadcrumbs = helpers.buildBreadcrumbs([
		{
			text: username,
			url: `/user/${userslug}`,
		},
		{
			text: '[[user:edit]]',
			url: `/user/${userslug}/edit`,
		},
		{
			text: `[[user:${name}]]`,
		},
	]);

	res.render(`account/edit/${name}`, payload);
}

editController.uploadPicture = async function (req, res, next) {
	const userPhoto = req.files.files[0];
	try {
		const updateUid = await user.getUidByUserslug(req.params.userslug);
		const isAllowed = await privileges.users.canEdit(req.uid, updateUid);
		if (!isAllowed) {
			return helpers.notAllowed(req, res);
		}
		await user.checkMinReputation(req.uid, updateUid, 'min:rep:profile-picture');

		const image = await user.uploadCroppedPictureFile({
			callerUid: req.uid,
			uid: updateUid,
			file: userPhoto,
		});

		res.json([{
			name: userPhoto.name,
			url: image.url,
		}]);
	} catch (err) {
		next(err);
	} finally {
		await file.delete(userPhoto.path);
	}
};

<div class="account w-100 mx-auto">
	<div data-widget-area="header">
		{{{each widgets.header}}}
		{{widgets.header.html}}
		{{{end}}}
	</div>

	<div class="cover position-absolute start-0 top-0 w-100" component="account/cover" style="background-image: url({cover:url}); background-position: {cover:position};">
		<div class="container">
			{{{ if allowCoverPicture }}}
			{{{ if canEdit }}}
			<div class="controls text-center">
				<span class="upload p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-upload"></i></span>
				<span class="resize p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-arrows"></i></span>
				<span class="remove p-2 m-2 rounded-1 text-bg-light opacity-75"><i class="fa fa-fw fa-times"></i></span>
			</div>
			<div class="save text-bg-primary">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>
			<div class="indicator text-bg-primary">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
			{{{ end }}}
			{{{ end }}}
		</div>
	</div>

	<div class="d-flex flex-column flex-md-row gap-2 w-100 pb-4 mb-4 mt-2 border-bottom">
		<div {{{ if (allowProfilePicture && isSelfOrAdminOrGlobalModerator)}}}component="profile/change/picture"{{{ end }}} class="avatar-wrapper border border-white border-4 rounded-circle position-relative align-self-center align-self-md-start hover-parent" style="margin-top: -75px;">
			{buildAvatar(@value, "142px", true)}
			{{{ if (allowProfilePicture && isSelfOrAdminOrGlobalModerator)}}}
			<div component="profile/change/picture" class="d-none d-md-block pointer p-2 rounded-1 opacity-75 text-bg-light position-absolute top-50 start-50 translate-middle hover-visible">
				<span class="upload"><i class="fa fa-fw fa-upload"></i></span>
			</div>
			{{{ end }}}
		</div>

		<div class="d-flex flex-column flex-md-row mt-1 justify-content-between w-100 gap-2">
			<div class="d-flex flex-grow-1 flex-row gap-2">
				<div class="d-flex flex-column gap-1">
					<h2 class="fullname fw-semibold fs-2 tracking-tight mb-0">{{{ if fullname }}}{fullname}{{{ else }}}{username}{{{ end }}}</h2>
					<div class="d-flex flex-wrap gap-1 text-sm align-items-center">
						<span class="username fw-bold">{{{ if !banned }}}@{username}{{{ else }}}[[user:banned]]{{{ end }}}</span>
						<div class="d-flex align-items-center gap-1 p-1">
							{{{ if selectedGroup.length }}}
							{{{ each selectedGroup }}}
							{{{ if ./slug }}}
							<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate text-decoration-none" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text align-text-bottom">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
							{{{ end }}}
							{{{ end }}}
							{{{ end }}}
						</div>
					</div>
					<div class="d-flex gap-2" component="user/badges"></div>
					{{{ if isAdminOrGlobalModeratorOrModerator }}}
					{{{ if banned }}}
					<div class="text-xm text-muted">
						{{{ if banned_until }}}
						[[user:info.banned-until, {banned_until_readable}]]
						{{{ else }}}
						[[user:info.banned-permanently]]
						{{{ end }}}
					</div>
					{{{ end }}}
					{{{ end }}}
				</div>
			</div>

			<div class="flex-shrink-0 d-flex gap-1 align-self-stretch align-self-md-start justify-content-end">
				{{{ if loggedIn }}}
				{{{ if !isSelf }}}
				<a component="account/unfollow" href="#" class="btn btn-info flex-fill{{{ if !isFollowing }}} hide{{{ end }}}">[[user:unfollow]]</a>
				<a component="account/follow" href="#" class="btn btn-primary flex-fill{{{ if isFollowing }}} hide{{{ end }}}">[[user:follow]]</a>
				{{{ end }}}
				{{{ end }}}

				{{{ if (loggedIn && (!isSelf && (!banned && !config.disableChat))) }}}
				<div class="btn-group flex-fill">
					<a {{{ if hasPrivateChat }}}component="account/chat"{{{ else }}}component="account/new-chat"{{{ end }}} href="#" class="btn btn-light" role="button">[[user:chat]]</a>
					{{{ if hasPrivateChat}}}
					<button type="button" class="btn btn-light dropdown-toggle flex-0" data-bs-toggle="dropdown">
						<i class="fa fa-caret-down"></i>
					</button>
					<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
						<li><a class="dropdown-item rounded-1" href="#" component="account/new-chat">[[user:new_chat_with, {username}]]</a></li>
					</ul>
					{{{ end }}}
				</div>
				{{{ end }}}
				{{{ if !isSelf }}}
				{{{ if (isAdmin || (canBan || canMute ))}}}
				<div class="btn-group bottom-sheet">
	<button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		<i class="fa fa-gear fa-fw"></i>
	</button>
	<ul class="dropdown-menu dropdown-menu-end p-1 text-sm account-sub-links">
		<li>
			<a class="dropdown-item rounded-1" href="{config.relative_path}/user/{userslug}/info">[[user:account_info]]</a>
		</li>
		{{{ if (canBan || canMute) }}}
		<li role="separator" class="dropdown-divider"></li>
		{{{ end }}}
		{{{ if canBan }}}
		<li class="{{{ if banned }}}hide{{{ end }}}">
			<a class="dropdown-item rounded-1" component="account/ban" href="#">[[user:ban_account]]</a>
		</li>
		<li class="{{{ if !banned }}}hide{{{ end }}}">
			<a class="dropdown-item rounded-1" component="account/unban" href="#">[[user:unban_account]]</a>
		</li>
		{{{ end }}}
		{{{ if canMute }}}
		<li class="{{{ if muted }}}hide{{{ end }}}">
			<a class="dropdown-item rounded-1" component="account/mute" href="#">[[user:mute_account]]</a>
		</li>
		<li class="{{{ if !muted }}}hide{{{ end }}}">
			<a class="dropdown-item rounded-1" component="account/unmute" href="#">[[user:unmute_account]]</a>
		</li>
		{{{ end }}}
		{{{ if isAdmin }}}
		<li>
			<a component="account/delete-account" href="#" class="dropdown-item rounded-1">[[user:delete_account_as_admin]]</a>
			<a component="account/delete-content" href="#" class="dropdown-item rounded-1">[[user:delete_content]]</a>
			<a component="account/delete-all" href="#" class="dropdown-item rounded-1">[[user:delete_all]]</a>
		</li>
		{{{ end }}}
	</ul>
</div>

				{{{ end }}}
				{{{ end }}}
			</div>
		</div>
	</div>

	<div class="d-flex flex-column flex-md-row">
		<div class="flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200">
	<div class="sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1" style="top: 1rem;z-index: 1;">
		<a href="{config.relative_path}/user/{userslug}" class="btn-ghost fw-semibold {{{ if template.account/profile }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:about]]</div>
		</a>
		<a href="{config.relative_path}/user/{userslug}/posts"class="btn-ghost fw-semibold
			{{{ if template.account/posts }}}active{{{ end }}}
			{{{ if template.account/best }}}active{{{ end }}}
			{{{ if template.account/controversial }}}active{{{ end }}}
			{{{ if template.account/upvoted }}}active{{{ end }}}
			{{{ if template.account/downvoted }}}active{{{ end }}}
			{{{ if template.account/bookmarks }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:posts]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.posts}">{humanReadableNumber(counts.posts)}</span>
		</a>
		<a href="{config.relative_path}/user/{userslug}/topics" class="btn-ghost fw-semibold
			{{{ if template.account/topics }}}active{{{ end }}}
			{{{ if template.account/watched }}}active{{{ end }}}
			{{{ if template.account/ignored }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:topics]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.topics}">{humanReadableNumber(counts.topics)}</span>
		</a>
		<a href="{config.relative_path}/user/{userslug}/groups" class="btn-ghost fw-semibold
			{{{ if template.account/groups }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:header.groups]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.groups}">{humanReadableNumber(counts.groups)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/followers" class="btn-ghost fw-semibold
			{{{ if template.account/followers }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:followers]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.followers}">{humanReadableNumber(counts.followers)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/following" class="btn-ghost fw-semibold
			{{{ if template.account/following }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:following]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.following}">{humanReadableNumber(counts.following)}</span>
		</a>

		{{{ if canEdit }}}
		<a href="{config.relative_path}/user/{userslug}/categories" class="btn-ghost fw-semibold
			{{{ if template.account/categories }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:watched_categories]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.categoriesWatched}">{counts.categoriesWatched}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/blocks" class="btn-ghost fw-semibold
			{{{ if template.account/blocks }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:blocked-users]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.blocks}">{humanReadableNumber(counts.blocks)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/uploads" class="btn-ghost fw-semibold
			{{{ if template.account/uploads }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:uploads]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.uploaded}">{humanReadableNumber(counts.uploaded)}</span>
		</a>
		{{{ end }}}

		{{{ if (loggedIn && (!isSelf && !banned)) }}}
		<hr class="w-100 my-2"/>
		<a href="#" component="account/flag" class="btn-ghost-sm">
			<i class="flex-shrink-0 fa-solid fa-flag text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:flag-profile]]</div>
		</a>
		<a href="#" component="account/block" class="btn-ghost-sm {{{ if isBlocked }}}hidden{{{ end }}}">
			<i class="flex-shrink-0 fa-solid fa-ban text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:block_user]]</div>
		</a>
		<a href="#" component="account/unblock" class="btn-ghost-sm {{{ if !isBlocked }}}hidden{{{ end }}}">
			<i class="flex-shrink-0 fa-solid fa-ban text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:unblock_user]]</div>
		</a>
		{{{ end }}}

		{{{ if canEdit }}}
		<hr class="w-100 my-2"/>
		<a href="{config.relative_path}/user/{userslug}/edit" class="btn-ghost-sm text-xs
		{{{ if template.account/edit }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:edit-profile]]</div>
		</a>
		<a href="{config.relative_path}/user/{userslug}/settings" class="btn-ghost-sm text-xs
			{{{ if template.account/settings }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:settings]]</div>
		</a>
		{{{ end }}}

		{{{ each profile_links }}}
		<a href="{config.relative_path}/user/{userslug}/{./route}" class="btn-ghost-sm text-xs plugin-link {{{ if ./public }}}public{{{ else }}}private{{{ end }}} {{{ if (url == ./url) }}}active{{{ end }}}" id="{./id}">
			<div class="flex-grow-1">{./name}</div>
		</a>
		{{{end}}}
	</div>
</div>

		<div class="account-content flex-grow-1 ps-md-2 ps-lg-3 ps-xl-4" style="min-width: 0;">



<div class="mb-3 d-flex justify-content-between align-items-center">
	<h3 class="fw-semibold fs-5 mb-0">{{{ if isSelf }}}[[pages:account/settings]]{{{ else }}}[[pages:account/settings-of, {username}]]{{{ end }}}</h3>
	<button id="submitBtn" class="btn btn-primary">[[global:save_changes]]</button>
</div>
<div class="row">
	<div class="col-12 col-md-6">
		{{{ if !disableCustomUserSkins }}}
		<h6 class="fw-bold">[[user:select-skin]]</h6>
		<div class="">
			<select class="form-select form-select-sm" id="bootswatchSkin" data-property="bootswatchSkin">
				{{{each bootswatchSkinOptions}}}
				<option value="{bootswatchSkinOptions.value}" {{{ if bootswatchSkinOptions.selected }}}selected{{{ end }}}>{bootswatchSkinOptions.name}</option>
				{{{end}}}
			</select>
		</div>
		<hr/>
		{{{ end }}}

		{{{ if allowUserHomePage }}}
		<h6 class="fw-bold">[[user:select-homepage]]</h6>
		<div class="">
			<div class="mb-2">
				<select class="form-select form-select-sm" id="homePageRoute" data-property="homePageRoute">
					<option value="none">None</option>
					{{{ each homePageRoutes }}}
					<option value="{./route}" {{{ if ./selected }}}selected="1"{{{ end }}}>{./name}</option>
					{{{ end }}}
				</select>
				<p class="form-text text-xs">[[user:homepage_description]]</p>
			</div>
			<div id="homePageCustom" class="mb-2" style="display: none;">
				<label class="form-label" for="homePageCustom">[[user:custom_route]]</label>
				<input type="text" class="form-control form-control-sm" data-property="homePageCustom" id="homePageCustom" value="{settings.homePageRoute}"/>
				<p class="form-text text-xs">[[user:custom_route_help]]</p>
			</div>
		</div>
		<hr/>
		{{{ end }}}

		<h6 class="fw-bold">[[global:privacy]]</h6>
		<div class="">
			{{{ if !hideEmail }}}
			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="showemail" {{{ if settings.showemail }}}checked {{{ end }}}/>
				<label class="form-check-label text-sm">[[user:show_email]]</label>
			</div>
			{{{ end }}}

			{{{ if !hideFullname }}}
			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="showfullname" {{{ if settings.showfullname }}}checked{{{ end }}}/>
				<label class="form-check-label text-sm">[[user:show_fullname]]</label>
			</div>
			{{{ end }}}
			{{{ if !config.disableChat }}}
			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="restrictChat" {{{ if settings.restrictChat }}}checked{{{ end }}}/>
				<label class="form-check-label text-sm">[[user:restrict_chats]]</label>
			</div>
			{{{ end }}}
		</div>
		<hr/>

		<h6 class="fw-bold">[[user:browsing]]</h6>
		<div class="">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="openOutgoingLinksInNewTab" {{{ if settings.openOutgoingLinksInNewTab }}}checked{{{ end }}}/>
				<label class="form-check-label">[[user:open_links_in_new_tab]]</label>
			</div>
			{{{ if inTopicSearchAvailable }}}
			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="topicSearchEnabled" {{{ if settings.topicSearchEnabled }}}checked{{{ end }}}/>
				<label class="form-check-label">[[user:enable_topic_searching]]</label>
			</div>
			<p class="form-text text-xs">[[user:topic_search_help]]</p>
			{{{ end }}}

			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="updateUrlWithPostIndex" {{{ if settings.updateUrlWithPostIndex }}}checked{{{ end }}}/>
				<label class="form-check-label">[[user:update_url_with_post_index]]</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="scrollToMyPost" {{{ if settings.scrollToMyPost }}}checked{{{ end }}}/>
				<label class="form-check-label">[[user:scroll_to_my_post]]</label>
			</div>
		</div>
		<hr/>

		<h6 class="fw-bold">[[global:pagination]]</h6>
		<div class="">
			<div class="mb-2 form-check">
				<input type="checkbox" class="form-check-input" data-property="usePagination" {{{ if settings.usePagination }}}checked{{{ end }}}>
				<label class="form-check-label">[[user:paginate_description]]</label>
			</div>
			<div class="mb-2">
				<label class="form-label">[[user:topics_per_page]] ([[user:max_items_per_page, {maxTopicsPerPage}]])</label>
				<input type="text" class="form-control form-control-sm" data-property="topicsPerPage" value="{settings.topicsPerPage}">
			</div>
			<div class="">
				<label class="form-label">[[user:posts_per_page]] ([[user:max_items_per_page, {maxPostsPerPage}]])</label>
				<input type="text" class="form-control form-control-sm" data-property="postsPerPage" value="{settings.postsPerPage}">
			</div>
		</div>

		<hr/>

		<h6 class="fw-bold">[[global:sort]]</h6>
		<div class="">
			<div class="mb-2">
				<label class="form-label">[[user:category-topic-sort]]</label>
				<select class="form-select form-select-sm" data-property="categoryTopicSort">
					<option value="newest_to_oldest" {{{ if (settings.categoryTopicSort == "newest_to_oldest") }}}selected{{{ end }}}>[[topic:newest_to_oldest]]</option>
					<option value="oldest_to_newest" {{{ if (settings.categoryTopicSort == "oldest_to_newest") }}}selected{{{ end }}}>[[topic:oldest_to_newest]]</option>
					<option value="most_posts" {{{ if (settings.categoryTopicSort == "most_posts") }}}selected{{{ end }}}>[[topic:most_posts]]</option>
					<option value="most_votes" {{{ if (settings.categoryTopicSort == "most_votes") }}}selected{{{ end }}}>[[topic:most_votes]]</option>
					<option value="most_views" {{{ if (settings.categoryTopicSort == "most_views") }}}selected{{{ end }}}>[[topic:most_views]]</option>
				</select>
			</div>
			<div class="">
				<label class="form-label">[[user:topic-post-sort]]</label>
				<select class="form-select form-select-sm" data-property="topicPostSort">
					<option value="oldest_to_newest" {{{ if (settings.topicPostSort == "oldest_to_newest") }}}selected{{{ end }}}>[[topic:oldest_to_newest]]</option>
					<option value="newest_to_oldest" {{{ if (settings.topicPostSort == "newest_to_oldest") }}}selected{{{ end }}}>[[topic:newest_to_oldest]]</option>
					<option value="most_votes" {{{ if (settings.topicPostSort == "most_votes") }}}selected{{{ end }}}>[[topic:most_votes]]</option>
				</select>
			</div>
		</div>

		{{{ if !disableEmailSubscriptions }}}
		<hr/>
		<h6 class="fw-bold">[[global:email]]</h6>
		<div class="">
			<div class="mb-2">
				<label class="form-label" for="dailyDigestFreq">[[user:digest_label]]</label>
				<select class="form-select form-select-sm" id="dailyDigestFreq" data-property="dailyDigestFreq" autocomplete="off">
					{{{each dailyDigestFreqOptions}}}
					<option value="{./value}" {{{ if ./selected }}}selected="1"{{{ end }}}>{./name}</option>
					{{{end}}}
				</select>
				<p class="form-text text-xs">[[user:digest_description]]</p>
			</div>
		</div>
		{{{ end }}}

		{{{ each customSettings}}}
		<hr/>
		<h6 class="fw-bold">{./title}</h6>
		<div class="">
			{./content}
		</div>

		{{{end}}}
		<hr class="d-block d-md-none"/>
	</div>

	<div class="col-12 col-md-6">
		<h6 class="fw-bold">[[global:language]]</h6>
		<div class="">
			<select data-property="userLang" class="form-select form-select-sm mb-2">
				{{{each languages}}}
				<option value="{./code}" {{{ if ./selected }}}selected{{{ end }}}>{./name} ({./code})</option>
				{{{end}}}
			</select>
		</div>
		<hr/>
		{{{ if (isAdmin && isSelf) }}}
		<h6 class="fw-bold">[[user:acp_language]]</h6>
		<div class="">
			<select data-property="acpLang" class="form-select form-select-sm">
				{{{each acpLanguages}}}
				<option value="{./code}" {{{ if ./selected }}}selected{{{ end }}}>{./name} ({./code})</option>
				{{{end}}}
			</select>
		</div>
		<hr/>
		{{{ end }}}

		<h6 class="fw-bold">[[topic:watch]]</h6>
		<div class="">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="followTopicsOnCreate" {{{ if settings.followTopicsOnCreate }}}checked{{{ end }}}/>
				<label class="form-check-label">[[user:follow_topics_you_create]]</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" data-property="followTopicsOnReply" {{{ if settings.followTopicsOnReply }}}checked{{{ end }}}/>
					<label class="form-check-label">[[user:follow_topics_you_reply_to]]</label>
			</div>
			<div class="mb-2">
				<label class="form-label">[[user:default-category-watch-state]]</label>
				<select class="form-select form-select-sm" data-property="categoryWatchState">
					<option value="watching" {{{ if categoryWatchState.watching }}}selected{{{ end }}}>[[category:watching]]</option>
					<option value="notwatching" {{{ if categoryWatchState.notwatching }}}selected{{{ end }}}>[[category:not-watching]]</option>
					<option value="ignoring" {{{ if categoryWatchState.ignoring }}}selected{{{ end }}}>[[category:ignoring]]</option>
				</select>
			</div>
		</div>
		<hr/>

		<h6 class="fw-bold">[[user:notifications]]</h6>
		<div class="">
			{{{each notificationSettings}}}
			<div class="row mb-3">
				<div class="col-7">
					<label class="text-sm">{./label}</label>
				</div>
				<div class="mb-2 col-5">
					<select class="form-select form-select-sm" data-property="{./name}">
						<option value="none" {{{ if ./none }}}selected{{{ end }}}>[[notifications:none]]</option>
						<option value="notification" {{{ if ./notification }}}selected{{{ end }}}>[[notifications:notification_only]]</option>
						<option value="email" {{{ if ./email }}}selected{{{ end }}}>[[notifications:email_only]]</option>
						<option value="notificationemail" {{{ if ./notificationemail }}}selected{{{ end }}}>[[notifications:notification_and_email]]</option>
					</select>
				</div>
			</div>
			{{{end}}}

			<div class="row">
				<div class="col-7">
					<label class="text-sm" for="upvote-notif-freq">[[user:upvote-notif-freq]]</label>
				</div>
				<div class="mb-2 col-5">
					<select class="form-select form-select-sm" id="upvote-notif-freq" name="upvote-notif-freq" data-property="upvoteNotifFreq">
						{{{ each upvoteNotifFreq }}}
						<option value="{./name}" {{{ if ./selected }}}selected{{{ end }}}>
							[[user:upvote-notif-freq.{./name}]]
						</option>
						{{{end}}}
					</select>
				</div>
			</div>
		</div>
	</div>
</div>

		</div>
	</div>
</div>

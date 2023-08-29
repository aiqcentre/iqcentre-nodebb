
<div class="acp-page-container">
	<div component="settings/main/header" class="row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center">
	<div class="col-12 col-md-8 px-0 mb-1 mb-md-0">
		<h4 class="fw-bold tracking-tight mb-0">{title}</h4>
	</div>
	<div class="col-12 col-md-4 px-0 px-md-3">
		<button id="save" class="btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap">[[admin/admin:save-changes]]</button>
	</div>
</div>

	<div class="row m-0">
		<div id="spy-container" class="col-12 col-md-8 px-0 mb-4" tabindex="0">
			<form role="form" class="reactions-settings">
				<div class="mb-3">
					<h5 class="fw-bold tracking-tight settings-header">[[reactions:settings.title]]</h5>
					<div class="form-check form-switch mb-3">
						<input id="enablePostReactions" name="enablePostReactions" type="checkbox" class="form-check-input">
						<label for="enablePostReactions" class="form-check-label">[[reactions:settings.enable-post-reactions]]</label>
					</div>
					<div class="mb-3">
						<label class="form-label">[[reactions:settings.max-reactions-per-post]]</label>
						<input type="number" min="0" class="form-control" id="maximumReactions" name="maximumReactions">
					</div>
					<div class="mb-3">
						<label class="form-label">[[reactions:settings.max-reactions-per-user-per-post]]</label>
						<input type="number" min="0" class="form-control" id="maximumReactionsPerUserPerPost" name="maximumReactionsPerUserPerPost">
						<p class="form-text">
							[[reactions:settings.max-reactions-per-user-per-post-help]]
						</p>
					</div>
					<hr/>
					<div class="form-check form-switch mb-3">
						<input id="enableMessageReactions" name="enableMessageReactions" type="checkbox" class="form-check-input">
						<label for="enableMessageReactions" class="form-check-label">[[reactions:settings.enable-message-reactions]]</label>
					</div>
					<div class="mb-3">
						<label class="form-label">[[reactions:settings.max-reactions-per-message]]</label>
						<input type="number" min="0" class="form-control" id="maximumReactionsPerMessage" name="maximumReactionsPerMessage">

					</div>
					<div class="">
						<label class="form-label">[[reactions:settings.max-reactions-per-user-per-message]]</label>
						<input type="number" min="0" class="form-control" id="maximumReactionsPerUserPerMessage" name="maximumReactionsPerUserPerMessage">
						<p class="form-text">
							[[reactions:settings.max-reactions-per-user-per-message-help]]
						</p>
					</div>
				</div>

				<div class="mb-3">
					<h5 class="fw-bold tracking-tight settings-header">[[reactions:settings.reaction-reputations]]</h5>

					<p class="form-text">
						[[reactions:settings.reaction-reputations-help]]
					</p>
					<div class="form-group" data-type="sorted-list" data-sorted-list="reaction-reputations" data-item-template="admin/plugins/reactions/partials/sorted-list/emoji-item" data-form-template="admin/plugins/reactions/partials/sorted-list/emoji-form">
						<ul data-type="list" class="list-group"></ul>
						<button type="button" data-type="add" class="btn btn-info mt-2">[[reactions:settings.reaction-reputations.add]]</button>
					</div>
				</div>
			</form>
		</div>

		<div class="col-md-4 d-none d-md-block px-3 hidden" component="settings/toc">
	<div class="sticky-top" style="top: 4.0rem;">
		<div class="fw-bold text-xs text-muted mb-1">[[admin/settings/general:on-this-page]]</div>
		<nav id="settings-navbar" class="h-100 flex-column align-items-stretch">
			<nav class="nav nav-pills flex-column gap-2" component="settings/toc/list">
				<!-- this is filled by public/src/admin/settings.js populateTOC function -->
			</nav>
		</nav>
	</div>
</div>
	</div>
</div>

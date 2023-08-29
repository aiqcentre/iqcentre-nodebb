<div component="bottombar" class="bottombar d-flex flex-column d-lg-none fixed-bottom ff-secondary gap-1 align-items-center">

	<div class="d-flex w-100">
	<div class="pagination-block text-bg-light m-2 rounded-1 border border-gray-300 w-100" style="height:30px;">
		<div class="position-relative">
			<div class="progress-bar rounded-1 bg-info d-block position-absolute" style="height:28px;"></div>
		</div>
		<div class="wrapper dropup-center d-flex align-items-center justify-content-between w-100 h-100" style="padding: 5px 0px;">
			<div class="d-flex">
				<div class="lh-1 px-2">
					<i class="fa fa-angles-left pointer fa-fw pagetop fs-5" style="z-index: 1;"></i>
				</div>
				{{{ if config.usePagination }}}
				<div class="lh-1 px-2">
					<i class="fa fa-angle-left pointer fa-fw pageprev fs-5" style="z-index: 1;"></i>
				</div>
				{{{ end }}}
			</div>

			<a href="#" class="text-reset dropdown-toggle d-inline-block px-3 text-decoration-none" data-bs-toggle="dropdown">
				<span class="d-inline-flex gap-2 align-items-center pagination-text position-relative fw-bold"></span>
			</a>

			<div class="d-flex">
				{{{ if config.usePagination }}}
				<div class="lh-1 px-2">
					<i class="fa fa-angle-right pointer fa-fw pagenext fs-5" style="z-index: 1;"></i>
				</div>
				{{{ end }}}
				<div class="lh-1 px-2">
					<i class="fa fa-angles-right pointer fa-fw pagebottom fs-5" style="z-index: 1;"></i>
				</div>
			</div>

			<ul class="dropdown-menu p-0" role="menu" style="width: 100%;">
				<li class="p-3">
					<div class="row">
						<div class="col-8 post-content overflow-hidden mb-3" style="height: 350px;"></div>
						<div class="col-4 ps-0 text-end">
							<div class="scroller-content">
								<span class="pointer pagetop">[[topic:first-post]] <i class="fa fa-angle-double-up"></i></span>
								<div class="scroller-container border-gray-200" style="height: 300px;">
									<div class="scroller-thumb position-relative text-nowrap" style="height: 40px;">
										<span class="thumb-text text-sm fw-bold user-select-none position-relative pe-2" style="top: -15px;"></span>
										<div class="rounded-2 scroller-thumb-icon bg-primary d-inline-block position-relative" style="width: 9px; height:40px;"></div>
									</div>
								</div>
								<span class="pointer pagebottom">[[topic:last-post]] <i class="fa fa-angle-double-down"></i></span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-6">
							<button id="myNextPostBtn" class="btn btn-outline-secondary form-control text-truncate" disabled>[[topic:go-to-my-next-post]]</button>
						</div>
						<div class="col-6">
							<input type="number" class="form-control" id="indexInput" placeholder="[[global:pagination.enter_index]]">
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>

	<div class="bottombar-nav p-2 text-dark bg-light d-flex justify-content-between align-items-center w-100">
		<div class="">
			<a href="#" role="button" class="nav-link nav-btn d-flex justify-content-between align-items-center position-relative" data-bs-toggle="dropdown">
				<span class="position-relative">
					<i class="fa fa-fw fa-lg fa-bars"></i>
					<span component="unread/count" data-unread-url="{unreadCount.unreadUrl}" class="position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary {{{ if !unreadCount.mobileUnread }}}hidden{{{ end }}}">{unreadCount.mobileUnread}</span>
				</span>
			</a>
			<ul class="navigation-dropdown dropdown-menu">
				{{{ each navigation }}}
				{{{ if displayMenuItem(@root, @index) }}}
				<li class="nav-item {./class}{{{ if ./dropdown }}} dropend{{{ end }}}" title="{./title}">
					<a class="nav-link nav-btn navigation-link px-3 py-2 {{{ if ./dropdown }}}dropdown-toggle{{{ end }}}"
					{{{ if ./dropdown }}} href="#" role="button" data-bs-toggle="collapse" data-bs-target="#collapse-target-{@index}" onclick="event.stopPropagation();" {{{ else }}} href="{./route}"{{{ end }}} {{{ if ./id }}}id="{./id}"{{{ end }}}{{{ if ./targetBlank }}} target="_blank"{{{ end }}}>
						<span class="d-inline-flex justify-content-between align-items-center w-100">
							<span class="text-nowrap">
								{{{ if ./iconClass }}}
								<i class="fa fa-fw {./iconClass}" data-content="{./content}"></i>
								{{{ end }}}
								{{{ if ./text }}}
								<span class="nav-text px-2 fw-semibold">{./text}</span>
								{{{ end }}}
							</span>
							<span component="navigation/count" class="badge rounded-1 bg-primary {{{ if !./content }}}hidden{{{ end }}}">{./content}</span>
						</span>
					</a>
					{{{ if ./dropdown }}}
					<div class="ps-3">
						<ul id="collapse-target-{@index}" class="collapse list-unstyled ps-3">
							{./dropdownContent}
						</ul>
					</div>
					{{{ end }}}
				</li>
				{{{ end }}}
				{{{ end }}}
			</ul>
		</div>

		<div class="">
			{{{ if config.loggedIn }}}
			<ul id="logged-in-menu" class="list-unstyled d-flex align-items-center w-100 gap-3 mb-0">
				{{{ if config.searchEnabled }}}
				<li component="sidebar/search" class="nav-item m-0 search">
				<a component="search/button" id="search-button" href="#" role="button" class="nav-link nav-btn text-truncate" data-bs-toggle="dropdown" title="[[global:header.search]]">
	<i class="fa fa-search fa-fw"></i>
	<span class="nav-text visible-open px-2 fw-semibold">[[global:search]]</span>
</a>
<div class="search-dropdown dropdown-menu p-2 shadow">
	<form component="search/form" id="search-form" class="d-flex justify-content-end align-items-center" role="search" method="GET">
		<div component="search/fields" class="w-100" id="search-fields">
			<div id="quick-search-container" class="quick-search-container d-block hidden">
				<div class="form-check filter-category mb-2 ms-2">
					<input class="form-check-input" type="checkbox" checked>
					<label class="form-check-label name"></label>
				</div>

				<div class="text-center loading-indicator"><i class="fa fa-spinner fa-spin"></i></div>
				<div class="quick-search-results-container"></div>
			</div>

			<div class="d-flex gap-1 input-container">
				<input autocomplete="off" type="text" class="form-control" placeholder="[[global:search]]" name="query" value="">

				<div class="nav-btn d-flex justify-content-center align-items-center advanced-search-link">
					<i class="fa fa-gears fa-fw text-muted"></i>
				</div>
			</div>

			<button type="submit" class="btn btn-outline-secondary hide">[[global:search]]</button>
		</div>
	</form>
</div>
				</li>
				{{{ end }}}

				<li component="notifications" class="nav-item m-0 notifications">
				<a data-bs-toggle="dropdown" href="#" role="button" class="nav-link nav-btn d-flex gap-2 justify-content-between align-items-center position-relative">
	<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
		<span class="position-relative">
			<i component="notifications/icon" class="fa fa-fw {{{ if unreadCount.notification}}}fa-bell{{{ else }}}fa-bell-o{{{ end }}} unread-count" data-content="{unreadCount.notification}"></i>
			<span component="notifications/count" class="visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary {{{ if !unreadCount.notification }}}hidden{{{ end }}}">{unreadCount.notification}</span>
		</span>
		<span class="nav-text small visible-open fw-semibold truncate-text">[[global:header.notifications]]</span>
	</span>
	<span component="notifications/count" class="visible-open badge rounded-1 bg-primary {{{ if !unreadCount.notification }}}hidden{{{ end }}}">{unreadCount.notification}</span>
</a>
<ul class="notifications-dropdown dropdown-menu p-1 shadow">
	<li>
		<div component="notifications/list" class="list-container notification-list overscroll-behavior-contain pe-1 ff-base">
			<div class="mb-2 p-1">
				<div class="d-flex gap-1 justify-content-between">
					<div class="d-flex gap-2 flex-grow-1 placeholder-wave">
						<div class="placeholder" style="width: 32px; height: 32px;"></div>
						<div class="flex-grow-1">
							<div class="d-flex flex-column">
								<div class="text-sm">
									<span class="placeholder placeholder-sm col-4"></span>
									<span class="placeholder placeholder-sm col-6"></span>
									<span class="placeholder placeholder-sm col-7"></span>
									<span class="placeholder placeholder-sm col-2"></span>
									<span class="placeholder placeholder-sm col-5"></span>
								</div>
								<div class="text-xs">
									<div class="placeholder placeholder-xs col-6"></div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<button class="mark-read btn-ghost-sm" style="width: 1.5rem; height: 1.5rem;">
							<i class="unread fa fa-2xs fa-circle text-primary"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</li>
	<li class="dropdown-divider"></li>
	<li>
		<div class="d-flex justify-content-center gap-1 flex-wrap">
			<a role="button" href="#" class="btn btn-sm btn-light mark-all-read flex-fill text-nowrap text-truncate ff-secondary"><i class="fa fa-check-double"></i> [[notifications:mark_all_read]]</a>
			<a class="btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary" href="{relative_path}/notifications"><i class="fa fa-list"></i> [[notifications:see_all]]</a>
		</div>
	</li>
</ul>

				</li>

				{{{ if canChat }}}
				<li class="nav-item m-0 chats">
				<a data-bs-toggle="dropdown" href="#" role="button" class="nav-link nav-btn d-flex gap-2 justify-content-between align-items-center position-relative" component="chat/dropdown">
	<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
		<span class="position-relative">
			<i component="chat/icon" class="fa fa-fw {{{ if unreadCount.chat}}}fa-comment{{{ else }}}fa-comment-o{{{ end }}} unread-count" data-content="{unreadCount.chat}"></i>
			<span component="chat/count" class="visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary {{{ if !unreadCount.chat }}}hidden{{{ end }}}">{unreadCount.chat}</span>
		</span>
		<span class="nav-text small visible-open fw-semibold">[[global:header.chats]]</span>
	</span>
	<span component="chat/count" class="visible-open badge rounded-1 bg-primary {{{ if !unreadCount.chat }}}hidden{{{ end }}}">{unreadCount.chat}</span>
</a>
<ul class="chats-dropdown dropdown-menu p-1 shadow">
	<li>
		<div component="chat/list" class="list-container chats-list overscroll-behavior-contain p-0 pe-1 ff-base">
			<div class="rounded-1">
				<div class="d-flex gap-1 justify-content-between">
					<div class="dropdown-item p-2 d-flex gap-2 placeholder-wave">
						<div class="main-avatar">
							<div class="placeholder" style="width: 32px; height: 32px;"></div>
						</div>
						<div class="d-flex flex-grow-1 flex-column w-100">
							<div class="text-xs"><div class="placeholder col-3"></div></div>
							<div class="text-sm"><div class="placeholder col-11"></div></div>
							<div class="text-xs"><div class="placeholder col-4"></div></div>
						</div>
					</div>
					<div>
						<button class="mark-read btn-ghost-sm" style="width: 1.5rem; height: 1.5rem;">
							<i class="unread fa fa-2xs fa-circle text-primary"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</li>
	<li class="dropdown-divider"></li>
	<li>
		<div class="d-flex justify-content-center gap-1 flex-wrap">
			<a component="chats/mark-all-read" role="button" href="#" class="btn btn-sm btn-light mark-all-read flex-fill text-nowrap text-truncate ff-secondary"><i class="fa fa-check-double"></i> [[modules:chat.mark_all_read]]</a>
			<!-- on md and up see all chats button goes to last room -->
			<a class="d-none d-md-inline btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary" href="{relative_path}/user/{user.userslug}/chats{{{ if user.lastRoomId }}}/{user.lastRoomId}{{{ end }}}"><i class="fa fa-list"></i> [[modules:chat.see_all]]</a>
			<!-- on xs&sm the see all chats button goes to the list of chats -->
			<a class="d-inline d-md-none btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary" href="{relative_path}/user/{user.userslug}/chats"><i class="fa fa-list"></i> [[modules:chat.see_all]]</a>
		</div>
	</li>
</ul>

				</li>
				{{{ end }}}

				<li component="sidebar/drafts" class="hidden nav-item m-0 drafts">
				<a data-bs-toggle="dropdown" href="#" role="button" class="nav-link nav-btn d-flex gap-2 justify-content-between align-items-center position-relative">
	<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
		<span class="position-relative">
			<i component="drafts/icon" class="fa fa-fw fa-pen-to-square unread-count"></i>
			<span component="drafts/count" class="visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary hidden">0</span>
		</span>
		<span class="nav-text small visible-open fw-semibold">[[global:header.drafts]]</span>
	</span>
	<span component="drafts/count" class="visible-open badge rounded-1 bg-primary hidden">0</span>
</a>
<ul class="drafts-dropdown dropdown-menu p-1 shadow">
	<li>
		<div component="drafts/list" class="list-container draft-list list-unstyled d-flex flex-column overscroll-behavior-contain gap-1 pe-1">
			<div class="dropdown-item rounded-1 p-2 d-flex gap-2 placeholder-wave">
				<div class="d-flex flex-grow-1 flex-column w-100">
					<div class="text-xs placeholder col-3">&nbsp;</div>
					<div class="text-sm placeholder col-11">&nbsp;</div>
					<div class="text-xs placeholder col-4">&nbsp;</div>
				</div>
			</div>
			<div class="hidden no-drafts text-center p-4 d-flex flex-column">
				<div class="p-4"><i class="fa-solid fa-wind fs-2 text-muted"></i></div>
				<div class="text-xs fw-semibold text-muted">[[modules:composer.no-drafts]]</div>
			</div>
			<div class="draft-item-container">
				{{{ each drafts }}}
				{{{ if !@first}}}
				<hr class="my-1"/>
				{{{ end }}}
				<div data-save-id="{./save_id}">
					<div class="d-flex gap-1 justify-content-between ff-base">
						<div class="dropdown-item rounded-1 p-2 d-flex flex-column gap-2 pointer" component="drafts/open" data-save-id="{./save_id}">
							{{{ if (./action == "topics.post") }}}
							{{{ if ./title}}}
							<div class="text text-xs fw-semibold line-clamp-2 text-break">{./title}</div>
							{{{ end }}}
							{{{ end }}}

							{{{ if (./action == "posts.reply") }}}
							<div class="text text-xs fw-semibold line-clamp-2 text-break">[[topic:composer.replying_to, "{./title}"]]</div>
							{{{ end }}}

							{{{ if (./action == "posts.edit") }}}
							<div class="text text-xs fw-semibold line-clamp-2">[[topic:composer.editing-in, "{./title}"]]</div>
							{{{ end }}}

							{{{ if ./text }}}
							<div class="text text-sm line-clamp-3 text-break">{./text}</div>
							{{{ end }}}
							<div class="timeago text-xs text-muted" title="{./timestampISO}"></div>
						</div>
						<div>
							<button component="drafts/delete" data-save-id="{./save_id}" class="btn btn-light btn-sm">
								<i class="unread fa fa-xs fa-trash text-secondary"></i>
							</button>
						</div>
					</div>
				</div>
				{{{ end }}}
			</div>
		</div>
	</li>
</ul>

				</li>

				<li id="user_label" class="nav-item m-0 py-2 usermenu">
				<label class="nav-link nav-btn text-truncate d-flex gap-2 align-items-center" data-bs-toggle="dropdown" id="user_dropdown" role="button" component="header/avatar">
	{buildAvatar(user, "20px", true)}
	<span id="user-header-name" class="nav-text small visible-open fw-semibold">{user.username}</span>
</label>
<ul id="user-control-list" component="header/usercontrol" class="overscroll-behavior-contain user-dropdown dropdown-menu shadow p-1 text-sm ff-base" aria-labelledby="user_dropdown">
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" component="header/profilelink" href="{relative_path}/user/{user.userslug}">
			<span component="user/status" class="flex-shrink-0 border border-white border-2 rounded-circle status {user.status}"><span class="visually-hidden">[[global:{user.status}]]</span></span>
			<span class="fw-semibold" component="header/username">{user.username}</span>
		</a>
	</li>
	<li role="presentation" class="dropdown-divider"></li>
	<li><h6 class="dropdown-header text-xs">[[global:status]]</h6></li>
	<li>
		<a href="#" class="dropdown-item rounded-1 user-status d-flex align-items-center gap-2 {{{ if user.online }}}selected{{{ end }}}" data-status="online">
			<span component="user/status" class="flex-shrink-0 border border-white border-2 rounded-circle status online"><span class="visually-hidden">[[global:online]]</span></span>
			<span class="flex-grow-1">[[global:online]]</span>
			<i class="fa-solid fa-check text-muted flex-shrink-0"></i>
		</a>
	</li>
	<li>
		<a href="#" class="dropdown-item rounded-1 user-status d-flex align-items-center gap-2 {{{ if user.away }}}selected{{{ end }}}" data-status="away">
			<span component="user/status" class="flex-shrink-0 border border-white border-2 rounded-circle status away"><span class="visually-hidden">[[global:away]]</span></span>
			<span class="flex-grow-1">[[global:away]]</span>
			<i class="fa-solid fa-check text-muted flex-shrink-0"></i>
		</a>
	</li>
	<li>
		<a href="#" class="dropdown-item rounded-1 user-status d-flex align-items-center gap-2 {{{ if user.dnd }}}selected{{{ end }}}" data-status="dnd">
			<span component="user/status" class="flex-shrink-0 border border-white border-2 rounded-circle status dnd"><span class="visually-hidden">[[global:dnd]]</span></span>
			<span class="flex-grow-1">[[global:dnd]]</span>
			<i class="fa-solid fa-check text-muted flex-shrink-0"></i>
		</a>
	</li>
	<li>
		<a href="#" class="dropdown-item rounded-1 user-status d-flex align-items-center gap-2 {{{ if user.offline }}}selected{{{ end }}}" data-status="offline">
			<span component="user/status" class="flex-shrink-0 border border-white border-2 rounded-circle status offline"><span class="visually-hidden">[[global:invisible]]</span></span>
			<span class="flex-grow-1">[[global:invisible]]</span>
			<i class="fa-solid fa-check text-muted flex-shrink-0"></i>
		</a>
	</li>
	<li role="presentation" class="dropdown-divider"></li>
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="{relative_path}/user/{user.userslug}/bookmarks">
			<i class="fa fa-fw fa-bookmark text-muted"></i> <span>[[user:bookmarks]]</span>
		</a>
	</li>
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" component="header/profilelink/edit" href="{relative_path}/user/{user.userslug}/edit">
			<i class="fa fa-fw fa-edit text-muted"></i> <span>[[user:edit-profile]]</span>
		</a>
	</li>
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" component="header/profilelink/settings" href="{relative_path}/user/{user.userslug}/settings">
			<i class="fa fa-fw fa-gear text-muted"></i> <span>[[user:settings]]</span>
		</a>
	</li>
	{{{ if showModMenu }}}
	<li role="presentation" class="dropdown-divider"></li>
	<li><h6 class="dropdown-header text-xs">[[pages:moderator-tools]]</h6></li>
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="{relative_path}/flags">
			<i class="fa fa-fw fa-flag text-muted"></i> <span>[[pages:flagged-content]]</span>
		</a>
	</li>
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="{relative_path}/post-queue">
			<i class="fa fa-fw fa-list-alt text-muted"></i> <span>[[pages:post-queue]]</span>
		</a>
	</li>
	{{{ if registrationQueueEnabled }}}
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="{relative_path}/registration-queue">
			<i class="fa fa-fw fa-list-alt text-muted"></i> <span>[[pages:registration-queue]]</span>
		</a>
	</li>
	{{{ end }}}
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="{relative_path}/ip-blacklist">
			<i class="fa fa-fw fa-ban text-muted"></i> <span>[[pages:ip-blacklist]]</span>
		</a>
	</li>
	{{{ else }}}
	{{{ if postQueueEnabled }}}
	<li>
		<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="{relative_path}/post-queue">
			<i class="fa fa-fw fa-list-alt text-muted"></i> <span>[[pages:post-queue]]</span>
		</a>
	</li>
	{{{ end }}}
	{{{ end }}}

	<li role="presentation" class="dropdown-divider"></li>
	<li component="user/logout">
		<form method="post" action="{relative_path}/logout">
			<input type="hidden" name="_csrf" value="{config.csrf_token}">
			<input type="hidden" name="noscript" value="true">
			<button type="submit" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw fa-sign-out text-muted"></i><span>[[global:logout]]</span>
			</button>
		</form>
	</li>
</ul>

				</li>
			</ul>
			{{{ else }}}
			<ul id="logged-out-menu" class="list-unstyled d-flex w-100 gap-3 mb-0 logged-out-menu">
				
<li class="nav-item mx-2 order-last order-md-first" title="[[global:login]]">
	<a class="nav-link nav-btn" href="{relative_path}/login">
		<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
			<span class="position-relative">
				<i class="fa fa-fw fa-sign-in"></i>
			</span>
			<span class="nav-text small visible-open fw-semibold">[[global:login]]</span>
		</span>
	</a>
</li>
<hr class="my-2 mx-2 visible-open">
{{{ if allowRegistration }}}
<li class="nav-item mx-2" title="[[global:register]]">
	<span class="text-xs visible-open">[[login:dont_have_account]]</span>
	<a class="nav-link nav-btn" href="{relative_path}/register">
		<span class="d-flex gap-2 align-items-center text-nowrap truncate-open">
			<span class="position-relative">
				<i class="fa fa-fw fa-user-plus"></i>
			</span>
			<span class="nav-text small visible-open fw-semibold">[[global:register]]</span>
		</span>
	</a>
</li>
<hr class="my-2 mx-2 visible-open">
{{{ end }}}

{{{ if config.searchEnabled }}}
<li component="sidebar/search" class="visible-open nav-item mx-2 search">
	<div class="d-flex gap-2 py-1 px-2 align-items-center" title="[[themes/harmony:login-register-to-search]]">
		<i class="fa fa-fw fa-search text-muted"></i>
		<span class="nav-text visible-open text-xs text-muted">[[themes/harmony:login-register-to-search]]</span>
	</a>
</a>
{{{ end }}}




			</ul>
			{{{ end }}}
		</div>
	</div>
</div>
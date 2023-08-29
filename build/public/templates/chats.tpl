<div class="chats-full d-flex gap-1 h-100 mt-3 mt-md-0 py-md-3">
	<div component="chat/nav-wrapper" class="flex-shrink-0 d-flex flex-column h-100 gap-1" data-loaded="{{{ if roomId }}}1{{{ else }}}0{{{ end }}}">

		<div>
			<button component="chat/create" class="btn btn-primary btn-sm w-100">[[modules:chat.create-room]]</button>
		</div>

		{{{ if publicRooms.length }}}
		<hr class="my-1">

		<div class="d-flex flex-column gap-1">
			<div class="d-flex gap-1 align-items-center justify-content-between justify-content-lg-start">
				<button class="btn-ghost-sm p-1 order-1 order-lg-0" data-bs-toggle="collapse" data-bs-target="#public-rooms"
				onclick="$(this).find('i').toggleClass('fa-rotate-180');"><i class="fa fa-fw fa-chevron-up" style="transition: 0.25s ease;"></i></button>
				<label class="text-sm text-muted lh-1">[[modules:chat.public-rooms, {publicRooms.length}]]</label>
			</div>
			<div id="public-rooms" component="chat/public" class="collapse show">
				<div class="d-flex gap-1 flex-column">
					{{{ each publicRooms }}}
					<div component="chat/public/room" class="btn-ghost-sm ff-sans justify-content-between hover-parent {{{ if ./unread}}}unread{{{ end }}}" data-roomid="{./roomId}">
						<div class="d-flex gap-1 align-items-center"><i class="fa {./icon} text-muted"></i> {./roomName} <div component="chat/public/room/unread/count" data-count="{./unreadCount}" class="badge border bg-light text-primary {{{ if !./unreadCount }}}hidden{{{ end }}}">{./unreadCountText}</div></div>
						<div>
							<div component="chat/public/room/sort/handle" class="text-muted {{{ if isAdmin }}}hover-d-block{{{ else }}}d-none{{{ end }}}" style="cursor:grab;"><i class="fa fa-bars"></i></div>
						</div>
					</div>
					{{{ end }}}
				</div>
			</div>
		</div>
		{{{ end }}}

		<hr class="my-1">

		<div class="d-flex flex-column gap-1 overflow-auto">
			{{{ if publicRooms.length }}}
			<div class="d-flex gap-1 align-items-center justify-content-between justify-content-lg-start">
				<button class="btn-ghost-sm p-1 order-1 order-lg-0" data-bs-toggle="collapse" data-bs-target="#private-rooms"
				onclick="$(this).find('i').toggleClass('fa-rotate-180')"><i class="fa fa-fw fa-chevron-up" style="transition: 0.25s ease;"></i></button>
				<label class="text-sm text-muted lh-1">[[modules:chat.private-rooms, {privateRoomCount}]]</label>
			</div>
			{{{ end }}}

			<div id="private-rooms" component="chat/recent" class="chats-list overflow-auto mb-0 pe-1 collapse show" data-nextstart="{nextStart}">
				{{{each rooms}}}
				{{{ if (loadingMore && @first)}}}
<hr class="my-1" />
{{{ end }}}
<div component="chat/recent/room" data-roomid="{./roomId}" data-full="1" class="rounded-1 {{{ if ./unread }}}unread{{{ end }}}">
	<div class="d-flex gap-1 justify-content-between">
		<div class="chat-room-btn position-relative d-flex flex-grow-1 gap-2 justify-content-start align-items-start btn-ghost-sm ff-sans">
			<div class="main-avatar">
				{{{ if ./users.length }}}
				{{{ if ./groupChat}}}
				<div class="position-relative stacked-avatars">
					<span class="text-decoration-none position-absolute" href="{config.relative_path}/user/{./users.1.userslug}">{buildAvatar(./users.1, "24px", true)}</span>
					<span class="text-decoration-none position-absolute" href="{config.relative_path}/user/{./users.0.userslug}" >{buildAvatar(./users.0, "24px", true)}</span>
				</div>
				{{{ else }}}
				<span href="{config.relative_path}/user/{./users.0.userslug}" class="text-decoration-none">{buildAvatar(./users.0, "32px", true)}</span>
				{{{ end }}}
				{{{ else }}}
				<span class="avatar avatar-rounded text-bg-warning" component="avatar/icon" style="--avatar-size: 32px;">?</span>
				{{{ end }}}
			</div>

			<div class="d-flex flex-grow-1 flex-column w-100">
				<div component="chat/room/title" class="room-name fw-semibold text-xs">
				{{{ if ./roomName}}}
				{./roomName}
				{{{ else }}}
					{{{ if !./lastUser.uid }}}
					[[modules:chat.no-users-in-room]]
					{{{ else }}}
					{./usernames}
					{{{ end  }}}
				{{{ end }}}
				</div>

				{{{ if ./teaser }}}
				<div class="teaser-content text-sm line-clamp-3 text-break">
					<span href="#" class="text-decoration-none">{buildAvatar(./teaser.user, "14px", true)}</span>
					<strong class="text-xs fw-semibold teaser-username">{./teaser.user.username}:</strong>
					{./teaser.content}
				</div>
				<div class="teaser-timestamp text-muted text-xs">{{{ if ./teaser.timeagoLong }}}{./teaser.timeagoLong}{{{ else }}}<span class="timeago" title="{./teaser.timestampISO}"></span>{{{ end }}}</div>
				{{{ end }}}
			</div>
		</div>
		<div>
			<button class="mark-read btn-ghost-sm" style="width: 1.5rem; height: 1.5rem;">
				<i class="unread fa fa-2xs fa-circle text-primary {{{ if !./unread }}}hidden{{{ end }}}"></i>
				<i class="read fa fa-2xs fa-circle-o text-secondary {{{ if ./unread }}}hidden{{{ end }}}"></i>
			</button>
		</div>
	</div>
</div>
{{{ if !@last }}}
<hr class="my-1" />
{{{ end }}}

				{{{end}}}
			</div>
		</div>
	</div>
	<div component="chat/main-wrapper" class="flex-grow-1 ms-md-2 ps-md-2 border-1 border-start-md h-100" style="min-width: 0;" data-roomid="{roomId}">
		<div component="chat/message/window" class="d-flex flex-column h-100">
	{{{ if widgets.header.length }}}
	<div data-widget-area="header">
		{{{each widgets.header}}}
		{{widgets.header.html}}
		{{{end}}}
	</div>
	{{{ end }}}
	{{{ if !roomId }}}
	<div class="d-flex flex-column align-items-center gap-3 my-auto">
		<i class="fa-solid fa-wind fs-2 text-muted"></i>
		<span class="text-muted text-sm">[[modules:chat.no_active]]</span>
	</div>
	{{{ else }}}
	<div component="chat/header" class="d-flex align-items-center px-md-3 gap-3">
		<a href="#" data-action="close" role="button" class="flex-shrink-0 d-flex d-md-none btn btn-outline align-text-top"><i class="fa fa-chevron-left"></i></a>
		<h5 component="chat/header/title" class="members flex-grow-1 fw-semibold tracking-tight mb-0 text-truncate text-nowrap">
			{{{ if ./roomName }}}<i class="fa {icon} text-muted"></i> {roomName}{{{ else }}}{./chatWithMessage}{{{ end}}}
		</h5>

		<div class="d-flex gap-1 align-items-stretch">
	<!-- search -->
	<button class="btn-ghost-sm" component="chat/room/search/toggle" data-manual-tooltip="1" title="[[global:header.search]]">
		<i class="fa fa-search text-muted"></i>
	</button>
	<div component="chat/room/search/container" class="position-relative hidden align-self-center">
		<input component="chat/room/search" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" style="width: 150px;">
		<a component="chat/room/search/clear" href="#" class="hidden px-2 py-1 position-absolute top-50 end-0 translate-middle-y">
			<i class="fa fa-times text-muted opacity-75"></i>
		</a>
	</div>


	<!-- notification dropdown -->
	<div class="dropdown d-flex" data-manual-tooltip="1" title="[[modules:chat.notification-settings]]" component="chat/notification/setting">
		<button class="btn-ghost-sm position-relative" data-bs-toggle="dropdown">
			<i class="fa fa-bell text-muted"></i>
			<span class="position-absolute top-0 end-0 text-xs text-muted opacity-50" style="font-size: 10px!important; padding: 1px; line-height: 10px;">
				<i component="chat/notification/setting/icon" class="fa {notificationOptionsIcon}"></i>
			</span>
		</button>
		<ul class="dropdown-menu dropdown-menu-end p-1 text-sm">
			{{{ each notificationOptions }}}
			<li>
				<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-value="{./value}" data-icon="{./icon}">
					<div class="d-flex flex-column gap-1">
						<div class="d-flex align-items-center gap-2">
							<div class="flex-grow-1">{./label}</div>
							<i class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}hidden{{{ end }}}"></i>
						</div>
						{{{ if @first}}}
						<div component="chat/notification/setting/sub-label" class="text-sm text-muted">{./subLabel}</div>
						{{{ end }}}
					</div>
				</a>
			</li>

			{{{ if @first }}}
			<li><hr class="dropdown-divider"></li>
			{{{ end }}}
			{{{ end }}}
		</ul>
	</div>

	<!-- manage/options dropdown -->
	<div class="dropdown d-flex" data-manual-tooltip="1" title="[[modules:chat.options]]">
		<button class="btn-ghost-sm" data-bs-toggle="dropdown" component="chat/controlsToggle">
			<i class="fa fa-gear text-muted"></i>
		</button>
		<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" component="chat/controls">
			<li>
				<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-action="manage">
					<i class="fa fa-fw text-muted fa-cog"></i> [[modules:chat.manage-room]]
				</a>
			</li>
			{{{ if isOwner }}}
			<li>
				<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-action="rename">
					<i class="fa fa-fw text-muted fa-edit"></i> [[modules:chat.rename-room]]
				</a>
			</li>
			{{{ end }}}
			<li>
				<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-action="leave">
					<i class="fa fa-fw text-muted fa-sign-out"></i> [[modules:chat.leave-room]]
				</a>
			</li>
			{{{ if (public && isAdmin) }}}
			<li>
				<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" data-action="delete">
					<i class="fa fa-fw text-danger fa-trash"></i> [[modules:chat.delete-room]]
				</a>
			</li>
			{{{ end }}}
		</ul>
	</div>

	<!-- users toggle -->
	{{{ if users.length }}}
	<div component="chat/user/list/btn" class="btn-ghost-sm d-none d-lg-flex flex-nowrap gap-3" title="[[modules:chat.view-users-list]]" data-bs-toggle="tooltip" data-bs-placement="bottom">
		<div class="d-flex text-nowrap">
			{{{ if ./users.0 }}}
			<span style="width: 18px; z-index: 3;" class="text-decoration-none" href="{config.relative_path}/user/{./users.0.userslug}">{buildAvatar(./users.0, "24px", true)}</span>
			{{{ end }}}
			{{{ if ./users.1 }}}
			<span style="width: 18px; z-index: 2;" class="text-decoration-none" href="{config.relative_path}/user/{./users.1.userslug}">{buildAvatar(./users.1, "24px", true)}</span>
			{{{ end }}}
			{{{ if ./users.2 }}}
			<span style="width: 18px; z-index: 1;" class="text-decoration-none" href="{config.relative_path}/user/{./users.2.userslug}">{buildAvatar(./users.2, "24px", true)}</span>
			{{{ end }}}
		</div>
		{./userCount}
	</div>
	{{{ end }}}
</div>

	</div>
	<div class="position-relative">
	<div component="chat/messages/scroll-up-alert" class="py-1 mt-1 position-absolute start-50 top-50 translate-middle text-sm scroll-up-alert alert alert-info d-none d-md-block text-nowrap hidden" role="button" style="z-index: 500;"><i class="fa fa-fw fa-arrow-down"></i> [[modules:chat.scroll-up-alert]]</div>
</div>
	<hr class="my-1"/>
	<div class="d-flex flex-grow-1 gap-1 overflow-auto" style="min-width: 0px;">
		<div component="chat/messages" class="expanded-chat d-flex flex-column flex-grow-1" data-roomid="{roomId}" style="min-width: 0px;">
			<ul component="chat/message/content" class="chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1">
				{{{each messages}}}
	{{{ if !./system }}}
	<li component="chat/message" class="chat-message mx-2 pe-2 {{{ if messages.deleted }}} deleted{{{ end }}} {{{ if messages.newSet }}}border-top pt-3{{{ end }}}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="{messages.newSet}" data-timestamp="{messages.timestamp}" data-username="{messages.fromUser.username}">

	{{{ if messages.parent }}}
	<div class="d-flex ms-4 mb-2 align-items-center">
		<div component="chat/message/parent" data-parent-mid="{messages.parent.mid}" data-uid="{messages.parent.fromuid}" class="btn-ghost-sm align-items-start flex-row w-100">
			<div class="d-flex gap-2 text-sm text-nowrap">
				<div><i class="fa fa-sm fa-reply opacity-50"></i></div>
				<div class="d-flex flex-nowrap gap-1 align-items-center">
					<a href="{config.relative_path}/user/{messages.parent.user.userslug}" class="text-decoration-none lh-1">{buildAvatar(messages.parent.user, "14px", true, "not-responsive align-middle")}</a>
					<a class="chat-user fw-semibold" href="{config.relative_path}/user/{messages.parent.user.userslug}">{messages.parent.user.displayname}</a>
				</div>
				<span class="chat-timestamp text-muted timeago text-nowrap hidden" title="{messages.parent.timestampISO}"></span>
			</div>
			<div component="chat/message/parent/content" class="text-muted line-clamp-1 w-100">{messages.parent.content}</div>
		</div>
	</div>
	{{{ end }}}

	<div class="message-header lh-1 d-flex align-items-center gap-2 text-sm {{{ if !messages.newSet }}}hidden{{{ end }}} pb-2">
		<a href="{config.relative_path}/user/{messages.fromUser.userslug}" class="text-decoration-none">{buildAvatar(messages.fromUser, "18px", true, "not-responsive")}</a>
		<span class="chat-user fw-semibold"><a href="{config.relative_path}/user/{messages.fromUser.userslug}">{messages.fromUser.displayname}</a></span>
		{{{ if messages.fromUser.banned }}}
		<span class="badge bg-danger">[[user:banned]]</span>
		{{{ end }}}
		{{{ if messages.fromUser.deleted }}}
		<span class="badge bg-danger">[[user:deleted]]</span>
		{{{ end }}}
		<span class="chat-timestamp text-muted timeago" title="{messages.timestampISO}"></span>
		{{{ if messages.edited }}}
		<div class="text-muted ms-auto" title="[[global:edited-timestamp, {messages.editedISO}]]"><i class="fa fa-edit"></i></span></div>
		{{{ end }}}
	</div>
	<div class="message-body-wrapper hover-parent">
		<div component="chat/message/body" class="message-body ps-0 py-0 overflow-auto text-break">
			{messages.content}
		</div>
		<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
		<div component="chat/message/controls" class="position-relative">
			<div class="btn-group border shadow-sm controls position-absolute bg-body hover-d-block end-0" style="bottom:1rem;">
				<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
				<button class="btn btn-sm btn-link" data-action="reply"><i class="fa fa-reply"></i></button>
				{{{ if (isAdminOrGlobalMod || (!config.disableChatMessageEditing && messages.self)) }}}
				<button class="btn btn-sm btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>
				<button class="btn btn-sm btn-link" data-action="delete"><i class="fa fa-trash"></i></button>
				<button class="btn btn-sm btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>
				{{{ end }}}
				{{{ if isAdminOrGlobalMod }}}
				<button class="btn btn-sm btn-link chat-ip-button" title="[[modules:chat.show-ip]]"><i class="fa fa-info-circle"></i></button>
				{{{ end }}}
			</div>
		</div>
	</div>
</li>
	{{{ else }}}
	<li component="chat/system-message" class="system-message text-muted small py-2 gap-3 d-flex align-items-center justify-content-center" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="0" data-timestamp="{messages.timestamp}">
	<hr class="d-inline-block my-1" style="width: 10%;"/>
	<div>
		[[modules:chat.system.{messages.content}, {messages.fromUser.username}, {messages.timestampISO}]]
	</div>
	<hr class="d-inline-block my-1" style="width: 10%;"/>
</li>
	{{{ end }}}
{{{end}}}
			</ul>
			<ul component="chat/message/search/results" class="chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1 hidden">
				<div component="chat/message/search/no-results" class="text-center p-4 d-flex flex-column">
					<div class="p-4"><i class="fa-solid fa-wind fs-2 text-muted"></i></div>
					<div class="text-xs fw-semibold text-muted">[[search:no-matches]]</div>
				</div>
			</ul>
			<div component="chat/composer" class="d-flex flex-column gap-2 border-top pt-2 align-items-start">
	<div component="chat/composer/replying-to" data-tomid="" class="text-sm px-2 d-flex gap-2 align-items-center hidden">
		<div component="chat/composer/replying-to-text"></div> <button component="chat/composer/replying-to-cancel" class="btn-ghost-sm px-2 py-1"><i class="fa fa-times"></i></button>
	</div>
	<div class="w-100 flex-grow-1 flex-nowrap position-relative d-flex rounded-2 border border-secondary p-1 align-items-end">
		<button component="chat/upload/button" class="btn-ghost-sm px-2" type="button"><i class="fa fa-fw fa-upload"></i></button>
		<div class="flex-grow-1 align-self-center">
			<textarea component="chat/input" placeholder="[[modules:chat.placeholder.mobile]]" class="bg-transparent text-body form-control chat-input mousetrap rounded-0 border-0 shadow-none ps-1 py-0" style="min-height: 1.5rem;height:0;max-height:30vh;resize:none;"></textarea>
		</div>
		<div class="d-flex gap-1">
			<div component="chat/message/remaining" class="text-xs text-muted me-1 align-self-center">{maximumChatMessageLength}</div>
			<button class="btn-ghost-sm px-2" type="button" data-action="send"><i class="fa fa-fw fa-paper-plane text-primary"></i></button>
		</div>
	</div>
	<form class="hidden" component="chat/upload" method="post" enctype="multipart/form-data">
		<input type="file" name="files[]" multiple class="hidden"/>
	</form>
</div>
		</div>

		<div component="chat/user/list" class="border-start hidden d-flex flex-column gap-1 p-1 overflow-auto" style="min-width:240px; width: 240px;">
	{{{ each users }}}
	<a data-index="{./index}" data-uid="{./uid}" class="btn-ghost-sm d-flex justify-content-start align-items-center gap-2 {{{ if ./online }}}online{{{ end}}}" href="{config.relative_path}/uid/{./uid}">
		<div>{buildAvatar(users, "24px", true)}</div>
		<div class="d-flex gap-1 flex-grow-1 text-nowrap text-truncate">
			<span component="chat/user/list/username" class="text-truncate">{./username}</span>
			{{{ if ./isOwner }}}<span><i class="fa fa-star text-warning" data-bs-toggle="tooltip" title="[[modules:chat.owner]]"></i></span>{{{ end }}}
		</div>
	</a>
	{{{ end }}}
</div>
	</div>
	{{{ end }}}
</div>
	</div>
	<div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>
</div>
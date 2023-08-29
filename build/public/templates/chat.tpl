<div id="chat-modal" class="chat-modal d-flex flex-nowrap modal hide overflow-visible" tabindex="-1" role="dialog" aria-labelledby="Chat" aria-hidden="true" data-center="false">
	<div class="modal-dialog">
		<div class="modal-content" component="chat/message/window">
			<div class="modal-header d-flex gap-4 justify-content-between">
				<div class="fs-6 flex-grow-1" component="chat/room/name" data-icon="{icon}">{{{ if ./roomName }}}<i class="fa {icon} text-muted"></i> {roomName}{{{ else }}}{./chatWithMessage}{{{ end}}}</div>
				<div class="d-flex gap-1 align-items-center">
					<button type="button" class="btn-ghost-sm d-none d-md-flex" data-action="maximize">
						<i class="fa fa-fw fa-expand text-muted"></i>
					</button>

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


					<button id="chat-close-btn" type="button" class="btn-close btn-ghost-sm" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
			</div>
			<div class="position-relative">
	<div component="chat/messages/scroll-up-alert" class="py-1 mt-1 position-absolute start-50 top-50 translate-middle text-sm scroll-up-alert alert alert-info d-none d-md-block text-nowrap hidden" role="button" style="z-index: 500;"><i class="fa fa-fw fa-arrow-down"></i> [[modules:chat.scroll-up-alert]]</div>
</div>
			<div class="modal-body d-flex flex-column" style="height: 500px;">
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
		{{{ if config.enableMessageReactions }}}
<div class="reactions {{{ if messages.deleted}}}hidden{{{ end }}}" component="message/reactions" data-mid="{messages.mid}">
	{{{ each messages.reactions }}}
	<span class="reaction mb-2 {{{ if ./reacted }}}reacted{{{ end }}}" component="message/reaction" data-mid="{./mid}" data-reaction="{./reaction}">
	{./reactionImage}
	<small class="reaction-emoji-count" data-count="{./reactionCount}"></small>
</span>

	{{{ end }}}
</div>
{{{ end }}}
		<div component="chat/message/controls" class="position-relative">
			<div class="btn-group border shadow-sm controls position-absolute bg-body hover-d-block end-0" style="bottom:1rem;">
				{{{ if config.enableMessageReactions }}}
<button class="reaction-add btn btn-sm btn-link {{{ if messages.maxReactionsReached }}}max-reactions{{{ end }}}" component="message/reaction/add" data-mid="{messages.mid}" title="[[reactions:add-reaction]]">
    <i class="fa fa-face-smile"></i>
</button>
{{{ end }}}


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
				</div>
			</div>
			<div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>
		</div>
	</div>
</div>

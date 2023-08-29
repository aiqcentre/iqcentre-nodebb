{{{ if widgets.header.length }}}
<div data-widget-area="header">
	{{{each widgets.header}}}
	{{widgets.header.html}}
	{{{end}}}
</div>
{{{ end }}}

<div class="d-flex flex-column gap-3" itemid="{url}" itemscope itemtype="https://schema.org/DiscussionForumPosting">
	<div class="d-flex flex-wrap">
		<div class="d-flex flex-column gap-3 flex-grow-1">
			<h1 component="post/header" class="tracking-tight fw-semibold fs-3 mb-0 text-break {{{ if config.theme.centerHeaderElements }}}text-center{{{ end }}}" itemprop="headline">
				<span class="topic-title" component="topic/title">{title}</span>
			</h1>

			<div class="topic-info d-flex gap-2 align-items-center flex-wrap {{{ if config.theme.centerHeaderElements }}}justify-content-center{{{ end }}}">
				<span component="topic/labels" class="d-flex gap-2 {{{ if (!scheduled && (!pinned && (!locked && (!oldCid && !icons.length)))) }}}hidden{{{ end }}}">
					<span component="topic/scheduled" class="badge badge border border-gray-300 text-body {{{ if !scheduled }}}hidden{{{ end }}}">
						<i class="fa fa-clock-o"></i>
						[[topic:scheduled]]
					</span>
					<span component="topic/pinned" class="badge badge border border-gray-300 text-body {{{ if (scheduled || !pinned) }}}hidden{{{ end }}}">
						<i class="fa fa-thumb-tack"></i>
						{{{ if !pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {isoTimeToLocaleString(./pinExpiryISO)}]]{{{ end }}}
					</span>
					<span component="topic/locked" class="badge badge border border-gray-300 text-body {{{ if !locked }}}hidden{{{ end }}}">
						<i class="fa fa-lock"></i>
						[[topic:locked]]
					</span>
					<a href="{config.relative_path}/category/{oldCid}" class="badge badge border border-gray-300 text-body text-decoration-none {{{ if !oldCid }}}hidden{{{ end }}}">
						<i class="fa fa-arrow-circle-right"></i>
						{{{ if privileges.isAdminOrMod }}}[[topic:moved-from, {oldCategory.name}]]{{{ else }}}[[topic:moved]]{{{ end }}}
					</a>
					{{{each icons}}}<span class="lh-1">{@value}</span>{{{end}}}
				</span>
				<a class="lh-1" href="{config.relative_path}/category/{category.slug}">{function.buildCategoryLabel, category, "border"}</a>
				<div data-tid="{./tid}" component="topic/tags" class="lh-1 tags tag-list d-flex flex-wrap hidden-xs hidden-empty gap-2">{{{ each tags }}}<a href="{config.relative_path}/tags/{./valueEncoded}"><span class="badge border border-gray-300 text-xs tag tag-class-{./class}" data-tag="{./value}">{./valueEscaped}</span></a>{{{ end }}}</div>
				<div class="d-flex hidden-xs gap-2">
					<span class="badge text-body border border-gray-300 stats text-xs">
	<i class="fa fa-fw fa-pencil visible-xs-inline" title="[[global:posts]]"></i>
	<span component="topic/post-count" title="{postcount}" class="fw-bold">{humanReadableNumber(postcount)}</span>
	<span class="hidden-xs text-lowercase fw-normal">[[global:posts]]</span>
</span>
<span class="badge text-body border border-gray-300 stats text-xs">
	<i class="fa fa-fw fa-user visible-xs-inline" title="[[global:posters]]"></i>
	<span title="{postercount}" class="fw-bold">{humanReadableNumber(postercount)}</span>
	<span class="hidden-xs text-lowercase fw-normal">[[global:posters]]</span>
</span>
<span class="badge text-body border border-gray-300 stats text-xs">
	<i class="fa fa-fw fa-eye visible-xs-inline" title="[[global:views]]"></i>
	<span class="fw-bold" title="{viewcount}">{humanReadableNumber(viewcount)}</span>
	<span class="hidden-xs text-lowercase fw-normal">[[global:views]]</span>
</span>
				</div>
			</div>
		</div>
		<div class="d-flex gap-2 justify-content-end align-items-center mt-2 hidden-empty" component="topic/thumb/list">{{{ each thumbs }}}
<a class="d-inline-block h-100" href="{./url}">
	<img class="rounded-1 h-100 bg-light" style="max-width: 5.33rem; object-fit: contain;" src="{./url}" />
</a>
{{{ end }}}</div>
	</div>

	<div class="row mb-4 mb-lg-0">
		<div class="topic {{{ if widgets.sidebar.length }}}col-lg-9 col-sm-12{{{ else }}}col-lg-12{{{ end }}}">
			<div class="{{{ if config.theme.stickyToolbar }}}sticky-tools{{{ end }}}">
	<nav class="d-flex flex-nowrap my-2 p-0 border-0 rounded topic-main-buttons">
		<div class="d-flex flex-row p-2 text-bg-light border rounded w-100 align-items-center">
			<ul class="d-flex list-unstyled me-auto mb-0 gap-2 align-items-center flex-wrap">
				{{{ if loggedIn }}}
				<button component="topic/mark-unread" class="btn-ghost-sm d-flex gap-2 align-items-center">
					<i class="fa fa-fw fa-inbox text-primary"></i>
					<span class="d-none d-md-inline fw-semibold">[[topic:mark_unread]]</span>
				</button>
				{{{ end }}}

				{{{ if config.loggedIn }}}
<div class="btn-group bottom-sheet" component="topic/watch">
	<button class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<span component="topic/following/menu" class="d-flex gap-2 align-items-center{{{ if !isFollowing }}} hidden{{{ end }}}">
			<i class="flex-shrink-0 fa fa-fw fa-bell-o link-primary"></i>
			<span class="d-none d-md-inline fw-semibold">[[topic:watching]]</span>
		</span>

		<span component="topic/not-following/menu" class="d-flex gap-2 align-items-center{{{ if !isNotFollowing}}} hidden{{{ end }}}">
			<i class="flex-shrink-0 fa fa-fw fa-bell-slash-o link-primary"></i>
			<span class="d-none d-md-inline fw-semibold">[[topic:not-watching]]</span>
		</span>

		<span component="topic/ignoring/menu" class="d-flex gap-2 align-items-center{{{ if !isIgnoring }}} hidden{{{ end }}}">
			<i class="flex-shrink-0 fa fa-fw fa-eye-slash link-primary"></i>
			<span class="d-none d-md-inline fw-semibold">[[topic:ignoring]]</span>
		</span>
	</button>
	<ul class="dropdown-menu p-1 text-sm">
		<li>
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/following">
				<div class="flex-grow-1 d-flex flex-column">
					<span class="d-flex align-items-center gap-2">
						<i class="flex-shrink-0 fa fa-fw fa-bell-o"></i>
						<span class="flex-grow-1 fw-semibold">[[topic:watching]]</span>
					</span>
					<div class="help-text text-muted text-xs">[[topic:watching.description]]</div>
				</div>
				<span class="flex-shrink-0"><i component="topic/following/check" class="fa fa-fw {{{ if isFollowing }}}fa-check{{{ end }}}"></i></span>
			</a>
		</li>

		<li>
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/not-following">
				<div class="flex-grow-1 d-flex flex-column">
					<span class="d-flex align-items-center gap-2">
						<i class="flex-shrink-0 fa fa-fw fa-bell-slash-o"></i>
						<span class="flex-grow-1 fw-semibold">[[topic:not-watching]]</span>
					</span>
					<div class="help-text text-muted text-xs">[[topic:not-watching.description]]</div>
				</div>
				<span class="flex-shrink-0"><i component="topic/not-following/check" class="fa fa-fw {{{ if isNotFollowing }}}fa-check{{{ end }}}"></i></span>
			</a>
		</li>

		<li>
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="topic/ignoring">
				<div class="flex-grow-1 d-flex flex-column">
					<span class="d-flex align-items-center gap-2">
						<i class="flex-shrink-0 fa fa-fw fa-eye-slash"></i>
						<span class="flex-grow-1 fw-semibold">[[topic:ignoring]]</span>
					</span>
					<div class="help-text text-muted text-xs">[[topic:ignoring.description]]</div>
				</div>
				<span class="flex-shrink-0"><i component="topic/ignoring/check" class="fa fa-fw {{{ if isIgnoring }}}fa-check{{{ end }}}"></i></span>
			</a>
		</li>
	</ul>
</div>
{{{ end }}}
				<div class="btn-group bottom-sheet" component="thread/sort">
	<button class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<span class="d-flex gap-2 align-items-center">
			<i class="fa fa-fw fa-arrow-down-wide-short text-primary"></i>
			<span class="d-none d-md-inline fw-semibold">[[topic:sort_by]]</span>
		</span>
	</button>
	<ul class="dropdown-menu p-1 text-sm">
		<li><a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="oldest_to_newest" data-sort="oldest_to_newest">
			<span class="flex-grow-1">[[topic:oldest_to_newest]]</span>
			<i class="flex-shrink-0 fa fa-fw"></i> 
		</a>
		</li>
		<li><a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="newest_to_oldest" data-sort="newest_to_oldest">
			<span class="flex-grow-1">[[topic:newest_to_oldest]]</span>
			<i class="flex-shrink-0 fa fa-fw"></i> 
		</a>
		</li>
		<li><a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="most_votes" data-sort="most_votes">
			<span class="flex-grow-1">[[topic:most_votes]]</span>
			<i class="flex-shrink-0 fa fa-fw"></i> 
		</a>
		</li>
	</ul>
</div>

				{{{ if privileges.view_thread_tools }}}
<div class="btn-group thread-tools bottom-sheet">
	<button class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<i class="fa fa-fw fa-gear link-primary"></i>
		<span class="d-none d-md-inline fw-semibold">[[topic:thread_tools.title]]</span>
	</button>
	<ul class="dropdown-menu p-1 text-sm">
		<li class="placeholder-wave"><a class="dropdown-item d-flex gap-2" href="#"><div class="placeholder bg-secondary rounded-1" style="width: 1em;"></div><div class="placeholder bg-secondary rounded-1 col-8"></div></a></li>
		<li class="placeholder-wave"><a class="dropdown-item d-flex gap-2" href="#"><div class="placeholder bg-secondary rounded-1" style="width: 1em;"></div><div class="placeholder bg-secondary rounded-1 col-8"></div></a></li>
		<li class="placeholder-wave"><a class="dropdown-item d-flex gap-2" href="#"><div class="placeholder bg-secondary rounded-1" style="width: 1em;"></div><div class="placeholder bg-secondary rounded-1 col-8"></div></a></li>
	</ul>
</div>
{{{ end }}}

				{{{ if (!feeds:disableRSS && rssFeedUrl) }}}
				<a class="btn-ghost-sm d-none d-lg-flex align-self-stretch" target="_blank" href="{rssFeedUrl}"><i class="fa fa-rss text-primary"></i></a>
				{{{ end }}}

				{{{ if browsingUsers }}}
				<div class="hidden-xs">
				<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->
				</div>
				{{{ end }}}
			</ul>
			<div component="topic/reply/container" class="btn-group action-bar {{{ if !privileges.topics:reply }}}hidden{{{ end }}}">
	<a href="{config.relative_path}/compose?tid={tid}" class="d-flex align-items-center btn btn-sm btn-primary px-3 fw-semibold " component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-reply d-sm-block d-md-none"></i><span class="d-none d-md-block"> [[topic:reply]]</span></a>
	<button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown">
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
		<li><a class="dropdown-item rounded-1" href="#" component="topic/reply-as-topic">[[topic:reply-as-topic]]</a></li>
	</ul>
</div>

{{{ if loggedIn }}}
	{{{ if !privileges.topics:reply }}}
		{{{ if locked }}}
		<a component="topic/reply/locked" class="d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
		{{{ end }}}
	{{{ end }}}

	{{{ if !locked }}}
	<a component="topic/reply/locked" class="d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
	{{{ end }}}
{{{ else }}}
	{{{ if !privileges.topics:reply }}}
	<a component="topic/reply/guest" href="{config.relative_path}/login" class="d-flex align-items-center fw-semibold btn btn-sm btn-primary">[[topic:guest-login-reply]]</a>
	{{{ end }}}
{{{ end }}}
		</div>
	</nav>
</div>


			{{{ if merger }}}
			<div component="topic/merged/message" class="alert alert-warning mt-3 d-flex justify-content-between flex-wrap">
	<span>[[topic:merged_message, {config.relative_path}/topic/{mergeIntoTid}, {merger.mergedIntoTitle}]]</span>
	<span>
		<a class="fw-bold" href="{config.relative_path}/user/{merger.userslug}">{merger.username}</strong></a> <small class="timeago" title="{mergedTimestampISO}"></small>
	</span>
</div>
			{{{ end }}}

			{{{ if !scheduled }}}
			<div component="topic/deleted/message" class="alert alert-warning mt-3{{{ if !deleted }}} hidden{{{ end }}} d-flex justify-content-between flex-wrap">
    <span>[[topic:deleted_message]]</span>
    <span>
        {{{ if deleter }}}
        <a class="fw-bold" href="{config.relative_path}/user/{deleter.userslug}">{deleter.username}</a> <small class="timeago" title="{deletedTimestampISO}"></small>
        {{{ end }}}
    </span>
</div>
			{{{ end }}}

			<div class="d-flex gap-0 gap-lg-5">
				<div class="posts-container" style="min-width: 0;">
					<ul component="topic" class="posts timeline list-unstyled mt-sm-2 p-0 py-3" style="min-width: 0;" data-tid="{tid}" data-cid="{cid}">
					{{{each posts}}}
						<li component="post" class="pt-4 {{{ if posts.deleted }}}deleted{{{ end }}} {{{ if posts.selfPost }}}self-post{{{ end }}} {{{ if posts.topicOwnerPost }}}topic-owner-post{{{ end }}}" data-index="{posts.index}" data-pid="{posts.pid}" data-uid="{posts.uid}" data-timestamp="{posts.timestamp}" data-username="{posts.user.username}" data-userslug="{posts.user.userslug}" itemscope itemtype="http://schema.org/Comment">
							<a component="post/anchor" data-index="{./index}" id="{increment(./index, "1")}"></a>

							<meta itemprop="datePublished" content="{./timestampISO}">
							<meta itemprop="dateModified" content="{./editedISO}">

							{{{ if (!./index && widgets.mainpost-header.length) }}}
<div data-widget-area="mainpost-header">
	{{{ each widgets.mainpost-header }}}
	{widgets.mainpost-header.html}
	{{{ end }}}
</div>
{{{ end }}}

<div class="d-flex align-items-start gap-3">
	<div class="icon bg-body d-none d-sm-block rounded-circle" style="outline: 2px solid var(--bs-body-bg);">
		<a class="d-inline-block position-relative text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
			{buildAvatar(posts.user, "48px", true, "", "user/picture")}
			<span component="user/status" class="position-absolute translate-middle-y border border-white border-2 rounded-circle status {posts.user.status}"><span class="visually-hidden">[[global:{posts.user.status}]]</span></span>
		</a>
	</div>

	<div class="post-container d-flex flex-grow-1 flex-column w-100" style="min-width: 0;">
		<div class="d-flex align-items-center gap-1 flex-wrap w-100 post-header mt-1" itemprop="author" itemscope itemtype="https://schema.org/Person">
			<div class="icon bg-body d-sm-none">
				<a class="d-inline-block position-relative text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
					{buildAvatar(posts.user, "20px", true, "", "user/picture")}
					<span component="user/status" class="position-absolute translate-middle-y border border-white border-2 rounded-circle status {posts.user.status}"><span class="visually-hidden">[[global:{posts.user.status}]]</span></span>
				</a>
			</div>

			<span class="text-nowrap">
				<a class="fw-bold" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}" itemprop="name" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.displayname}</a>
			</span>

			{{{ each posts.user.selectedGroups }}}
			{{{ if posts.user.selectedGroups.slug }}}
			<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate text-decoration-none" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text align-text-bottom">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
			{{{ end }}}
			{{{ end }}}

			{{{ if posts.user.banned }}}
			<span class="badge bg-danger rounded-1">[[user:banned]]</span>
			{{{ end }}}

			<div class="d-flex gap-1 align-items-center">
				<span class="text-muted">
					{{{ if posts.toPid }}}
					{generateRepliedTo(@value, config.timeagoCutoff)}
					{{{ else }}}
					{generateWrote(@value, config.timeagoCutoff)}
					{{{ end }}}
				</span>

				<i component="post/edit-indicator" class="fa fa-edit text-muted{{{ if privileges.posts:history }}} pointer{{{ end }}} edit-icon {{{ if !posts.editor.username }}}hidden{{{ end }}}" title="[[global:edited-timestamp, {./editedISO}]]"></i>
				<span data-editor="{posts.editor.userslug}" component="post/editor" class="visually-hidden">[[global:last_edited_by, {posts.editor.username}]] <span class="timeago" title="{posts.editedISO}"></span></span>
			</div>

			<div>
				<span>
					{{{ if posts.user.custom_profile_info.length }}}
					&#124;
					{{{ each posts.user.custom_profile_info }}}
					{posts.user.custom_profile_info.content}
					{{{ end }}}
					{{{ end }}}
				</span>
			</div>
			<div class="d-flex align-items-center gap-1 flex-grow-1 justify-content-end">
				<span class="bookmarked opacity-0 text-primary"><i class="fa fa-bookmark-o"></i></span>
				<a href="{config.relative_path}/post/{./pid}" class="post-index text-muted d-none d-md-inline">#{increment(./index, "1")}</a>
			</div>
		</div>

		<div class="content mt-2 text-break" component="post/content" itemprop="text">
			{posts.content}
		</div>
	</div>
</div>

<div component="post/footer" class="post-footer border-bottom pb-2">
	{{{ if posts.user.signature }}}
	<div component="post/signature" data-uid="{posts.user.uid}" class="text-xs text-muted mt-2">{posts.user.signature}</div>
	{{{ end }}}

	<div class="d-flex">
		{{{ if !hideReplies }}}
		<a component="post/reply-count" data-target-component="post/replies/container" href="#" class="d-flex gap-2 align-items-center mt-2 btn-outline border rounded-1 p-1 threaded-replies user-select-none text-muted text-decoration-none text-xs {{{ if (!./replies || shouldHideReplyContainer(@value)) }}}hidden{{{ end }}}">
			<span component="post/reply-count/avatars" class="avatars d-inline-flex gap-1 align-items-top {{{ if posts.replies.hasMore }}}hasMore{{{ end }}}">
				{{{each posts.replies.users}}}
				<span>{buildAvatar(posts.replies.users, "20px", true, "avatar-tooltip")}</span>
				{{{end}}}
				{{{ if posts.replies.hasMore}}}
				<span><i class="fa fa-ellipsis"></i></span>
				{{{ end }}}
			</span>

			<span class="ms-2 replies-count fw-semibold" component="post/reply-count/text" data-replies="{posts.replies.count}">{posts.replies.text}</span>
			<span class="ms-2 replies-last hidden-xs fw-semibold">[[topic:last_reply_time]] <span class="timeago" title="{posts.replies.timestampISO}"></span></span>

			<i class="fa fa-fw fa-chevron-down" component="post/replies/open"></i>
			<i class="fa fa-fw fa-chevron-up hidden" component="post/replies/close"></i>
			<i class="fa fa-fw fa-spin fa-spinner hidden" component="post/replies/loading"></i>
		</a>
		{{{ end }}}
	</div>

	<div component="post/replies/container" class="my-2 col-11 border rounded-1 p-3 hidden-empty"></div>

	<div component="post/actions" class="d-flex justify-content-end gap-1 post-tools">
		<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->
		<a component="post/reply" href="#" class="btn-ghost-sm user-select-none {{{ if !privileges.topics:reply }}}hidden{{{ end }}}" title="[[topic:reply]]"><i class="fa fa-fw fa-reply text-primary"></i></a>
		<a component="post/quote" href="#" class="btn-ghost-sm user-select-none {{{ if !privileges.topics:reply }}}hidden{{{ end }}}" title="[[topic:quote]]"><i class="fa fa-fw fa-quote-right text-primary"></i></a>

		{{{ if !reputation:disabled }}}
		<div class="d-flex votes align-items-stretch">
			<a component="post/upvote" href="#" class="btn-ghost-sm {{{ if posts.upvoted }}}upvoted{{{ end }}}">
				<i class="fa fa-fw fa-chevron-up text-primary"></i>
			</a>

			<meta itemprop="upvoteCount" content="{posts.upvotes}">
			<meta itemprop="downvoteCount" content="{posts.downvotes}">
			<div class="d-inline-block px-2 mx-1 btn-ghost-sm" component="post/vote-count" data-votes="{posts.votes}">{posts.votes}</div>

			{{{ if !downvote:disabled }}}
			<a component="post/downvote" href="#" class="btn-ghost-sm {{{ if posts.downvoted }}}downvoted{{{ end }}}">
				<i class="fa fa-fw fa-chevron-down text-primary"></i>
			</a>
			{{{ end }}}
		</div>
		{{{ end }}}

		<span component="post/tools" class="dropdown moderator-tools bottom-sheet d-inline-block {{{ if !./display_post_menu }}}hidden{{{ end }}}">
	<a class="btn-ghost-sm dropdown-toggle d-block" href="#" data-bs-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-v text-primary"></i></a>
	<ul class="dropdown-menu dropdown-menu-end p-1 text-sm" role="menu">
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-3"></div>
		</li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-5"></div>
		</li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-9"></div>
		</li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-7"></div>
		</li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-10"></div>
		</li>
		<li class="dropdown-divider"></li>
		<li class="dropdown-item placeholder-wave">
			<div class="placeholder" style="width: 20px;"></div>
			<div class="placeholder col-10"></div>
		</li>
	</ul>
</span>

	</div>
</div>

{{{ if (!./index && widgets.mainpost-footer.length) }}}
<div data-widget-area="mainpost-footer">
	{{{ each widgets.mainpost-footer }}}
	{widgets.mainpost-footer.html}
	{{{ end }}}
</div>
{{{ end }}}
						</li>
						{{{ if (config.topicPostSort != "most_votes") }}}
						{{{ each ./events}}}
						<li component="topic/event" class="timeline-event text-muted d-flex gap-2 pt-4" data-topic-event-id="{./id}" data-topic-event-type="{./type}">
	<div class="timeline-badge">
		<i class="fa {{{ if ./icon }}}{./icon}{{{ else }}}fa-circle{{{ end }}} small"></i>
	</div>
	<span class="timeline-text small d-flex align-items-center gap-1 flex-wrap">
		{./text}
	</span>
	{{{ if privileges.isAdminOrMod }}}
	<span component="topic/event/delete" data-topic-event-id="{./id}" data-topic-event-type="{./type}" class="timeline-text pointer" title="[[topic:delete-event]]"><i class="fa fa-trash"></i></span>
	{{{ end }}}
</li>


						{{{ end }}}
						{{{ end }}}
					{{{end}}}
					</ul>
					{{{ if browsingUsers }}}
					<div class="visible-xs">
						<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->
						<hr/>
					</div>
					{{{ end }}}
					{{{ if config.theme.enableQuickReply }}}
					{{{ if privileges.topics:reply }}}
<div component="topic/quickreply/container" class="quick-reply d-flex gap-3 mb-4">
	<div class="icon hidden-xs">
		<a class="d-inline-block position-relative" href="{{{ if loggedInUser.userslug }}}{config.relative_path}/user/{loggedInUser.userslug}{{{ else }}}#{{{ end }}}">
			{buildAvatar(loggedInUser, "48px", true, "", "user/picture")}
			{{{ if loggedInUser.status }}}<span component="user/status" class="position-absolute translate-middle-y border border-white border-2 rounded-circle status {loggedInUser.status}"><span class="visually-hidden">[[global:{loggedInUser.status}]]</span></span>{{{ end }}}
		</a>
	</div>
	<form class="flex-grow-1 d-flex flex-column gap-2" method="post" action="{config.relative_path}/compose">
		<input type="hidden" name="tid" value="{tid}" />
		<input type="hidden" name="_csrf" value="{config.csrf_token}" />
		<div class="quickreply-message position-relative">
			<textarea rows="4" name="content" component="topic/quickreply/text" class="form-control mousetrap" placeholder="[[modules:composer.textarea.placeholder]]"></textarea>
			<div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>
		</div>
		<div>
			<div class="d-flex justify-content-end gap-2">
				<button type="submit" component="topic/quickreply/expand" class="btn btn-sm btn-outline" formmethod="get"><i class="fa fa-expand"></i></button>
				<button type="submit" component="topic/quickreply/button" class="btn btn-sm btn-primary">[[topic:post-quick-reply]]</button>
			</div>
		</div>
	</form>
	<form class="d-none" component="topic/quickreply/upload" method="post" enctype="multipart/form-data">
		<input type="file" name="files[]" multiple class="hidden"/>
	</form>

</div>
{{{ end }}}

					{{{ end }}}
				</div>

				<div class="pagination-block d-none d-lg-block flex-grow-1 mb-4">
	<div class="d-flex justify-content-end sticky-top mt-4" style="top:6rem;z-index:1;">
		<div class="ps-1 ps-md-0 d-inline-block">
			<div class="scroller-content d-flex gap-2 flex-column align-items-start">
				<div class="pointer pagetop btn-ghost-sm d-inline-flex" style="padding: 4px;"><i class="fa fa-chevron-up"></i> <span class="timeago text-xs text-muted text-nowrap" title="{./timestampISO}"></span></div>
				<div class="scroller-container position-relative">
					<div class="scroller-thumb d-flex gap-2 text-nowrap position-relative" style="height: 40px;">
						<div class="scroller-thumb-icon bg-primary rounded d-inline-block" style="width:9px; height: 40px;"></div>
						<div>
							<p class="small thumb-text d-none d-md-inline-block ff-secondary fw-semibold user-select-none mb-0"></p>
							<p class="meta thumb-timestamp timeago text-xs text-muted ff-secondary fw-semibold mb-0 user-select-none"></p>
						</div>
					</div>

					<div class="unread d-inline-block position-absolute bottom-0">
						<div class="meta small position-absolute top-50 translate-middle-y text-nowrap fw-semibold ms-2">
							<a class="text-decoration-none" href="{url}"></a>
						</div>
					</div>
				</div>
				<div class="pointer pagebottom btn-ghost-sm d-inline-flex" style="padding: 4px;"><i class="fa fa-chevron-down"></i> <span class="timeago text-xs text-muted text-nowrap" title="{./lastposttimeISO}"></span></div>
			</div>
		</div>
	</div>
</div>


			</div>

			{{{ if config.usePagination }}}
			<div component="pagination" class="pagination-container mt-3{{{ if !pagination.pages.length }}} hidden{{{ end }}}">
	<ul class="pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center">
		<li class="page-item previous float-start{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link rounded fw-secondary px-3" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			{{{ if pagination.pages.separator }}}
			<li component="pagination/select-page" class="page-item page select-page">
				<a class="page-link rounded fw-secondary px-3" href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			{{{ else }}}
			<li class="page-item page{{{ if pagination.pages.active }}} active{{{ end }}}" >
				<a class="page-link rounded fw-secondary px-3" href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			{{{ end }}}
		{{{end}}}

		<li class="page-item next float-end {{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link rounded fw-secondary px-3" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	{{{ if !template.topic }}}
	<ul class="pagination pagination-sm hidden-md hidden-lg justify-content-center">
		<li class="page-item first{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="page-item previous{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page-item page select-page">
			<a class="page-link fw-secondary"  href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="page-item next{{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="page-item last{{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
	{{{ end }}}
</div>
			{{{ end }}}
		</div>
		<div data-widget-area="sidebar" class="col-lg-3 col-sm-12 {{{ if !widgets.sidebar.length }}}hidden{{{ end }}}">
			{{{each widgets.sidebar}}}
			{{widgets.sidebar.html}}
			{{{end}}}
		</div>
	</div>
</div>

<div data-widget-area="footer">
	{{{each widgets.footer}}}
	{{widgets.footer.html}}
	{{{end}}}
</div>

{{{ if !config.usePagination }}}
<noscript>
<div component="pagination" class="pagination-container mt-3{{{ if !pagination.pages.length }}} hidden{{{ end }}}">
	<ul class="pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center">
		<li class="page-item previous float-start{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link rounded fw-secondary px-3" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			{{{ if pagination.pages.separator }}}
			<li component="pagination/select-page" class="page-item page select-page">
				<a class="page-link rounded fw-secondary px-3" href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			{{{ else }}}
			<li class="page-item page{{{ if pagination.pages.active }}} active{{{ end }}}" >
				<a class="page-link rounded fw-secondary px-3" href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			{{{ end }}}
		{{{end}}}

		<li class="page-item next float-end {{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link rounded fw-secondary px-3" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	{{{ if !template.topic }}}
	<ul class="pagination pagination-sm hidden-md hidden-lg justify-content-center">
		<li class="page-item first{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="page-item previous{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page-item page select-page">
			<a class="page-link fw-secondary"  href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="page-item next{{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="page-item last{{{ if !pagination.next.active }}} disabled{{{ end }}}">
			<a class="page-link fw-secondary"  href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
	{{{ end }}}
</div>
</noscript>
{{{ end }}}

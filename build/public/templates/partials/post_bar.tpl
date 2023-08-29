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

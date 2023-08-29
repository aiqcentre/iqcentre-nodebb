<div data-widget-area="header">
	{{{each widgets.header}}}
	{{widgets.header.html}}
	{{{end}}}
</div>
<div class="users">
	<h3 class="fw-semibold">[[global:users]]</h3>
	<div class="d-flex flex-wrap justify-content-between">
		<div class="mb-2 mb-md-0">
		<div component="user/list/menu" class="text-sm d-flex flex-wrap align-items-center gap-2">
	<a class="btn-ghost fw-semibold" href="{config.relative_path}/users?section=online">[[global:online]]</a>

	<a class="btn-ghost fw-semibold" href="{config.relative_path}/users?section=sort-posts">[[users:top_posters]]</a>

	{{{ if !reputation:disabled }}}
	<a class="btn-ghost fw-semibold" href="{config.relative_path}/users?section=sort-reputation">[[users:most_reputation]]</a>
	{{{ end }}}

	{{{ if isAdminOrGlobalMod }}}
	<a class="btn-ghost fw-semibold" href="{config.relative_path}/users?section=flagged">[[users:most_flags]]</a>

	<a class="btn-ghost fw-semibold" href="{config.relative_path}/users?section=banned">[[user:banned]]</a>
	{{{ end }}}
</div>
		</div>
		<div class="">
			<div class="d-flex justify-content-end gap-2">
				{{{ if showInviteButton }}}
				<button component="user/invite" class="btn btn-primary btn-sm text-nowrap"><i class="fa fa-user-plus"></i> [[users:invite]]</button>
				{{{ end }}}
				{{{ if displayUserSearch }}}
				<div class="search">
					<div class="input-group">
						<input class="form-control form-control-sm" id="search-user" type="text" placeholder="[[global:search]]"/>
						<button class="btn btn-primary btn-sm" type="button">
							<i component="user/search/icon" class="fa fa-search"></i>
						</button>
					</div>
				</div>
				{{{ end }}}
			</div>
		</div>
	</div>
	<hr/>

	<div id="users-container" class="users-container row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
		{{{ each users }}}
		<a href="{config.relative_path}/user/{./userslug}" class="btn-ghost align-items-start justify-content-start p-2 ff-base">
	{buildAvatar(@value, "48px", true, "flex-shrink-0")}
	<div class="d-flex flex-column text-truncate">
		<div class="fw-semibold text-truncate" title="{./displayname}">{./displayname}</div>
		<div class="text-xs text-muted text-truncate">@{./username}</div>

		{{{ if section_online }}}
		<div class="text-xs text-muted text-truncate">
			<span class="timeago" title="{./lastonlineISO}"></span>
		</div>
		{{{ end }}}

		{{{ if section_joindate }}}
		<div class="text-xs text-muted text-truncate">
			<span class="timeago" title="{./joindateISO}"></span>
		</div>
		{{{ end }}}

		{{{ if section_sort-reputation }}}
		<div class="text-xs text-muted text-truncate">
			<span>{formattedNumber(./reputation)}</span>
		</div>
		{{{ end }}}

		{{{ if section_sort-posts }}}
		<div class="text-xs text-muted text-truncate">
			<span>{formattedNumber(./postcount)}</span>
		</div>
		{{{ end }}}

		{{{ if section_flagged }}}
		<div class="text-xs text-muted text-truncate">
			<span>{formattedNumber(./flags)}</span>
		</div>
		{{{ end }}}
	</div>
</a>
		{{{ end }}}
	</div>

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
</div>

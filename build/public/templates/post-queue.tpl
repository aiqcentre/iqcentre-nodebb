{{{ if breadcrumbs.length }}}
<ol class="breadcrumb mb-0 {{{ if config.theme.centerHeaderElements }}}justify-content-center{{{ end }}}" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
	{{{ each breadcrumbs }}}
	<li{{{ if @last }}} component="breadcrumb/current"{{{ end }}} itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" class="breadcrumb-item {{{ if @last }}}active{{{ end }}}">
		<meta itemprop="position" content="{@index}" />
		{{{ if ./url }}}<a href="{./url}" itemprop="item">{{{ end }}}
			<span class="fw-semibold" itemprop="name">{./text}</span>
		{{{ if ./url }}}</a>{{{ end }}}
	</li>
	{{{ end }}}
</ol>
{{{ end }}}


<div class="btn-toolbar justify-content-end">
	<div class="me-2">
	<div component="category/dropdown" class="btn-group dropdown-right category-dropdown-container bottom-sheet">
	<button type="button" class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown">
    {{{ if selectedCategory }}}
    <span class="category-item d-inline-flex align-items-center gap-1">
        {buildCategoryIcon(selectedCategory, "18px", "rounded-circle")}
        <span class="visible-md-inline visible-lg-inline fw-semibold">{selectedCategory.name}</span>
    </span>
    {{{ else }}}
    <i class="fa fa-fw fa-list link-primary"></i>
    <span class="visible-md-inline visible-lg-inline fw-semibold">[[unread:all_categories]]</span>{{{ end }}}
</button>
<div component="category-selector-search" class="hidden position-absolute">
    <input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu p-1 text-sm category-dropdown-menu" role="menu">
    <li role="presentation" class="category" data-cid="all">
        <a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="{{{ if allCategoriesUrl }}}{config.relative_path}/{allCategoriesUrl}{{{ else }}}#{{{ end }}}">
            <div class="flex-grow-1">[[unread:all_categories]]</div>
            <i component="category/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i>
        </a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled{{{ end }}}" data-cid="{../cid}" data-parent-cid="{../parentCid}" data-name="{../name}">
        <a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="#">
            {../level}
            <span component="category-markup" class="flex-grow-1" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">
                <div class="category-item d-inline-flex align-items-center gap-1">
                    {{{ if ./icon }}}
                    {buildCategoryIcon(@value, "24px", "rounded-circle")}
                    {{{ end }}}
                    {./name}
                </div>
            </span>
            <i component="category/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !../selected }}}invisible{{{ end }}}"></i>
        </a>
    </li>
    {{{end}}}
</ul>
 </div>
	</div>
	{{{ if (!singlePost && posts.length) }}}
	<div class="btn-group bottom-sheet" component="post-queue/bulk-actions">
		<button type="button" class="btn-ghost-sm dropdown-toggle" data-bs-toggle="dropdown" autocomplete="off" aria-haspopup="true" aria-expanded="false">
			<i class="fa fa-clone"></i><span class="fw-semibold"> [[post-queue:bulk-actions]]</span>
		</button>
		<ul class="dropdown-menu p-1 text-sm dropdown-menu-end">
			{{{ if canAccept }}}
			<li><a class="dropdown-item rounded-1" href="#" data-action="accept-all">[[post-queue:accept-all]]</a></li>
			<li><a class="dropdown-item rounded-1" href="#" data-action="accept-selected">[[post-queue:accept-selected]]</a></li>
			<li class="dropdown-divider"></li>
			<li><a class="dropdown-item rounded-1" href="#" data-action="reject-all">[[post-queue:reject-all]]</a></li>
			<li><a class="dropdown-item rounded-1" href="#" data-action="reject-selected">[[post-queue:reject-selected]]</a></li>
			{{{ else }}}
			<li><a class="dropdown-item rounded-1" href="#" data-action="reject-all">[[post-queue:remove-all]]</a></li>
			<li><a class="dropdown-item rounded-1" href="#" data-action="reject-selected">[[post-queue:remove-selected]]</a></li>
			{{{ end }}}
		</ul>
	</div>
	{{{ end }}}
</div>

<div class="post-queue posts-list">
	{{{ if (!posts.length && isAdmin) }}}
	{{{ if !singlePost }}}
	<div class="alert alert-info">
		[[post-queue:no-queued-posts]]
		{{{ if !enabled }}}<p>[[post-queue:enabling-help, {config.relative_path}/admin/settings/post#post-queue]]</p>{{{ end }}}
	</div>
	{{{ else }}}
	<div class="alert alert-info d-flex align-items-md-center d-flex flex-column flex-md-row">
		<p class="mb-md-0">[[post-queue:no-single-post]]</p>
		<div class="d-grid ms-md-auto">
			<a class="btn btn-sm btn-primary flex-shrink text-nowrap" href=".">[[post-queue:back-to-list]]</a>
		</div>
	</div>
	{{{ end }}}
	{{{ end }}}

	{{{ each posts }}}
	<div class="card mb-4" data-id="{./id}" data-uid="{./user.uid}">
		<div class="row g-0">
			<div class="col-lg-3 bg-card-cap rounded-start">
				<ul class="list-unstyled ps-0 mb-0 border-end h-100">
					<li class="card-body border-bottom position-relative">
						{{{ if !singlePost }}}
						<input id="{./id}" type="checkbox" class="form-check-input" autocomplete="off" />
						{{{ end }}}
						<label for="{./id}" class="small stretched-link">
							{{{ if posts.data.tid }}}[[post-queue:reply]]{{{ else }}}[[post-queue:topic]]{{{ end }}}
						</label>
					</li>
					<li class="card-body d-flex flex-column gap-1 border-bottom">
						<div class="d-flex text-xs fw-semibold align-items-center">
							[[post-queue:user]]
							{{{ if ((privileges.ban || privileges.mute) || privileges.admin:users) }}}
							<div class="ms-auto btn-group bottom-sheet">
								<button href="#" class="btn btn-outline-sm text-xs dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">[[global:actions]]</button>
								<ul class="dropdown-menu p-1 text-sm">
									{{{ if privileges.view:users:info }}}
									<li><a class="dropdown-item rounded-1" href="{config.relative_path}/user/{./user.userslug}/info">[[user:account_info]]</a></li>
									{{{ end }}}
									{{{ if privileges.ban }}}
									<li class="{{{ if target.user.banned }}}hidden{{{ end }}}"><a class="dropdown-item rounded-1" href="#" data-action="ban">[[user:ban_account]]</a></li>
									<li class="{{{ if !target.user.banned }}}hidden{{{ end }}}"><a class="dropdown-item rounded-1" href="#" data-action="unban">[[user:unban_account]]</a></li>
									{{{ end }}}
									{{{ if privileges.mute}}}
									<li class="{{{ if target.user.muted }}}hidden{{{ end }}}"><a class="dropdown-item rounded-1" href="#" data-action="mute">[[user:mute_account]]</a></li>
									<li class="{{{ if !target.user.muted }}}hidden{{{ end }}}"><a class="dropdown-item rounded-1" href="#" data-action="unmute">[[user:unmute_account]]</a></li>
									{{{ end }}}
									{{{ if privileges.admin:users }}}
									<li><a class="dropdown-item rounded-1" href="#" data-action="delete-account">[[user:delete_account_as_admin]]</a></li>
									<li><a class="dropdown-item rounded-1" href="#" data-action="delete-content">[[user:delete_content]]</a></li>
									<li><a class="dropdown-item rounded-1" href="#" data-action="delete-all">[[user:delete_all]]</a></li>
									{{{ end }}}
								</ul>
							</div>
							{{{ end }}}
						</div>
						<div class="small">
							{{{ if posts.user.userslug}}}
							<a class="text-decoration-none" href="{config.relative_path}/uid/{posts.user.uid}">{buildAvatar(posts.user, "24px", true, "not-responsive")} {posts.user.username}</a>
							{{{ else }}}
							{posts.user.username}
							{{{ end }}}
						</div>
						<div>
							<span class="badge text-body border border-gray-300 stats text-xs">
								<span title="{posts.user.postcount}" class="fw-bold">{humanReadableNumber(posts.user.postcount)}</span>
								<span class="text-lowercase fw-normal">[[global:posts]]</span>
							</span>
							<span class="badge text-body border border-gray-300 stats text-xs">
								<span title="{posts.user.reputation}" class="fw-bold">{humanReadableNumber(posts.user.reputation)}</span>
								<span class="text-lowercase fw-normal">[[global:reputation]]</span>
							</span>
							<span class="badge text-body border border-gray-300 stats text-xs">
								<span class="text-lowercase fw-normal">[[user:joined]]</span>
								<span title="{posts.user.joindateISO}" class="timeago fw-bold"></span>
							</span>
						</div>
					</li>
					<li class="card-body border-bottom">
						<div class="text-xs fw-semibold mb-1">[[post-queue:when]]</div>
						<span class="small timeago" title={posts.data.timestampISO}></span>
					</li>
					<li class="card-body border-bottom">
						<div class="text-xs fw-semibold mb-1">
							{{{ if posts.data.tid }}}[[post-queue:topic]]{{{ else }}}[[post-queue:title]]{{{ end }}}
						</div>
						<span class="small topic-title text-break">
							{{{ if posts.data.tid }}}
							<div class="d-flex flex-column align-items-start gap-1">
								<a href="{config.relative_path}/topic/{posts.data.tid}">{posts.topic.title}</a>
								<span class="badge text-body border border-gray-300 stats text-xs">
									<span class="text-lowercase fw-normal">[[global:lastpost]]</span>
									<span title="{posts.topic.lastposttimeISO}" class="timeago fw-bold"></span>
								</span>
							</div>
							{{{ end }}}
							<span class="title-text">{posts.data.title}</span>
						</span>
						{{{if !posts.data.tid}}}
						<div class="topic-title-editable hidden">
							<input class="form-control" type="text" value="{posts.data.title}"/>
						</div>
						{{{end}}}
					</li>
					<li class="card-body border-bottom">
						<div class="text-xs fw-semibold mb-1">
							[[post-queue:category]]
						</div>
						<div class="topic-category small">
							<a href="{config.relative_path}/category/{posts.category.slug}">
								<div class="category-item d-inline-block">
									{buildCategoryIcon(./category, "24px", "rounded-circle")}
									{posts.category.name}
								</div>
							</a>
						</div>
					</li>
					<li class="card-body">
						{{{ if canAccept }}}
						<div class="row row-cols-2 g-1">
							<div class="col d-grid">
								<button class="btn btn-success btn-sm" data-action="accept"><i class="fa fa-fw fa-check"></i> [[post-queue:accept]] </button>
							</div>
							<div class="col d-grid">
								<button class="btn btn-danger btn-sm" data-action="reject"><i class="fa fa-fw fa-times"></i> [[post-queue:reject]]</button>
							</div>
							{{{ if !posts.data.tid }}}
							<div class="col d-grid">
								<button class="btn btn-light btn-sm" data-action="editTitle"><i class="fa fa-fw fa-edit"></i> [[post-queue:title]]</button>
							</div>
							{{{ end }}}
							<div class="col d-grid">
								<button class="btn btn-light btn-sm" data-action="editContent"><i class="fa fa-fw fa-edit"></i> [[post-queue:content]]</button>
							</div>
							{{{if posts.data.cid}}}
							<div class="col d-grid">
								<button class="btn btn-light btn-sm" data-action="editCategory"><i class="fa fa-fw fa-edit"></i> [[post-queue:category]]</button>
							</div>
							{{{ end }}}
							<div class="col d-grid">
								<button class="btn btn-light btn-sm" data-action="notify"><i class="fa fa-fw fa-bell-o"></i> [[post-queue:notify]]</button>
							</div>
						</div>
						{{{ else }}}
						<button class="btn btn-danger btn-sm" data-action="reject"><i class="fa fa-fw fa-times"></i> [[post-queue:remove]]</button>
						{{{ end }}}
					</li>
				</ul>
			</div>
			<div class="col-lg-9 d-flex flex-column">
				<div class="post-content mb-auto text-break p-3 pb-0 h-100">{posts.data.content}</div>
				<div class="post-content-editable flex-grow-1 hidden">
					<textarea class="form-control w-100 h-100 p-3">{posts.data.rawContent}</textarea>
				</div>
			</div>
		</div>
	</div>
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
<li component="categories/category" data-cid="{./cid}" class="w-100 border-bottom py-3 py-lg-4 gap-lg-0 gap-2 d-flex flex-column flex-lg-row align-items-start category-{./cid} {./unread-class}">
	<meta itemprop="name" content="{./name}">

	<div class="d-flex col-lg-7 gap-2 gap-lg-3">
		<div class="flex-shrink-0">
		{buildCategoryIcon(@value, "40px", "rounded-1")}
		</div>
		<div class="flex-grow-1 d-flex flex-wrap gap-1">
			<h2 class="title text-break fs-4 fw-semibold m-0 tracking-tight w-100">
				{{{ if ./isSection }}}
{./name}
{{{ else }}}
<a class="text-reset" href="{{{ if ./link }}}{./link}{{{ else }}}{config.relative_path}/category/{./slug}{{{ end }}}" itemprop="url">{../name}</a>
{{{ end }}}
			</h2>
			{{{ if ./descriptionParsed }}}
			<div class="description text-muted text-sm w-100">
				{./descriptionParsed}
			</div>
			{{{ end }}}
			{{{ if !config.hideSubCategories }}}
			{{{ if ./children.length }}}
			<div class="category-children row row-cols-2 g-2 my-1 w-100">
				{{{ each ./children }}}
				{{{ if !./isSection }}}
				<span class="category-children-item small">
					{{{ if ./link }}}
					<div class="d-flex align-items-start gap-1">
						<i class="fa fa-fw fa-caret-right text-primary mt-1"></i>
						<a href="{./link}" class="text-reset fw-semibold">{./name}</a>
					</div>
					{{{ else }}}
					<div class="d-flex align-items-start gap-1">
						<i class="fa fa-fw fa-caret-right text-primary mt-1"></i>
						<a href="{config.relative_path}/category/{./slug}" class="text-reset fw-semibold">{./name}</a>
					</div>
					{{{ end }}}
				</span>
				{{{ end }}}
				{{{ end }}}
			</div>
			{{{ end }}}
			{{{ end }}}
		</div>
	</div>
	{{{ if !./link }}}
		<div class="d-flex col-lg-5 col-12 align-content-stretch">
			<div class="meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted" style="grid-template-columns: 1fr 1fr;">
				<div class="card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
					<span class="fs-5 ff-secondary lh-1" title="{./totalTopicCount}">{humanReadableNumber(./totalTopicCount, 0)}</span>
					<span class="d-none d-xl-flex text-lowercase text-xs">[[global:topics]]</span>
					<i class="d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-list"></i>
				</div>
				<div class="card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
					<span class="fs-5 ff-secondary lh-1" title="{./totalPostCount}">{humanReadableNumber(./totalPostCount, 0)}</span>
					<span class="d-none d-xl-flex text-lowercase text-xs">[[global:posts]]</span>
					<i class="d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-message"></i>
				</div>
			</div>
			{{{ if !config.hideCategoryLastPost }}}
			<div component="topic/teaser" class="teaser col-lg-6 col-12 {{{ if !config.theme.mobileTopicTeasers }}}d-none d-lg-block{{{ end }}}">
				<div class="lastpost border-start border-2 lh-sm h-100" style="border-color: {./bgColor}!important;">
	{{{ each ./posts }}}
	{{{ if @first }}}
	<div component="category/posts" class="ps-2 text-xs d-flex flex-column h-100 gap-1">
		<div class="text-nowrap text-truncate">
			<a class="text-decoration-none" href="{config.relative_path}/user/{./user.userslug}">{buildAvatar(posts.user, "18px", true, "avatar-tooltip")}</a>
			<a class="permalink text-muted" href="{config.relative_path}/topic/{./topic.slug}{{{ if ./index }}}/{./index}{{{ end }}}">
				<span class="timeago text-xs" title="{../timestampISO}"></span>
			</a>
		</div>
		<div class="post-content text-xs text-break line-clamp-sm-2 lh-sm position-relative flex-fill">
			<a class="stretched-link" href="{config.relative_path}/topic/{./topic.slug}{{{ if ./index }}}/{./index}{{{ end }}}"></a>
			{./content}
		</div>
	</div>
	{{{ end }}}
	{{{ end }}}

	{{{ if !./posts.length }}}
	<div component="category/posts" class="ps-2">
		<div class="post-content overflow-hidden text-xs">
			[[category:no_new_posts]]
		</div>
	</div>
	{{{ end }}}
</div>

			</div>
			{{{ end }}}
		</div>
	{{{ end }}}
</li>

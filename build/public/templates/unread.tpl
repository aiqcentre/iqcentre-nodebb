{{{ if widgets.header.length }}}
<div data-widget-area="header">
	{{{each widgets.header}}}
	{{widgets.header.html}}
	{{{end}}}
</div>
{{{ end }}}
<div class="row">
	<div class="unread {{{if widgets.sidebar.length }}}col-lg-9 col-sm-12{{{ else }}}col-lg-12{{{ end }}}">
		<div class="{{{ if config.theme.stickyToolbar }}}sticky-tools{{{ end }}} mb-3">
	<nav class="topic-list-header d-flex flex-nowrap my-2 p-0 border-0 rounded">
		<div class="d-flex flex-row p-2 text-bg-light gap-1 border rounded w-100 align-items-center">
			<ul component="category/controls" class="d-flex list-unstyled me-auto mb-0 gap-2 align-items-start flex-wrap">
				{{{ if template.category }}}
				{{{ if config.loggedIn }}}
<div class="btn-group bottom-sheet" component="topic/watch">
	<button class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<span component="category/watching/menu" {{{ if !./isWatched }}}class="hidden"{{{ end }}}><i class="fa fa-fw fa-inbox text-primary"></i><span class="visible-md-inline visible-lg-inline fw-semibold"> [[category:watching]]</span></span>

		<span component="category/notwatching/menu" {{{ if !./isNotWatched }}}class="hidden"{{{ end }}}><i class="fa fa-fw fa-clock-o text-primary"></i><span class="visible-md-inline visible-lg-inline fw-semibold"> [[category:not-watching]]</span></span>

		<span component="category/ignoring/menu" {{{ if !./isIgnored }}}class="hidden"{{{ end }}}><i class="fa fa-fw fa-eye-slash text-primary"></i><span class="visible-md-inline visible-lg-inline fw-semibold"> [[category:ignoring]]</span></span>
	</button>

	<ul class="dropdown-menu p-1 text-sm {{{ if template.account/categories }}}dropdown-menu-end{{{ end }}}">
		<li>
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="category/watching" data-state="watching">
				<div class="flex-grow-1 d-flex flex-column">
					<span class="d-flex align-items-center gap-2">
						<i class="flex-shrink-0 fa fa-fw text-muted fa-inbox"></i>
						<span class="flex-grow-1 fw-semibold">[[category:watching]]</span>
					</span>
					<div class="help-text text-muted text-xs">[[category:watching.description]]</div>
				</div>
				<span class="flex-shrink-0"><i component="category/watching/check" class="fa fa-fw {{{ if ./isWatched }}}fa-check{{{ end }}}"></i></span>
			</a>
		</li>

		<li>
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="category/notwatching" data-state="notwatching">
				<div class="flex-grow-1 d-flex flex-column">
					<span class="d-flex align-items-center gap-2">
						<i class="flex-shrink-0 fa fa-fw text-muted fa-clock-o"></i>
						<span class="flex-grow-1 fw-semibold">[[category:not-watching]]</span>
					</span>
					<div class="help-text text-muted text-xs">[[category:not-watching.description]]</div>
				</div>
				<span class="flex-shrink-0"><i component="category/notwatching/check" class="fa fa-fw {{{ if ./isNotWatched }}}fa-check{{{ end }}}"></i></span>
			</a>
		</li>

		<li>
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2 p-2" href="#" component="category/ignoring" data-state="ignoring">
				<div class="flex-grow-1 d-flex flex-column">
					<span class="d-flex align-items-center gap-2">
						<i class="flex-shrink-0 fa fa-fw text-muted fa-eye-slash"></i>
						<span class="flex-grow-1 fw-semibold">[[category:ignoring]]</span>
					</span>
					<div class="help-text text-muted text-xs">[[category:ignoring.description]]</div>
				</div>
				<span class="flex-shrink-0"><i component="category/ignoring/check" class="fa fa-fw {{{ if ./isIgnored }}}fa-check{{{ end }}}"></i></span>
			</a>
		</li>
	</ul>
</div>
{{{ end }}}
				<div component="tag/filter" class="btn-group dropdown dropdown-left bottom-sheet">
	<button type="button" class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown">
    {{{ if selectedTag }}}
    <span class="d-inline-flex align-items-center gap-1">
        <i class="fa fa-fw fa-tags link-primary"></i>
        <span class="visible-md-inline visible-lg-inline fw-semibold">{selectedTag.label}</span>
    </span>
    {{{ else }}}
    <i class="fa fa-fw fa-tags link-primary"></i>
    <span class="visible-md-inline visible-lg-inline fw-semibold">[[tags:all-tags]]</span>
    {{{ end }}}
</button>
<div component="tag/filter/search" class="hidden position-absolute top-0">
    <input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>
<ul component="tag/filter/list" class="dropdown-menu p-1 text-sm overflow-auto" role="menu" style="max-height: 500px;">
    <li role="presentation" data-tag="">
        <a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="#">
            <span class="flex-grow-1">[[tags:all-tags]]</span>
            <i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{if selectedTag }}}invisible{{{ end }}}"></i>
        </a>
    </li>
    {{{ each tagItems }}}
    <li role="presentation" data-tag="{./valueEscaped}">
        <a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="#">
            <span component="tag-markup" class="flex-grow-1">
                <div class="d-inline-flex align-items-center gap-1">
                    {./valueEscaped}
                </div>
            </span>
            <i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}invisible{{{ end }}}"></i>
        </a>
    </li>
    {{{ end }}}
</ul>
</div>
				<div class="btn-group bottom-sheet" component="thread/sort">
	<button class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<i class="fa fa-fw fa-arrow-down-wide-short text-primary"></i>
		<span class="visible-md-inline visible-lg-inline fw-semibold">[[topic:sort_by]]</span>
	</button>

	<ul class="dropdown-menu p-1 text-sm">
		<li><a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="newest_to_oldest" data-sort="newest_to_oldest">
			<span class="flex-grow-1">[[topic:newest_to_oldest]]</span>
			<i class="flex-shrink-0 fa fa-fw text-muted"></i>
		</a></li>
		<li><a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="oldest_to_newest" data-sort="oldest_to_newest">
			<span class="flex-grow-1">[[topic:oldest_to_newest]]</span>
			<i class="flex-shrink-0 fa fa-fw text-muted"></i>
		</a></li>
		<li><a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="most_posts" data-sort="most_posts">
			<span class="flex-grow-1">[[topic:most_posts]]</span>
			<i class="flex-shrink-0 fa fa-fw text-muted"></i>
		</a></li>
		<li><a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="most_votes" data-sort="most_votes">
			<span class="flex-grow-1">[[topic:most_votes]]</span>
			<i class="flex-shrink-0 fa fa-fw text-muted"></i>
		</a></li>
		<li><a class="dropdown-item rounded-1 d-flex align-items-center gap-2" href="#" class="most_views" data-sort="most_views">
			<span class="flex-grow-1">[[topic:most_views]]</span>
			<i class="flex-shrink-0 fa fa-fw text-muted"></i>
		</a></li>
	</ul>
</div>
				{{{ end }}}
				{{{ if (template.popular || template.top)}}}
				<div class="btn-group bottom-sheet {{{ if !terms.length }}}hidden{{{ end }}}">
	<button type="button" class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown">
		<i class="fa fa-fw fa-clock text-primary"></i>
		<span class="visible-md-inline visible-lg-inline fw-semibold">{selectedTerm.name}</span>
	</button>
	<ul class="dropdown-menu p-1 text-sm" role="menu">
		{{{each terms}}}
		<li role="presentation" class="category">
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="{config.relative_path}/{terms.url}">
				<div class="flex-grow-1">{terms.name}</div>
				<i class="flex-shrink-0 fa fa-fw {{{ if terms.selected }}}fa-check{{{ end }}}"></i>
			</a>
		</li>
		{{{end}}}
	</ul>
</div>
				{{{ end }}}
				{{{ if (template.unread || (template.recent || (template.popular || template.top))) }}}
				<div class="btn-group bottom-sheet{{{ if !filters.length }}} hidden{{{ end }}}">
	<button type="button" class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown">
		<i class="fa fa-fw fa-filter link-primary"></i>
		<span class="visible-md-inline visible-lg-inline fw-semibold">{selectedFilter.name}</span>
	</button>
	<ul class="dropdown-menu p-1 text-sm" role="menu">
		{{{each filters}}}
		<li role="presentation" class="category {{{if filters.selected}}}selected{{{end}}}">
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="{config.relative_path}/{filters.url}">
				<div class="flex-grow-1">{filters.name}</div>
				<i class="flex-shrink-0 fa fa-fw {{{ if filters.selected }}}fa-check{{{ end }}}"></i>
			</a>
		</li>
		{{{end}}}
	</ul>
</div>
				<div component="category/dropdown" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
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
				<div component="tag/filter" class="btn-group dropdown dropdown-left bottom-sheet">
	<button type="button" class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown">
    {{{ if selectedTag }}}
    <span class="d-inline-flex align-items-center gap-1">
        <i class="fa fa-fw fa-tags link-primary"></i>
        <span class="visible-md-inline visible-lg-inline fw-semibold">{selectedTag.label}</span>
    </span>
    {{{ else }}}
    <i class="fa fa-fw fa-tags link-primary"></i>
    <span class="visible-md-inline visible-lg-inline fw-semibold">[[tags:all-tags]]</span>
    {{{ end }}}
</button>
<div component="tag/filter/search" class="hidden position-absolute top-0">
    <input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>
<ul component="tag/filter/list" class="dropdown-menu p-1 text-sm overflow-auto" role="menu" style="max-height: 500px;">
    <li role="presentation" data-tag="">
        <a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="#">
            <span class="flex-grow-1">[[tags:all-tags]]</span>
            <i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{if selectedTag }}}invisible{{{ end }}}"></i>
        </a>
    </li>
    {{{ each tagItems }}}
    <li role="presentation" data-tag="{./valueEscaped}">
        <a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="#">
            <span component="tag-markup" class="flex-grow-1">
                <div class="d-inline-flex align-items-center gap-1">
                    {./valueEscaped}
                </div>
            </span>
            <i component="tag/select/icon" class="flex-shrink-0 fa fa-fw fa-check {{{ if !./selected }}}invisible{{{ end }}}"></i>
        </a>
    </li>
    {{{ end }}}
</ul>
</div>
				{{{ end }}}
				{{{ if template.unread }}}
				<div class="markread btn-group {{{ if !topics.length }}}hidden{{{ end }}}">
					<div component="category-selector" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
	<button type="button" class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown">
    <span component="category-selector-selected">
        {{{ if (selectedCategory && !showCategorySelectLabel) }}}
        <span class="category-item d-inline-flex align-items-center gap-1">
            {buildCategoryIcon(selectedCategory, "24px", "rounded-circle")}
            <span class="fw-semibold">{selectedCategory.name}</span>
        </span>
        {{{ else }}}
        <i class="fa fa-fw {{{ if selectCategoryIcon }}}{selectCategoryIcon}{{{ else }}}fa-list{{{ end }}} text-primary"></i>
        <span class="visible-md-inline visible-lg-inline fw-semibold">{{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread_tools.select_category]]{{{ end }}}</span>
        {{{ end }}}
    </span>
</button>
<div component="category-selector-search" class="hidden position-absolute">
    <input type="text" class="form-control form-control-sm" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu p-1 text-sm category-dropdown-menu" role="menu">
    <li component="category/no-matches" role="presentation" class="category hidden">
        <a class="dropdown-item rounded-1" role="menu-item">[[search:no-matches]]</a>
    </li>
    {{{ each categoryItems }}}
    <li role="presentation" class="category {{{ if ./disabledClass }}}disabled {{{ end }}}" data-cid="{./cid}" data-name="{./name}" data-parent-cid="{./parentCid}">
        <a class="dropdown-item rounded-1" role="menu-item">{./level}
            <span component="category-markup" style="{{{ if ./match }}}font-weight: bold;{{{end}}}">
                <div class="category-item d-inline-flex align-items-center gap-1">
                    {{{ if ./icon }}}
                    {buildCategoryIcon(@value, "24px", "rounded-circle")}
                    {{{ end }}}
                    {./name}
                </div>
            </span>
        </a>
    </li>
    {{{ end }}}
</ul>
</div>
				</div>
				{{{ end }}}
				{{{ if template.tag }}}
				<div component="category/dropdown" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
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
				{{{ end }}}
				{{{ if showTopicTools }}}
<div class="btn-group thread-tools bottom-sheet">
	<button class="btn-ghost-sm d-flex gap-2 dropdown-toggle" data-bs-toggle="dropdown" type="button">
		<i class="fa fa-fw fa-gear text-primary"></i>
		<span class="visible-md-inline visible-lg-inline fw-semibold">[[topic:thread_tools.title]]</span>
		<span component="topic/selected/badge" class="badge rounded-pill bg-secondary"></span>
	</button>
	<ul class="dropdown-menu p-1 text-sm">
		<li>
			<a component="topic/mark-unread-for-all" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]
			</a>
		</li>
		<li>
			<a component="topic/pin" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-thumb-tack"></i> [[topic:thread_tools.pin]]
			</a>
		</li>
		<li>
			<a component="topic/unpin" href="#" class="hidden dropdown-item rounded-1">
				<i class="fa fa-fw text-muted fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]
			</a>
		</li>

		<li>
			<a component="topic/lock" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-lock"></i> [[topic:thread_tools.lock]]
			</a>
		</li>
		<li>
			<a component="topic/unlock" href="#" class="hidden dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-unlock"></i> [[topic:thread_tools.unlock]]
			</a>
		</li>

		<li class="dropdown-divider"></li>

		<li>
			<a component="topic/move" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-arrows"></i> [[topic:thread_tools.move]]
			</a>
		</li>
		{{{if template.category}}}
		<li>
			<a component="topic/move-all" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-arrows"></i> [[topic:thread_tools.move_all]]
			</a>
		</li>
		{{{end}}}
		<li>
			<a component="topic/merge" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-code-fork"></i> [[topic:thread_tools.merge]]
			</a>
		</li>

		<li>
			<a component="topic/tag" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-tag"></i> [[topic:thread_tools.tag]]
			</a>
		</li>

		<li class="dropdown-divider"></li>

		<li>
			<a component="topic/delete" href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2">
				<i class="fa fa-fw text-muted fa-trash-o"></i> [[topic:thread_tools.delete]]
			</a>
		</li>
		<li>
			<a component="topic/restore" href="#" class="hidden dropdown-item rounded-1">
				<i class="fa fa-fw text-muted fa-history"></i> [[topic:thread_tools.restore]]
			</a>
		</li>
		<li>
			<a component="topic/purge" href="#" class="hidden dropdown-item rounded-1">
				<i class="fa fa-fw text-muted fa-eraser"></i> [[topic:thread_tools.purge]]
			</a>
		</li>

		{{{each thread_tools}}}
		<li>
			<a href="#" class="dropdown-item rounded-1 d-flex align-items-center gap-2 {thread_tools.class}">
				<i class="fa fa-fw {thread_tools.icon}"></i>
				{thread_tools.title}</a>
		</li>
		{{{end}}}
	</ul>
</div>
{{{ end }}}

				{{{ if (!feeds:disableRSS && rssFeedUrl) }}}
				<a class="btn-ghost-sm d-none d-lg-flex align-self-stretch" target="_blank" href="{rssFeedUrl}" itemprop="item"><i class="fa fa-rss text-primary"></i></a>
				{{{ end }}}

				<a href="{config.relative_path}{{{ if template.category }}}{url}{{{ else }}}/{selectedFilter.url}{querystring}{{{ end }}}" class="btn btn-secondary fw-semibold position-absolute top-100 translate-middle-x start-50 mt-1 hide" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" id="new-topics-alert">
					<i class="fa fa-fw fa-arrow-up"></i> [[recent:load-new-posts]]
				</a>
			</ul>

			<div class="d-flex gap-1 align-items-center">
				{{{ if template.category }}}
					{{{ if privileges.topics:create }}}
					<a href="{config.relative_path}/compose?cid={cid}" component="category/post" id="new_topic" class="btn btn-primary btn-sm text-nowrap" data-ajaxify="false" role="button">[[category:new_topic_button]]</a>
					{{{ end }}}
				{{{ else }}}
					{{{ if canPost }}}
					<noscript><div class="dropdown" component="category-selector"></noscript>
<button component="category/post" for="category-dropdown-check" class="btn btn-primary btn-sm text-nowrap" id="new_topic" role="button">
	[[category:new_topic_button]]
</button>
<noscript>
	<input type="checkbox" class="hidden" id="category-dropdown-check" aria-hidden="true">
	<ul component="category/list" class="dropdown-menu p-1 text-sm category-dropdown-menu" role="menu">
		{{{each categories}}}
		<li role="presentation" class="category {{{if categories.disabledClass}}}disabled{{{end}}}">
			<a role="menu-item" href="{config.relative_path}/compose?cid={categories.cid}">{categories.level}
				<span component="category-markup">
					<div class="category-item d-inline-block">
						{buildCategoryIcon(@value, "24px", "rounded-circle")}
						{categories.name}
					</div>
				</span>
			</a>
		</li>
		{{{end}}}
	</ul>
</div>
</noscript>

					{{{ end }}}
				{{{ end }}}
				<!-- only show login button if not logged in and doesn't have any posting privilege -->
				{{{ if (!loggedIn && (!privileges.topics:create && !canPost))}}}
				<a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-sm btn-primary">[[category:guest-login-post]]</a>
				{{{ end }}}
			</div>
		</div>
	</nav>
</div>
		<div class="category">
			<div id="category-no-topics" class="alert alert-info {{{ if topics.length }}}hidden{{{ end }}}">[[unread:no_unread_topics]]</div>

			<ul component="category" class="topics-list list-unstyled" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="{nextStart}" data-set="{set}">

	{{{ each topics }}}
	<li component="category/topic" class="category-item border-bottom py-3 py-lg-4 d-flex flex-column flex-lg-row align-items-start {function.generateTopicClass}" data-tid="{topics.tid}" data-index="{topics.index}" data-cid="{topics.cid}" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
		<link itemprop="url" content="{config.relative_path}/topic/{./slug}" />
		<meta itemprop="name" content="{function.stripTags, ./title}" />
		<meta itemprop="itemListOrder" content="descending" />
		<meta itemprop="position" content="{./index}" />
		<a id="{./index}" data-index="{./index}" component="topic/anchor"></a>

		<div class="d-flex p-0 col-12 col-lg-7 gap-2 gap-lg-3 pe-1 align-items-start {{{ if config.theme.mobileTopicTeasers }}}mb-2 mb-lg-0{{{ end }}}">
			<div class="flex-shrink-0 position-relative">
				<a class="text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
					{buildAvatar(./user, "40px", true, "avatar avatar-tooltip")}
				</a>
				{{{ if showSelect }}}
				<div class="checkbox position-absolute top-100 start-50 translate-middle-x pt-2 m-0 d-none d-lg-flex" style="max-width:max-content">
					<i component="topic/select" class="fa text-muted pointer fa-square-o p-1"></i>
				</div>
				{{{ end }}}
			</div>
			<div class="flex-grow-1 d-flex flex-wrap gap-1 position-relative">
				<h3 component="topic/header" class="title text-break fs-5 fw-semibold m-0 tracking-tight w-100 {{{ if showSelect }}}me-4 me-lg-0{{{ end }}}">
					{{{ if topics.noAnchor }}}
					<span>{./title}</span>
					{{{ else }}}
					<a class="text-reset" href="{config.relative_path}/topic/{./slug}{{{ if ./bookmark }}}/{./bookmark}{{{ end }}}">{./title}</a>
					{{{ end }}}
				</h3>
				<span component="topic/labels" class="d-flex flex-wrap gap-1">
					<span component="topic/scheduled" class="badge border border-gray-300 text-body {{{ if !./scheduled }}}hidden{{{ end }}}">
						<i class="fa fa-clock-o"></i>
						[[topic:scheduled]]
					</span>
					<span component="topic/pinned" class="badge border border-gray-300 text-body {{{ if (./scheduled || !./pinned) }}}hidden{{{ end }}}">
						<i class="fa fa-thumb-tack"></i>
						{{{ if !./pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {isoTimeToLocaleString(./pinExpiryISO)}]]{{{ end }}}
					</span>
					<span component="topic/locked" class="badge border border-gray-300 text-body {{{ if !./locked }}}hidden{{{ end }}}">
						<i class="fa fa-lock"></i>
						[[topic:locked]]
					</span>
					<span class="badge border border-gray-300 text-body {{{ if !./oldCid }}}hidden{{{ end }}}">
						<i class="fa fa-arrow-circle-right"></i>
						[[topic:moved]]
					</span>
					{{{each ./icons}}}<span class="lh-1">{@value}</span>{{{end}}}
					{{{ if !template.category }}}
					<a class="lh-1" href="{config.relative_path}/category/{./category.slug}">{function.buildCategoryLabel, ./category, "border"}</a>
					{{{ end }}}

					<span data-tid="{./tid}" component="topic/tags" class="lh-1 tag-list hidden-xs d-flex flex-wrap gap-1 {{{ if !./tags.length }}}hidden{{{ end }}}">
						{{{ each ./tags }}}
						<a href="{config.relative_path}/tags/{./valueEncoded}"><span class="badge border border-gray-300 fw-normal tag tag-class-{./class}" data-tag="{./value}">{./valueEscaped}</span></a>
						{{{ end }}}
					</span>

					<a href="{config.relative_path}/topic/{./slug}" class="hidden-xs badge bg-transparent text-muted fw-normal timeago" title="{./timestampISO}"></a>
					{{{ if !config.theme.mobileTopicTeasers}}}
					<span class="visible-xs-inline badge bg-transparent text-muted fw-normal timeago" title="{{{ if ./teaser.timestampISO }}}{./teaser.timestampISO}{{{ else }}}{./timestampISO}{{{ end }}}"></span>
					{{{ end }}}
				</span>
				{{{ if showSelect }}}
				<div class="checkbox position-absolute top-0 end-0 m-0 d-flex d-lg-none" style="max-width:max-content">
					<i component="topic/select" class="fa fa-square-o text-muted pointer p-1"></i>
				</div>
				{{{ end }}}
			</div>
			{{{ if ./thumbs.length }}}
			<a class="position-relative text-decoration-none flex-shrink-0 d-none d-xl-block" href="{config.relative_path}/topic/{./slug}{{{ if ./bookmark }}}/{./bookmark}{{{ end }}}">
				<img class="topic-thumb rounded-1 bg-light" style="width:auto;max-width: 5.33rem;height: 3.33rem;object-fit: contain;" src="{./thumbs.0.url}"/>
				<span data-numthumbs="{./thumbs.length}" class="px-1 position-absolute top-0 start-100 translate-middle badge rounded bg-info" style="z-index: 1;">+{increment(./thumbs.length, "-1")}</span>
			</a>
			{{{ end }}}
		</div>

		<div class="d-flex p-0 col-lg-5 col-12 align-content-stretch">
			<div class="meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted" style="grid-template-columns: 1fr 1fr 1fr;">
				{{{ if !reputation:disabled }}}
				<div class="stats-votes card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
					<span class="fs-5 ff-secondary lh-1" title="{./votes}">{humanReadableNumber(./votes, 0)}</span>
					<span class="d-none d-xl-flex text-lowercase text-xs">[[global:votes]]</span>
					<i class="d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-chevron-up"></i>
				</div>
				{{{ end }}}
				<div class="stats-postcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
					<span class="fs-5 ff-secondary lh-1" title="{./postcount}">{humanReadableNumber(./postcount, 0)}</span>
					<span class="d-none d-xl-flex text-lowercase text-xs">[[global:posts]]</span>
					<i class="d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-message"></i>
				</div>
				<div class="stats-viewcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center">
					<span class="fs-5 ff-secondary lh-1" title="{./viewcount}">{humanReadableNumber(./viewcount, 0)}</span>
					<span class="d-none d-xl-flex text-lowercase text-xs">[[global:views]]</span>
					<i class="d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-eye"></i>
				</div>
			</div>
			<div component="topic/teaser" class="meta teaser col-lg-6 col-12 {{{ if !config.theme.mobileTopicTeasers }}}d-none d-lg-block{{{ end }}}">
				<div class="lastpost border-start border-2 lh-sm h-100 d-flex flex-column gap-1" style="border-color: {./category.bgColor}!important;">
					{{{ if ./unreplied }}}
					<div class="ps-2 text-xs">
						[[category:no_replies]]
					</div>
					{{{ else }}}
					{{{ if ./teaser.pid }}}
					<div class="ps-2">
						<a href="{config.relative_path}/user/{./teaser.user.userslug}" class="text-decoration-none">{buildAvatar(./teaser.user, "18px", true, "avatar-tooltip not-responsive")}</a>
						<a class="permalink text-muted timeago text-xs" href="{config.relative_path}/topic/{./slug}/{./teaser.index}" title="{./teaser.timestampISO}">
						</a>
					</div>
					<div class="post-content text-xs ps-2 line-clamp-sm-2 lh-sm text-break position-relative flex-fill">
						<a class="stretched-link" href="{config.relative_path}/topic/{./slug}/{./teaser.index}"></a>
						{./teaser.content}
					</div>
					{{{ end }}}
					{{{ end }}}
				</div>
			</div>
		</div>
	</li>
	{{{end}}}
</ul>

			<button id="load-more-btn" class="btn btn-primary hide">[[unread:load_more]]</button>
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
	</div>
	<div data-widget-area="sidebar" class="col-lg-3 col-sm-12 {{{ if !widgets.sidebar.length }}}hidden{{{ end }}}">
		{{{ each widgets.sidebar }}}
		{{widgets.sidebar.html}}
		{{{ end }}}
	</div>
</div>

<div data-widget-area="footer">
	{{{each widgets.footer}}}
	{{widgets.footer.html}}
	{{{end}}}
</div>
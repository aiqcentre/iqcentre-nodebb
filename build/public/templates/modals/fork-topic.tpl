<div class="card tool-modal shadow">
	<h5 class="card-header">
		[[topic:fork_topic]]
	</h5>
	<div class="card-body">
		<p>
			[[topic:fork_topic_instruction]]
		</p>
		<div class="mb-3">
			<label class="form-label" for="fork-title"><strong>[[topic:title]]</strong></label>
			<input id="fork-title" type="text" class="form-control" placeholder="[[topic:enter-new-topic-title]]">
		</div>
		<div class="mb-3">
			<label class="form-label"><strong>[[category:category]]</strong></label>
			<div>
			<div component="category-selector" class="btn-group dropdown-right category-dropdown-container bottom-sheet">
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
		</div>
		<strong id="fork-pids"></strong>
	</div>
	<div class="card-footer text-end">
		<button class="btn btn-link btn-sm" id="fork_thread_cancel">[[global:buttons.close]]</button>
		<button class="btn btn-primary btn-sm" id="fork_thread_commit" disabled>[[topic:fork_topic]]</button>
	</div>
</div>
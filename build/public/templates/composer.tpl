<div component="composer" class="composer {{{ if resizable }}} resizable{{{ end }}}{{{ if !isTopicOrMain }}} reply{{{ end }}}">
	<div class="composer-container d-flex flex-column gap-1 h-100">
		<!-- mobile header -->
		<nav class="navbar fixed-top mobile-navbar hidden-md hidden-lg text-bg-primary flex-nowrap gap-1 px-1">
			<div class="btn-group">
				<button class="btn btn-sm btn-primary composer-discard" data-action="discard" tabindex="-1"><i class="fa fa-fw fa-times"></i></button>
				<button class="btn btn-sm btn-primary composer-minimize" data-action="minimize" tabindex="-1"><i class="fa fa-fw fa-minus"></i></button>
			</div>
			{{{ if isTopic }}}
			<div class="category-name-container">
				<span class="category-name"></span> <i class="fa fa-sort"></i>
			</div>
			{{{ end }}}
			{{{ if !isTopicOrMain }}}
			<h4 class="title text-bg-primary">{{{ if isEditing }}}[[topic:composer.editing-in, "{topicTitle}"]]{{{ else }}}[[topic:composer.replying_to, "{topicTitle}"]]{{{ end }}}</h4>
			{{{ end }}}
			<div class="display-scheduler p-2 {{{ if !canSchedule }}} hidden{{{ end }}}">
				<i class="fa fa-clock-o"></i>
			</div>
			<div class="btn-group">
				<button class="btn btn-sm btn-primary composer-submit" data-action="post" tabindex="-1"><i class="fa fa-fw fa-chevron-right"></i></button>
			</div>
		</nav>
		<div class="p-2 d-flex flex-column gap-1 h-100">
			<div class="title-container align-items-center gap-2 d-flex">
	{{{ if isTopic }}}
	<div class="category-list-container hidden-sm hidden-xs align-self-center">
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

	{{{ if showHandleInput }}}
	<div data-component="composer/handle">
		<input class="handle form-control h-100 border-0 shadow-none" type="text" tabindex="1" placeholder="[[topic:composer.handle_placeholder]]" value="{handle}" />
	</div>
	{{{ end }}}
	<div data-component="composer/title" class="position-relative flex-1" style="min-width: 0;">
		{{{ if isTopicOrMain }}}
		<input class="title form-control h-100 rounded-1 shadow-none" type="text" tabindex="1" placeholder="[[topic:composer.title_placeholder]]" value="{topicTitle}"/>
		{{{ else }}}
		<span class="d-none d-md-block title h-100 text-truncate">{{{ if isEditing }}}[[topic:composer.editing-in, "{topicTitle}"]]{{{ else }}}[[topic:composer.replying_to, "{topicTitle}"]]{{{ end }}}</span>
		{{{ end }}}
		<div id="quick-search-container" class="quick-search-container mt-2 dropdown-menu d-block p-2 hidden">
			<div class="text-center loading-indicator"><i class="fa fa-spinner fa-spin"></i></div>
			<div class="quick-search-results-container"></div>
		</div>
	</div>

	<div class="d-none d-md-flex action-bar gap-1 align-items-center">
		<button class="btn btn-sm btn-link text-body fw-semibold composer-minimize" data-action="hide" tabindex="-1"><i class="fa fa-angle-down"></i> [[topic:composer.hide]]</button>
		<button class="btn btn-sm btn-link composer-discard text-body fw-semibold" data-action="discard" tabindex="-1"><i class="fa fa-trash"></i> [[topic:composer.discard]]</button>
		<div class="btn-group btn-group-sm" component="composer/submit/container">
			<button class="btn btn-primary composer-submit fw-bold {{{ if !(submitOptions.length || canSchedule) }}}rounded-1{{{ end }}}" data-action="post" tabindex="6" data-text-variant=" [[topic:composer.schedule]]"><i class="fa fa-check"></i> [[topic:composer.submit]]</button>
			<div component="composer/submit/options/container" data-submit-options="{submitOptions.length}" class="btn-group btn-group-sm {{{ if !(submitOptions.length || canSchedule) }}}hidden{{{ end }}}">
				<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<i class="fa fa-caret-down"></i>
					<span class="sr-only">[[topic:composer.additional-options]]</span>
				</button>
				<ul class="dropdown-menu dropdown-menu-end p-1">
					<li><a class="dropdown-item rounded-1 display-scheduler {{{ if !canSchedule }}}hidden{{{ end }}}">[[topic:composer.post-later]]</a></li>
					<li><a class="dropdown-item rounded-1 cancel-scheduling hidden">[[modules:composer.cancel-scheduling]]</a></li>
					{{{ each submitOptions }}}
					<li><a class="dropdown-item rounded-1" href="#" data-action="{./action}">{./text}</a></li>
					{{{ end }}}
				</ul>
			</div>
		</div>
	</div>
</div>


			<div class="d-flex justify-content-between gap-2 align-items-center formatting-bar">
	<ul class="list-unstyled mb-0 d-flex formatting-group gap-2 overflow-auto">
		{{{ each formatting }}}
			{{{ if ./spacer }}}
			<li class="small spacer"></li>
			{{{ else }}}
			{{{ if (./visibility.desktop && ((isTopicOrMain && ./visibility.main) || (!isTopicOrMain && ./visibility.reply))) }}}
			{{{ if ./dropdownItems.length }}}
			<li class="dropdown bottom-sheet" tabindex="-1">
				<button class="btn btn-sm btn-link text-reset" data-bs-toggle="dropdown" title="{./title}">
					<i class="{./className}"></i>
				</button>
				<ul class="dropdown-menu p-1">
				{{{ each ./dropdownItems }}}
					<li data-format="{./name}">
						<a href="#" class="dropdown-item rounded-1 position-relative">
							<i class="{./className} text-secondary"></i> {./text}
							{{{ if ./badge }}}
							<span class="px-1 position-absolute top-0 start-100 translate-middle-x badge rounded text-bg-info"></span>
							{{{ end }}}
						</a>
					</li>
				{{{ end }}}
				</ul>
			</li>
			{{{ else }}}
			<li class="btn btn-sm btn-link text-reset position-relative" tabindex="-1" data-format="{./name}" title="{./title}">
				<i class="{./className}"></i>
				{{{ if ./badge }}}
				<span class="px-1 position-absolute top-0 start-100 translate-middle-x badge rounded text-bg-info"></span>
				{{{ end }}}
			</li>
			{{{ end }}}
			{{{ end }}}
			{{{ end }}}
		{{{ end }}}

		{{{ if privileges.upload:post:image }}}
		<li class="img-upload-btn btn btn-sm btn-link text-reset" data-format="picture" tabindex="-1" title="[[modules:composer.upload-picture]]">
			<i class="fa fa-file-image-o"></i>
		</li>
		{{{ end }}}
		{{{ if privileges.upload:post:file }}}
		<li href="#" class="file-upload-btn btn btn-sm btn-link text-reset" data-format="upload" tabindex="-1" title="[[modules:composer.upload-file]]">
			<i class="fa fa-file-o"></i>
		</li>
		{{{ end }}}

		<form id="fileForm" method="post" enctype="multipart/form-data">
			<input type="file" id="files" name="files[]" multiple class="gte-ie9 hide"/>
		</form>
	</ul>
	<div class="d-flex align-items-center gap-1">
		<div class="draft-icon m-2 hidden-xs hidden-sm"></div>
		<button class="btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap" data-action="preview">
			<i class="fa fa-eye"></i>
			<span class="d-none d-md-inline show-text">[[modules:composer.show_preview]]</span>
			<span class="d-none d-md-inline hide-text">[[modules:composer.hide_preview]]</span>
		</button>
		{{{ if composer:showHelpTab }}}
		<button class="btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap" data-action="help">
			<i class="fa fa-question"></i>
			<span class="d-none d-md-inline">[[modules:composer.help]]</span>
		</button>
		{{{ end }}}
	</div>
</div>



			<div class="write-preview-container d-flex gap-2 flex-grow-1 overflow-auto">
	<div class="write-container d-flex d-md-flex w-50">
		<div class="float-end draft-icon hidden-md hidden-lg"></div>
		<textarea class="write shadow-none rounded-1 w-100 form-control" tabindex="4" placeholder="[[modules:composer.textarea.placeholder]]">{body}</textarea>
	</div>
	<div class="preview-container d-none d-md-flex w-50">
		<div class="preview card card-body bg-light rounded-1 overflow-auto"></div>
	</div>
</div>

			{{{ if isTopicOrMain }}}
			<div class="tag-row">
	<div class="tags-container d-flex align-items-center {{{ if tagWhitelist.length }}}haswhitelist{{{ end }}}">
		<div class="btn-group dropup me-2 {{{ if !tagWhitelist.length }}}hidden{{{ end }}}" component="composer/tag/dropdown">
			<button class="btn btn-sm btn-link text-body dropdown-toggle" data-bs-toggle="dropdown" type="button">
				<span class="visible-sm-inline visible-md-inline visible-lg-inline"><i class="fa fa-tags"></i></span>
				[[tags:select_tags]]
			</button>

			<ul class="dropdown-menu">
				<!-- BEGIN tagWhitelist -->
				<li data-tag="{@value}"><a class="dropdown-item" href="#">{@value}</a></li>
				<!-- END tagWhitelist -->
			</ul>
		</div>
		<input class="tags" type="text" class="" placeholder="[[tags:enter_tags_here, {minimumTagLength}, {maximumTagLength}]]" tabindex="5" />
	</div>
</div>
			{{{ end }}}

			<div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>

			<div class="resizer position-absolute w-100 bottom-100 pe-3 border-bottom">
				<div class="trigger text-center">
					<div class="handle d-inline-block px-2 py-1 border bg-body">
						<i class="fa fa-fw fa-up-down"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="dropdown dropdown-left bottom-sheet {{{ if !groups.length }}}hidden{{{ end }}}">
	<div class="dropdown bottom-sheet">
	<button type="button" class="btn-ghost-sm dropdown-toggle" data-bs-toggle="dropdown">
		{{{ if selectedGroup }}}
		<span class="fw-semibold">{selectedGroup.displayName}</span>
		{{{ else }}}
		<span class="fw-semibold">[[groups:all-groups]]</span>
		{{{ end }}} <span class="caret"></span>
	</button>
	<ul class="dropdown-menu p-1 text-sm" role="menu">
		<li role="presentation" class="user {{{ if !selectedGroup}}}selected{{{end}}}">
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="{config.relative_path}/{allGroupsUrl}">
				<div class="flex-grow-1">[[groups:all-groups]]</div>
				<i class="flex-shrink-0 fa fa-fw {{{ if !selectedGroup }}}fa-check{{{ end }}}"></i>
			</a>
		</li>
		{{{ each groups }}}
		<li role="presentation" class="user {{{ if ./selected}}}selected{{{end}}}">
			<a class="dropdown-item rounded-1 d-flex align-items-center gap-2" role="menu-item" href="{config.relative_path}/{./url}">
				<div class="flex-grow-1 d-inline-flex gap-1 align-items-center">{./displayName}</div>
				<i class="flex-shrink-0 fa fa-fw {{{ if ./selected }}}fa-check{{{ end }}}"></i>
			</a>
		</li>
		{{{end}}}
	</ul>
</div>
</div>
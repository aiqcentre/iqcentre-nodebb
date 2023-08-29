<div data-widget-area="header">
	{{{each widgets.header}}}
	{{widgets.header.html}}
	{{{end}}}
</div>
<div class="groups list">
	<h3 class="fw-semibold">[[pages:groups]]</h3>
	<div class="d-flex flex-wrap justify-content-between">
		<div class="mb-2 mb-md-0">
			<div class="text-sm d-flex flex-wrap align-items-center gap-2">
				[[topic:sort_by]]
				<div class="d-flex gap-2">
					<a href="?sort=alpha" class="btn-ghost fw-semibold {{{ if (sort == "alpha") }}}active{{{ end }}}">[[groups:details.group_name]]</a>
					<a href="?sort=count" class="btn-ghost fw-semibold {{{ if (sort == "count") }}}active{{{ end }}}">[[groups:details.member_count]]</a>
					<a href="?sort=date" class="btn-ghost fw-semibold {{{ if (sort == "date") }}}active{{{ end }}}">[[groups:details.creation_date]]</a>
				</div>
			</div>
		</div>
		<div class="">
			<div class="d-flex justify-content-end gap-2">
				<div class="">
					{{{ if allowGroupCreation }}}
					<button class="btn btn-primary btn-sm text-nowrap" data-action="new"><i class="fa fa-users"></i> [[groups:new_group]]</button>
					{{{ end }}}
					<select class="form-select hidden" id="search-sort">
						<option value="alpha">[[groups:details.group_name]]</option>
						<option value="count">[[groups:details.member_count]]</option>
						<option value="date">[[groups:details.creation_date]]</option>
					</select>
				</div>
				<div class="">
					<div class="input-group">
						<input type="text" class="form-control form-control-sm" placeholder="[[global:search]]" name="query" id="search-text">
						<button id="search-button" class="btn btn-primary btn-sm">
							<i class="fa fa-search"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<hr />

	<div component="groups/container" class="row" id="groups-list" data-nextstart={nextStart}>
		{{{ if groups.length }}}
		{{{ each groups }}}
<div class="col-xl-4 col-lg-6 col-sm-12 mb-3" component="groups/summary" data-slug="{./slug}">
	<div class="card h-100 group-hover-bg border-0">
		<a href="{config.relative_path}/groups/{./slug}" class="card-header border-bottom-0 pointer d-block list-cover" style="{{{ if ./cover:thumb:url }}}background-image: url({./cover:thumb:url});background-size: cover; min-height: 125px; background-position: {./cover:position}{{{ end }}}"></a>
		<a href="{config.relative_path}/groups/{./slug}" class="d-block h-100 text-reset text-decoration-none">
			<div class="card-body d-flex flex-column gap-1 border border-top-0 rounded-bottom h-100">
				<div class="d-flex">
					<div class="flex-grow-1 fs-6 fw-semibold">{./displayName}</div>
					<div class="flex-shrink-0 text-sm"><i class="text-muted fa-solid fa-user"></i> {./memberCount}</div>
				</div>
				<div class="text-sm">{./description}</div>
			</div>
		</a>
	</div>
</div>
{{{ end }}}
		{{{ else }}}
		<div class="col-12">
			<div class="alert alert-warning">
			[[groups:no_groups_found]]
			</div>
		</div>
		{{{ end }}}
	</div>
</div>

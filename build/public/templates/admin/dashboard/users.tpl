<div class="dashboard px-lg-4">
	<div class="col-12">
		<div class="card mb-3" id="analytics-panel">
	<div class="card-header">
		<div class="d-flex justify-content-between">
			[[admin/dashboard:forum-traffic]]

			<div class="d-flex gap-1">
				<a class="btn btn-sm btn-light lh-sm" target="_blank" id="view-as-json" href="{config.relative_path}/api/v3/admin/analytics/{set}?type=hourly" data-bs-toggle="tooltip" data-bs-placement="bottom" title="[[admin/dashboard:view-as-json]]"><i class="fa fa-fw fa-xs fa-terminal text-primary"></i></a>
				<a class="btn btn-sm btn-light lh-sm" id="expand-analytics" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="[[admin/dashboard:expand-analytics]]"><i class="fa fa-fw fa-xs fa-expand text-primary"></i></a>
			</div>
		</div>
	</div>
	<div class="card-body">
		<div class="graph-container" id="analytics-traffic-container">
			<canvas id="analytics-traffic" width="100%" height="400"></canvas>
		</div>
		<hr/>
		<div class="row">
			<div class="col-sm-3 hidden-xs text-center pageview-stats">
				<div><strong id="pageViewsThirty">{{{ if summary.month }}}{./summary.month}{{{ else }}}0{{{ end }}}</strong></div>
				<div><a href="#" class="updatePageviewsGraph text-sm" data-action="updateGraph" data-units="days" data-amount="30">[[admin/dashboard:page-views-thirty]]</a></div>
			</div>
			<div class="col-sm-3 text-center pageview-stats">
				<div><strong id="pageViewsSeven">{{{ if summary.week }}}{./summary.week}{{{ else }}}0{{{ end }}}</strong></div>
				<div><a href="#" class="updatePageviewsGraph text-sm" data-action="updateGraph" data-units="days" data-amount="7">[[admin/dashboard:page-views-seven]]</a></div>
			</div>
			<div class="col-sm-3 hidden-xs text-center pageview-stats">
				<div><strong id="pageViewsPastDay">{{{ if summary.day }}}{./summary.day}{{{ else }}}0{{{ end }}}</strong></div>
				<div><a href="#" class="updatePageviewsGraph text-sm" data-action="updateGraph" data-units="hours" data-amount="24">[[admin/dashboard:page-views-last-day]]</a></div>
			</div>
			<div class="col-sm-3 text-center pageview-stats">
				<div><strong><i class="fa fa-clock-o"></i></strong></div>
				<div><a href="#" class="updatePageviewsGraph text-sm" data-action="updateGraph" data-units="custom">[[admin/dashboard:page-views-custom]]</a></div>
			</div>
		</div>
	</div>
</div>
		<div class="table-responsive mb-3">
	<table class="table text-sm">
		<thead>
			<tr>
				<th></th>
				<th class="text-end">[[admin/dashboard:stats.yesterday]]</th>
				<th class="text-end">[[admin/dashboard:stats.today]]</th>
				<th></th>
				<th class="text-end">[[admin/dashboard:stats.last-week]]</th>
				<th class="text-end">[[admin/dashboard:stats.this-week]]</th>
				<th></th>
				<th class="text-end">[[admin/dashboard:stats.last-month]]</th>
				<th class="text-end">[[admin/dashboard:stats.this-month]]</th>
				<th></th>
				<th class="text-end">[[admin/dashboard:stats.all]]</th>
			</tr>
		</thead>
		<tbody>
			{{{ each stats }}}
			<tr>
				<td>
					<strong>
						{{{ if ./href }}}
							<a href="{./href}">{./name}</a>
						{{{ else }}}
							{./name}
						{{{ end }}}
					</strong>
				</td>
				<td class="text-end">{formattedNumber(./yesterday)}</td>
				<td class="text-end">{formattedNumber(./today)}</td>
				<td class="{./dayTextClass}"><small>{./dayIncrease}%</small></td>

				<td class="text-end">{formattedNumber(./lastweek)}</td>
				<td class="text-end">{formattedNumber(./thisweek)}</td>
				<td class="{./weekTextClass}"><small>{./weekIncrease}%</small></td>

				<td class="text-end">{formattedNumber(./lastmonth)}</td>
				<td class="text-end">{formattedNumber(./thismonth)}</td>
				<td class="{./monthTextClass}"><small>{./monthIncrease}%</small></td>

				<td class="text-end">{formattedNumber(./alltime)}</td>
			</tr>
			{{{ end }}}
		</tbody>
	</table>
</div>

		<div class="table-responsive">
			<table class="table users-list text-sm">
				<thead>
					<th class="text-muted">[[admin/manage/users:users.uid]]</th>
					<th class="text-muted">[[admin/manage/users:users.username]]</th>
					<th class="text-muted">[[admin/manage/users:users.email]]</th>
					<th data-sort="joindate">[[admin/manage/users:users.joined]]</th>
				</thead>
				<tbody>
					{{{ if !users.length}}}
					<tr>
						<td colspan=4" class="text-center"><em>[[admin/dashboard:details.no-users]]</em></td>
					</tr>
					{{{ end }}}
					{{{ each users }}}
					<tr>
						<td>{../uid}</td>
						<td>{../username}</td>
						<td>{../email}</td>
						<td><span class="timeago" title="{../joindateISO}"></span></td>
					</tr>
					{{{ end }}}
				</tbody>
			</table>
		</div>
	</div>
</div>
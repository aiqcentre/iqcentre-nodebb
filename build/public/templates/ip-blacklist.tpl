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


<div class="row ip-blacklist">
	<div class="col-lg-12">
		<p class="lead">
			[[ip-blacklist:lead]]
		</p>
		<p>
			[[ip-blacklist:description]]
		</p>

		<div class="row">
			<div class="col-sm-6 d-flex flex-column">
				<div class="card mb-3 flex-grow-1">
					<div class="card-header">[[ip-blacklist:active-rules]]</div>
					<div class="card-body d-flex flex-column">
						<textarea id="blacklist-rules" class="flex-grow-1 mb-3 w-100 d-block border px-2 py-1">{rules}</textarea>
						<div>
							<button type="button" class="btn btn-warning" data-action="test">
								<i class="fa fa-bomb"></i> [[ip-blacklist:validate]]
							</button>
							<button type="button" class="btn btn-primary" data-action="apply">
								<i class="fa fa-save"></i> [[ip-blacklist:apply]]
							</button>
						</div>
					</div>
				</div>
				<div class="card flex-shrink-1">
					<div class="card-header">[[ip-blacklist:hints]]</div>
					<div class="card-body">
						<p>
							[[ip-blacklist:hint-1]]
						</p>
						<p>
							[[ip-blacklist:hint-2]]
						</p>
					</div>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="card mb-3">
					<div class="card-body">
						<div><canvas id="blacklist:hourly" height="250"></canvas></div>
					</div>
					<div class="card-footer"><small>[[ip-blacklist:analytics.blacklist-hourly]]</small></div>
				</div>

				<div class="card">
					<div class="card-body">
						<div><canvas id="blacklist:daily" height="250"></canvas></div>
					</div>
					<div class="card-footer"><small>[[ip-blacklist:analytics.blacklist-daily]]</small></div>
				</div>
			</div>
		</div>
	</div>

</div>
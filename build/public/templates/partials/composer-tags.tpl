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
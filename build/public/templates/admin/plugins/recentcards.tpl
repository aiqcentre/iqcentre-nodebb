<div class="acp-page-container">
	<div component="settings/main/header" class="row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center">
	<div class="col-12 col-md-8 px-0 mb-1 mb-md-0">
		<h4 class="fw-bold tracking-tight mb-0">{title}</h4>
	</div>
	<div class="col-12 col-md-4 px-0 px-md-3">
		<button id="save" class="btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap">[[admin/admin:save-changes]]</button>
	</div>
</div>

	<div class="row m-0">
		<div id="spy-container" class="col-12 col-md-8 px-0 mb-4" tabindex="0">
			<form role="form" id="recentcards">
				<div class="">
					<div class="form-check mb-3">
						<input class="form-check-input" type="checkbox" data-key="enableCarousel" id="enableCarousel" name="enableCarousel" />
						<label class="form-check-label" for="enableCarousel">
							Enable Carousel Mode
						</label>
					</div>

					<div class="form-check mb-3">
						<input class="form-check-input" type="checkbox" data-key="enableCarouselPagination" id="enableCarouselPagination" name="enableCarouselPagination" />
						<label class="form-check-label" for="enableCarouselPagination">
							Turn on paginator for carousel
						</label>
					</div>

					<div class="mb-3">
						<label for="maxSlides">Max slides to show for carousel</label>
						<input id="maxSlides" type="text" class="form-control" placeholder="4" name="maxSlides" data-key="maxSlides">
					</div>
				</div>
			</form>
		</div>

	</div>
</div>


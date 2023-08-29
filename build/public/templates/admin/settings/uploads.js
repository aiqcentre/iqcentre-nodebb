
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"acp-page-container\">\r\n\t<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\r\n\t<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\r\n\t\t<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\r\n\t</div>\r\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\r\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t</div>\r\n</div>\r\n\r\n\t<div class=\"row settings m-0\">\r\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\r\n\t\t\t<div id=\"posts\" class=\"mb-4\">\r\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/uploads:posts]]</h5>\r\n\r\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"stripEXIFData\" data-field=\"stripEXIFData\">\r\n\t\t\t\t\t<label for=\"stripEXIFData\" class=\"form-check-label\">[[admin/settings/uploads:strip-exif-data]]</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"privateUploads\" data-field=\"privateUploads\">\r\n\t\t\t\t\t<label for=\"privateUploads\" class=\"form-check-label\">[[admin/settings/uploads:private]]</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"privateUploadsExtensions\">[[admin/settings/uploads:private-extensions]]</label>\r\n\t\t\t\t\t<input id=\"privateUploadsExtensions\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"privateUploadsExtensions\" placeholder=\"\">\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:private-uploads-extensions-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"resizeImageWidthThreshold\">[[admin/settings/uploads:resize-image-width-threshold]]</label>\r\n\t\t\t\t\t\t\t<input id=\"resizeImageWidthThreshold\" type=\"text\" class=\"form-control\" value=\"2000\" data-field=\"resizeImageWidthThreshold\" placeholder=\"2000\">\r\n\t\t\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t\t\t[[admin/settings/uploads:resize-image-width-threshold-help]]\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"resizeImageWidth\">[[admin/settings/uploads:resize-image-width]]</label>\r\n\t\t\t\t\t\t\t<input id=\"resizeImageWidth\" type=\"text\" class=\"form-control\" value=\"760\" data-field=\"resizeImageWidth\" placeholder=\"760\">\r\n\t\t\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t\t\t[[admin/settings/uploads:resize-image-width-help]]\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"resizeImageQuality\">[[admin/settings/uploads:resize-image-quality]]</label>\r\n\t\t\t\t\t<input id=\"resizeImageQuality\" type=\"text\" class=\"form-control\" value=\"60\" data-field=\"resizeImageQuality\" placeholder=\"60\">\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:resize-image-quality-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"maximumFileSize\">[[admin/settings/uploads:max-file-size]]</label>\r\n\t\t\t\t\t<input id=\"maximumFileSize\" type=\"text\" class=\"form-control\" value=\"2048\" data-field=\"maximumFileSize\">\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:max-file-size-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"rejectImageWidth\">[[admin/settings/uploads:reject-image-width]]</label>\r\n\t\t\t\t\t<input id=\"rejectImageWidth\" type=\"text\" class=\"form-control\" value=\"5000\" data-field=\"rejectImageWidth\" placeholder=\"5000\">\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:reject-image-width-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"rejectImageHeight\">[[admin/settings/uploads:reject-image-height]]</label>\r\n\t\t\t\t\t<input id=\"rejectImageHeight\" type=\"text\" class=\"form-control\" value=\"5000\" data-field=\"rejectImageHeight\" placeholder=\"5000\">\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:reject-image-height-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"allowTopicsThumbnail\" data-field=\"allowTopicsThumbnail\">\r\n\t\t\t\t\t<label for=\"allowTopicsThumbnail\" class=\"form-check-label\">[[admin/settings/uploads:allow-topic-thumbnails]]</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"topicThumbSize\">[[admin/settings/uploads:topic-thumb-size]]</label>\r\n\t\t\t\t\t<input id=\"topicThumbSize\" type=\"text\" class=\"form-control\" value=\"120\" data-field=\"topicThumbSize\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"allowedFileExtensions\">[[admin/settings/uploads:allowed-file-extensions]]</label>\r\n\t\t\t\t\t<input id=\"allowedFileExtensions\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"allowedFileExtensions\" data-field-type=\"tagsinput\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:allowed-file-extensions-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"uploadRateLimitThreshold\">[[admin/settings/uploads:upload-limit-threshold]]</label>\r\n\t\t\t\t\t<div id=\"uploadRateLimitThreshold\" class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" data-field=\"uploadRateLimitThreshold\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<select class=\"form-select\" data-field=\"uploadRateLimitCooldown\">\r\n\t\t\t\t\t\t\t\t<option value=\"60\">[[admin/settings/uploads:upload-limit-threshold-per-minute, 1]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"300\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 5]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"900\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 15]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"3600\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 60]]</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<hr/>\r\n\r\n\t\t\t<div id=\"orphaned-files\" class=\"mb-4\">\r\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/uploads:orphans]]</h5>\r\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"preserveOrphanedUploads\" data-field=\"preserveOrphanedUploads\">\r\n\t\t\t\t\t<label for=\"preserveOrphanedUploads\" class=\"form-check-label\">[[admin/settings/uploads:preserve-orphaned-uploads]]</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"orphanExpiryDays\">[[admin/settings/uploads:orphanExpiryDays]]</label>\r\n\t\t\t\t\t\t<input id=\"orphanExpiryDays\" type=\"number\" min=\"0\" placeholder=\"0\" class=\"form-control\" data-field=\"orphanExpiryDays\" />\r\n\t\t\t\t\t\t<p class=\"form-text\">[[admin/settings/uploads:orphanExpiryDays-help]]</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<hr/>\r\n\r\n\t\t\t<div id=\"profile-avatars\" class=\"mb-4\">\r\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/uploads:profile-avatars]]</h5>\r\n\r\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"allowProfileImageUploads\" data-field=\"allowProfileImageUploads\">\r\n\t\t\t\t\t<label for=\"allowProfileImageUploads\" class=\"form-check-label\">[[admin/settings/uploads:allow-profile-image-uploads]]</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"profile:convertProfileImageToPNG\" data-field=\"profile:convertProfileImageToPNG\">\r\n\t\t\t\t\t<label for=\"profile:convertProfileImageToPNG\" class=\"form-check-label\">[[admin/settings/uploads:convert-profile-image-png]]</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label>[[admin/settings/uploads:default-avatar]]</label>\r\n\t\t\t\t\t<div class=\"d-flex gap-1\">\r\n\t\t\t\t\t\t<input id=\"defaultAvatar\" type=\"text\" class=\"form-control\" placeholder=\"A custom image to use instead of user icons\" data-field=\"defaultAvatar\" />\r\n\t\t\t\t\t\t<input data-action=\"upload\" data-target=\"defaultAvatar\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadDefaultAvatar\" type=\"button\" class=\"btn btn-light\" value=\"[[admin/settings/uploads:upload]]\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"profileImageDimension\">[[admin/settings/uploads:profile-image-dimension]]</label>\r\n\t\t\t\t\t<input id=\"profileImageDimension\" type=\"text\" class=\"form-control\" data-field=\"profileImageDimension\" placeholder=\"200\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:profile-image-dimension-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"maximumProfileImageSize\">[[admin/settings/uploads:max-profile-image-size]]</label>\r\n\t\t\t\t\t<input id=\"maximumProfileImageSize\" type=\"text\" class=\"form-control\" placeholder=\"Maximum size of uploaded user images in kibibytes\" data-field=\"maximumProfileImageSize\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:max-profile-image-size-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"maximumCoverImageSize\">[[admin/settings/uploads:max-cover-image-size]]</label>\r\n\t\t\t\t\t<input id=\"maximumCoverImageSize\" type=\"text\" class=\"form-control\" placeholder=\"Maximum size of uploaded cover images in kibibytes\" data-field=\"maximumCoverImageSize\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/uploads:max-cover-image-size-help]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"profile:keepAllUserImages\" data-field=\"profile:keepAllUserImages\">\r\n\t\t\t\t\t<label for=\"profile:keepAllUserImages\" class=\"form-check-label\">[[admin/settings/uploads:keep-all-user-images]]</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<hr/>\r\n\r\n\t\t\t<div id=\"profile-covers\" class=\"mb-4\">\r\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/uploads:profile-covers]]</h5>\r\n\t\t\t\t<label class=\"form-label\" for=\"profile:defaultCovers\"><strong>[[admin/settings/uploads:default-covers]]</strong></label>\r\n\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t[[admin/settings/uploads:default-covers-help]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<input type=\"text\" class=\"form-control form-control-lg\" id=\"profile:defaultCovers\" data-field=\"profile:defaultCovers\" data-field-type=\"tagsinput\" value=\"/assets/images/cover-default.png\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\r\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\r\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\r\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\r\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\r\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\r\n\t\t\t</nav>\r\n\t\t</nav>\r\n\t</div>\r\n</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

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
    return "<div id=\"crop-picture-modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"crop-picture\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h3 id=\"crop-picture\">[[user:crop_picture]]</h3>\r\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div id=\"upload-progress-box\" class=\"progress hide\">\r\n\t\t\t\t\t<div id=\"upload-progress-bar\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"cropper\">\r\n\t\t\t\t\t<img id=\"cropped-image\" class=\"mw-100\" crossorigin=\"anonymous\" src=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" alt=\"\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<hr />\r\n\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t<button class=\"btn btn-primary rotate\" data-degrees=\"-45\"><i class=\"fa fa-rotate-left\"></i></button>\r\n\t\t\t\t\t<button class=\"btn btn-primary rotate\" data-degrees=\"45\"><i class=\"fa fa-rotate-right\"></i></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t<button class=\"btn btn-primary flip\" data-option=\"-1\" data-method=\"scaleX\"><i class=\"fa fa-arrows-h\"></i></button>\r\n\t\t\t\t\t<button class=\"btn btn-primary flip\" data-option=\"1\" data-method=\"scaleY\"><i class=\"fa fa-arrows-v\"></i></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t<button class=\"btn btn-primary reset\"><i class=\"fa fa-refresh\"></i></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\r\n\t\t\t\t<button class=\"btn btn-primary upload-btn " + 
      (guard((context != null) ? context['allowSkippingCrop'] : null) ?
        "" :
        "hidden") + 
      "\">[[user:upload_picture]]</button>\r\n\t\t\t\t<button class=\"btn btn-primary crop-btn\">[[user:upload_cropped_picture]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

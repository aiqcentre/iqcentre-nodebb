
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
    return "<div class=\"logger settings d-flex flex-column gap-2 px-lg-4\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/development/logger:logger]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex align-items-center\">\r\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"card-body\">\r\n\t\t<p>\r\n\t\t\t[[admin/development/logger:description]]\r\n\t\t</p>\r\n\t\t<br/>\r\n\t\t<p>\r\n\t\t\t[[admin/development/logger:explanation]]\r\n\t\t</p>\r\n\t\t<br/>\r\n\r\n\t\t<form>\r\n\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"loggerStatus\" data-field=\"loggerStatus\">\r\n\t\t\t\t<label for=\"loggerStatus\" class=\"form-check-label\">[[admin/development/logger:enable-http]]</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"loggerIOStatus\" data-field=\"loggerIOStatus\">\r\n\t\t\t\t<label for=\"loggerIOStatus\" class=\"form-check-label\">[[admin/development/logger:enable-socket]]</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<label class=\"form-label\" for=\"loggerPath\">[[admin/development/logger:file-path]]</label>\r\n\t\t\t<input id=\"loggerPath\" class=\"form-control\" type=\"text\" placeholder=\"[[admin/development/logger:file-path-placeholder]]\" data-field=\"loggerPath\" />\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

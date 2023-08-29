
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
    return "<div class=\"acp-page-container\">\n\t<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\r\n\t<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\r\n\t\t<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\r\n\t</div>\r\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\r\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t</div>\r\n</div>\n\n\t<div class=\"row m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<form role=\"form\" class=\"composer-default-settings mb-4\">\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input id=\"composeRouteEnabled\" class=\"form-check-input\" type=\"checkbox\" name=\"composeRouteEnabled\" />\n\t\t\t\t\t<label for=\"composeRouteEnabled\" class=\"form-check-label\">Use a separate route for the composer</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"hidePreviewOnOpen\" name=\"hidePreviewOnOpen\" />\n\t\t\t\t\t<label for=\"hidePreviewOnOpen\" class=\"form-check-label\">Hide preview on open</label>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\r\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\r\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\r\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\r\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\r\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\r\n\t\t\t</nav>\r\n\t\t</nav>\r\n\t</div>\r\n</div>\n\t</div>\n</div>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

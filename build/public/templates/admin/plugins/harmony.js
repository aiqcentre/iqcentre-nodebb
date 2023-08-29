
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
      "</h4>\r\n\t</div>\r\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\r\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t</div>\r\n</div>\n\n\t<div class=\"row m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<form role=\"form\" class=\"harmony-settings\">\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"enableQuickReply\" name=\"enableQuickReply\" />\n\t\t\t\t\t<label for=\"enableQuickReply\" class=\"form-check-label\">[[themes/harmony:settings.enableQuickReply]]</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"centerHeaderElements\" name=\"centerHeaderElements\" />\n\t\t\t\t\t<label for=\"centerHeaderElements\" class=\"form-check-label\">[[themes/harmony:settings.centerHeaderElements]]</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"mobileTopicTeasers\" name=\"mobileTopicTeasers\" />\n\t\t\t\t\t<label for=\"mobileTopicTeasers\" class=\"form-check-label\">[[themes/harmony:settings.mobileTopicTeasers]]</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"stickyToolbar\" name=\"stickyToolbar\" />\n\t\t\t\t\t<div for=\"stickyToolbar\" class=\"form-check-label\">\n\t\t\t\t\t\t[[themes/harmony:settings.stickyToolbar]]\n\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t[[themes/harmony:settings.stickyToolbar.help]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"autohideBottombar\" name=\"autohideBottombar\" />\n\t\t\t\t\t<div for=\"autohideBottombar\" class=\"form-check-label\">\n\t\t\t\t\t\t[[themes/harmony:settings.autohideBottombar]]\n\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t[[themes/harmony:settings.autohideBottombar.help]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check form-switch\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"chatModals\" name=\"chatModals\" />\n\t\t\t\t\t<div for=\"chatModals\" class=\"form-check-label\">\n\t\t\t\t\t\t[[themes/harmony:settings.chatModals]]\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\r\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\r\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\r\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\r\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\r\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\r\n\t\t\t</nav>\r\n\t\t</nav>\r\n\t</div>\r\n</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
      "</h4>\r\n\t</div>\r\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\r\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t</div>\r\n</div>\r\n\r\n\t<div class=\"row settings m-0\">\r\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\r\n\t\t\t<div id=\"eu-consent\" class=\"mb-4\">\r\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/cookies:eu-consent]]</h5>\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<div class=\"form-check form-switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"cookieConsentEnabled\" data-field=\"cookieConsentEnabled\">\r\n\t\t\t\t\t\t<label for=\"cookieConsentEnabled\" class=\"form-check-label\">[[admin/settings/cookies:consent.enabled]]</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cookieConsentMessage\">[[admin/settings/cookies:consent.message]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" id=\"cookieConsentMessage\" type=\"text\" data-field=\"cookieConsentMessage\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/cookies:consent.blank-localised-default]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cookieConsentDismiss\">[[admin/settings/cookies:consent.acceptance]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" id=\"cookieConsentDismiss\" type=\"text\" data-field=\"cookieConsentDismiss\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/cookies:consent.blank-localised-default]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cookieConsentLink\">[[admin/settings/cookies:consent.link-text]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" id=\"cookieConsentLink\" type=\"text\" data-field=\"cookieConsentLink\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/cookies:consent.blank-localised-default]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cookieConsentLinkUrl\">[[admin/settings/cookies:consent.link-url]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" id=\"cookieConsentLinkUrl\" type=\"text\" data-field=\"cookieConsentLinkUrl\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<hr/>\r\n\r\n\t\t\t<div id=\"cookie-settings\" class=\"mb-4\">\r\n\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/cookies:settings]]</h5>\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cookieDomain\">[[admin/settings/cookies:cookie-domain]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" id=\"cookieDomain\" type=\"text\" placeholder=\".domain.tld\" data-field=\"cookieDomain\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/cookies:blank-default]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"maxUserSessions\">[[admin/settings/cookies:max-user-sessions]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" id=\"maxUserSessions\" type=\"number\" placeholder=\"10\" data-field=\"maxUserSessions\" />\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/settings/cookies:blank-default]]\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<button id=\"delete-all-sessions\" class=\"btn btn-danger\">Revoke All Sessions</button>\r\n\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\tThis will delete all sessions, you will be logged out and will have to login again!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\r\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\r\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\r\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\r\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\r\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\r\n\t\t\t</nav>\r\n\t\t</nav>\r\n\t</div>\r\n</div>\r\n\t</div>\r\n</div>\r\n\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
    return "\n<li class=\"nav-item mx-2 order-last order-md-first\" title=\"[[global:login]]\">\n\t<a class=\"nav-link nav-btn\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/login\">\n\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t<span class=\"position-relative\">\n\t\t\t\t<i class=\"fa fa-fw fa-sign-in\"></i>\n\t\t\t</span>\n\t\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:login]]</span>\n\t\t</span>\n\t</a>\n</li>\n<hr class=\"my-2 mx-2 visible-open\">\n" + 
      (guard((context != null) ? context['allowRegistration'] : null) ?
        "\n<li class=\"nav-item mx-2\" title=\"[[global:register]]\">\n\t<span class=\"text-xs visible-open\">[[login:dont_have_account]]</span>\n\t<a class=\"nav-link nav-btn\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/register\">\n\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t<span class=\"position-relative\">\n\t\t\t\t<i class=\"fa fa-fw fa-user-plus\"></i>\n\t\t\t</span>\n\t\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:register]]</span>\n\t\t</span>\n\t</a>\n</li>\n<hr class=\"my-2 mx-2 visible-open\">\n" :
        "") + 
      "\n\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
        "\n<li component=\"sidebar/search\" class=\"visible-open nav-item mx-2 search\">\n\t<div class=\"d-flex gap-2 py-1 px-2 align-items-center\" title=\"[[themes/harmony:login-register-to-search]]\">\n\t\t<i class=\"fa fa-fw fa-search text-muted\"></i>\n\t\t<span class=\"nav-text visible-open text-xs text-muted\">[[themes/harmony:login-register-to-search]]</span>\n\t</a>\n</a>\n" :
        "") + 
      "\n\n\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

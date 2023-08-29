
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
    return "<div class=\"co-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3\">\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">\n\t\t\t<span class=\"fs-3\">[[user:sso.dissociate-confirm-title]]</span>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t[[user:sso.dissociate-confirm, " + 
      __escape(guard((context != null) ? context['service'] : null)) + 
      "]]\n\n\t\t\t<hr>\n\n\t\t\t<form method=\"post\">\n\t\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" />\n\t\t\t\t<button class=\"btn btn-danger\">[[user:sso.dissociate]]</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

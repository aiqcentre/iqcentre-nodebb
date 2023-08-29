
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
    return "<div>\r\n\t" + 
      (guard((context != null) ? context['hasPending'] : null) ?
        "\r\n\t<div class=\"alert alert-info\">\r\n\t\t<p>[[user:emailUpdate.pending]]</p>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\t<p>[[user:emailUpdate.intro]]</p>\r\n\t" + 
      (guard((context != null) ? context['requireEmailAddress'] : null) ?
        "\r\n\t<p>[[user:emailUpdate.required]]</p>\r\n\t" :
        "\r\n\t<p>[[user:emailUpdate.optional]]</p>\r\n\t") + 
      "\r\n\t<div class=\"mb-3\">\r\n\t\t<label class=\"form-label\" for=\"email\">[[global:email]]</label>\r\n\t\t<input class=\"form-control\" type=\"text\" id=\"email\" name=\"email\" placeholder=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\" value=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\" />\r\n\t\t<p class=\"form-text\">[[user:emailUpdate.change-instructions]]</p>\r\n\t</div>\r\n\r\n\t" + 
      (guard((context != null) ? context['issuePasswordChallenge'] : null) ?
        "\r\n\t<div class=\"mb-3\">\r\n\t\t<label class=\"form-label\" for=\"password\">[[register:password]]</label>\r\n\t\t<input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" />\r\n\t\t<p class=\"form-text\">[[user:emailUpdate.password-challenge]]</p>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

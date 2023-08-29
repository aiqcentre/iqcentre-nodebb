
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
    return "<div class=\"mb-3\">\r\n\t<p class=\"lead\">[[user:consent.lead]]</p>\r\n\t<p>[[user:consent.intro]]</p>\r\n\t<div class=\"form-check mb-3\">\r\n\t\t<input class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_agree_data\" id=\"gdpr_agree_data\">\r\n\t\t<label class=\"form-check-label\" for=\"gdpr_agree_data\">[[register:gdpr_agree_data]]</label>\r\n\t</div>\r\n\r\n\t<p>\r\n\t\t[[user:consent.email_intro]]\r\n\t\t" + 
      (guard((context != null) ? context['digestEnabled'] : null) ?
        "\r\n\t\t[[user:consent.digest_frequency, " + 
          __escape(guard((context != null) ? context['digestFrequency'] : null)) + 
          "]]\r\n\t\t" :
        "\r\n\t\t[[user:consent.digest_off]]\r\n\t\t") + 
      "\r\n\t</p>\r\n\r\n\t<div class=\"form-check\">\r\n\t\t<input class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_agree_email\" id=\"gdpr_agree_email\">\r\n\t\t<label class=\"form-check-label\" for=\"gdpr_agree_email\">[[register:gdpr_agree_email]]</label>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

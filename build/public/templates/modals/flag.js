
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
    return "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"[[flags:modal-title]]\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\">[[flags:modal-title]]</h5>\r\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<p class=\"lead\">\r\n\t\t\t\t\t[[flags:modal-body, " + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"radio mb-2\">\r\n\t\t\t\t\t\t<label for=\"flag-reason-spam\">\r\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-spam\" value=\"[[flags:modal-reason-spam]]\">\r\n\t\t\t\t\t\t\t[[flags:modal-reason-spam]]\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"radio mb-2\">\r\n\t\t\t\t\t\t<label for=\"flag-reason-offensive\">\r\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-offensive\" value=\"[[flags:modal-reason-offensive]]\">\r\n\t\t\t\t\t\t\t[[flags:modal-reason-offensive]]\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"radio mb-2\">\r\n\t\t\t\t\t\t<label for=\"flag-reason-other\">\r\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-other\" value=\"[[flags:modal-reason-other]]\">\r\n\t\t\t\t\t\t\t[[flags:modal-reason-other]]\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<textarea class=\"form-control\" id=\"flag-reason-custom\" placeholder=\"[[flags:modal-reason-custom]]\" disabled=\"disabled\"></textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"flag-post-commit\" disabled>[[flags:modal-submit]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
    return "<form role=\"form\">\r\n    <div class=\"mb-3\">\r\n        <label class=\"form-label\" for=\"uid\">[[admin/settings/api:uid]]</label>\r\n        <input type=\"text\" inputmode=\"numeric\" pattern=\"\\d+\" name=\"uid\" class=\"form-control\" placeholder=\"0\" value=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\" />\r\n        <p class=\"form-text\">\r\n            [[admin/settings/api:uid-help-text]]\r\n        </p>\r\n    </div>\r\n    <div class=\"mb-3\">\r\n        <label class=\"form-label\" for=\"description\">[[admin/settings/api:description]]</label>\r\n        <input type=\"text\" name=\"description\" class=\"form-control\" placeholder=\"Description\" value=\"" + 
      __escape(guard((context != null) ? context['description'] : null)) + 
      "\" />\r\n    </div>\r\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

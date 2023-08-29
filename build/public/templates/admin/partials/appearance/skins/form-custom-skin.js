
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
    return "<form>\r\n    <div class=\"mb-3\">\r\n        <label for=\"name\">[[admin/appearance/skins:custom-skin-name]]</label>\r\n        <input type=\"text\" name=\"custom-skin-name\" class=\"form-control\">\r\n    </div>\r\n\r\n    <div class=\"mb-3\">\r\n        <label for=\"_variables\">[[admin/appearance/skins:custom-skin-variables]]</label>\r\n        <textarea name=\"_variables\" class=\"form-control\" rows=\"20\"></textarea>\r\n    </div>\r\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

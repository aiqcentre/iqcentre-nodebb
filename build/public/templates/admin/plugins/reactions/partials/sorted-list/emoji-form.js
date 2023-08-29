
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
    return "<form>\n    <div class=\"form-group\">\n        <label for=\"reaction\">[[reactions:settings.reaction-reputations.reaction]]</label>\n        <input type=\"text\" id=\"reaction\" name=\"reaction\" class=\"form-control\" placeholder=\"[[reactions:settings.reaction-reputations.reaction]]\" />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"reputation\">[[reactions:settings.reaction-reputations.reputation]]</label>\n        <input type=\"number\" id=\"reputation\" name=\"reputation\" class=\"form-control\" placeholder=\"[[reactions:settings.reaction-reputations.reputation]]\" />\n    </div>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

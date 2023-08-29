
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
    return "<div class=\"form-group\">\r\n\t<label class=\"form-label\" for=\"expiry\">[[topic:pin-modal-expiry]]</label>\r\n\t<input id=\"expiry\" type=\"date\" class=\"form-control\" />\r\n\t<p class=\"form-text\">[[topic:pin-modal-help]]</p>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

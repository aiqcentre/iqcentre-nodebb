
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
    return (guard((context != null) ? context['noScriptMessage'] : null) ?
        "\r\n<noscript>\r\n    <div class=\"alert alert-info\">\r\n        <p>\r\n            " + 
          __escape(guard((context != null) ? context['noScriptMessage'] : null)) + 
          "\r\n        </p>\r\n    </div>\r\n</noscript>\r\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})

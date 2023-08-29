
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
    return "</div>\r\n\r\n<button id=\"save\" class=\"btn btn-primary position-fixed bottom-0 end-0 px-3 py-2 mb-lg-4 me-4 rounded-circle fs-4\" type=\"button\" style=\"width: 64px; height: 64px; margin-bottom: 5rem;\">\r\n\t<i class=\"fa fa-fw fas fa-floppy-disk\"></i>\r\n</button>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

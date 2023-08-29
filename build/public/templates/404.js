
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
    return "<div class=\"flex-fill\">\r\n\t<h2 class=\"fw-semibold tracking-tight text-center\">[[global:404.title]]</h2>\r\n\r\n\t<div class=\"mx-auto\">\r\n\t\t<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\r\n\t\t\t<div class=\"mx-auto p-4 bg-light border rounded\">\r\n\t\t\t\t<i class=\"text-secondary fa fa-fw fa-4x " + 
      (guard((context != null) ? context['icon'] : null) ?
        __escape(guard((context != null) ? context['icon'] : null)) :
        "fa-otter") + 
      "\"></i>\r\n\t\t\t</div>\r\n\t\t\t" + 
      (guard((context != null) ? context['error'] : null) ?
        __escape(guard((context != null) ? context['error'] : null)) :
        "[[global:404.message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "]]") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

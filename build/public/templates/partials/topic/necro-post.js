
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
    return "<li component=\"topic/necro-post\" class=\"necro-post text-muted timeline-event d-flex gap-2 pt-4\">\n\t<div class=\"timeline-badge\">\n\t\t<i class=\"fa fa-clock small\"></i>\n\t</div>\n\t<span class=\"timeline-text small fw-semibold\">" + 
      __escape(guard((context != null) ? context['text'] : null)) + 
      "</span>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
    return "<div id=\"" + 
      __escape(guard((context != null) ? context['alert_id'] : null)) + 
      "\" role=\"alert\" class=\"alert alert-dismissible alert-" + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      " fade show\" component=\"toaster/toast\">\n\t<div class=\"alert-progress position-absolute top-0 start-0 bottom-0 h-100 z-0\" style=\" opacity:0.1;\"></div>\n\t<div class=\"d-flex flex-wrap gap-2 position-relative\">\n\t\t" + 
      (guard((context != null) ? context['image'] : null) ?
        "\n\t\t<img src=\"" + 
          __escape(guard((context != null) ? context['image'] : null)) + 
          "\" height=\"80\" style=\"width: auto;\" />\n\t\t" :
        "") + 
      "\n\t\t<div class=\"d-flex flex-column gap-2\">\n\t\t\t" + 
      (guard((context != null) ? context['title'] : null) ?
        "\n\t\t\t<strong>" + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          "</strong>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard((context != null) ? context['message'] : null) ?
        "\n\t\t\t<p class=\"m-0\">" + 
          __escape(guard((context != null) ? context['message'] : null)) + 
          "</p>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\n\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"close\"></button>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

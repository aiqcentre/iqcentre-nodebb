
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-gear link-primary\"></i>\n\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:thread_tools.title]]</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})

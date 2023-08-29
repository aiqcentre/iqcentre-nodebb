
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
    return "<div class=\"dropdown\" component=\"flags/bulk-actions\">\n\t<button class=\"filter-btn btn btn-light btn-sm border\" data-bs-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\" disabled=\"disabled\">\n\t\t<span class=\"filter-label\">[[flags:bulk-actions]]</span>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\">\n\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"bulk-assign\">[[flags:assign-to-me]]</a></li>\n\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"bulk-mark-resolved\">[[flags:bulk-resolve]]</a></li>\n\t</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
    return "<div class=\"btn-group bottom-sheet " + 
      (guard((context != null && context['terms'] != null) ? context['terms']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t<i class=\"fa fa-fw fa-clock text-primary\"></i>\n\t\t<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
      __escape(guard((context != null && context['selectedTerm'] != null) ? context['selectedTerm']['name'] : null)) + 
      "</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n\t\t" + 
      compiled.blocks['terms'](helpers, context, guard, iter, helper) + 
      "\n\t</ul>\n</div>";
  }

  compiled.blocks = {
    'terms': function terms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['terms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li role=\"presentation\" class=\"category\">\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['url'] : null)) + 
          "\">\n\t\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['name'] : null)) + 
          "</div>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "<div class=\"btn-group bottom-sheet" + 
      (guard((context != null && context['filters'] != null) ? context['filters']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t<i class=\"fa fa-fw fa-filter link-primary\"></i>\n\t\t<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
      __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['name'] : null)) + 
      "</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n\t\t" + 
      compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
      "\n\t</ul>\n</div>";
  }

  compiled.blocks = {
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['filters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['url'] : null)) + 
          "\">\n\t\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['name'] : null)) + 
          "</div>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
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


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
    return "<div component=\"category-selector\" class=\"btn-group\">\r\n\t<button type=\"button\" class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\r\n\t\t<i class=\"fa fa-fw fa-lock text-primary\"></i> <span>[[admin/manage/groups:privileges]]</span> <span class=\"caret\"></span>\r\n\t</button>\r\n\t<div component=\"category-selector-search\" class=\"hidden position-absolute\">\r\n\t\t<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\r\n\t</div>\r\n\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu dropdown-menu-end p-1\" role=\"menu\">\r\n\t\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n\t\t\t<a class=\"dropdown-item\" role=\"menuitem\">[[search:no-matches]]</a>\r\n\t\t</li>\r\n\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\">\r\n\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['level'] : null)) + 
          "\r\n\t\t\t\t<span component=\"category-markup\">\r\n\t\t\t\t\t<div class=\"category-item d-inline-block\">\r\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
          "\r\n\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

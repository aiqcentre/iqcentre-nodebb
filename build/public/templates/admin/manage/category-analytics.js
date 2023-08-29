
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
    return "\r\n<div class=\"px-lg-4\">\r\n\r\n\t<div class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\r\n\t\t<div class=\"col-12 px-0 mb-1 mb-md-0 d-flex justify-content-between align-items-center\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/categories:analytics.title, " + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "]]</h4>\r\n\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\r\n<button type=\"button\" class=\"btn-ghost-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\r\n\t<span component=\"category-selector-selected\">\r\n\t\t<span class=\"category-item d-inline-flex align-items-center gap-1\">\r\n\t\t" + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\r\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\r\n\t\t\t" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "\r\n\t\t" :
        "\r\n\t\t<i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i>\r\n\t\t" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread_tools.select_category]]") + 
          "\r\n\t\t") + 
      "\r\n\t\t</span>\r\n\t</span> <span class=\"caret\"></span>\r\n</button>\r\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\r\n\t<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\r\n</div>\r\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu p-1\" role=\"menu\">\r\n\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n\t\t<a class=\"dropdown-item rounded-1\" role=\"menu-item\">[[search:no-matches]]</a>\r\n\t</li>\r\n\t" + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<hr />\r\n\t<div class=\"row \">\r\n\t\t<div class=\"col-sm-6 text-center\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div><canvas id=\"pageviews:hourly\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t<p>\r\n\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-footer\"><small>[[admin/manage/categories:analytics.pageviews-hourly]]</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6 text-center\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div><canvas id=\"pageviews:daily\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t<p>\r\n\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-footer\"><small>[[admin/manage/categories:analytics.pageviews-daily]]</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-6 text-center\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div><canvas id=\"topics:daily\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t<p>\r\n\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-footer\"><small>[[admin/manage/categories:analytics.topics-daily]]</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6 text-center\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div><canvas id=\"posts:daily\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t<p>\r\n\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-footer\"><small>[[admin/manage/categories:analytics.posts-daily]]</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\r\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\r\n\t\t\t<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\r\n\t\t\t\t<div class=\"category-item d-inline-flex align-items-center gap-1\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\r\n\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</a>\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

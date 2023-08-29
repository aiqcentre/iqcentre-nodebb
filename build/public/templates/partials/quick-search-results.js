
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
    return (guard((context != null) ? context['multiplePages'] : null) ?
        "\n<div class=\"show-more-container\">\n\t<div class=\"text-center d-block d-md-none\">\n\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\" class=\"btn btn-primary\">\n\t\t\t[[search:see-more-results, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          "]]\n\t\t</a>\n\t</div>\n\t<li role=\"separator\" class=\"dropdown-divider d-block d-md-none\"></li>\n</div>\n" :
        "") + 
      "\n\n<ul id=\"quick-search-results\" class=\"quick-search-results list-unstyled mb-0 p-0 pe-1 overflow-auto overscroll-behavior-contain ff-base\" style=\"max-width:  400px; max-height: 500px;\">\n\t<li role=\"separator\" class=\"dropdown-divider d-none d-md-block\"></li>\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\n</ul>\n\n" + 
      (guard((context != null) ? context['multiplePages'] : null) ?
        "\n<div class=\"text-center mt-2 d-none d-md-block\">\n\t<a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\" class=\"btn btn-sm btn-primary\">\n\t\t[[search:see-more-results, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          "]]\n\t</a>\n</div>\n" :
        "") + 
      "\n\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n<div class=\"text-center no-results py-2 py-md-0\">[[search:no-matches]]</li>\n<li role=\"separator\" class=\"dropdown-divider d-block d-md-none\"></li>\n");
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li data-tid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tid'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" class=\"d-flex flex-column gap-1\">\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\"\n\t\t\tclass=\"btn-ghost-sm rounded-1 text-reset d-block text-truncate px-2 py-1\">\n\t\t\t<span class=\"quick-search-title fw-semibold text-sm\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</span>\n\t\t\t<br/>\n\t\t\t<p class=\"snippet text-xs text-break text-wrap mb-0\">\n\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['snippet'] : null)) + 
          "\n\t\t\t</p>\n\t\t</a>\n\t\t<div class=\"d-flex gap-1 post-info px-2 text-xs\">\n\t\t\t<div class=\"category-item d-inline-block ff-secondary\">\n\t\t\t\t<span>" + 
          __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null)])) + 
          "</span>\n\t\t\t</div>\n\t\t\t<span class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t</div>\n\t</li>\n\t<li role=\"separator\" class=\"dropdown-divider\"></li>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

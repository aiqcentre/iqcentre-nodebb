
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
    return (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "\n<div class=\"recent-cards-plugin preventSlideout\">\n\t" + 
          (guard((context != null) ? context['title'] : null) ?
            "\n\t<h5>" + 
              __escape(guard((context != null) ? context['title'] : null)) + 
              "</h5>\n\t" :
            "") + 
          "\n\n\t<div class=\"" + 
          (guard((context != null) ? context['carouselMode'] : null) ?
            "d-flex gap-3" :
            "row") + 
          " recent-cards carousel-mode overflow-hidden\" itemscope itemtype=\"http://www.schema.org/ItemList\" " + 
          (guard((context != null) ? context['carouselMode'] : null) ?
            "style=\"\"" :
            "") + 
          ">\n\t\t" + 
          compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
          "\n\t</div>\n</div>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div class=\"" + 
          (guard((context != null) ? context['carouselMode'] : null) ?
            "" :
            "col-lg-3 col-sm-6 col-12 overflow-hidden") + 
          " recent-card-container\" data-cid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['cid'] : null)) + 
          "\">\n\t\t\t<div class=\"recent-card card card-header border rounded mb-2 p-2 position-relative d-inline-flex " + 
          (guard((context != null) ? context['carouselMode'] : null) ?
            "" :
            "w-100") + 
          "\" " + 
          (guard((context != null) ? context['carouselMode'] : null) ?
            "style=\"width: 312px;\"" :
            "") + 
          ">\n\t\t\t\t<div class=\"recent-card-body h-100 overflow-hidden\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h6 class=\"topic-title mt-0 text-truncate\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
            "/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
            "") + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</a></h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div class=\"me-2\">\n\t\t\t\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "24px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
          "</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"topic-info text-sm text-break\">\n\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['content'] : null)) + 
          "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex mt-3 justify-content-between align-items-center gap-2\">\n\t\t\t\t\t<span class=\"category-item text-xs text-truncate\">\n\t\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['icon'] : null) ?
            "\n\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null), "24px", "rounded-circle"])) + 
              "\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t<a class=\"text-muted\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['name'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['name'] : null)) + 
          "</a>\n\t\t\t\t\t</span>\n\n\t\t\t\t\t" + 
          (guard((context != null && context['sorts'] != null) ? context['sorts']['create'] : null) ?
            "\n\t\t\t\t\t<span class=\"text-muted text-xs text-truncate\"><span class=\"sort-info timeago\" title=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null) ?
                __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) :
                "") + 
              "\"></span></span>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['sorts'] != null) ? context['sorts']['recent'] : null) ?
            "\n\t\t\t\t\t<span class=\"text-muted text-xs text-truncate\"><span class=\"sort-info timeago\" title=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['lastposttimeISO'] : null) ?
                __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['lastposttimeISO'] : null)) :
                "") + 
              "\"></span></span>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['sorts'] != null) ? context['sorts']['posts'] : null) ?
            "\n\t\t\t\t\t<span class=\"text-muted text-xs text-truncate\"><span class=\"sort-info\">[[global:x-posts, " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
              "]]</span></span>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['sorts'] != null) ? context['sorts']['votes'] : null) ?
            "\n\t\t\t\t\t<span class=\"text-muted text-xs text-truncate\"><span class=\"sort-info\">[[global:x-votes, " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
              "]]</span></span>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

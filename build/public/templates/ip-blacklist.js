
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb mb-0 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
            "justify-content-center" :
            "") + 
          "\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n\r\n<div class=\"row ip-blacklist\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<p class=\"lead\">\r\n\t\t\t[[ip-blacklist:lead]]\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\t[[ip-blacklist:description]]\r\n\t\t</p>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-6 d-flex flex-column\">\r\n\t\t\t\t<div class=\"card mb-3 flex-grow-1\">\r\n\t\t\t\t\t<div class=\"card-header\">[[ip-blacklist:active-rules]]</div>\r\n\t\t\t\t\t<div class=\"card-body d-flex flex-column\">\r\n\t\t\t\t\t\t<textarea id=\"blacklist-rules\" class=\"flex-grow-1 mb-3 w-100 d-block border px-2 py-1\">" + 
      __escape(guard((context != null) ? context['rules'] : null)) + 
      "</textarea>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" data-action=\"test\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-bomb\"></i> [[ip-blacklist:validate]]\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-action=\"apply\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-save\"></i> [[ip-blacklist:apply]]\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card flex-shrink-1\">\r\n\t\t\t\t\t<div class=\"card-header\">[[ip-blacklist:hints]]</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t[[ip-blacklist:hint-1]]\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t[[ip-blacklist:hint-2]]\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"card mb-3\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div><canvas id=\"blacklist:hourly\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-footer\"><small>[[ip-blacklist:analytics.blacklist-hourly]]</small></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div><canvas id=\"blacklist:daily\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-footer\"><small>[[ip-blacklist:analytics.blacklist-daily]]</small></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n\t\t\t<span class=\"fw-semibold\" itemprop=\"name\">" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "</span>\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

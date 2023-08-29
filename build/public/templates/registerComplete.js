
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
      "\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-12 col-sm-8 offset-sm-2\">\r\n\t\t<p class=\"lead text-center\">\r\n\t\t\t" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:interstitial.intro-new]]" :
        "[[register:interstitial.intro]]") + 
      "\r\n\t\t</p>\r\n\r\n\t\t" + 
      (guard((context != null && context['errors'] != null) ? context['errors']['length'] : null) ?
        "\r\n\t\t<div class=\"alert alert-warning\">\r\n\t\t\t<p>\r\n\t\t\t\t[[register:interstitial.errors-found]]\r\n\t\t\t</p>\r\n\t\t\t<ul>\r\n\t\t\t\t" + 
          compiled.blocks['errors'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n</div>\r\n\r\n<form role=\"form\" method=\"post\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/complete\" enctype=\"multipart/form-data\">\r\n\t<input type=\"hidden\" name=\"csrf_token\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" />\r\n\r\n\t" + 
      compiled.blocks['sections'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-12 col-sm-8 offset-sm-2 d-grid\">\r\n\t\t\t<button class=\"btn btn-primary\">[[topic:composer.submit]]</button>\r\n\t\t\t<button class=\"btn btn-link\" formaction=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/abort\">" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:cancel_registration]]" :
        "[[modules:bootbox.cancel]]") + 
      "</button>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n";
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
    },
    'errors': function errors(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['errors'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li>" + 
          __escape(guard(value)) + 
          "</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sections': function sections(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sections'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"row mb-3\">\r\n\t\t<div class=\"col-12 col-sm-8 offset-sm-2\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t" + 
          __escape(guard(value)) + 
          "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return compiled.blocks['themes'](helpers, context, guard, iter, helper) + 
      "\r\n";
  }

  compiled.blocks = {
    'themes': function themes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['themes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<div class=\"col-lg-4 col-md-6 col-12 mb-4\" data-type=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['type'] : null)) + 
          "\" data-theme-name=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['name'] : null)) + 
          "\" data-theme=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['id'] : null)) + 
          "\"" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['css'] : null) ?
            " data-css=\"" + 
              __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['css'] : null)) + 
              "\" " :
            "") + 
          ">\r\n\t<div class=\"card h-100\">\r\n\t\t<img src=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['screenshot_url'] : null)) + 
          "\" class=\"card-img-top\">\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<h5 class=\"card-title\">" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['name'] : null)) + 
          "</h5>\r\n\t\t\t<p class=\"card-text\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['description'] : null)) + 
          "\r\n\t\t\t</p>\r\n\r\n\t\t\t" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['url'] : null) ?
            "\r\n\t\t\t<p>\r\n\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['url'] : null)) + 
              "\" target=\"_blank\">[[admin/appearance/themes:homepage]]</a>\r\n\t\t\t</p>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</div>\r\n\t\t<div class=\"card-footer\">\r\n\t\t\t<a class=\"btn btn-primary\" data-action=\"use\">\r\n\t\t\t\t" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['skin'] : null) ?
            "[[admin/appearance/skins:select-skin]]" :
            "[[admin/appearance/themes:select-theme]]") + 
          "\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

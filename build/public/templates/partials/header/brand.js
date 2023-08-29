
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
    return ((guard((context != null) ? context['brand:logo'] : null) || guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null)) ?
        "\n<div class=\"container px-md-4 brand-container\">\n\t<div class=\"col-12 d-flex border-bottom pb-3 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
            "justify-content-center" :
            "") + 
          "\">\n\t\t<div component=\"brand/wrapper\" class=\"d-flex align-items-center gap-3 p-2 rounded-1 align-content-stretch \">\n\t\t\t" + 
          (guard((context != null) ? context['brand:logo'] : null) ?
            "\n\t\t\t<a component=\"brand/anchor\" href=\"" + 
              (guard((context != null) ? context['brand:logo:url'] : null) ?
                __escape(guard((context != null) ? context['brand:logo:url'] : null)) :
                __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/") + 
              "\">\n\t\t\t\t<img component=\"brand/logo\" alt=\"" + 
              __escape(guard((context != null) ? context['brand:logo:alt'] : null)) + 
              "\" class=\"" + 
              __escape(guard((context != null) ? context['brand:logo:display'] : null)) + 
              "\" src=\"" + 
              __escape(guard((context != null) ? context['brand:logo'] : null)) + 
              "?" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
              "\" />\n\t\t\t</a>\n\t\t\t" :
            "") + 
          "\n\n\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) ?
            "\n\t\t\t<a component=\"siteTitle\" class=\"text-truncate align-self-stretch align-items-center d-flex\" href=\"" + 
              (guard((context != null) ? context['title:url'] : null) ?
                __escape(guard((context != null) ? context['title:url'] : null)) :
                __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/") + 
              "\">\n\t\t\t\t<h1 class=\"fs-6 fw-bold text-body mb-0\">" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
              "</h1>\n\t\t\t</a>\n\t\t\t" :
            "") + 
          "\n\t\t</div>\n\t\t" + 
          (guard((context != null && context['widgets'] != null && context['widgets']['brand-header'] != null) ? context['widgets']['brand-header']['length'] : null) ?
            "\n\t\t<div data-widget-area=\"brand-header\" class=\"flex-fill gap-3 p-2 align-self-center\">\n\t\t\t" + 
              compiled.blocks['widgets.brand-header'](helpers, context, guard, iter, helper) + 
              "\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t</div>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'widgets.brand-header': function widgetsbrandheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['brand-header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['brand-header'] != null && context['widgets']['brand-header'][key0] != null) ? context['widgets']['brand-header'][key0]['html'] : null) + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

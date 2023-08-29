
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
    return "<div class=\"dropend m-2\" component=\"skinSwitcher\" title=\"[[themes/harmony:skins]]\">\n\t<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link nav-btn position-relative\">\n\t\t<span class=\"justify-content-between w-100\">\n\t\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t\t<span>\n\t\t\t\t\t<i component=\"skinSwitcher/icon\" class=\"fa fa-fw fa-paintbrush\"></i>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"nav-text small visible-open fw-semibold\">[[themes/harmony:skins]]</span>\n\t\t\t</span>\n\t\t</span>\n\t</a>\n\n\t<ul class=\"dropdown-menu p-1 text-sm overflow-auto p-1\">\n\t\t<div class=\"d-flex\">\n\t\t\t<div>\n\t\t\t\t<li class=\"dropdown-header\">Light</li>\n\t\t\t\t<div class=\"d-grid\" style=\"grid-template-columns: 1fr 1fr;\">\n\t\t\t\t\t" + 
      compiled.blocks['bootswatchSkinOptions.light'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<li class=\"dropdown-header\">Dark</li>\n\t\t\t\t" + 
      compiled.blocks['bootswatchSkinOptions.dark'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<hr class=\"my-1\"/>\n\n\t\t<div class=\"d-grid\" style=\"grid-template-columns: 1fr 1fr;\">\n\t\t\t" + 
      compiled.blocks['bootswatchSkinOptions.default'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t" + 
      compiled.blocks['bootswatchSkinOptions.custom'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</ul>\n</div>\n";
  }

  compiled.blocks = {
    'bootswatchSkinOptions.light': function bootswatchSkinOptionslight(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['bootswatchSkinOptions'] != null) ? context['bootswatchSkinOptions']['light'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-item rounded-1\" data-value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['light'] != null && context['bootswatchSkinOptions']['light'][key0] != null) ? context['bootswatchSkinOptions']['light'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['light'] != null && context['bootswatchSkinOptions']['light'][key0] != null) ? context['bootswatchSkinOptions']['light'][key0]['name'] : null)) + 
          " <i class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['light'] != null && context['bootswatchSkinOptions']['light'][key0] != null) ? context['bootswatchSkinOptions']['light'][key0]['selected'] : null) ?
            "" :
            " invisible ") + 
          "\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'bootswatchSkinOptions.dark': function bootswatchSkinOptionsdark(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['bootswatchSkinOptions'] != null) ? context['bootswatchSkinOptions']['dark'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" class=\"dropdown-item rounded-1\" data-value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['dark'] != null && context['bootswatchSkinOptions']['dark'][key0] != null) ? context['bootswatchSkinOptions']['dark'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['dark'] != null && context['bootswatchSkinOptions']['dark'][key0] != null) ? context['bootswatchSkinOptions']['dark'][key0]['name'] : null)) + 
          " <i class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['dark'] != null && context['bootswatchSkinOptions']['dark'][key0] != null) ? context['bootswatchSkinOptions']['dark'][key0]['selected'] : null) ?
            "" :
            " invisible ") + 
          "\"></i></a>\n\t\t\t\t</li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'bootswatchSkinOptions.default': function bootswatchSkinOptionsdefault(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['bootswatchSkinOptions'] != null) ? context['bootswatchSkinOptions']['default'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li>\n\t\t\t\t<a href=\"#\" class=\"dropdown-item rounded-1\" data-value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['default'] != null && context['bootswatchSkinOptions']['default'][key0] != null) ? context['bootswatchSkinOptions']['default'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['default'] != null && context['bootswatchSkinOptions']['default'][key0] != null) ? context['bootswatchSkinOptions']['default'][key0]['name'] : null)) + 
          " <i class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['default'] != null && context['bootswatchSkinOptions']['default'][key0] != null) ? context['bootswatchSkinOptions']['default'][key0]['selected'] : null) ?
            "" :
            " invisible ") + 
          "\"></i></a>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'bootswatchSkinOptions.custom': function bootswatchSkinOptionscustom(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['bootswatchSkinOptions'] != null) ? context['bootswatchSkinOptions']['custom'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li>\n\t\t\t\t<a href=\"#\" class=\"dropdown-item rounded-1\" data-value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['custom'] != null && context['bootswatchSkinOptions']['custom'][key0] != null) ? context['bootswatchSkinOptions']['custom'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['custom'] != null && context['bootswatchSkinOptions']['custom'][key0] != null) ? context['bootswatchSkinOptions']['custom'][key0]['name'] : null)) + 
          " <i class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['custom'] != null && context['bootswatchSkinOptions']['custom'][key0] != null) ? context['bootswatchSkinOptions']['custom'][key0]['selected'] : null) ?
            "" :
            " invisible ") + 
          "\"></i></a>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "<nav component=\"sidebar/left\" class=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['openSidebars'] : null) ?
        "open" :
        "") + 
      " text-dark bg-light sidebar sidebar-left start-0 border-end vh-100 d-none d-lg-flex flex-column justify-content-between sticky-top\">\n\t<ul id=\"main-nav\" class=\"list-unstyled d-flex flex-column w-100 gap-2 mt-2\">\n\t\t" + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\n\t</ul>\n\t<div class=\"w-100\">\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['disableCustomUserSkins'] : null) ?
        "" :
        "\n\t\t<div class=\"dropend m-2\" component=\"skinSwitcher\" title=\"[[themes/harmony:skins]]\">\n\t<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link nav-btn position-relative\">\n\t\t<span class=\"justify-content-between w-100\">\n\t\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t\t<span>\n\t\t\t\t\t<i component=\"skinSwitcher/icon\" class=\"fa fa-fw fa-paintbrush\"></i>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"nav-text small visible-open fw-semibold\">[[themes/harmony:skins]]</span>\n\t\t\t</span>\n\t\t</span>\n\t</a>\n\n\t<ul class=\"dropdown-menu p-1 text-sm overflow-auto p-1\">\n\t\t<div class=\"d-flex\">\n\t\t\t<div>\n\t\t\t\t<li class=\"dropdown-header\">Light</li>\n\t\t\t\t<div class=\"d-grid\" style=\"grid-template-columns: 1fr 1fr;\">\n\t\t\t\t\t" + 
          compiled.blocks['bootswatchSkinOptions.light'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<li class=\"dropdown-header\">Dark</li>\n\t\t\t\t" + 
          compiled.blocks['bootswatchSkinOptions.dark'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<hr class=\"my-1\"/>\n\n\t\t<div class=\"d-grid\" style=\"grid-template-columns: 1fr 1fr;\">\n\t\t\t" + 
          compiled.blocks['bootswatchSkinOptions.default'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t" + 
          compiled.blocks['bootswatchSkinOptions.custom'](helpers, context, guard, iter, helper) + 
          "\n\t\t</div>\n\t</ul>\n</div>\n\n\t\t") + 
      "\n\n\t\t<div class=\"sidebar-toggle m-2 d-none d-lg-block\">\n\t\t\t<a href=\"#\" role=\"button\" component=\"sidebar/toggle\" class=\"nav-btn d-flex gap-2 align-items-center p-2 pointer nav-link w-100 text-nowrap\" title=\"[[themes/harmony:expand]]\">\n\t\t\t\t<i class=\"fa fa-fw fa-angles-right\"></i>\n\t\t\t\t<i class=\"fa fa-fw fa-angles-left\"></i>\n\t\t\t\t<span class=\"nav-text visible-open fw-semibold small lh-1\">[[themes/harmony:collapse]]</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</nav>";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\n\t\t<li class=\"nav-item mx-2 " + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " dropend" :
                "") + 
              "\" title=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['title'] : null)) + 
              "\">\n\t\t\t<a class=\"nav-link nav-btn navigation-link d-flex gap-2 justify-content-between align-items-center " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "dropdown-toggle" :
                "") + 
              "\"\n\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" " :
                " href=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
                  "\"") + 
              " " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null) ?
                "id=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
                  "\"" :
                "") + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['targetBlank'] : null) ?
                " target=\"_blank\"" :
                "") + 
              ">\n\t\t\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t\t\t<span class=\"position-relative\">\n\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
                "\n\t\t\t\t\t\t<i class=\"fa fa-fw " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) + 
                  "\" data-content=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "\"></i>\n\t\t\t\t\t\t<span component=\"navigation/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary " + 
                  (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null) ?
                    "" :
                    "hidden") + 
                  "\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "</span>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t</span>\n\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "\n\t\t\t\t\t<span class=\"nav-text small visible-open fw-semibold text-truncate\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "</span>\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t</span>\n\t\t\t\t<span component=\"navigation/count\" class=\"visible-open badge rounded-1 bg-primary " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null) ?
                "" :
                "hidden") + 
              "\">" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
              "</span>\n\t\t\t</a>\n\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n\t\t\t<ul class=\"dropdown-menu p-1 shadow\">\n\t\t\t\t" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdownContent'] : null)) + 
                  "\n\t\t\t</ul>\n\t\t\t" :
                "") + 
              "\n\t\t</li>\n\t\t" :
            "") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
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

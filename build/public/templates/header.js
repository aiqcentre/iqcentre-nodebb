
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
    return "<!DOCTYPE html>\n<html lang=\"" + 
      __escape(helper(context, helpers, 'localeToHTML', [guard((context != null) ? context['userLang'] : null), guard((context != null) ? context['defaultLang'] : null)])) + 
      "\" " + 
      (guard((context != null) ? context['languageDirection'] : null) ?
        "data-dir=\"" + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          "\" style=\"direction: " + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          ";\"" :
        "") + 
      ">\n<head>\n\t<title>" + 
      __escape(guard((context != null) ? context['browserTitle'] : null)) + 
      "</title>\n\t" + 
      compiled.blocks['metaTags'](helpers, context, guard, iter, helper) + 
      "\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/client" + 
      (guard((context != null) ? context['bootswatchSkin'] : null) ?
        "-" + 
          __escape(guard((context != null) ? context['bootswatchSkin'] : null)) :
        "") + 
      ((guard((context != null) ? context['languageDirection'] : null) == "rtl") ?
        "-rtl" :
        "") + 
      ".css?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\" />\n\t" + 
      compiled.blocks['linkTags'](helpers, context, guard, iter, helper) + 
      "\n\n\t<script>\n\t\tvar config = JSON.parse('" + 
      guard((context != null) ? context['configJSON'] : null) + 
      "');\n\t\tvar app = {\n\t\t\tuser: JSON.parse('" + 
      guard((context != null) ? context['userJSON'] : null) + 
      "')\n\t\t};\n\n\t\tdocument.documentElement.style.setProperty('--panel-offset', `${localStorage.getItem('panelOffset') || 0}px`);\n\t</script>\n\n\t" + 
      (guard((context != null) ? context['useCustomHTML'] : null) ?
        "\n\t" + 
          guard((context != null) ? context['customHTML'] : null) + 
          "\n\t" :
        "") + 
      "\n\t" + 
      (guard((context != null) ? context['useCustomCSS'] : null) ?
        "\n\t<style>" + 
          guard((context != null) ? context['customCSS'] : null) + 
          "</style>\n\t" :
        "") + 
      "\n</head>\n\n<body class=\"" + 
      __escape(guard((context != null) ? context['bodyClass'] : null)) + 
      " skin-" + 
      (guard((context != null) ? context['bootswatchSkin'] : null) ?
        __escape(guard((context != null) ? context['bootswatchSkin'] : null)) :
        "noskin") + 
      "\">\n\t<div class=\"layout-container d-flex justify-content-between pb-4 pb-md-0\">\n\t\t<nav component=\"sidebar/left\" class=\"" + 
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
      "\n\n\t\t<div class=\"sidebar-toggle m-2 d-none d-lg-block\">\n\t\t\t<a href=\"#\" role=\"button\" component=\"sidebar/toggle\" class=\"nav-btn d-flex gap-2 align-items-center p-2 pointer nav-link w-100 text-nowrap\" title=\"[[themes/harmony:expand]]\">\n\t\t\t\t<i class=\"fa fa-fw fa-angles-right\"></i>\n\t\t\t\t<i class=\"fa fa-fw fa-angles-left\"></i>\n\t\t\t\t<span class=\"nav-text visible-open fw-semibold small lh-1\">[[themes/harmony:collapse]]</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</nav>\n\n\t\t<main id=\"panel\" class=\"d-flex flex-column gap-3 flex-grow-1 mt-3\" style=\"min-width: 0;\">\n\t\t\t" + 
      ((guard((context != null) ? context['brand:logo'] : null) || guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null)) ?
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
        "") + 
      "\n\t\t\t<script>\n\t\t\t\tconst headerEl = document.getElementById('header-menu');\n\t\t\t\tif (headerEl) {\n\t\t\t\t\tconst rect = headerEl.getBoundingClientRect();\n\t\t\t\t\tconst offset = Math.max(0, rect.bottom);\n\t\t\t\t\tdocument.documentElement.style.setProperty('--panel-offset', offset + `px`);\n\t\t\t\t} else {\n\t\t\t\t\tdocument.documentElement.style.setProperty('--panel-offset', `0px`);\n\t\t\t\t}\n\t\t\t</script>\n\t\t\t<div class=\"container px-md-4 d-flex flex-column gap-3 h-100 mb-5 mb-lg-0\" id=\"content\">\n\t\t\t<noscript>\r\n    <div class=\"alert alert-danger\">\r\n        <p>\r\n            Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in <strong>read-only mode</strong>.\r\n        </p>\r\n        <p>\r\n            Please download a browser that supports JavaScript, or enable it if it's disabled (i.e. NoScript).\r\n        </p>\r\n    </div>\r\n</noscript>\n\t\t\t" + 
      (guard((context != null) ? context['noScriptMessage'] : null) ?
        "\r\n<noscript>\r\n    <div class=\"alert alert-info\">\r\n        <p>\r\n            " + 
          __escape(guard((context != null) ? context['noScriptMessage'] : null)) + 
          "\r\n        </p>\r\n    </div>\r\n</noscript>\r\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    'metaTags': function metaTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['metaTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildMetaTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'linkTags': function linkTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['linkTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildLinkTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
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
    },
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

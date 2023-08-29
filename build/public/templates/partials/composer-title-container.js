
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
    return "<div class=\"title-container align-items-center gap-2 d-flex\">\n\t" + 
      (guard((context != null) ? context['isTopic'] : null) ?
        "\n\t<div class=\"category-list-container hidden-sm hidden-xs align-self-center\">\n\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\r\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">\n        " + 
          ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
            "\n        <span class=\"category-item d-inline-flex align-items-center gap-1\">\n            " + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
              "\n            <span class=\"fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n        </span>\n        " :
            "\n        <i class=\"fa fa-fw " + 
              (guard((context != null) ? context['selectCategoryIcon'] : null) ?
                __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
                "fa-list") + 
              " text-primary\"></i>\n        <span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              (guard((context != null) ? context['selectCategoryLabel'] : null) ?
                __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
                "[[topic:thread_tools.select_category]]") + 
              "</span>\n        ") + 
          "\n    </span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu p-1 text-sm category-dropdown-menu\" role=\"menu\">\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n        <a class=\"dropdown-item rounded-1\" role=\"menu-item\">[[search:no-matches]]</a>\n    </li>\n    " + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\r\n</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null) ? context['showHandleInput'] : null) ?
        "\n\t<div data-component=\"composer/handle\">\n\t\t<input class=\"handle form-control h-100 border-0 shadow-none\" type=\"text\" tabindex=\"1\" placeholder=\"[[topic:composer.handle_placeholder]]\" value=\"" + 
          __escape(guard((context != null) ? context['handle'] : null)) + 
          "\" />\n\t</div>\n\t" :
        "") + 
      "\n\t<div data-component=\"composer/title\" class=\"position-relative flex-1\" style=\"min-width: 0;\">\n\t\t" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "\n\t\t<input class=\"title form-control h-100 rounded-1 shadow-none\" type=\"text\" tabindex=\"1\" placeholder=\"[[topic:composer.title_placeholder]]\" value=\"" + 
          __escape(guard((context != null) ? context['topicTitle'] : null)) + 
          "\"/>\n\t\t" :
        "\n\t\t<span class=\"d-none d-md-block title h-100 text-truncate\">" + 
          (guard((context != null) ? context['isEditing'] : null) ?
            "[[topic:composer.editing-in, \"" + 
              __escape(guard((context != null) ? context['topicTitle'] : null)) + 
              "\"]]" :
            "[[topic:composer.replying_to, \"" + 
              __escape(guard((context != null) ? context['topicTitle'] : null)) + 
              "\"]]") + 
          "</span>\n\t\t") + 
      "\n\t\t<div id=\"quick-search-container\" class=\"quick-search-container mt-2 dropdown-menu d-block p-2 hidden\">\n\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"d-none d-md-flex action-bar gap-1 align-items-center\">\n\t\t<button class=\"btn btn-sm btn-link text-body fw-semibold composer-minimize\" data-action=\"hide\" tabindex=\"-1\"><i class=\"fa fa-angle-down\"></i> [[topic:composer.hide]]</button>\n\t\t<button class=\"btn btn-sm btn-link composer-discard text-body fw-semibold\" data-action=\"discard\" tabindex=\"-1\"><i class=\"fa fa-trash\"></i> [[topic:composer.discard]]</button>\n\t\t<div class=\"btn-group btn-group-sm\" component=\"composer/submit/container\">\n\t\t\t<button class=\"btn btn-primary composer-submit fw-bold " + 
      ((guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null) || guard((context != null) ? context['canSchedule'] : null)) ?
        "" :
        "rounded-1") + 
      "\" data-action=\"post\" tabindex=\"6\" data-text-variant=\" [[topic:composer.schedule]]\"><i class=\"fa fa-check\"></i> [[topic:composer.submit]]</button>\n\t\t\t<div component=\"composer/submit/options/container\" data-submit-options=\"" + 
      __escape(guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null)) + 
      "\" class=\"btn-group btn-group-sm " + 
      ((guard((context != null && context['submitOptions'] != null) ? context['submitOptions']['length'] : null) || guard((context != null) ? context['canSchedule'] : null)) ?
        "" :
        "hidden") + 
      "\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t<i class=\"fa fa-caret-down\"></i>\n\t\t\t\t\t<span class=\"sr-only\">[[topic:composer.additional-options]]</span>\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1\">\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1 display-scheduler " + 
      (guard((context != null) ? context['canSchedule'] : null) ?
        "" :
        "hidden") + 
      "\">[[topic:composer.post-later]]</a></li>\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1 cancel-scheduling hidden\">[[modules:composer.cancel-scheduling]]</a></li>\n\t\t\t\t\t" + 
      compiled.blocks['submitOptions'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n        <a class=\"dropdown-item rounded-1\" role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n            <span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n                <div class=\"category-item d-inline-flex align-items-center gap-1\">\n                    " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n                    " + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n                    " :
            "") + 
          "\n                    " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n                </div>\n            </span>\n        </a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'submitOptions': function submitOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['submitOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"" + 
          __escape(guard((context != null && context['submitOptions'] != null && context['submitOptions'][key0] != null) ? context['submitOptions'][key0]['action'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['submitOptions'] != null && context['submitOptions'][key0] != null) ? context['submitOptions'][key0]['text'] : null)) + 
          "</a></li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

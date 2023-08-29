
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
    return "<div component=\"composer\" class=\"composer " + 
      (guard((context != null) ? context['resizable'] : null) ?
        " resizable" :
        "") + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "" :
        " reply") + 
      "\">\n\t<div class=\"composer-container d-flex flex-column gap-1 h-100\">\n\t\t<!-- mobile header -->\n\t\t<nav class=\"navbar fixed-top mobile-navbar hidden-md hidden-lg text-bg-primary flex-nowrap gap-1 px-1\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-discard\" data-action=\"discard\" tabindex=\"-1\"><i class=\"fa fa-fw fa-times\"></i></button>\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-minimize\" data-action=\"minimize\" tabindex=\"-1\"><i class=\"fa fa-fw fa-minus\"></i></button>\n\t\t\t</div>\n\t\t\t" + 
      (guard((context != null) ? context['isTopic'] : null) ?
        "\n\t\t\t<div class=\"category-name-container\">\n\t\t\t\t<span class=\"category-name\"></span> <i class=\"fa fa-sort\"></i>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "" :
        "\n\t\t\t<h4 class=\"title text-bg-primary\">" + 
          (guard((context != null) ? context['isEditing'] : null) ?
            "[[topic:composer.editing-in, \"" + 
              __escape(guard((context != null) ? context['topicTitle'] : null)) + 
              "\"]]" :
            "[[topic:composer.replying_to, \"" + 
              __escape(guard((context != null) ? context['topicTitle'] : null)) + 
              "\"]]") + 
          "</h4>\n\t\t\t") + 
      "\n\t\t\t<div class=\"display-scheduler p-2 " + 
      (guard((context != null) ? context['canSchedule'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-submit\" data-action=\"post\" tabindex=\"-1\"><i class=\"fa fa-fw fa-chevron-right\"></i></button>\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class=\"p-2 d-flex flex-column gap-1 h-100\">\n\t\t\t<div class=\"title-container align-items-center gap-2 d-flex\">\n\t" + 
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
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\t\t\t<div class=\"d-flex justify-content-between gap-2 align-items-center formatting-bar\">\n\t<ul class=\"list-unstyled mb-0 d-flex formatting-group gap-2 overflow-auto\">\n\t\t" + 
      compiled.blocks['formatting'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['upload:post:image'] : null) ?
        "\n\t\t<li class=\"img-upload-btn btn btn-sm btn-link text-reset\" data-format=\"picture\" tabindex=\"-1\" title=\"[[modules:composer.upload-picture]]\">\n\t\t\t<i class=\"fa fa-file-image-o\"></i>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['upload:post:file'] : null) ?
        "\n\t\t<li href=\"#\" class=\"file-upload-btn btn btn-sm btn-link text-reset\" data-format=\"upload\" tabindex=\"-1\" title=\"[[modules:composer.upload-file]]\">\n\t\t\t<i class=\"fa fa-file-o\"></i>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\n\t\t<form id=\"fileForm\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<input type=\"file\" id=\"files\" name=\"files[]\" multiple class=\"gte-ie9 hide\"/>\n\t\t</form>\n\t</ul>\n\t<div class=\"d-flex align-items-center gap-1\">\n\t\t<div class=\"draft-icon m-2 hidden-xs hidden-sm\"></div>\n\t\t<button class=\"btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap\" data-action=\"preview\">\n\t\t\t<i class=\"fa fa-eye\"></i>\n\t\t\t<span class=\"d-none d-md-inline show-text\">[[modules:composer.show_preview]]</span>\n\t\t\t<span class=\"d-none d-md-inline hide-text\">[[modules:composer.hide_preview]]</span>\n\t\t</button>\n\t\t" + 
      (guard((context != null) ? context['composer:showHelpTab'] : null) ?
        "\n\t\t<button class=\"btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap\" data-action=\"help\">\n\t\t\t<i class=\"fa fa-question\"></i>\n\t\t\t<span class=\"d-none d-md-inline\">[[modules:composer.help]]</span>\n\t\t</button>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n\n\n\n\t\t\t<div class=\"write-preview-container d-flex gap-2 flex-grow-1 overflow-auto\">\n\t<div class=\"write-container d-flex d-md-flex w-50\">\n\t\t<div class=\"float-end draft-icon hidden-md hidden-lg\"></div>\n\t\t<textarea class=\"write shadow-none rounded-1 w-100 form-control\" tabindex=\"4\" placeholder=\"[[modules:composer.textarea.placeholder]]\">" + 
      __escape(guard((context != null) ? context['body'] : null)) + 
      "</textarea>\n\t</div>\n\t<div class=\"preview-container d-none d-md-flex w-50\">\n\t\t<div class=\"preview card card-body bg-light rounded-1 overflow-auto\"></div>\n\t</div>\n</div>\n\n\t\t\t" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "\n\t\t\t<div class=\"tag-row\">\n\t<div class=\"tags-container d-flex align-items-center " + 
          (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
            "haswhitelist" :
            "") + 
          "\">\n\t\t<div class=\"btn-group dropup me-2 " + 
          (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
            "" :
            "hidden") + 
          "\" component=\"composer/tag/dropdown\">\n\t\t\t<button class=\"btn btn-sm btn-link text-body dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"><i class=\"fa fa-tags\"></i></span>\n\t\t\t\t[[tags:select_tags]]\n\t\t\t</button>\n\n\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t" + 
          compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t\t<input class=\"tags\" type=\"text\" class=\"\" placeholder=\"[[tags:enter_tags_here, " + 
          __escape(guard((context != null) ? context['minimumTagLength'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['maximumTagLength'] : null)) + 
          "]]\" tabindex=\"5\" />\n\t</div>\n</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n\n\t\t\t<div class=\"resizer position-absolute w-100 bottom-100 pe-3 border-bottom\">\n\t\t\t\t<div class=\"trigger text-center\">\n\t\t\t\t\t<div class=\"handle d-inline-block px-2 py-1 border bg-body\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-up-down\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
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
    },
    'formatting': function formatting(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['formatting'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['spacer'] : null) ?
            "\n\t\t\t<li class=\"small spacer\"></li>\n\t\t\t" :
            "\n\t\t\t" + 
              ((guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['desktop'] : null) && ((guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['main'] : null)) || (!guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['reply'] : null)))) ?
                "\n\t\t\t" + 
                  (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null) ? context['formatting'][key0]['dropdownItems']['length'] : null) ?
                    "\n\t\t\t<li class=\"dropdown bottom-sheet\" tabindex=\"-1\">\n\t\t\t\t<button class=\"btn btn-sm btn-link text-reset\" data-bs-toggle=\"dropdown\" title=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n\t\t\t\t\t<i class=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                      "\"></i>\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"dropdown-menu p-1\">\n\t\t\t\t" + 
                      iter(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['dropdownItems'] : null), function each(key1, index, length, value) {
                        var key = key1;
                        return "\n\t\t\t\t\t<li data-format=\"" + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['name'] : null)) + 
                          "\">\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-item rounded-1 position-relative\">\n\t\t\t\t\t\t\t<i class=\"" + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['className'] : null)) + 
                          " text-secondary\"></i> " + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['text'] : null)) + 
                          "\n\t\t\t\t\t\t\t" + 
                          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['badge'] : null) ?
                            "\n\t\t\t\t\t\t\t<span class=\"px-1 position-absolute top-0 start-100 translate-middle-x badge rounded text-bg-info\"></span>\n\t\t\t\t\t\t\t" :
                            "") + 
                          "\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t";
                      }, function alt() {
                        return "";
                      }) + 
                      "\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
                    "\n\t\t\t<li class=\"btn btn-sm btn-link text-reset position-relative\" tabindex=\"-1\" data-format=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['name'] : null)) + 
                      "\" title=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n\t\t\t\t<i class=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                      "\"></i>\n\t\t\t\t" + 
                      (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['badge'] : null) ?
                        "\n\t\t\t\t<span class=\"px-1 position-absolute top-0 start-100 translate-middle-x badge rounded text-bg-info\"></span>\n\t\t\t\t" :
                        "") + 
                      "\n\t\t\t</li>\n\t\t\t") + 
                  "\n\t\t\t" :
                "") + 
              "\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagWhitelist'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li data-tag=\"" + 
          __escape(guard(value)) + 
          "\"><a class=\"dropdown-item\" href=\"#\">" + 
          __escape(guard(value)) + 
          "</a></li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

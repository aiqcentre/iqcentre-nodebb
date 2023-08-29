
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
    return "<div data-widget-area=\"header\">\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"row\">\n\t<div class=\"tag " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n\t\t<div class=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['stickyToolbar'] : null) ?
        "sticky-tools" :
        "") + 
      " mb-3\">\n\t<nav class=\"topic-list-header d-flex flex-nowrap my-2 p-0 border-0 rounded\">\n\t\t<div class=\"d-flex flex-row p-2 text-bg-light gap-1 border rounded w-100 align-items-center\">\n\t\t\t<ul component=\"category/controls\" class=\"d-flex list-unstyled me-auto mb-0 gap-2 align-items-start flex-wrap\">\n\t\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"category/watching/menu\" " + 
              (guard((context != null) ? context['isWatched'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-inbox text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\"> [[category:watching]]</span></span>\n\n\t\t<span component=\"category/notwatching/menu\" " + 
              (guard((context != null) ? context['isNotWatched'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-clock-o text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\"> [[category:not-watching]]</span></span>\n\n\t\t<span component=\"category/ignoring/menu\" " + 
              (guard((context != null) ? context['isIgnored'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-eye-slash text-primary\"></i><span class=\"visible-md-inline visible-lg-inline fw-semibold\"> [[category:ignoring]]</span></span>\n\t</button>\n\n\t<ul class=\"dropdown-menu p-1 text-sm " + 
              (guard((context != null && context['template'] != null) ? context['template']['account/categories'] : null) ?
                "dropdown-menu-end" :
                "") + 
              "\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/watching\" data-state=\"watching\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted fa-inbox\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[category:watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[category:watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isWatched'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted fa-clock-o\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[category:not-watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[category:not-watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isNotWatched'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted fa-eye-slash\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[category:ignoring]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[category:ignoring.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
              (guard((context != null) ? context['isIgnored'] : null) ?
                "fa-check" :
                "") + 
              "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
            "") + 
          "\n\t\t\t\t<div component=\"tag/filter\" class=\"btn-group dropdown dropdown-left bottom-sheet\">\r\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    " + 
          (guard((context != null) ? context['selectedTag'] : null) ?
            "\n    <span class=\"d-inline-flex align-items-center gap-1\">\n        <i class=\"fa fa-fw fa-tags link-primary\"></i>\n        <span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedTag'] != null) ? context['selectedTag']['label'] : null)) + 
              "</span>\n    </span>\n    " :
            "\n    <i class=\"fa fa-fw fa-tags link-primary\"></i>\n    <span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[tags:all-tags]]</span>\n    ") + 
          "\n</button>\n<div component=\"tag/filter/search\" class=\"hidden position-absolute top-0\">\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"tag/filter/list\" class=\"dropdown-menu p-1 text-sm overflow-auto\" role=\"menu\" style=\"max-height: 500px;\">\n    <li role=\"presentation\" data-tag=\"\">\n        <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"#\">\n            <span class=\"flex-grow-1\">[[tags:all-tags]]</span>\n            <i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedTag'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n        </a>\n    </li>\n    " + 
          compiled.blocks['tagItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\r\n</div>\n\t\t\t\t<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n\t\t<span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[topic:sort_by]]</span>\n\t</button>\n\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:newest_to_oldest]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:oldest_to_newest]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_posts\" data-sort=\"most_posts\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:most_posts]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:most_votes]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_views\" data-sort=\"most_views\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:most_views]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t</ul>\n</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      ((guard((context != null && context['template'] != null) ? context['template']['popular'] : null) || guard((context != null && context['template'] != null) ? context['template']['top'] : null)) ?
        "\n\t\t\t\t<div class=\"btn-group bottom-sheet " + 
          (guard((context != null && context['terms'] != null) ? context['terms']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t<i class=\"fa fa-fw fa-clock text-primary\"></i>\n\t\t<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
          __escape(guard((context != null && context['selectedTerm'] != null) ? context['selectedTerm']['name'] : null)) + 
          "</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n\t\t" + 
          compiled.blocks['terms'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      ((guard((context != null && context['template'] != null) ? context['template']['unread'] : null) || (guard((context != null && context['template'] != null) ? context['template']['recent'] : null) || (guard((context != null && context['template'] != null) ? context['template']['popular'] : null) || guard((context != null && context['template'] != null) ? context['template']['top'] : null)))) ?
        "\n\t\t\t\t<div class=\"btn-group bottom-sheet" + 
          (guard((context != null && context['filters'] != null) ? context['filters']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t<i class=\"fa fa-fw fa-filter link-primary\"></i>\n\t\t<span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
          __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['name'] : null)) + 
          "</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n\t\t" + 
          compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n</div>\n\t\t\t\t<div component=\"category/dropdown\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\r\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "\n    <span class=\"category-item d-inline-flex align-items-center gap-1\">\n        " + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "18px", "rounded-circle"])) + 
              "\n        <span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n    </span>\n    " :
            "\n    <i class=\"fa fa-fw fa-list link-primary\"></i>\n    <span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[unread:all_categories]]</span>") + 
          "\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu p-1 text-sm category-dropdown-menu\" role=\"menu\">\n    <li role=\"presentation\" class=\"category\" data-cid=\"all\">\n        <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"" + 
          (guard((context != null) ? context['allCategoriesUrl'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/" + 
              __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) :
            "#") + 
          "\">\n            <div class=\"flex-grow-1\">[[unread:all_categories]]</div>\n            <i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n        </a>\n    </li>\n    " + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\r\n</div>\n\t\t\t\t<div component=\"tag/filter\" class=\"btn-group dropdown dropdown-left bottom-sheet\">\r\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    " + 
          (guard((context != null) ? context['selectedTag'] : null) ?
            "\n    <span class=\"d-inline-flex align-items-center gap-1\">\n        <i class=\"fa fa-fw fa-tags link-primary\"></i>\n        <span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedTag'] != null) ? context['selectedTag']['label'] : null)) + 
              "</span>\n    </span>\n    " :
            "\n    <i class=\"fa fa-fw fa-tags link-primary\"></i>\n    <span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[tags:all-tags]]</span>\n    ") + 
          "\n</button>\n<div component=\"tag/filter/search\" class=\"hidden position-absolute top-0\">\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"tag/filter/list\" class=\"dropdown-menu p-1 text-sm overflow-auto\" role=\"menu\" style=\"max-height: 500px;\">\n    <li role=\"presentation\" data-tag=\"\">\n        <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"#\">\n            <span class=\"flex-grow-1\">[[tags:all-tags]]</span>\n            <i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedTag'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n        </a>\n    </li>\n    " + 
          iter(guard((context != null) ? context['tagItems'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n    <li role=\"presentation\" data-tag=\"" + 
              __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
              "\">\n        <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"#\">\n            <span component=\"tag-markup\" class=\"flex-grow-1\">\n                <div class=\"d-inline-flex align-items-center gap-1\">\n                    " + 
              __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
              "\n                </div>\n            </span>\n            <i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
              (guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['selected'] : null) ?
                "" :
                "invisible") + 
              "\"></i>\n        </a>\n    </li>\n    ";
          }, function alt() {
            return "";
          }) + 
          "\n</ul>\r\n</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['unread'] : null) ?
        "\n\t\t\t\t<div class=\"markread btn-group " + 
          (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\r\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">\n        " + 
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
          iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
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
          }) + 
          "\n</ul>\r\n</div>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['tag'] : null) ?
        "\n\t\t\t\t<div component=\"category/dropdown\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\r\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "\n    <span class=\"category-item d-inline-flex align-items-center gap-1\">\n        " + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "18px", "rounded-circle"])) + 
              "\n        <span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n    </span>\n    " :
            "\n    <i class=\"fa fa-fw fa-list link-primary\"></i>\n    <span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[unread:all_categories]]</span>") + 
          "\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu p-1 text-sm category-dropdown-menu\" role=\"menu\">\n    <li role=\"presentation\" class=\"category\" data-cid=\"all\">\n        <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"" + 
          (guard((context != null) ? context['allCategoriesUrl'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/" + 
              __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) :
            "#") + 
          "\">\n            <div class=\"flex-grow-1\">[[unread:all_categories]]</div>\n            <i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i>\n        </a>\n    </li>\n    " + 
          iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n    <li role=\"presentation\" class=\"category " + 
              (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
                "disabled" :
                "") + 
              "\" data-cid=\"" + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
              "\" data-parent-cid=\"" + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
              "\" data-name=\"" + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
              "\">\n        <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"#\">\n            " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
              "\n            <span component=\"category-markup\" class=\"flex-grow-1\" style=\"" + 
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
              "\n                </div>\n            </span>\n            <i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
              (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
                "" :
                "invisible") + 
              "\"></i>\n        </a>\n    </li>\n    ";
          }, function alt() {
            return "";
          }) + 
          "\n</ul>\r\n</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['showTopicTools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-gear text-primary\"></i>\n\t\t<span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[topic:thread_tools.title]]</span>\n\t\t<span component=\"topic/selected/badge\" class=\"badge rounded-pill bg-secondary\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li>\n\t\t\t<a component=\"topic/mark-unread-for-all\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/pin\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/unpin\" href=\"#\" class=\"hidden dropdown-item rounded-1\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/lock\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-lock\"></i> [[topic:thread_tools.lock]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/unlock\" href=\"#\" class=\"hidden dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-unlock\"></i> [[topic:thread_tools.unlock]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class=\"dropdown-divider\"></li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/move\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-arrows\"></i> [[topic:thread_tools.move]]\n\t\t\t</a>\n\t\t</li>\n\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "\n\t\t<li>\n\t\t\t<a component=\"topic/move-all\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-arrows\"></i> [[topic:thread_tools.move_all]]\n\t\t\t</a>\n\t\t</li>\n\t\t" :
            "") + 
          "\n\t\t<li>\n\t\t\t<a component=\"topic/merge\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-code-fork\"></i> [[topic:thread_tools.merge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/tag\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-tag\"></i> [[topic:thread_tools.tag]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class=\"dropdown-divider\"></li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/delete\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-trash-o\"></i> [[topic:thread_tools.delete]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/restore\" href=\"#\" class=\"hidden dropdown-item rounded-1\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-history\"></i> [[topic:thread_tools.restore]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/purge\" href=\"#\" class=\"hidden dropdown-item rounded-1\">\n\t\t\t\t<i class=\"fa fa-fw text-muted fa-eraser\"></i> [[topic:thread_tools.purge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n</div>\n" :
        "") + 
      "\n\n\t\t\t\t" + 
      ((!guard((context != null) ? context['feeds:disableRSS'] : null) && guard((context != null) ? context['rssFeedUrl'] : null)) ?
        "\n\t\t\t\t<a class=\"btn-ghost-sm d-none d-lg-flex align-self-stretch\" target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
          "\" itemprop=\"item\"><i class=\"fa fa-rss text-primary\"></i></a>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
        __escape(guard((context != null) ? context['url'] : null)) :
        "/" + 
          __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['url'] : null)) + 
          __escape(guard((context != null) ? context['querystring'] : null))) + 
      "\" class=\"btn btn-secondary fw-semibold position-absolute top-100 translate-middle-x start-50 mt-1 hide\" style=\"--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;\" id=\"new-topics-alert\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-arrow-up\"></i> [[recent:load-new-posts]]\n\t\t\t\t</a>\n\t\t\t</ul>\n\n\t\t\t<div class=\"d-flex gap-1 align-items-center\">\n\t\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
        "\n\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null) ?
            "\n\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/compose?cid=" + 
              __escape(guard((context != null) ? context['cid'] : null)) + 
              "\" component=\"category/post\" id=\"new_topic\" class=\"btn btn-primary btn-sm text-nowrap\" data-ajaxify=\"false\" role=\"button\">[[category:new_topic_button]]</a>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" :
        "\n\t\t\t\t\t" + 
          (guard((context != null) ? context['canPost'] : null) ?
            "\n\t\t\t\t\t<noscript><div class=\"dropdown\" component=\"category-selector\"></noscript>\n<button component=\"category/post\" for=\"category-dropdown-check\" class=\"btn btn-primary btn-sm text-nowrap\" id=\"new_topic\" role=\"button\">\n\t[[category:new_topic_button]]\n</button>\n<noscript>\n\t<input type=\"checkbox\" class=\"hidden\" id=\"category-dropdown-check\" aria-hidden=\"true\">\n\t<ul component=\"category/list\" class=\"dropdown-menu p-1 text-sm category-dropdown-menu\" role=\"menu\">\n\t\t" + 
              compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
              "\n\t</ul>\n</div>\n</noscript>\n\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t") + 
      "\n\t\t\t\t<!-- only show login button if not logged in and doesn't have any posting privilege -->\n\t\t\t\t" + 
      ((!guard((context != null) ? context['loggedIn'] : null) && (!guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null) && !guard((context != null) ? context['canPost'] : null))) ?
        "\n\t\t\t\t<a component=\"category/post/guest\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/login\" class=\"btn btn-sm btn-primary\">[[category:guest-login-post]]</a>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n</div>\n\n\t\t<div class=\"category\">\n\t\t\t" + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "" :
        "\n\t\t\t<div class=\"alert alert-warning\">[[tags:no_tag_topics]]</div>\n\t\t\t") + 
      "\n\n\t\t\t<ul component=\"category\" class=\"topics-list list-unstyled\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\" data-set=\"" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "\">\n\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n\n\t\t\t<button id=\"load-more-btn\" class=\"btn btn-primary hide\">[[unread:load_more]]</button>\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n\t\t<li class=\"page-item previous float-start" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
          compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
          "\n\n\t\t<li class=\"page-item next float-end " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
            "" :
            "\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
              "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
              "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
              "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
              "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
              "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n\t") + 
          "\n</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n\n<div data-widget-area=\"footer\">\n\t" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'tagItems': function tagItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" data-tag=\"" + 
          __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
          "\">\n        <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"#\">\n            <span component=\"tag-markup\" class=\"flex-grow-1\">\n                <div class=\"d-inline-flex align-items-center gap-1\">\n                    " + 
          __escape(guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['valueEscaped'] : null)) + 
          "\n                </div>\n            </span>\n            <i component=\"tag/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['tagItems'] != null && context['tagItems'][key0] != null) ? context['tagItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n        </a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'terms': function terms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['terms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li role=\"presentation\" class=\"category\">\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['url'] : null)) + 
          "\">\n\t\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['name'] : null)) + 
          "</div>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['filters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['url'] : null)) + 
          "\">\n\t\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['name'] : null)) + 
          "</div>\n\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n        <a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"#\">\n            " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n            <span component=\"category-markup\" class=\"flex-grow-1\" style=\"" + 
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
          "\n                </div>\n            </span>\n            <i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n        </a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li>\n\t\t\t<a href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\">\n\t\t\t\t<i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i>\n\t\t\t\t" + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\">\n\t\t\t<a role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose?cid=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['level'] : null)) + 
          "\n\t\t\t\t<span component=\"category-markup\">\n\t\t\t\t\t<div class=\"category-item d-inline-block\">\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
          "\n\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li component=\"category/topic\" class=\"category-item border-bottom py-3 py-lg-4 d-flex flex-column flex-lg-row align-items-start " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
          "\" itemprop=\"itemListElement\" itemscope itemtype=\"https://schema.org/ListItem\">\n\t\t<link itemprop=\"url\" content=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\" />\n\t\t<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)])) + 
          "\" />\n\t\t<meta itemprop=\"itemListOrder\" content=\"descending\" />\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" />\n\t\t<a id=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" component=\"topic/anchor\"></a>\n\n\t\t<div class=\"d-flex p-0 col-12 col-lg-7 gap-2 gap-lg-3 pe-1 align-items-start " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
            "mb-2 mb-lg-0" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-shrink-0 position-relative\">\n\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "40px", guard((context != null) ? context['true'] : null), "avatar avatar-tooltip"])) + 
          "\n\t\t\t\t</a>\n\t\t\t\t" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "\n\t\t\t\t<div class=\"checkbox position-absolute top-100 start-50 translate-middle-x pt-2 m-0 d-none d-lg-flex\" style=\"max-width:max-content\">\n\t\t\t\t\t<i component=\"topic/select\" class=\"fa text-muted pointer fa-square-o p-1\"></i>\n\t\t\t\t</div>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1 d-flex flex-wrap gap-1 position-relative\">\n\t\t\t\t<h3 component=\"topic/header\" class=\"title text-break fs-5 fw-semibold m-0 tracking-tight w-100 " + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "me-4 me-lg-0" :
            "") + 
          "\">\n\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
            "\n\t\t\t\t\t<span>" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</span>\n\t\t\t\t\t" :
            "\n\t\t\t\t\t<a class=\"text-reset\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                "") + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</a>\n\t\t\t\t\t") + 
          "\n\t\t\t\t</h3>\n\t\t\t\t<span component=\"topic/labels\" class=\"d-flex flex-wrap gap-1\">\n\t\t\t\t\t<span component=\"topic/scheduled\" class=\"badge border border-gray-300 text-body " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t\t\t\t[[topic:scheduled]]\n\t\t\t\t\t</span>\n\t\t\t\t\t<span component=\"topic/pinned\" class=\"badge border border-gray-300 text-body " + 
          ((guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) || !guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null)) ?
            "hidden" :
            "") + 
          "\">\n\t\t\t\t\t\t<i class=\"fa fa-thumb-tack\"></i>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiry'] : null) ?
            "[[topic:pinned-with-expiry, " + 
              __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiryISO'] : null)])) + 
              "]]" :
            "[[topic:pinned]]") + 
          "\n\t\t\t\t\t</span>\n\t\t\t\t\t<span component=\"topic/locked\" class=\"badge border border-gray-300 text-body " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\n\t\t\t\t\t\t[[topic:locked]]\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"badge border border-gray-300 text-body " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t\t\t\t<i class=\"fa fa-arrow-circle-right\"></i>\n\t\t\t\t\t\t[[topic:moved]]\n\t\t\t\t\t</span>\n\t\t\t\t\t" + 
          iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['icons'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "<span class=\"lh-1\">" + 
              __escape(guard(value)) + 
              "</span>";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "" :
            "\n\t\t\t\t\t<a class=\"lh-1\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['slug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null), "border"])) + 
              "</a>\n\t\t\t\t\t") + 
          "\n\n\t\t\t\t\t<span data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" component=\"topic/tags\" class=\"lh-1 tag-list hidden-xs d-flex flex-wrap gap-1 " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null) ? context['topics'][key0]['tags']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t\t\t\t" + 
          iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tags'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/tags/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEncoded'] : null)) + 
              "\"><span class=\"badge border border-gray-300 fw-normal tag tag-class-" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['class'] : null)) + 
              "\" data-tag=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['value'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEscaped'] : null)) + 
              "</span></a>\n\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\" class=\"hidden-xs badge bg-transparent text-muted fw-normal timeago\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
          "\"></a>\n\t\t\t\t\t" + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
            "" :
            "\n\t\t\t\t\t<span class=\"visible-xs-inline badge bg-transparent text-muted fw-normal timeago\" title=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null) ?
                __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) :
                __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null))) + 
              "\"></span>\n\t\t\t\t\t") + 
          "\n\t\t\t\t</span>\n\t\t\t\t" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "\n\t\t\t\t<div class=\"checkbox position-absolute top-0 end-0 m-0 d-flex d-lg-none\" style=\"max-width:max-content\">\n\t\t\t\t\t<i component=\"topic/select\" class=\"fa fa-square-o text-muted pointer p-1\"></i>\n\t\t\t\t</div>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
            "\n\t\t\t<a class=\"position-relative text-decoration-none flex-shrink-0 d-none d-xl-block\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                "") + 
              "\">\n\t\t\t\t<img class=\"topic-thumb rounded-1 bg-light\" style=\"width:auto;max-width: 5.33rem;height: 3.33rem;object-fit: contain;\" src=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
              "\"/>\n\t\t\t\t<span data-numthumbs=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null)) + 
              "\" class=\"px-1 position-absolute top-0 start-100 translate-middle badge rounded bg-info\" style=\"z-index: 1;\">+" + 
              __escape(helper(context, helpers, 'increment', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null), "-1"])) + 
              "</span>\n\t\t\t</a>\n\t\t\t" :
            "") + 
          "\n\t\t</div>\n\n\t\t<div class=\"d-flex p-0 col-lg-5 col-12 align-content-stretch\">\n\t\t\t<div class=\"meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted\" style=\"grid-template-columns: 1fr 1fr 1fr;\">\n\t\t\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n\t\t\t\t<div class=\"stats-votes card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:votes]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-chevron-up\"></i>\n\t\t\t\t</div>\n\t\t\t\t") + 
          "\n\t\t\t\t<div class=\"stats-postcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:posts]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-message\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"stats-viewcount card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:views]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-eye\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div component=\"topic/teaser\" class=\"meta teaser col-lg-6 col-12 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
            "" :
            "d-none d-lg-block") + 
          "\">\n\t\t\t\t<div class=\"lastpost border-start border-2 lh-sm h-100 d-flex flex-column gap-1\" style=\"border-color: " + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['bgColor'] : null)) + 
          "!important;\">\n\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
            "\n\t\t\t\t\t<div class=\"ps-2 text-xs\">\n\t\t\t\t\t\t[[category:no_replies]]\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
            "\n\t\t\t\t\t" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['pid'] : null) ?
                "\n\t\t\t\t\t<div class=\"ps-2\">\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) + 
                  "\" class=\"text-decoration-none\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "18px", guard((context != null) ? context['true'] : null), "avatar-tooltip not-responsive"])) + 
                  "</a>\n\t\t\t\t\t\t<a class=\"permalink text-muted timeago text-xs\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                  "\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                  "\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"post-content text-xs ps-2 line-clamp-sm-2 lh-sm text-break position-relative flex-fill\">\n\t\t\t\t\t\t<a class=\"stretched-link\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                  "\"></a>\n\t\t\t\t\t\t" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['content'] : null)) + 
                  "\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t") + 
          "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "<div class=\"" + 
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
      "\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n</div>";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})

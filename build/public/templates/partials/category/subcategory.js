
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
    return (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
        "\n<div class=\"subcategory\">\n\t" + 
          (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
            "\n\t<div class=\"mb-2\"><div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\r\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">\n        " + 
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
              "\n</ul>\r\n</div></div>\n\t" :
            "\n\t<h3 class=\"fs-6 fw-semibold\">[[category:subcategories]]</h3>\n\t") + 
          "\n\n\t<ul component=\"category/subcategory/container\" class=\"categories-list list-unstyled\" itemscope itemtype=\"http://www.schema.org/ItemList\">\n\t\t<hr class=\"text-muted\"/>\n\t\t" + 
          compiled.blocks['children'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n\t" + 
          (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
            "\n\t<button class=\"btn-ghost-sm mb-2\" component=\"category/load-more-subcategories\">[[category:x-more-categories, " + 
              __escape(guard((context != null) ? context['subCategoriesLeft'] : null)) + 
              "]]</button>\n\t" :
            "") + 
          "\n</div>\n" :
        "");
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
    'children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['children'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
          "\" class=\"w-100 border-bottom py-3 py-lg-4 gap-lg-0 gap-2 d-flex flex-column flex-lg-row align-items-start category-" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
          " " + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['unread-class'] : null)) + 
          "\">\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
          "\">\n\n\t<div class=\"d-flex col-lg-7 gap-2 gap-lg-3\">\n\t\t<div class=\"flex-shrink-0\">\n\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "40px", "rounded-1"])) + 
          "\n\t\t</div>\n\t\t<div class=\"flex-grow-1 d-flex flex-wrap gap-1\">\n\t\t\t<h2 class=\"title text-break fs-4 fw-semibold m-0 tracking-tight w-100\">\n\t\t\t\t" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "\n" :
            "\n<a class=\"text-reset\" href=\"" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) :
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null))) + 
              "\" itemprop=\"url\">" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "</a>\n") + 
          "\n\t\t\t</h2>\n\t\t\t" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['descriptionParsed'] : null) ?
            "\n\t\t\t<div class=\"description text-muted text-sm w-100\">\n\t\t\t\t" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['descriptionParsed'] : null)) + 
              "\n\t\t\t</div>\n\t\t\t" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\n\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null) ? context['children'][key0]['children']['length'] : null) ?
                "\n\t\t\t<div class=\"category-children row row-cols-2 g-2 my-1 w-100\">\n\t\t\t\t" + 
                  iter(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['children'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n\t\t\t\t" + 
                      (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['isSection'] : null) ?
                        "" :
                        "\n\t\t\t\t<span class=\"category-children-item small\">\n\t\t\t\t\t" + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['link'] : null) ?
                            "\n\t\t\t\t\t<div class=\"d-flex align-items-start gap-1\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-caret-right text-primary mt-1\"></i>\n\t\t\t\t\t\t<a href=\"" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['link'] : null)) + 
                              "\" class=\"text-reset fw-semibold\">" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['name'] : null)) + 
                              "</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
                            "\n\t\t\t\t\t<div class=\"d-flex align-items-start gap-1\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-caret-right text-primary mt-1\"></i>\n\t\t\t\t\t\t<a href=\"" + 
                              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/category/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['slug'] : null)) + 
                              "\" class=\"text-reset fw-semibold\">" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['name'] : null)) + 
                              "</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t") + 
                          "\n\t\t\t\t</span>\n\t\t\t\t") + 
                      "\n\t\t\t\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n\t\t\t</div>\n\t\t\t" :
                "") + 
              "\n\t\t\t") + 
          "\n\t\t</div>\n\t</div>\n\t" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
            "" :
            "\n\t\t<div class=\"d-flex col-lg-5 col-12 align-content-stretch\">\n\t\t\t<div class=\"meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted\" style=\"grid-template-columns: 1fr 1fr;\">\n\t\t\t\t<div class=\"card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:topics]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-list\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:posts]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-message\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t" + 
              (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
                "" :
                "\n\t\t\t<div component=\"topic/teaser\" class=\"teaser col-lg-6 col-12 " + 
                  (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
                    "" :
                    "d-none d-lg-block") + 
                  "\">\n\t\t\t\t<div class=\"lastpost border-start border-2 lh-sm h-100\" style=\"border-color: " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['bgColor'] : null)) + 
                  "!important;\">\n\t" + 
                  iter(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['posts'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n\t" + 
                      (index === 0 ?
                        "\n\t<div component=\"category/posts\" class=\"ps-2 text-xs d-flex flex-column h-100 gap-1\">\n\t\t<div class=\"text-nowrap text-truncate\">\n\t\t\t<a class=\"text-decoration-none\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['user'] : null), "18px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
                          "</a>\n\t\t\t<a class=\"permalink text-muted\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">\n\t\t\t\t<span class=\"timeago text-xs\" title=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"post-content text-xs text-break line-clamp-sm-2 lh-sm position-relative flex-fill\">\n\t\t\t<a class=\"stretched-link\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\"></a>\n\t\t\t" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['content'] : null)) + 
                          "\n\t\t</div>\n\t</div>\n\t" :
                        "") + 
                      "\n\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n\n\t" + 
                  (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null) ? context['children'][key0]['posts']['length'] : null) ?
                    "" :
                    "\n\t<div component=\"category/posts\" class=\"ps-2\">\n\t\t<div class=\"post-content overflow-hidden text-xs\">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t") + 
                  "\n</div>\n\n\t\t\t</div>\n\t\t\t") + 
              "\n\t\t</div>\n\t") + 
          "\n</li>\n\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

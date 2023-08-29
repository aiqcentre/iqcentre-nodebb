
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" class=\"w-100 border-bottom py-3 py-lg-4 gap-lg-0 gap-2 d-flex flex-column flex-lg-row align-items-start category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      " " + 
      __escape(guard((context != null) ? context['unread-class'] : null)) + 
      "\">\n\t<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n\n\t<div class=\"d-flex col-lg-7 gap-2 gap-lg-3\">\n\t\t<div class=\"flex-shrink-0\">\n\t\t" + 
      __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "40px", "rounded-1"])) + 
      "\n\t\t</div>\n\t\t<div class=\"flex-grow-1 d-flex flex-wrap gap-1\">\n\t\t\t<h2 class=\"title text-break fs-4 fw-semibold m-0 tracking-tight w-100\">\n\t\t\t\t" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n<a class=\"text-reset\" href=\"" + 
          (guard((context != null) ? context['link'] : null) ?
            __escape(guard((context != null) ? context['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null))) + 
          "\" itemprop=\"url\">" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</a>\n") + 
      "\n\t\t\t</h2>\n\t\t\t" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n\t\t\t<div class=\"description text-muted text-sm w-100\">\n\t\t\t\t" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
        "" :
        "\n\t\t\t" + 
          (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
            "\n\t\t\t<div class=\"category-children row row-cols-2 g-2 my-1 w-100\">\n\t\t\t\t" + 
              compiled.blocks['./children'](helpers, context, guard, iter, helper) + 
              "\n\t\t\t</div>\n\t\t\t" :
            "") + 
          "\n\t\t\t") + 
      "\n\t\t</div>\n\t</div>\n\t" + 
      (guard((context != null) ? context['link'] : null) ?
        "" :
        "\n\t\t<div class=\"d-flex col-lg-5 col-12 align-content-stretch\">\n\t\t\t<div class=\"meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted\" style=\"grid-template-columns: 1fr 1fr;\">\n\t\t\t\t<div class=\"card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['totalTopicCount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:topics]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-list\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['totalPostCount'] : null), guard((context != null) ? context['0'] : null)])) + 
          "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:posts]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-message\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "" :
            "\n\t\t\t<div component=\"topic/teaser\" class=\"teaser col-lg-6 col-12 " + 
              (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
                "" :
                "d-none d-lg-block") + 
              "\">\n\t\t\t\t<div class=\"lastpost border-start border-2 lh-sm h-100\" style=\"border-color: " + 
              __escape(guard((context != null) ? context['bgColor'] : null)) + 
              "!important;\">\n\t" + 
              compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
              "\n\n\t" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
                "" :
                "\n\t<div component=\"category/posts\" class=\"ps-2\">\n\t\t<div class=\"post-content overflow-hidden text-xs\">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t") + 
              "\n</div>\n\n\t\t\t</div>\n\t\t\t") + 
          "\n\t\t</div>\n\t") + 
      "\n</li>\n";
  }

  compiled.blocks = {
    './children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['children'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['isSection'] : null) ?
            "" :
            "\n\t\t\t\t<span class=\"category-children-item small\">\n\t\t\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "\n\t\t\t\t\t<div class=\"d-flex align-items-start gap-1\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-caret-right text-primary mt-1\"></i>\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) + 
                  "\" class=\"text-reset fw-semibold\">" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
                  "</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
                "\n\t\t\t\t\t<div class=\"d-flex align-items-start gap-1\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-caret-right text-primary mt-1\"></i>\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null)) + 
                  "\" class=\"text-reset fw-semibold\">" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
                  "</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t") + 
              "\n\t\t\t\t</span>\n\t\t\t\t") + 
          "\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    './posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (index === 0 ?
            "\n\t<div component=\"category/posts\" class=\"ps-2 text-xs d-flex flex-column h-100 gap-1\">\n\t\t<div class=\"text-nowrap text-truncate\">\n\t\t\t<a class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "18px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
              "</a>\n\t\t\t<a class=\"permalink text-muted\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\">\n\t\t\t\t<span class=\"timeago text-xs\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"post-content text-xs text-break line-clamp-sm-2 lh-sm position-relative flex-fill\">\n\t\t\t<a class=\"stretched-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\"></a>\n\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n\t\t</div>\n\t</div>\n\t" :
            "") + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

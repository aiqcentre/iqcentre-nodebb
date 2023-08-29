
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
    return "<div class=\"category\">\n\t<ul component=\"category\" class=\"topics-list list-unstyled\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\" data-set=\"" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "\">\n\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n\n</div>\n";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})

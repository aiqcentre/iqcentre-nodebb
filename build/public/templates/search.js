
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
    return "<div class=\"search\">\n\t<div id=\"advanced-search\" class=\"d-flex flex-column flex-md-row\">\n\t\t<!-- sidebar -->\n\t\t<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3\" style=\"flex-basis: 240px!important;\">\n\t\t\t<form action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/search\" method=\"get\" class=\"nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-3 pe-md-3\" style=\"top: 1rem; z-index: 1;\">\n\t\t\t\t<h2 class=\"fw-semibold tracking-tight mb-0\">[[global:search]]</h2>\n\n\t\t\t\t<input id=\"search-input\" name=\"term\" type=\"text\" class=\"form-control fw-semibold py-2 ps-2 pe-3\" id=\"search-input\" placeholder=\"[[search:type-to-search]]\">\n\n\t\t\t\t<select id=\"search-in\" name=\"in\" class=\"form-select text-sm py-2 ps-2 pe-3\">\n\t\t\t\t\t<option value=\"titlesposts\">[[search:in-titles-posts]]</option>\n\t\t\t\t\t<option value=\"titles\">[[search:in-titles]]</option>\n\t\t\t\t\t<option value=\"posts\">[[search:in-posts]]</option>\n\t\t\t\t\t<option value=\"categories\">[[search:in-categories]]</option>\n\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:users'] : null) ?
        "\n\t\t\t\t\t<option value=\"users\">[[search:in-users]]</option>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:tags'] : null) ?
        "\n\t\t\t\t\t<option value=\"tags\">[[search:in-tags]]</option>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</select>\n\n\t\t\t\t<select id=\"match-words-filter\" name=\"matchWords\" class=\"post-search-item form-select text-sm py-2 ps-2 pe-3\">\n\t\t\t\t\t<option value=\"all\">[[search:match-all-words]]</option>\n\t\t\t\t\t<option value=\"any\">[[search:match-any-word]]</option>\n\t\t\t\t</select>\n\n\t\t\t\t<select id=\"show-results-as\" name=\"showAs\" class=\"post-search-item form-select text-sm py-2 ps-2 pe-3\">\n\t\t\t\t\t<option value=\"posts\" selected>[[search:show-results-as-posts]]</option>\n\t\t\t\t\t<option value=\"topics\">[[search:show-results-as-topics]]</option>\n\t\t\t\t</select>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary fw-semibold form-control py-2 px-3\">[[global:search]]</button>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<!-- filters and search results -->\n\t\t<div class=\"flex-grow-1 ps-md-2 ps-lg-5\" style=\"min-width:0;\">\n\t\t\t<div class=\"d-flex flex-column gap-3\">\n\t\t\t\t<div class=\"d-flex flex-wrap gap-2 align-items-center\" component=\"search/filters\">\n\t<!-- category filter -->\n\t<div class=\"post-search-item\">\n\t\t<div component=\"category/filter\" class=\"dropdown\" data-filter-name=\"category\">\n\t\t\t<a component=\"category/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['label'] : null)) :
        "[[search:categories]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t\t\t<li class=\"px-3 py-1 mb-2 d-flex flex-column gap-2\">\n\t\t\t\t\t<div component=\"category-selector-search\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"category/filter/search\" placeholder=\"[[search:type-a-category]]\">\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<div component=\"category/list\" class=\"overflow-auto\" style=\"max-height: 350px;\"></div>\n\t\t\t\t<div class=\"px-3 py-1\">\n\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t<input id=\"search-children\" class=\"form-check-input\" type=\"checkbox\"/>\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"search-children\">[[search:search-child-categories]]</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\n\t<!-- tag filter -->\n\t<div class=\"post-search-item\">\n\t\t<div component=\"tag/filter\" class=\"dropdown\" data-filter-name=\"tag\">\n\t\t\t<a component=\"tag/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['label'] : null)) :
        "[[search:tags]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"tag/filter/search\" placeholder=\"[[search:type-a-tag]]\">\n\t\t\t\t\t<div component=\"tag/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t" + 
      compiled.blocks['tagFilterSelected'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<div component=\"tag/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t" + 
      compiled.blocks['tagFilterResults'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- user name filter -->\n\t<div class=\"post-search-item\">\n\t\t<div component=\"user/filter\" class=\"dropdown\" data-filter-name=\"user\">\n\t\t\t<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['label'] : null)) :
        "[[search:posted-by]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n\t\t\t\t\t<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t" + 
      compiled.blocks['userFilterSelected'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t\t" + 
      compiled.blocks['userFilterResults'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\n\t<!-- reply count filter -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\" data-filter-name=\"replies\">\n\t\t\t<a id=\"reply-count-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['label'] : null)) :
        "[[search:replies]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-nowrap gap-2\">\n\t\t\t\t\t<select id=\"reply-count-filter\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"atleast\">[[search:at-least]]</option>\n\t\t\t\t\t\t<option value=\"atmost\">[[search:at-most]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<input id=\"reply-count\" type=\"number\" min=\"0\" class=\"form-control py-2 ps-2 pe-3\" />\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- time filter -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\" data-filter-name=\"time\">\n\t\t\t<a id=\"post-time-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['label'] : null)) :
        "[[search:time]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-nowrap gap-2\">\n\t\t\t\t\t<select id=\"post-time-filter\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"newer\">[[search:newer-than]]</option>\n\t\t\t\t\t\t<option value=\"older\">[[search:older-than]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<select id=\"post-time-range\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"\">[[search:any-date]]</option>\n\t\t\t\t\t\t<option value=\"86400\">[[search:yesterday]]</option>\n\t\t\t\t\t\t<option value=\"604800\">[[search:one-week]]</option>\n\t\t\t\t\t\t<option value=\"1209600\">[[search:two-weeks]]</option>\n\t\t\t\t\t\t<option value=\"2592000\">[[search:one-month]]</option>\n\t\t\t\t\t\t<option value=\"7776000\">[[search:three-months]]</option>\n\t\t\t\t\t\t<option value=\"15552000\">[[search:six-months]]</option>\n\t\t\t\t\t\t<option value=\"31104000\">[[search:one-year]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- sort filter -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\" data-filter-name=\"sort\">\n\t\t\t<a id=\"sort-by-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['label'] : null)) :
        "[[search:sort]]") + 
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 250px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<select id=\"post-sort-by\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"relevance\">[[search:relevance]]</option>\n\t\t\t\t\t\t<option value=\"timestamp\">[[search:post-time]]</option>\n\t\t\t\t\t\t<option value=\"votes\">[[search:votes]]</option>\n\t\t\t\t\t\t<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n\t\t\t\t\t\t<option value=\"topic.title\">[[search:topic-title]]</option>\n\t\t\t\t\t\t<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n\t\t\t\t\t\t<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n\t\t\t\t\t\t<option value=\"topic.votes\">[[search:topic-votes]]</option>\n\t\t\t\t\t\t<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n\t\t\t\t\t\t<option value=\"user.username\">[[search:username]]</option>\n\t\t\t\t\t\t<option value=\"category.name\">[[search:category]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<select id=\"post-sort-direction\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"desc\">[[search:descending]]</option>\n\t\t\t\t\t\t<option value=\"asc\">[[search:ascending]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- save & reset preferences -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\">\n\t\t\t<a class=\"btn btn-light btn-sm border border-gray-300 dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">[[search:save]] <span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<button id=\"save-preferences\" class=\"btn btn-primary\">[[search:save-preferences]]</button>\n\t\t\t\t\t<button id=\"clear-preferences\" class=\"btn-outline border\">[[search:clear-preferences]]</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\t\t\t\t" + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "\n<div class=\"card card-header text-xs px-2 py-1 fw-semibold border-0 align-self-start\">[[search:results_matching, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['search_query'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['time'] : null)) + 
          "]] </div>\n" :
        "\n" + 
          (guard((context != null) ? context['search_query'] : null) ?
            "\n<div class=\"badge text-bg-warning align-self-start\">[[search:no-matches]]</div>\n" :
            "") + 
          "\n") + 
      "\n\n<div id=\"results\" class=\"search-results\" data-search-query=\"" + 
      __escape(guard((context != null) ? context['search_query'] : null)) + 
      "\">\n\t" + 
      (guard((context != null) ? context['showAsPosts'] : null) ?
        "\n\t" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
            "\n\t<ul component=\"posts\" class=\"posts-list list-unstyled\" data-nextstart=\"" + 
              __escape(guard((context != null) ? context['nextStart'] : null)) + 
              "\">\n\t" + 
              compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
              "\n</ul>\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\n\t<i class=\"fa fa-refresh fa-spin\"></i>\n</div>\n\t" :
            "") + 
          "\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null) ? context['showAsTopics'] : null) ?
        "\n\t" + 
          iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t<hr/>\n\t<div class=\"topic-row  mb-3\">\n\t\t<a class=\"topic-title fw-semibold fs-5 text-reset text-break\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/post/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
              "\">\n\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
                "" :
                "RE: ") + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
              "\n\t\t</a>\n\t\t<div class=\"post-body d-flex flex-column gap-1\">\n\t\t\t<div class=\"d-flex gap-3 post-info\">\n\t\t\t\t<div class=\"post-author d-flex gap-1\">\n\t\t\t\t\t<a class=\"lh-1 text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              "</a>\n\t\t\t\t\t<a class=\"fw-semibold text-sm\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
              "</a>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"timeago text-sm text-muted\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n\t<div id=\"users-container\" class=\"users-container row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-4\">\n" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n</div>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "\n\t<div class=\"tag-list row row-cols-2 row-cols-lg-3 row-cols-xl-4 gx-3 gy-2\">\n\t" + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\n\t</div>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['categories'] != null) ? context['categories']['length'] : null) ?
        "\n\t<ul class=\"categories list-unstyled\">\n\t\t" + 
          compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n\t" :
        "") + 
      "\n\n\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
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
      "\n</div>\n</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'tagFilterSelected': function tagFilterSelected(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagFilterSelected'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t\t<div>" + 
          __escape(guard((context != null && context['tagFilterSelected'] != null && context['tagFilterSelected'][key0] != null) ? context['tagFilterSelected'][key0]['valueEscaped'] : null)) + 
          "</div>\n\t\t\t\t\t\t\t<button component=\"tag/filter/delete\" data-tag=\"" + 
          __escape(guard((context != null && context['tagFilterSelected'] != null && context['tagFilterSelected'][key0] != null) ? context['tagFilterSelected'][key0]['valueEscaped'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'tagFilterResults': function tagFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<button class=\"btn btn-light btn-sm border\" data-tag=\"" + 
          __escape(guard((context != null && context['tagFilterResults'] != null && context['tagFilterResults'][key0] != null) ? context['tagFilterResults'][key0]['valueEscaped'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tagFilterResults'] != null && context['tagFilterResults'][key0] != null) ? context['tagFilterResults'][key0]['valueEscaped'] : null)) + 
          "</button>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'userFilterSelected': function userFilterSelected(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterSelected'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterSelected'] != null && context['userFilterSelected'][key0] != null) ? context['userFilterSelected'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t\t<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterSelected'] != null && context['userFilterSelected'][key0] != null) ? context['userFilterSelected'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'userFilterResults': function userFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<hr/>\n<a class=\"topic-title fw-semibold fs-5 mb-3 text-reset text-break\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\n    " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "<i class=\"fa fa-book text-muted\" title=\"[[topic:topic]]\"></i> " :
            "") + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "\n</a>\n<li component=\"post\" class=\"posts-list-item  " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"post-body d-flex flex-column gap-1\">\n        <div class=\"d-flex gap-3 post-info\">\n            <div class=\"post-author d-flex align-items-center gap-1\">\n                <a class=\"lh-1 text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          "</a>\n                <a class=\"fw-semibold text-sm\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a>\n            </div>\n            <span class=\"timeago text-sm text-muted\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n        </div>\n\n        <div component=\"post/content\" class=\"content text-sm text-break\">\n            " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n        </div>\n    </div>\n</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\" class=\"btn-ghost align-items-start justify-content-start p-2 ff-base\">\n\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "48px", guard((context != null) ? context['true'] : null), "flex-shrink-0"])) + 
          "\n\t<div class=\"d-flex flex-column text-truncate\">\n\t\t<div class=\"fw-semibold text-truncate\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "</div>\n\t\t<div class=\"text-xs text-muted text-truncate\">@" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</div>\n\n\t\t" + 
          (guard((context != null) ? context['section_online'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t</div>\n</a>\n";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\" class=\"btn-ghost flex-column gap-0 align-items-start justify-content-start text-truncate p-2 ff-base\">\n\t<div class=\"fw-semibold text-nowrap tag-item w-100 text-truncate\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</div>\n\t<div class=\"text-xs text-muted text-nowrap tag-topic-count\">[[global:x-topics, " + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)])) + 
          "]]</div>\n</a>\n";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" class=\"w-100 border-bottom py-3 py-lg-4 gap-lg-0 gap-2 d-flex flex-column flex-lg-row align-items-start category-" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          " " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['unread-class'] : null)) + 
          "\">\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\n\n\t<div class=\"d-flex col-lg-7 gap-2 gap-lg-3\">\n\t\t<div class=\"flex-shrink-0\">\n\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "40px", "rounded-1"])) + 
          "\n\t\t</div>\n\t\t<div class=\"flex-grow-1 d-flex flex-wrap gap-1\">\n\t\t\t<h2 class=\"title text-break fs-4 fw-semibold m-0 tracking-tight w-100\">\n\t\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n" :
            "\n<a class=\"text-reset\" href=\"" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) :
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null))) + 
              "\" itemprop=\"url\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "</a>\n") + 
          "\n\t\t\t</h2>\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\n\t\t\t<div class=\"description text-muted text-sm w-100\">\n\t\t\t\t" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "\n\t\t\t</div>\n\t\t\t" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\n\t\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null) ? context['categories'][key0]['children']['length'] : null) ?
                "\n\t\t\t<div class=\"category-children row row-cols-2 g-2 my-1 w-100\">\n\t\t\t\t" + 
                  iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['children'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n\t\t\t\t" + 
                      (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['isSection'] : null) ?
                        "" :
                        "\n\t\t\t\t<span class=\"category-children-item small\">\n\t\t\t\t\t" + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['link'] : null) ?
                            "\n\t\t\t\t\t<div class=\"d-flex align-items-start gap-1\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-caret-right text-primary mt-1\"></i>\n\t\t\t\t\t\t<a href=\"" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['link'] : null)) + 
                              "\" class=\"text-reset fw-semibold\">" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
                              "</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
                            "\n\t\t\t\t\t<div class=\"d-flex align-items-start gap-1\">\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-caret-right text-primary mt-1\"></i>\n\t\t\t\t\t\t<a href=\"" + 
                              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/category/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['slug'] : null)) + 
                              "\" class=\"text-reset fw-semibold\">" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
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
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            "" :
            "\n\t\t<div class=\"d-flex col-lg-5 col-12 align-content-stretch\">\n\t\t\t<div class=\"meta stats d-none d-lg-grid col-6 gap-1 pe-2 text-muted\" style=\"grid-template-columns: 1fr 1fr;\">\n\t\t\t\t<div class=\"card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:topics]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-list\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card card-header border-0 p-2 overflow-hidden rounded-1 d-flex flex-column align-items-center\">\n\t\t\t\t\t<span class=\"fs-5 ff-secondary lh-1\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null), guard((context != null) ? context['0'] : null)])) + 
              "</span>\n\t\t\t\t\t<span class=\"d-none d-xl-flex text-lowercase text-xs\">[[global:posts]]</span>\n\t\t\t\t\t<i class=\"d-xl-none fa fa-fw text-xs text-muted opacity-75 fa-message\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t" + 
              (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
                "" :
                "\n\t\t\t<div component=\"topic/teaser\" class=\"teaser col-lg-6 col-12 " + 
                  (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['mobileTopicTeasers'] : null) ?
                    "" :
                    "d-none d-lg-block") + 
                  "\">\n\t\t\t\t<div class=\"lastpost border-start border-2 lh-sm h-100\" style=\"border-color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['bgColor'] : null)) + 
                  "!important;\">\n\t" + 
                  iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['posts'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n\t" + 
                      (index === 0 ?
                        "\n\t<div component=\"category/posts\" class=\"ps-2 text-xs d-flex flex-column h-100 gap-1\">\n\t\t<div class=\"text-nowrap text-truncate\">\n\t\t\t<a class=\"text-decoration-none\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['user'] : null), "18px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
                          "</a>\n\t\t\t<a class=\"permalink text-muted\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">\n\t\t\t\t<span class=\"timeago text-xs\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"post-content text-xs text-break line-clamp-sm-2 lh-sm position-relative flex-fill\">\n\t\t\t<a class=\"stretched-link\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\"></a>\n\t\t\t" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['content'] : null)) + 
                          "\n\t\t</div>\n\t</div>\n\t" :
                        "") + 
                      "\n\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n\n\t" + 
                  (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null) ? context['categories'][key0]['posts']['length'] : null) ?
                    "" :
                    "\n\t<div component=\"category/posts\" class=\"ps-2\">\n\t\t<div class=\"post-content overflow-hidden text-xs\">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t") + 
                  "\n</div>\n\n\t\t\t</div>\n\t\t\t") + 
              "\n\t\t</div>\n\t") + 
          "\n</li>\n\n\t\t";
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
    }
  };

  return compiled;
})

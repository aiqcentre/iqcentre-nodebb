
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb mb-0 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
            "justify-content-center" :
            "") + 
          "\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n<div class=\"d-flex flex-column gap-3\">\n\t<div component=\"flags/filters\" class=\"d-flex flex-wrap gap-2 pb-3 border-bottom\">\n\t<div class=\"btn-group bottom-sheet\">\n\t\t<a class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['quick'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null) ? context['filters']['quick'] : null) ?
        "[[flags:filter-quick-" + 
          __escape(guard((context != null && context['filters'] != null) ? context['filters']['quick'] : null)) + 
          "]]" :
        "[[flags:quick-filters]]") + 
      "</span>\n\t\t\t<span class=\"caret\"></span>\n\t\t</a>\n\t\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/flags?quick=mine\">[[flags:filter-quick-mine]]</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\n\t<div component=\"category/dropdown\" class=\"btn-group category-dropdown-container bottom-sheet\">\n\t\t<button type=\"button\" class=\"filter-btn btn btn-light btn-sm border d-flex gap-2 dropdown-toggle " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['cid'] : null) ?
        "active-filter" :
        "") + 
      "\" data-bs-toggle=\"dropdown\">\n\t\t\t" + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "\n\t\t\t<span class=\"category-item d-inline-flex align-items-center gap-1\">\n\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "18px", "rounded-circle"])) + 
          "\n\t\t\t\t<span class=\"visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>\n\t\t\t</span>\n\t\t\t" :
        "\n\t\t\t<span class=\"visible-md-inline visible-lg-inline\">[[unread:all_categories]]</span>\n\t\t\t") + 
      "\n\t\t\t<span class=\"caret\"></span>\n\t\t</button>\n\t\t<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n\t\t\t<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n\t\t</div>\n\t\t<ul component=\"category/list\" class=\"dropdown-menu p-1 text-sm category-dropdown-menu\" role=\"menu\">\n\t\t\t" + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\t</div>\n\n\t<div class=\"btn-group bottom-sheet\">\n\t\t<a class=\"filter-btn btn btn-light btn-sm border " + 
      ((guard((context != null) ? context['sort'] : null) != "newest") ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t<span class=\"filter-label\">" + 
      ((guard((context != null) ? context['sort'] : null) != "newest") ?
        "[[flags:sort-" + 
          __escape(guard((context != null) ? context['sort'] : null)) + 
          "]]" :
        "[[flags:sort]]") + 
      "</span>\n\t\t\t<span class=\"caret\"></span>\n\t\t</a>\n\t\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t\t<li><h6 class=\"dropdown-header\">[[flags:sort-all]]</h6></li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"newest\">[[flags:sort-newest]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"oldest\">[[flags:sort-oldest]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"reports\">[[flags:sort-reports]]</li>\n\t\t\t<li><h6 class=\"dropdown-header\">[[flags:sort-posts-only]]</h6></li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"downvotes\">[[flags:sort-downvotes]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"upvotes\">[[flags:sort-upvotes]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"sort\" data-value=\"replies\">[[flags:sort-replies]]</li>\n\t\t</ul>\n\t</div>\n\n\t<div class=\"btn-group bottom-sheet\">\n\t\t<a class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['state'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null) ? context['filters']['state'] : null) ?
        "[[flags:state-" + 
          __escape(guard((context != null && context['filters'] != null) ? context['filters']['state'] : null)) + 
          "]]" :
        "[[flags:filter-state]]") + 
      "</span>\n\t\t\t<span class=\"caret\"></span>\n\t\t</a>\n\t\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"state\" data-value=\"open\">[[flags:state-open]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"state\" data-value=\"wip\">[[flags:state-wip]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"state\" data-value=\"resolved\">[[flags:state-resolved]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"state\" data-value=\"rejected\">[[flags:state-rejected]]</li>\n\t\t</ul>\n\t</div>\n\n\t<div class=\"btn-group bottom-sheet\">\n\t\t<a class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['type'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null) ? context['filters']['type'] : null) ?
        "[[flags:filter-type-" + 
          __escape(guard((context != null && context['filters'] != null) ? context['filters']['type'] : null)) + 
          "]]" :
        "[[flags:filter-type]]") + 
      "</span>\n\t\t\t<span class=\"caret\"></span>\n\t\t</a>\n\t\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"type\" data-value=\"all\">[[flags:filter-type-all]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"type\" data-value=\"post\">[[flags:filter-type-post]]</li>\n\t\t\t<li class=\"dropdown-item rounded-1\" data-name=\"type\" data-value=\"user\">[[flags:filter-type-user]]</li>\n\t\t</ul>\n\t</div>\n\n\t<div component=\"flags/filter/assignee\" class=\"dropdown bottom-sheet\" data-filter-name=\"assignee\">\n\t\t<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['assignee'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t<span class=\"filter-label\">[[flags:filter-assignee]]</span>\n\t\t\t<span class=\"caret\"></span>\n\t\t</a>\n\n\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"min-width: 350px;\">\n\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n\t\t\t\t<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t" + 
      compiled.blocks['selected.assignee'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t" + 
      compiled.blocks['userFilterResults'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\t<div component=\"flags/filter/reporterId\" class=\"dropdown bottom-sheet\" data-filter-name=\"reporterId\">\n\t\t<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['reporterId'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t<span class=\"filter-label\">[[flags:filter-reporterId]]</span>\n\t\t\t<span class=\"caret\"></span>\n\t\t</a>\n\n\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"min-width: 350px;\">\n\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n\t\t\t\t<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t" + 
      compiled.blocks['selected.reporterId'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t" + 
      iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\t<div component=\"flags/filter/targetUid\" class=\"dropdown bottom-sheet\" data-filter-name=\"targetUid\">\n\t\t<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['targetUid'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-expanded=\"false\">\n\t\t\t<span class=\"filter-label\">[[flags:filter-targetUid]]</span>\n\t\t\t<span class=\"caret\"></span>\n\t\t</a>\n\n\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"min-width: 350px;\">\n\t\t\t<li class=\"px-3 py-1 d-flex flex-column\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n\t\t\t\t<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t" + 
      compiled.blocks['selected.targetUid'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n\t\t\t\t\t" + 
      iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\t<div component=\"flags/filters/reset\" class=\"ms-auto\">\n\t\t<a class=\"filter-btn btn btn-warning btn-sm border " + 
      (guard((context != null) ? context['hasFilter'] : null) ?
        "" :
        "btn-light disabled") + 
      "\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/flags\" role=\"button\">\n\t\t\t<span class=\"filter-label\">[[flags:filter-reset]]</span>\n\t\t</a>\n\t</div>\n\n\t<div class=\"dropdown\" component=\"flags/bulk-actions\">\n\t<button class=\"filter-btn btn btn-light btn-sm border\" data-bs-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\" disabled=\"disabled\">\n\t\t<span class=\"filter-label\">[[flags:bulk-actions]]</span>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\">\n\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"bulk-assign\">[[flags:assign-to-me]]</a></li>\n\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1\" data-action=\"bulk-mark-resolved\">[[flags:bulk-resolve]]</a></li>\n\t</ul>\n</div>\n\n\t<form role=\"form\">\n\t\t<input type=\"hidden\" name=\"sort\" value=\"" + 
      __escape(guard((context != null) ? context['sort'] : null)) + 
      "\" />\n\t\t<input type=\"hidden\" name=\"state\" value=\"" + 
      __escape(guard((context != null && context['filters'] != null) ? context['filters']['state'] : null)) + 
      "\" />\n\t\t<input type=\"hidden\" name=\"type\" value=\"" + 
      __escape(guard((context != null && context['filters'] != null) ? context['filters']['type'] : null)) + 
      "\" />\n\t</form>\n</div>\n\t<div class=\"card card-header text-xs px-2 py-1 fw-semibold border-0 align-self-start\">\n\t[[flags:x-flags-found, " + 
      __escape(guard((context != null) ? context['count'] : null)) + 
      "]]\n</div>\n\n<table class=\"table table-striped table-hover\" component=\"flags/list\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th></th>\n\t\t\t<th class=\"text-xs text-muted\">[[flags:reports]]</th>\n\t\t\t<th class=\"text-xs text-muted\">[[flags:first-reported]]</th>\n\t\t\t<th class=\"text-xs text-muted\">[[flags:state]]</th>\n\t\t\t<th>\n\t\t\t\t<input type=\"checkbox\" data-action=\"toggle-all\" autocomplete=\"off\" />\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t" + 
      compiled.blocks['flags'](helpers, context, guard, iter, helper) + 
      "\n\t</tbody>\n</table>\n\n<div component=\"pagination\" class=\"pagination-container mt-3" + 
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
      "\n</div>\n</div>\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n\t\t\t<span class=\"fw-semibold\" itemprop=\"name\">" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "</span>\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" role=\"menu-item\" href=\"#\">\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n\t\t\t\t\t<span component=\"category-markup\" class=\"flex-grow-1\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n\t\t\t\t\t\t<div class=\"category-item d-inline-flex align-items-center gap-1\">\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n\t\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<i component=\"category/select/icon\" class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'selected.assignee': function selectedassignee(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['assignee'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['assignee'] != null && context['selected']['assignee'][key0] != null) ? context['selected']['assignee'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['assignee'] != null && context['selected']['assignee'][key0] != null) ? context['selected']['assignee'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'userFilterResults': function userFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'selected.reporterId': function selectedreporterId(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['reporterId'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['reporterId'] != null && context['selected']['reporterId'][key0] != null) ? context['selected']['reporterId'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['reporterId'] != null && context['selected']['reporterId'][key0] != null) ? context['selected']['reporterId'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'selected.targetUid': function selectedtargetUid(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['selected'] != null) ? context['selected']['targetUid'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['targetUid'] != null && context['selected']['targetUid'][key0] != null) ? context['selected']['targetUid'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['selected'] != null && context['selected']['targetUid'] != null && context['selected']['targetUid'][key0] != null) ? context['selected']['targetUid'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'flags': function flags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['flags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<tr data-flag-id=\"" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['flagId'] : null)) + 
          "\">\n\t\t\t<td>\n\t\t\t\t<a class=\"text-reset text-decoration-underline\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/flags/" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['flagId'] : null)) + 
          "\">\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['target_readable'] : null)) + 
          "\n\t\t\t\t</a>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['heat'] : null)) + 
          "\n\t\t\t</td>\n\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['datetimeISO'] : null)) + 
          "\"></span></td>\n\t\t\t<td><span class=\"badge bg-" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['labelClass'] : null)) + 
          "\">[[flags:state-" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['state'] : null)) + 
          "]]</span></td>\n\t\t\t<td>\n\t\t\t\t<input type=\"checkbox\" autocomplete=\"off\" />\n\t\t\t</td>\n\t\t</tr>\n\t\t";
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

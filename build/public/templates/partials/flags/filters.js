
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
    return "<div component=\"flags/filters\" class=\"d-flex flex-wrap gap-2 pb-3 border-bottom\">\n\t<div class=\"btn-group bottom-sheet\">\n\t\t<a class=\"filter-btn btn btn-light btn-sm border " + 
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
      "\" />\n\t</form>\n</div>";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})


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
    return "<div class=\"d-flex flex-wrap gap-2 align-items-center\" component=\"search/filters\">\n\t<!-- category filter -->\n\t<div class=\"post-search-item\">\n\t\t<div component=\"category/filter\" class=\"dropdown\" data-filter-name=\"category\">\n\t\t\t<a component=\"category/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
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
      "</span>\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 250px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<select id=\"post-sort-by\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"relevance\">[[search:relevance]]</option>\n\t\t\t\t\t\t<option value=\"timestamp\">[[search:post-time]]</option>\n\t\t\t\t\t\t<option value=\"votes\">[[search:votes]]</option>\n\t\t\t\t\t\t<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n\t\t\t\t\t\t<option value=\"topic.title\">[[search:topic-title]]</option>\n\t\t\t\t\t\t<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n\t\t\t\t\t\t<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n\t\t\t\t\t\t<option value=\"topic.votes\">[[search:topic-votes]]</option>\n\t\t\t\t\t\t<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n\t\t\t\t\t\t<option value=\"user.username\">[[search:username]]</option>\n\t\t\t\t\t\t<option value=\"category.name\">[[search:category]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<select id=\"post-sort-direction\" class=\"form-select py-2 ps-2 pe-3\">\n\t\t\t\t\t\t<option value=\"desc\">[[search:descending]]</option>\n\t\t\t\t\t\t<option value=\"asc\">[[search:ascending]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<!-- save & reset preferences -->\n\t<div class=\"post-search-item\">\n\t\t<div class=\"dropdown\">\n\t\t\t<a class=\"btn btn-light btn-sm border border-gray-300 dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">[[search:save]] <span class=\"caret\"></span>\n\t\t\t</a>\n\n\t\t\t<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\">\n\t\t\t\t<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n\t\t\t\t\t<button id=\"save-preferences\" class=\"btn btn-primary\">[[search:save-preferences]]</button>\n\t\t\t\t\t<button id=\"clear-preferences\" class=\"btn-outline border\">[[search:clear-preferences]]</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>";
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
    }
  };

  return compiled;
})

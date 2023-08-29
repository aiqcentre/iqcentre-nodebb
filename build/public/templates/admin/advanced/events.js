
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
    return "<div class=\"row events px-lg-4\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<h5><i class=\"fa fa-calendar-o\"></i> [[admin/advanced/events:events]]</h5>\r\n\t\t" + 
      (guard((context != null && context['events'] != null) ? context['events']['length'] : null) ?
        "" :
        "\r\n\t\t<div class=\"alert alert-info\">[[admin/advanced/events:no-events]]</div>\r\n\t\t") + 
      "\r\n\t\t<div class=\"events-list\">\r\n\t\t\t" + 
      compiled.blocks['events'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\r\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\r\n\t\t<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t<li class=\"page-item next float-end " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\r\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\r\n\t\t<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n\t") + 
      "\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-3 acp-sidebar\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5 class=\"card-header\">[[admin/advanced/events:filters]]</h5>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<form role=\"form\" id=\"filters\">\r\n\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"type\">[[admin/advanced/events:filter-type]]</label>\r\n\t\t\t\t\t\t<select id=\"type\" name=\"type\" class=\"form-select\">\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['types'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"start\">[[admin/advanced/events:filter-start]]</label>\r\n\t\t\t\t\t\t<input type=\"date\" id=\"start\" name=\"start\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['start'] : null)) + 
      "\" class=\"form-control\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"end\">[[admin/advanced/events:filter-end]]</label>\r\n\t\t\t\t\t\t<input type=\"date\" id=\"end\" name=\"end\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['end'] : null)) + 
      "\" class=\"form-control\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"perPage\">[[admin/advanced/events:filter-perPage]]</label>\r\n\t\t\t\t\t\t<input type=\"text\" id=\"perPage\" name=\"perPage\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['perPage'] : null)) + 
      "\" class=\"form-control\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"d-grid gap-1\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-sm btn-light\" id=\"apply\"><i class=\"fa fa-filter text-primary\"></i> [[admin/advanced/events:filters-apply]]</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-sm btn-light\" data-action=\"clear\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-trash text-danger\"></i> [[admin/advanced/events:delete-events]]\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'events': function events(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['events'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<div class=\"card mb-3\" data-eid=\"" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['eid'] : null)) + 
          "\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"mb-3 d-flex flex-wrap justify-content-between align-items-center gap-1\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<span class=\"badge bg-primary\">#" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['eid'] : null)) + 
          "</span>\r\n\t\t\t\t\t\t\t<span class=\"badge bg-info\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['type'] : null)) + 
          "</span>\r\n\t\t\t\t\t\t\t<span class=\"badge bg-info\">uid " + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['uid'] : null)) + 
          "</span>\r\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['ip'] : null) ?
            "<span class=\"badge bg-info\">" + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['ip'] : null)) + 
              "</span>" :
            "") + 
          "\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['userslug'] : null)) + 
          "\" target=\"_blank\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['userslug'] : null)) + 
          "\" target=\"_blank\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t\t<span class=\"text-xs\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['timestampISO'] : null)) + 
          "</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm delete-event ms-2 pointer\"><i class=\"fa fa-trash-o text-danger\"></i></button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<pre class=\"text-bg-light p-3\" style=\"white-space:pre-wrap;\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['jsonString'] : null)) + 
          "</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\r\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'types': function types(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['types'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['name'] : null)) + 
          " - (" + 
          __escape(guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['count'] : null)) + 
          ") </option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

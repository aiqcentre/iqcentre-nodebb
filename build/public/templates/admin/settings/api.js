
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
    return "<div component=\"settings/main/header\" class=\"d-flex flex-wrap justify-content-between border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center mb-3\">\r\n\t<div class=\"px-0\">\r\n\t\t<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\r\n\t</div>\r\n\t<div class=\"px-0 px-md-3\">\r\n\t\t<div class=\"d-flex gap-1\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary text-nowrap\" data-action=\"create\">\r\n\t\t\t\t<i class=\"fa fa-plus\"></i>\r\n\t\t\t\t[[admin/settings/api:create-token]]\r\n\t\t\t</button>\r\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<form role=\"form\" class=\"core-api-settings px-lg-4\">\r\n\t<p class=\"lead\">[[admin/settings/api:lead-text]]</p>\r\n\t<p>[[admin/settings/api:intro]]</p>\r\n\t<p class=\"text-danger\">[[admin/settings/api:warning]]</p>\r\n\t<div class=\"d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2 mb-3\">\r\n\t\t<a class=\"\" href=\"https://docs.nodebb.org/api\">\r\n\t\t\t<i class=\"fa fa-external-link\"></i>\r\n\t\t\t[[admin/settings/api:docs]]\r\n\t\t</a>\r\n\t</div>\r\n\r\n\t<div class=\"mb-3\">\r\n\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t<input id=\"requireHttps\" class=\"form-check-input\" type=\"checkbox\" id=\"requireHttps\" name=\"requireHttps\" />\r\n\t\t\t<label for=\"requireHttps\" class=\"form-check-label\">[[admin/settings/api:require-https]]</label>\r\n\t\t\t<p class=\"form-text\">[[admin/settings/api:require-https-caveat]]</p>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"table-responsive mb-3\">\r\n\t\t<table class=\"table table-sm text-sm\" data-component=\"acp/tokens\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>[[admin/settings/api:token]]</th>\r\n\t\t\t\t\t<th>[[admin/settings/api:description]]</th>\r\n\t\t\t\t\t<th>[[admin/settings/api:uid]]</th>\r\n\t\t\t\t\t<th>[[admin/settings/api:last-seen]]</th>\r\n\t\t\t\t\t<th>[[admin/settings/api:created]]</th>\r\n\t\t\t\t\t<th>[[admin/settings/api:actions]]</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t" + 
      compiled.blocks['tokens'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
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
      "\r\n</div>\r\n</form>\r\n";
  }

  compiled.blocks = {
    'tokens': function tokens(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tokens'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<tr data-token=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "\" class=\"\">\r\n\t\t\t\t\t<td class=\"text-nowrap\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\" data-action=\"copy\" data-clipboard-text=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "\"><i class=\"fa fa-fw fa-clipboard\" aria-hidden=\"true\"></i></button>\r\n\t\t\t\t\t\t<div class=\"vr me-3\" aria-hidden=\"true\"></div>\r\n\t\t\t\t\t\t<span class=\"user-select-all\">" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['token'] : null)) + 
          "</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"align-middle\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['description'] : null) ?
            "\r\n\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['description'] : null)) + 
              "\r\n\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t<em class=\"text-secondary\">[[admin/settings/api:no-description]]</em>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"align-middle\">\r\n\t\t\t\t\t\t" + 
          ((guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['uid'] : null) == "0") ?
            "\r\n\t\t\t\t\t\t<em>[[admin/settings/api:master-token]]</em>\r\n\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['uid'] : null)) + 
              "\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"align-middle\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['lastSeen'] : null) ?
            "\r\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['lastSeenISO'] : null)) + 
              "\"></span>\r\n\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t<em class=\"text-secondary\">[[admin/settings/api:last-seen-never]]</em>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"align-middle\">\r\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['tokens'] != null && context['tokens'][key0] != null) ? context['tokens'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td class=\"text-nowrap\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"edit\" title=\"[[admin/settings/api:edit]]\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-edit text-primary\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"roll\" title=\"[[admin/settings/api:roll]]\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-refresh text-primary\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm\" data-action=\"delete\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-trash text-danger\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t";
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
    }
  };

  return compiled;
})

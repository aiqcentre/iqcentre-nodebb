
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
    return "<div class=\"px-lg-4\">\r\n\t<p class=\"lead\">[[admin/manage/digest:lead]]</p>\r\n\t<p>[[admin/manage/digest:disclaimer]]</p>\r\n\t<p>[[admin/manage/digest:disclaimer-continued]]</p>\r\n\r\n\t<hr />\r\n\r\n\r\n\t<div class=\"mb-3\">\r\n\t\t<div class=\"mb-2\"><em>[[admin/manage/digest:default-help, " + 
      __escape(guard((context != null) ? context['default'] : null)) + 
      "]]</em></div>\r\n\t\t<div class=\"d-flex gap-1\">\r\n\t\t\t<div>[[admin/manage/digest:manual-run]]</div>\r\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-day\">[[admin/settings/user:digest-freq.daily]]</button>\r\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-week\">[[admin/settings/user:digest-freq.weekly]]</button>\r\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-biweek\">[[admin/settings/user:digest-freq.biweekly]]</button>\r\n\t\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend-month\">[[admin/settings/user:digest-freq.monthly]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"table-responsive\">\r\n\t\t<table class=\"table\">\r\n\t\t\t<thead>\r\n\t\t\t\t<th>[[admin/manage/digest:user]]</th>\r\n\t\t\t\t<th>[[admin/manage/digest:subscription]]</th>\r\n\t\t\t\t<th>[[admin/manage/digest:last-delivery]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t" + 
      compiled.blocks['delivery'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t" + 
      (guard((context != null && context['delivery'] != null) ? context['delivery']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td colspan=\"4\">\r\n\t\t\t\t\t\t<div class=\"alert alert-success\">\r\n\t\t\t\t\t\t\t[[admin/manage/digest:no-delivery-data]]\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t") + 
      "\r\n\t\t\t</tbody>\r\n\t\t\t<tfoot>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td colspan=\"4\"><div component=\"pagination\" class=\"pagination-container mt-3" + 
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
      "\r\n</div></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tfoot>\r\n\t\t</table>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'delivery': function delivery(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['delivery'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['delivery'] != null) ? context['delivery'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          " <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['username'] : null)) + 
          "</a></td>\r\n\t\t\t\t\t<td>" + 
          (guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null) ?
            __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null)) :
            "<em>[[admin/manage/digest:default]]</em>") + 
          "</td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['lastDelivery'] : null)) + 
          "</td>\r\n\t\t\t\t\t<td><button class=\"btn btn-sm btn-outline-secondary\" data-action=\"resend\" data-uid=\"" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">[[admin/manage/digest:resend]]</button></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t";
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

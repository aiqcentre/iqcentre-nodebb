
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
    return "<div class=\"errors d-flex flex-column gap-2 px-lg-4\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/advanced/errors:errors]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex align-items-center gap-1\">\r\n\t\t\t<button class=\"btn btn-sm btn-light text-nowrap\" data-action=\"clear\">\r\n\t\t\t\t<i class=\"fa fa-trash text-danger\"></i> [[admin/advanced/errors:clear-error-log]]\r\n\t\t\t</button>\r\n\t\t\t<a class=\"btn btn-sm btn-light text-nowrap\" target=\"_top\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/advanced/errors/export\">\r\n\t\t\t\t<i class=\"fa fa-download text-primary\"></i> [[admin/advanced/errors:export-error-log]]\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"px-2\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-6 text-center\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div><canvas id=\"not-found\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-footer\"><small>\r\n\t\t\t\t\t\t<strong>[[admin/advanced/errors:figure-x, 1]]</strong> &ndash;\r\n\t\t\t\t\t\t[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.404]]]]\r\n\t\t\t\t\t</small></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6 text-center\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div><canvas id=\"toobusy\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-footer\"><small>\r\n\t\t\t\t\t\t<strong>[[admin/advanced/errors:figure-x, 2]]</strong> &ndash;\r\n\t\t\t\t\t\t[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.503]]]]\r\n\t\t\t\t\t</small></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<i class=\"fa fa-exclamation-triangle\"></i> [[admin/advanced/errors:error.404]]\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<table class=\"table text-sm\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<th>[[admin/advanced/errors:route]]</th>\r\n\t\t\t\t\t\t\t<th class=\"text-end\">[[admin/advanced/errors:count]]</th>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['not-found'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t\t" + 
      (guard((context != null && context['not-found'] != null) ? context['not-found']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-success\">\r\n\t\t\t\t\t\t\t\t\t\t[[admin/advanced/errors:no-routes-not-found]]\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'not-found': function notfound(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['not-found'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td class=\"text-break\">" + 
          __escape(guard((context != null && context['not-found'] != null && context['not-found'][key0] != null) ? context['not-found'][key0]['value'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t\t\t<td class=\"text-end\">" + 
          __escape(guard((context != null && context['not-found'] != null && context['not-found'][key0] != null) ? context['not-found'][key0]['score'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

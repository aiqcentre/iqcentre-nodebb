
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
    return "<div class=\"row dashboard px-lg-4\">\r\n\t<div class=\"col-12\">\r\n\t\t<div class=\"d-flex justify-content-between align-items-center mb-3\">\r\n\t\t\t<form class=\"d-flex flex-wrap gap-3 align-sm-items-center\" method=\"GET\">\r\n\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label mb-0\" for=\"start\">[[admin/dashboard:start]]</label>\r\n\t\t\t\t\t<input type=\"date\" class=\"form-control form-control-sm w-auto\" id=\"start\" name=\"start\" value=\"" + 
      __escape(guard((context != null) ? context['startDate'] : null)) + 
      "\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label mb-0\" for=\"end\">[[admin/dashboard:end]]</label>\r\n\t\t\t\t\t<input type=\"date\" class=\"form-control form-control-sm w-auto\" id=\"end\" name=\"end\" value=\"" + 
      __escape(guard((context != null) ? context['endDate'] : null)) + 
      "\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t<button onclick=\"$('form').submit();return false;\"class=\"btn btn-primary btn-sm\" type=\"submit\">[[admin/dashboard:filter]]</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<button id=\"clear-search-history\" class=\"btn btn-sm btn-light\"><i class=\"fa fa-trash text-danger\"></i> [[admin/dashboard:clear-search-history]]</button>\r\n\t\t</div>\r\n\r\n\t\t<table class=\"table table-sm text-sm search-list\">\r\n\t\t\t<thead>\r\n\t\t\t\t<th class=\"text-end\">Count</th>\r\n\t\t\t\t<th>Term</th>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t" + 
      (guard((context != null && context['searches'] != null) ? context['searches']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td colspan=4\" class=\"text-center\"><em>[[admin/dashboard:details.no-searches]]</em></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t" + 
      compiled.blocks['searches'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'searches': function searches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['searches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class=\"text-end\" style=\"width: 1px;\">" + 
          __escape(guard((context != null && context['searches'] != null && context['searches'][key0] != null) ? context['searches'][key0]['score'] : null)) + 
          "</td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['searches'] != null && context['searches'][key0] != null) ? context['searches'][key0]['value'] : null)) + 
          "</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

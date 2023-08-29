
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
    return "<div class=\"table-responsive mb-3\">\r\n\t<table class=\"table text-sm\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.yesterday]]</th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.today]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.last-week]]</th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.this-week]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.last-month]]</th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.this-month]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.all]]</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t" + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</tbody>\r\n\t</table>\r\n</div>";
  }

  compiled.blocks = {
    'stats': function stats(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['stats'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<strong>\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null) ?
            "\r\n\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "</a>\r\n\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t</strong>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['yesterday'] : null)])) + 
          "</td>\r\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['today'] : null)])) + 
          "</td>\r\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayIncrease'] : null)) + 
          "%</small></td>\r\n\r\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastweek'] : null)])) + 
          "</td>\r\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thisweek'] : null)])) + 
          "</td>\r\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekIncrease'] : null)) + 
          "%</small></td>\r\n\r\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastmonth'] : null)])) + 
          "</td>\r\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thismonth'] : null)])) + 
          "</td>\r\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthIncrease'] : null)) + 
          "%</small></td>\r\n\r\n\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['alltime'] : null)])) + 
          "</td>\r\n\t\t\t</tr>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

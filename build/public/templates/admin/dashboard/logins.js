
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
    return "<div class=\"row dashboard px-lg-4\">\r\n\t<div class=\"col-12\">\r\n\t\t<div class=\"card mb-3\" id=\"analytics-panel\">\r\n\t<div class=\"card-header\">\r\n\t\t<div class=\"d-flex justify-content-between\">\r\n\t\t\t[[admin/dashboard:forum-traffic]]\r\n\r\n\t\t\t<div class=\"d-flex gap-1\">\r\n\t\t\t\t<a class=\"btn btn-sm btn-light lh-sm\" target=\"_blank\" id=\"view-as-json\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/v3/admin/analytics/" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "?type=hourly\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"[[admin/dashboard:view-as-json]]\"><i class=\"fa fa-fw fa-xs fa-terminal text-primary\"></i></a>\r\n\t\t\t\t<a class=\"btn btn-sm btn-light lh-sm\" id=\"expand-analytics\" href=\"#\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"[[admin/dashboard:expand-analytics]]\"><i class=\"fa fa-fw fa-xs fa-expand text-primary\"></i></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"card-body\">\r\n\t\t<div class=\"graph-container\" id=\"analytics-traffic-container\">\r\n\t\t\t<canvas id=\"analytics-traffic\" width=\"100%\" height=\"400\"></canvas>\r\n\t\t</div>\r\n\t\t<hr/>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\r\n\t\t\t\t<div><strong id=\"pageViewsThirty\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['month'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['month'] : null)) :
        "0") + 
      "</strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"30\">[[admin/dashboard:page-views-thirty]]</a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\r\n\t\t\t\t<div><strong id=\"pageViewsSeven\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['week'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['week'] : null)) :
        "0") + 
      "</strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"7\">[[admin/dashboard:page-views-seven]]</a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\r\n\t\t\t\t<div><strong id=\"pageViewsPastDay\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['day'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['day'] : null)) :
        "0") + 
      "</strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\r\n\t\t\t\t<div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\r\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph text-sm\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\t\t<div class=\"table-responsive mb-3\">\r\n\t<table class=\"table text-sm\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.yesterday]]</th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.today]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.last-week]]</th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.this-week]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.last-month]]</th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.this-month]]</th>\r\n\t\t\t\t<th></th>\r\n\t\t\t\t<th class=\"text-end\">[[admin/dashboard:stats.all]]</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t" + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n\r\n\t\t<div class=\"alert alert-info\">[[admin/dashboard:details.logins-static, " + 
      __escape(guard((context != null) ? context['loginDays'] : null)) + 
      "]]</div>\r\n\t\t<div class=\"table-responsive\">\r\n\t\t\t<table class=\"table text-sm\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\r\n\t\t\t\t\t<th data-sort=\"joindate\">[[admin/dashboard:details.logins-login-time]]</th>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t" + 
      (guard((context != null && context['sessions'] != null) ? context['sessions']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=4\" class=\"text-center\"><em>[[admin/dashboard:details.no-logins]]</em></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t" + 
      compiled.blocks['sessions'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
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
    },
    'sessions': function sessions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sessions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"d-flex gap-2 align-items-center\">\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null && context['sessions'][key0]['user'] != null) ? context['sessions'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['user'] : null), "18px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null && context['sessions'][key0]['user'] != null) ? context['sessions'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null && context['sessions'][key0]['user'] != null) ? context['sessions'][key0]['user']['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'userAgentIcons', [guard(value)])) + 
          " " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['browser'] : null)) + 
          " " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['version'] : null)) + 
          " on " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['platform'] : null)) + 
          "\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['datetimeISO'] : null)) + 
          "\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

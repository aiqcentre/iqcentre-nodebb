
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
    return "<div class=\"row dashboard px-lg-4\">\r\n\t<div class=\"col-lg-9\">\r\n\t\t<div class=\"card mb-3\" id=\"analytics-panel\">\r\n\t<div class=\"card-header\">\r\n\t\t<div class=\"d-flex justify-content-between\">\r\n\t\t\t[[admin/dashboard:forum-traffic]]\r\n\r\n\t\t\t<div class=\"d-flex gap-1\">\r\n\t\t\t\t<a class=\"btn btn-sm btn-light lh-sm\" target=\"_blank\" id=\"view-as-json\" href=\"" + 
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
      "\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-header\">[[admin/dashboard:guest-registered-users]]</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down\">\r\n\t\t\t\t\t\t\t<canvas id=\"analytics-registered\"></canvas>\r\n\t\t\t\t\t\t\t<ul class=\"graph-legend border\" id=\"analytics-legend\">\r\n\t\t\t\t\t\t\t\t<li><div class=\"registered\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:registered]]</span></li>\r\n\t\t\t\t\t\t\t\t<li><div class=\"guest\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:guest]]</span></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-header\">[[admin/dashboard:user-presence]]</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down\">\r\n\t\t\t\t\t\t\t<canvas id=\"analytics-presence\"></canvas>\r\n\t\t\t\t\t\t\t<ul class=\"graph-legend border\" id=\"analytics-presence-legend\">\r\n\t\t\t\t\t\t\t\t<li><div class=\"reading-posts\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:reading-posts]]</span></li>\r\n\t\t\t\t\t\t\t\t<li><div class=\"on-categories\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:on-categories]]</span></li>\r\n\t\t\t\t\t\t\t\t<li><div class=\"browsing-topics\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:browsing-topics]]</span></li>\r\n\t\t\t\t\t\t\t\t<li><div class=\"recent\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:recent]]</span></li>\r\n\t\t\t\t\t\t\t\t<li><div class=\"unread\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:unread]]</span></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<div class=\"card-header\">[[admin/dashboard:high-presence-topics]]</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"graph-container pie-chart legend-down\">\r\n\t\t\t\t\t\t\t<canvas id=\"analytics-topics\"></canvas>\r\n\t\t\t\t\t\t\t<ul class=\"graph-legend border\" id=\"topics-legend\"></ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-3\">\r\n\t\t<div class=\"card mb-3\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"text-sm shadow-sm alert " + 
      (guard((context != null) ? context['lookupFailed'] : null) ?
        "alert-danger" :
        (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "alert-warning" :
            (guard((context != null) ? context['currentPrerelease'] : null) ?
                "alert-info" :
                "alert-success"))) + 
      " version-check\">\r\n\t\t\t\t\t<p class=\"\">[[admin/dashboard:running-version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</p>\r\n\t\t\t\t\t<p class=\"mb-0\">\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['lookupFailed'] : null) ?
        "\r\n\t\t\t\t\t[[admin/dashboard:latest-lookup-failed]]\r\n\t\t\t\t\t" :
        "\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "\r\n\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['currentPrerelease'] : null) ?
                "\r\n\t\t\t\t\t\t\t[[admin/dashboard:prerelease-upgrade-available, " + 
                  __escape(guard((context != null) ? context['latestVersion'] : null)) + 
                  "]]\r\n\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t[[admin/dashboard:upgrade-available, " + 
                  __escape(guard((context != null) ? context['latestVersion'] : null)) + 
                  "]]\r\n\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['currentPrerelease'] : null) ?
                "\r\n\t\t\t\t\t\t\t[[admin/dashboard:prerelease-warning]]\r\n\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t[[admin/dashboard:up-to-date]]\r\n\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t[[admin/dashboard:keep-updated]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t" + 
      (guard((context != null) ? context['showSystemControls'] : null) ?
        "\r\n\r\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/settings/advanced\" class=\"d-block mb-2 btn btn-info btn-sm\" data-bs-placement=\"bottom\" data-bs-toggle=\"tooltip\" title=\"[[admin/dashboard:maintenance-mode-title]]\">[[admin/dashboard:maintenance-mode]]</a>\r\n\r\n\t\t\t\t<div class=\"form-check form-switch\">\r\n\t\t\t\t\t<label for=\"toggle-realtime\" class=\"form-check-label text-sm\">[[admin/dashboard:realtime-chart-updates]]</label>\r\n\t\t\t\t\t<input id=\"toggle-realtime\" class=\"form-check-input\" type=\"checkbox\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-check form-switch\">\r\n\t\t\t\t\t<label for=\"toggle-dark-mode\" class=\"form-check-label text-sm\">[[admin/dashboard:dark-mode]]</label>\r\n\t\t\t\t\t<input id=\"toggle-dark-mode\" class=\"form-check-input\" type=\"checkbox\">\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<h6>[[admin/dashboard:notices]]</h6>\r\n\t\t\t\t" + 
      compiled.blocks['notices'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card mb-3\">\r\n\t\t\t<div class=\"card-header\">[[admin/dashboard:active-users]]</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div id=\"active-users\" class=\"stats row row-cols-2\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">[[admin/dashboard:popular-searches]]</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<ul class=\"list-unstyled text-sm\">\r\n\t\t\t\t\t" + 
      compiled.blocks['popularSearches'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
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
    'notices': function notices(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notices'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<div class=\"text-sm\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['done'] : null) ?
            "\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-check text-success\"></i> " + 
              __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['doneText'] : null)) + 
              "\r\n\t\t\t\t\t" :
            "\r\n\t\t\t\t\t" + 
              (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null) ?
                "<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null)) + 
                  "\" data-bs-toggle=\"tooltip\" title=\"" + 
                  __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['tooltip'] : null)) + 
                  "\">" :
                "") + 
              "\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-times text-danger\"></i> " + 
              __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['notDoneText'] : null)) + 
              "\r\n\t\t\t\t\t" + 
              (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null) ?
                "</a>" :
                "") + 
              "\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'popularSearches': function popularSearches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['popularSearches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<li>(" + 
          __escape(guard((context != null && context['popularSearches'] != null && context['popularSearches'][key0] != null) ? context['popularSearches'][key0]['score'] : null)) + 
          ") " + 
          __escape(guard((context != null && context['popularSearches'] != null && context['popularSearches'][key0] != null) ? context['popularSearches'][key0]['value'] : null)) + 
          "</li>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

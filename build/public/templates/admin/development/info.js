
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
    return "<div class=\"info\">\r\n\t<div class=\"card\">\r\n\t\t<h5 class=\"card-header\">\r\n\t\t\t[[admin/development/info:you-are-on, " + 
      __escape(guard((context != null) ? context['host'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['port'] : null)) + 
      "]] &bull; [[admin/development/info:ip, " + 
      __escape(guard((context != null) ? context['ip'] : null)) + 
      "]]\r\n\t\t</h5>\r\n\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<span>[[admin/development/info:nodes-responded, " + 
      __escape(guard((context != null) ? context['nodeCount'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['timeout'] : null)) + 
      "]]</span>\r\n\r\n\t\t\t<table class=\"table table-sm text-sm\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:host]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold text-center\">[[admin/development/info:primary]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:nodejs]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:online]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:git]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:cpu-usage]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:process-memory]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:system-memory]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:load]]</td>\r\n\t\t\t\t\t\t<td class=\"fw-bold\">[[admin/development/info:uptime]]</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody class=\"text-xs\">\r\n\t\t\t\t" + 
      compiled.blocks['info'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"card\">\r\n\t\t<h5 class=\"card-header\">\r\n\t\t\t[[admin/development/info:info]]\r\n\t\t</h5>\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<div class=\"p-3 text-bg-light border border-secondary rounded\">\r\n\t\t\t\t<pre>" + 
      __escape(guard((context != null) ? context['infoJSON'] : null)) + 
      "</pre>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'info': function info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['info'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['hostname'] : null)) + 
          ":" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['port'] : null)) + 
          "</td>\r\n\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['nodebb'] != null) ? context['info'][key0]['nodebb']['isPrimary'] : null) ?
            "<i class=\"fa fa-check\"></i>" :
            "<i class=\"fa fa-times\"></i>") + 
          " /\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['nodebb'] != null) ? context['info'][key0]['nodebb']['runJobs'] : null) ?
            "<i class=\"fa fa-check\"></i>" :
            "<i class=\"fa fa-times\"></i>") + 
          "\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['version'] : null)) + 
          "</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span title=\"[[admin/development/info:registered]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['onlineRegisteredCount'] : null)) + 
          "</span> /\r\n\t\t\t\t\t\t<span title=\"[[admin/development/info:guests]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['onlineGuestCount'] : null)) + 
          "</span> /\r\n\t\t\t\t\t\t<span title=\"[[admin/development/info:sockets]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['socketCount'] : null)) + 
          "</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['branch'] : null)) + 
          "@<a href=\"https://github.com/NodeBB/NodeBB/commit/" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['hash'] : null)) + 
          "\" target=\"_blank\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['hashShort'] : null)) + 
          "</a></td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['cpuUsage'] : null)) + 
          "%</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span title=\"[[admin/development/info:used-memory-process]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null && context['info'][key0]['process']['memoryUsage'] != null) ? context['info'][key0]['process']['memoryUsage']['humanReadable'] : null)) + 
          " gb</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span title=\"[[admin/development/info:used-memory-os]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['usedmem'] : null)) + 
          " gb</span> /\r\n\t\t\t\t\t\t<span title=\"[[admin/development/info:total-memory-os]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['totalmem'] : null)) + 
          " gb</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['load'] : null)) + 
          "</td>\r\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['uptimeHumanReadable'] : null)) + 
          "</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

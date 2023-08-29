
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
    return compiled.blocks['sessions'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'sessions': function sessions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sessions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"list-group-item text-break\" data-uuid=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['uuid'] : null)) + 
          "\">\n\t<div class=\"float-end\">\n\t\t" + 
          (guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null) ?
            "\n\t\t" + 
              (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
                "" :
                "\n\t\t<button class=\"btn btn-sm btn-outline-secondary\" type=\"button\" data-action=\"revokeSession\">[[user:revoke-session]]</button>\n\t\t") + 
              "\n\t\t" :
            "") + 
          "\n\t\t" + 
          __escape(helper(context, helpers, 'userAgentIcons', [guard(value)])) + 
          "\n\t\t<i class=\"fa fa-circle text-" + 
          (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
            "success" :
            "muted") + 
          "\"></i>\n\t</div>\n\t[[user:browser-version-on-platform, " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['browser'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['version'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['platform'] : null)) + 
          "]]<br />\n\t<small class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['datetimeISO'] : null)) + 
          "\"></small>\n\t<ul>\n\t\t<li><strong>[[global:ip_address]]</strong>: " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['ip'] : null)) + 
          "</li>\n\t</ul>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

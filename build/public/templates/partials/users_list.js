
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
    return "<div id=\"users-container\" class=\"users-container row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-4\">\n" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\" class=\"btn-ghost align-items-start justify-content-start p-2 ff-base\">\n\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "48px", guard((context != null) ? context['true'] : null), "flex-shrink-0"])) + 
          "\n\t<div class=\"d-flex flex-column text-truncate\">\n\t\t<div class=\"fw-semibold text-truncate\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "</div>\n\t\t<div class=\"text-xs text-muted text-truncate\">@" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</div>\n\n\t\t" + 
          (guard((context != null) ? context['section_online'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t</div>\n</a>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

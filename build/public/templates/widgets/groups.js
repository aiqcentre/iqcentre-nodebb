
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
    return "\n<div class=\"groups-list d-flex flex-wrap gap-2 mb-3\">\n" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n</div>\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"card group-hover-bg border-0 \" style=\"flex-basis: 356px;\">\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\" class=\"card-header border-bottom-0 pointer d-block list-cover\" style=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null) ?
            "background-image: url(" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null)) + 
              ");background-size: cover; min-height: 125px; background-position: " + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:position'] : null)) :
            "") + 
          "\"></a>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\" class=\"d-block h-100 text-reset text-decoration-none\">\n\t\t\t<div class=\"card-body d-flex flex-column gap-1 border border-top-0 rounded-bottom h-100\">\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div class=\"flex-1 fs-6 fw-semibold\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</div>\n\t\t\t\t\t<div class=\"text-sm\"><i class=\"text-muted fa-solid fa-user\"></i> " + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['memberCount'] : null)) + 
          "</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-sm\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['description'] : null)) + 
          "</div>\n\t\t\t</div>\n\t\t</a>\n\t</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

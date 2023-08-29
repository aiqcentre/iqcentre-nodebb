
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
    return "<div class=\"d-flex gap-2 mb-2 justify-content-between align-items-center flex-nowrap\">\n\t<div class=\"icon text-truncate\">\n\t\t<a href=\"" + 
      (guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null)) :
        "#") + 
      "\">\n\t\t\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['post'] != null) ? context['post']['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
      " " + 
      __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['username'] : null)) + 
      "\n\t\t</a>\n\t</div>\n\t<span class=\"timeago text-nowrap text-sm\" title=\"" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['timestampISO'] : null)) + 
      "\"></span>\n</div>\n\n<div>" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['content'] : null)) + 
      "</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

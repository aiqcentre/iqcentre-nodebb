
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
    return "<div id=\"post-tooltip\" class=\"card card-body shadow bg-body text-body z-1 position-absolute\">\r\n    <div class=\"d-flex flex-column gap-2\">\r\n        <div class=\"d-flex gap-1 align-items-center\">\r\n            <a href=\"" + 
      (guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null)) :
        "#") + 
      "\">\r\n                " + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['post'] != null) ? context['post']['user'] : null), "24px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
      " " + 
      __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['username'] : null)) + 
      "\r\n            </a>\r\n            <span class=\"timeago text-xs\" title=\"" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['timestampISO'] : null)) + 
      "\"></span>\r\n        </div>\r\n        <div class=\"content\">" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['content'] : null)) + 
      "</div>\r\n    </div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

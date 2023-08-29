
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
    return "<hr/>\n<a class=\"topic-title fw-semibold fs-5 mb-3 text-reset text-break\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\">\n    " + 
      (guard((context != null) ? context['isMainPost'] : null) ?
        "<i class=\"fa fa-book text-muted\" title=\"[[topic:topic]]\"></i> " :
        "") + 
      __escape(guard((context != null && context['topic'] != null) ? context['topic']['title'] : null)) + 
      "\n</a>\n<li component=\"post\" class=\"posts-list-item  " + 
      (guard((context != null) ? context['deleted'] : null) ?
        " deleted" :
        (guard((context != null && context['topic'] != null) ? context['topic']['deleted'] : null) ?
            " deleted" :
            "")) + 
      (guard((context != null && context['topic'] != null) ? context['topic']['scheduled'] : null) ?
        " scheduled" :
        "") + 
      "\" data-pid=\"" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n    <div class=\"post-body d-flex flex-column gap-1\">\n        <div class=\"d-flex gap-3 post-info\">\n            <div class=\"post-author d-flex align-items-center gap-1\">\n                <a class=\"lh-1 text-decoration-none\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
      "</a>\n                <a class=\"fw-semibold text-sm\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['displayname'] : null)) + 
      "</a>\n            </div>\n            <span class=\"timeago text-sm text-muted\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span>\n        </div>\n\n        <div component=\"post/content\" class=\"content text-sm text-break\">\n            " + 
      __escape(guard((context != null) ? context['content'] : null)) + 
      "\n        </div>\n    </div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
    return "<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"btn-ghost align-items-start justify-content-start p-2 ff-base\">\n\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(value), "48px", guard((context != null) ? context['true'] : null), "flex-shrink-0"])) + 
      "\n\t<div class=\"d-flex flex-column text-truncate\">\n\t\t<div class=\"fw-semibold text-truncate\" title=\"" + 
      __escape(guard((context != null) ? context['displayname'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['displayname'] : null)) + 
      "</div>\n\t\t<div class=\"text-xs text-muted text-truncate\">@" + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "</div>\n\n\t\t" + 
      (guard((context != null) ? context['section_online'] : null) ?
        "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['lastonlineISO'] : null)) + 
          "\"></span>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['section_joindate'] : null) ?
        "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['joindateISO'] : null)) + 
          "\"></span>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['section_sort-reputation'] : null) ?
        "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null) ? context['reputation'] : null)])) + 
          "</span>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['section_sort-posts'] : null) ?
        "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null) ? context['postcount'] : null)])) + 
          "</span>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['section_flagged'] : null) ?
        "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null) ? context['flags'] : null)])) + 
          "</span>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\t</div>\n</a>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

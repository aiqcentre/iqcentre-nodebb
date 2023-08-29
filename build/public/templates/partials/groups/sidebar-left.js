
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
    return "<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200\">\n\t<div class=\"nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1\" style=\"top: 1rem; z-index: 1;\">\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-posts\" class=\"btn-ghost fw-semibold " + 
      (guard((context != null && context['template'] != null) ? context['template']['groups/details'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:posts]]</div>\n\t\t</button>\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-members\" class=\"btn-ghost fw-semibold\">\n\t\t\t<div class=\"flex-grow-1\">[[groups:members]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['memberCount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null) ? context['group']['memberCount'] : null)])) + 
      "</span>\n\t\t</button>\n\n\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-pending\" class=\"btn-ghost fw-semibold\">\n\t\t\t<div class=\"flex-grow-1\">[[groups:details.pending]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null && context['group']['group'] != null && context['group']['group']['pending'] != null) ? context['group']['group']['pending']['length'] : null)])) + 
          "</span>\n\t\t</button>\n\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-invited\" class=\"btn-ghost fw-semibold\">\n\t\t\t<div class=\"flex-grow-1\">[[groups:details.invited]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null && context['group']['group'] != null && context['group']['group']['invited'] != null) ? context['group']['group']['invited']['length'] : null)])) + 
          "</span>\n\t\t</button>\n\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-admin\" class=\"btn-ghost fw-semibold\">\n\t\t\t<div class=\"flex-grow-1\">[[global:header.admin]]</div>\n\t\t</button>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

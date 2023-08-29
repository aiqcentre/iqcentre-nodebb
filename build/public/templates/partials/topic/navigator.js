
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
    return "<div class=\"pagination-block d-none d-lg-block flex-grow-1 mb-4\">\n\t<div class=\"d-flex justify-content-end sticky-top mt-4\" style=\"top:6rem;z-index:1;\">\n\t\t<div class=\"ps-1 ps-md-0 d-inline-block\">\n\t\t\t<div class=\"scroller-content d-flex gap-2 flex-column align-items-start\">\n\t\t\t\t<div class=\"pointer pagetop btn-ghost-sm d-inline-flex\" style=\"padding: 4px;\"><i class=\"fa fa-chevron-up\"></i> <span class=\"timeago text-xs text-muted text-nowrap\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span></div>\n\t\t\t\t<div class=\"scroller-container position-relative\">\n\t\t\t\t\t<div class=\"scroller-thumb d-flex gap-2 text-nowrap position-relative\" style=\"height: 40px;\">\n\t\t\t\t\t\t<div class=\"scroller-thumb-icon bg-primary rounded d-inline-block\" style=\"width:9px; height: 40px;\"></div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p class=\"small thumb-text d-none d-md-inline-block ff-secondary fw-semibold user-select-none mb-0\"></p>\n\t\t\t\t\t\t\t<p class=\"meta thumb-timestamp timeago text-xs text-muted ff-secondary fw-semibold mb-0 user-select-none\"></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"unread d-inline-block position-absolute bottom-0\">\n\t\t\t\t\t\t<div class=\"meta small position-absolute top-50 translate-middle-y text-nowrap fw-semibold ms-2\">\n\t\t\t\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pointer pagebottom btn-ghost-sm d-inline-flex\" style=\"padding: 4px;\"><i class=\"fa fa-chevron-down\"></i> <span class=\"timeago text-xs text-muted text-nowrap\" title=\"" + 
      __escape(guard((context != null) ? context['lastposttimeISO'] : null)) + 
      "\"></span></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

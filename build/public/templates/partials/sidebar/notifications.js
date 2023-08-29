
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
    return "<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link nav-btn d-flex gap-2 justify-content-between align-items-center position-relative\">\n\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t<span class=\"position-relative\">\n\t\t\t<i component=\"notifications/icon\" class=\"fa fa-fw " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
        "fa-bell" :
        "fa-bell-o") + 
      " unread-count\" data-content=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
      "\"></i>\n\t\t\t<span component=\"notifications/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
        "" :
        "hidden") + 
      "\">" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
      "</span>\n\t\t</span>\n\t\t<span class=\"nav-text small visible-open fw-semibold truncate-text\">[[global:header.notifications]]</span>\n\t</span>\n\t<span component=\"notifications/count\" class=\"visible-open badge rounded-1 bg-primary " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
        "" :
        "hidden") + 
      "\">" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
      "</span>\n</a>\n<ul class=\"notifications-dropdown dropdown-menu p-1 shadow\">\n\t<li>\n\t\t<div component=\"notifications/list\" class=\"list-container notification-list overscroll-behavior-contain pe-1 ff-base\">\n\t\t\t<div class=\"mb-2 p-1\">\n\t\t\t\t<div class=\"d-flex gap-1 justify-content-between\">\n\t\t\t\t\t<div class=\"d-flex gap-2 flex-grow-1 placeholder-wave\">\n\t\t\t\t\t\t<div class=\"placeholder\" style=\"width: 32px; height: 32px;\"></div>\n\t\t\t\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t\t\t\t<div class=\"text-sm\">\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-4\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-6\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-7\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-2\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-5\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"text-xs\">\n\t\t\t\t\t\t\t\t\t<div class=\"placeholder placeholder-xs col-6\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"mark-read btn-ghost-sm\" style=\"width: 1.5rem; height: 1.5rem;\">\n\t\t\t\t\t\t\t<i class=\"unread fa fa-2xs fa-circle text-primary\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t<li class=\"dropdown-divider\"></li>\n\t<li>\n\t\t<div class=\"d-flex justify-content-center gap-1 flex-wrap\">\n\t\t\t<a role=\"button\" href=\"#\" class=\"btn btn-sm btn-light mark-all-read flex-fill text-nowrap text-truncate ff-secondary\"><i class=\"fa fa-check-double\"></i> [[notifications:mark_all_read]]</a>\n\t\t\t<a class=\"btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/notifications\"><i class=\"fa fa-list\"></i> [[notifications:see_all]]</a>\n\t\t</div>\n\t</li>\n</ul>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

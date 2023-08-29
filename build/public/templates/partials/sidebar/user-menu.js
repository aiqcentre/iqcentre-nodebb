
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
    return "<label class=\"nav-link nav-btn text-truncate d-flex gap-2 align-items-center\" data-bs-toggle=\"dropdown\" id=\"user_dropdown\" role=\"button\" component=\"header/avatar\">\n\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "20px", guard((context != null) ? context['true'] : null)])) + 
      "\n\t<span id=\"user-header-name\" class=\"nav-text small visible-open fw-semibold\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
      "</span>\n</label>\n<ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"overscroll-behavior-contain user-dropdown dropdown-menu shadow p-1 text-sm ff-base\" aria-labelledby=\"user_dropdown\">\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status " + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
      "\"><span class=\"visually-hidden\">[[global:" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
      "]]</span></span>\n\t\t\t<span class=\"fw-semibold\" component=\"header/username\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
      "</span>\n\t\t</a>\n\t</li>\n\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t<li><h6 class=\"dropdown-header text-xs\">[[global:status]]</h6></li>\n\t<li>\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
      (guard((context != null && context['user'] != null) ? context['user']['online'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"online\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status online\"><span class=\"visually-hidden\">[[global:online]]</span></span>\n\t\t\t<span class=\"flex-grow-1\">[[global:online]]</span>\n\t\t\t<i class=\"fa-solid fa-check text-muted flex-shrink-0\"></i>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
      (guard((context != null && context['user'] != null) ? context['user']['away'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"away\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status away\"><span class=\"visually-hidden\">[[global:away]]</span></span>\n\t\t\t<span class=\"flex-grow-1\">[[global:away]]</span>\n\t\t\t<i class=\"fa-solid fa-check text-muted flex-shrink-0\"></i>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
      (guard((context != null && context['user'] != null) ? context['user']['dnd'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"dnd\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status dnd\"><span class=\"visually-hidden\">[[global:dnd]]</span></span>\n\t\t\t<span class=\"flex-grow-1\">[[global:dnd]]</span>\n\t\t\t<i class=\"fa-solid fa-check text-muted flex-shrink-0\"></i>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
      (guard((context != null && context['user'] != null) ? context['user']['offline'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"offline\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status offline\"><span class=\"visually-hidden\">[[global:invisible]]</span></span>\n\t\t\t<span class=\"flex-grow-1\">[[global:invisible]]</span>\n\t\t\t<i class=\"fa-solid fa-check text-muted flex-shrink-0\"></i>\n\t\t</a>\n\t</li>\n\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/bookmarks\">\n\t\t\t<i class=\"fa fa-fw fa-bookmark text-muted\"></i> <span>[[user:bookmarks]]</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink/edit\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/edit\">\n\t\t\t<i class=\"fa fa-fw fa-edit text-muted\"></i> <span>[[user:edit-profile]]</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink/settings\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/settings\">\n\t\t\t<i class=\"fa fa-fw fa-gear text-muted\"></i> <span>[[user:settings]]</span>\n\t\t</a>\n\t</li>\n\t" + 
      (guard((context != null) ? context['showModMenu'] : null) ?
        "\n\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t<li><h6 class=\"dropdown-header text-xs\">[[pages:moderator-tools]]</h6></li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/flags\">\n\t\t\t<i class=\"fa fa-fw fa-flag text-muted\"></i> <span>[[pages:flagged-content]]</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/post-queue\">\n\t\t\t<i class=\"fa fa-fw fa-list-alt text-muted\"></i> <span>[[pages:post-queue]]</span>\n\t\t</a>\n\t</li>\n\t" + 
          (guard((context != null) ? context['registrationQueueEnabled'] : null) ?
            "\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/registration-queue\">\n\t\t\t<i class=\"fa fa-fw fa-list-alt text-muted\"></i> <span>[[pages:registration-queue]]</span>\n\t\t</a>\n\t</li>\n\t" :
            "") + 
          "\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/ip-blacklist\">\n\t\t\t<i class=\"fa fa-fw fa-ban text-muted\"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t</a>\n\t</li>\n\t" :
        "\n\t" + 
          (guard((context != null) ? context['postQueueEnabled'] : null) ?
            "\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">\n\t\t\t<i class=\"fa fa-fw fa-list-alt text-muted\"></i> <span>[[pages:post-queue]]</span>\n\t\t</a>\n\t</li>\n\t" :
            "") + 
          "\n\t") + 
      "\n\n\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t<li component=\"user/logout\">\n\t\t<form method=\"post\" action=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/logout\">\n\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\">\n\t\t\t<input type=\"hidden\" name=\"noscript\" value=\"true\">\n\t\t\t<button type=\"submit\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw fa-sign-out text-muted\"></i><span>[[global:logout]]</span>\n\t\t\t</button>\n\t\t</form>\n\t</li>\n</ul>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

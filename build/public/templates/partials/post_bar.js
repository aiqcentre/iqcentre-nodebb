
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
    return "<div class=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['stickyToolbar'] : null) ?
        "sticky-tools" :
        "") + 
      "\">\n\t<nav class=\"d-flex flex-nowrap my-2 p-0 border-0 rounded topic-main-buttons\">\n\t\t<div class=\"d-flex flex-row p-2 text-bg-light border rounded w-100 align-items-center\">\n\t\t\t<ul class=\"d-flex list-unstyled me-auto mb-0 gap-2 align-items-center flex-wrap\">\n\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t\t\t<button component=\"topic/mark-unread\" class=\"btn-ghost-sm d-flex gap-2 align-items-center\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-inbox text-primary\"></i>\n\t\t\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:mark_unread]]</span>\n\t\t\t\t</button>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"topic/following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-o link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:watching]]</span>\n\t\t</span>\n\n\t\t<span component=\"topic/not-following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:not-watching]]</span>\n\t\t</span>\n\n\t\t<span component=\"topic/ignoring/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:ignoring]]</span>\n\t\t</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/following\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-o\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/not-following\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:not-watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:not-watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/ignoring\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:ignoring]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:ignoring.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\t\t\t\t<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span class=\"d-flex gap-2 align-items-center\">\n\t\t\t<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:sort_by]]</span>\n\t\t</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:oldest_to_newest]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw\"></i> \n\t\t</a>\n\t\t</li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:newest_to_oldest]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw\"></i> \n\t\t</a>\n\t\t</li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:most_votes]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw\"></i> \n\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n\n\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-gear link-primary\"></i>\n\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:thread_tools.title]]</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\n\t\t\t\t" + 
      ((!guard((context != null) ? context['feeds:disableRSS'] : null) && guard((context != null) ? context['rssFeedUrl'] : null)) ?
        "\n\t\t\t\t<a class=\"btn-ghost-sm d-none d-lg-flex align-self-stretch\" target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
          "\"><i class=\"fa fa-rss text-primary\"></i></a>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n\t\t\t\t<div class=\"hidden-xs\">\n\t\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</ul>\n\t\t\t<div component=\"topic/reply/container\" class=\"btn-group action-bar " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" class=\"d-flex align-items-center btn btn-sm btn-primary px-3 fw-semibold \" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply d-sm-block d-md-none\"></i><span class=\"d-none d-md-block\"> [[topic:reply]]</span></a>\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n\t\t" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\n\t\t<a component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n\t\t" :
                "") + 
              "\n\t") + 
          "\n\n\t" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\n\t<a component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n\t") + 
          "\n" :
        "\n\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n\t<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"d-flex align-items-center fw-semibold btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\n\t") + 
          "\n") + 
      "\n\t\t</div>\n\t</nav>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

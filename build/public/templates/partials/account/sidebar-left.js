
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
    return "<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200\">\n\t<div class=\"sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1\" style=\"top: 1rem;z-index: 1;\">\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"btn-ghost fw-semibold " + 
      (guard((context != null && context['template'] != null) ? context['template']['account/profile'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:about]]</div>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\"class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/posts'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/best'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/controversial'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/upvoted'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/downvoted'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/bookmarks'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:posts]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)])) + 
      "</span>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/topics'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/watched'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/ignored'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:topics]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)])) + 
      "</span>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/groups'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:header.groups]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/followers'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:followers]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/following'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:following]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/categories\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/categories'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:watched_categories]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/blocks'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:blocked-users]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)])) + 
          "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/uploads\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/uploads'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:uploads]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)])) + 
          "</span>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      ((guard((context != null) ? context['loggedIn'] : null) && (!guard((context != null) ? context['isSelf'] : null) && !guard((context != null) ? context['banned'] : null))) ?
        "\n\t\t<hr class=\"w-100 my-2\"/>\n\t\t<a href=\"#\" component=\"account/flag\" class=\"btn-ghost-sm\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-flag text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:flag-profile]]</div>\n\t\t</a>\n\t\t<a href=\"#\" component=\"account/block\" class=\"btn-ghost-sm " + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "hidden" :
            "") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-ban text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:block_user]]</div>\n\t\t</a>\n\t\t<a href=\"#\" component=\"account/unblock\" class=\"btn-ghost-sm " + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-ban text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:unblock_user]]</div>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<hr class=\"w-100 my-2\"/>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\" class=\"btn-ghost-sm text-xs\n\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/edit'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:edit-profile]]</div>\n\t\t</a>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\" class=\"btn-ghost-sm text-xs\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/settings'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:settings]]</div>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\" class=\"btn-ghost-sm text-xs plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          " " + 
          ((guard((context != null) ? context['url'] : null) == guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['url'] : null)) ?
            "active" :
            "") + 
          "\" id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</div>\n\t\t</a>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

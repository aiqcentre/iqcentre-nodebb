
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
    return "<div data-widget-area=\"header\">\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"users\">\n\t<h3 class=\"fw-semibold\">[[global:users]]</h3>\n\t<div class=\"d-flex flex-wrap justify-content-between\">\n\t\t<div class=\"mb-2 mb-md-0\">\n\t\t<div component=\"user/list/menu\" class=\"text-sm d-flex flex-wrap align-items-center gap-2\">\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=online\">[[global:online]]</a>\n\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=sort-posts\">[[users:top_posters]]</a>\n\n\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=sort-reputation\">[[users:most_reputation]]</a>\n\t") + 
      "\n\n\t" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=flagged\">[[users:most_flags]]</a>\n\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=banned\">[[user:banned]]</a>\n\t" :
        "") + 
      "\n</div>\n\t\t</div>\n\t\t<div class=\"\">\n\t\t\t<div class=\"d-flex justify-content-end gap-2\">\n\t\t\t\t" + 
      (guard((context != null) ? context['showInviteButton'] : null) ?
        "\n\t\t\t\t<button component=\"user/invite\" class=\"btn btn-primary btn-sm text-nowrap\"><i class=\"fa fa-user-plus\"></i> [[users:invite]]</button>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['displayUserSearch'] : null) ?
        "\n\t\t\t\t<div class=\"search\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<input class=\"form-control form-control-sm\" id=\"search-user\" type=\"text\" placeholder=\"[[global:search]]\"/>\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" type=\"button\">\n\t\t\t\t\t\t\t<i component=\"user/search/icon\" class=\"fa fa-search\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<hr/>\n\n\t<div id=\"users-container\" class=\"users-container row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4\">\n\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\n\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n\t\t<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t<li class=\"page-item next float-end " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n\t") + 
      "\n</div>\n</div>\n";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\" class=\"btn-ghost align-items-start justify-content-start p-2 ff-base\">\n\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "48px", guard((context != null) ? context['true'] : null), "flex-shrink-0"])) + 
          "\n\t<div class=\"d-flex flex-column text-truncate\">\n\t\t<div class=\"fw-semibold text-truncate\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['displayname'] : null)) + 
          "</div>\n\t\t<div class=\"text-xs text-muted text-truncate\">@" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</div>\n\n\t\t" + 
          (guard((context != null) ? context['section_online'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\n\t\t<div class=\"text-xs text-muted text-truncate\">\n\t\t\t<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)])) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t</div>\n</a>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

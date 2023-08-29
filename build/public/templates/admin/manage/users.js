
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
    return "<div class=\"manage-users d-flex flex-column gap-2 px-lg-4 h-100\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/users:manage-users]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex align-items-center gap-3 flex-wrap\">\r\n\t\t\t<div class=\"d-flex gap-1 align-items-stretch flex-wrap\">\r\n\t\t\t\t<div class=\"input-group flex-nowrap w-auto\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-sm w-auto\" placeholder=\"[[global:search]]\" id=\"user-search\" value=\"" + 
      __escape(guard((context != null) ? context['query'] : null)) + 
      "\">\r\n\t\t\t\t\t<span class=\"input-group-text px-2 search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<select id=\"user-search-by\" class=\"form-select form-select-sm w-auto\">\r\n\t\t\t\t\t<option value=\"username\" " + 
      (guard((context != null) ? context['searchBy_username'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.username]]</option>\r\n\t\t\t\t\t<option value=\"email\" " + 
      (guard((context != null) ? context['searchBy_email'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.email]]</option>\r\n\t\t\t\t\t<option value=\"uid\" " + 
      (guard((context != null) ? context['searchBy_uid'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.uid]]</option>\r\n\t\t\t\t\t<option value=\"ip\" " + 
      (guard((context != null) ? context['searchBy_ip'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.ip]]</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t<select id=\"results-per-page\" class=\"form-select form-select-sm w-auto\">\r\n\t\t\t\t\t<option value=\"50\">[[admin/manage/users:50-per-page]]</option>\r\n\t\t\t\t\t<option value=\"100\">[[admin/manage/users:100-per-page]]</option>\r\n\t\t\t\t\t<option value=\"250\">[[admin/manage/users:250-per-page]]</option>\r\n\t\t\t\t\t<option value=\"500\">[[admin/manage/users:500-per-page]]</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t<div class=\"btn-group\" id=\"filter-by\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\r\n\t\t\t\t\t\t[[admin/manage/users:filter-by]] <span class=\"caret\"></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t<li data-filter-by=\"unverified\" role=\"presentation\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_unverified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.unvalidated]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li data-filter-by=\"verified\" role=\"presentation\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_verified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.validated]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li data-filter-by=\"banned\" role=\"presentation\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_banned'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.banned]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm dropdown-toggle\" id=\"action-dropdown\" data-bs-toggle=\"dropdown\" type=\"button\" disabled=\"disabled\">[[admin/manage/users:edit]] <span class=\"caret\"></span></button>\r\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1\">\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 validate-email\"><i class=\"fa fa-fw fa-check\"></i> [[admin/manage/users:validate-email]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 send-validation-email\"><i class=\"fa fa-fw fa-mail-forward\"></i> [[admin/manage/users:send-validation-email]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 password-reset-email\"><i class=\"fa fa-fw fa-key\"></i> [[admin/manage/users:password-reset-email]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 force-password-reset\"><i class=\"fa fa-fw fa-unlock-alt\"></i> [[admin/manage/users:force-password-reset]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 manage-groups\"><i class=\"fa fa-fw fa-users\"></i> [[admin/manage/users:manage-groups]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 set-reputation\"><i class=\"fa fa-fw fa-star\"></i> [[admin/manage/users:set-reputation]]</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown-divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 ban-user\"><i class=\"fa fa-fw fa-gavel\"></i> [[admin/manage/users:ban]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 ban-user-temporary\"><i class=\"fa fa-fw fa-clock-o\"></i> [[admin/manage/users:temp-ban]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 unban-user\"><i class=\"fa fa-fw fa-comment-o\"></i> [[admin/manage/users:unban]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 reset-lockout\"><i class=\"fa fa-fw fa-unlock\"></i> [[admin/manage/users:reset-lockout]]</a></li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 delete-user\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 delete-user-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete-content]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"dropdown-item rounded-1 delete-user-and-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:purge]]</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t<button class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\"><i class=\"fa fa-gear text-primary\"></i></button>\r\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1\">\r\n\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"create\">[[admin/manage/users:create]]</a></li>\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showInviteButton'] : null) ?
        "<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"user/invite\">[[admin/manage/users:invite]]</a></li>" :
        "") + 
      "\r\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"#\" class=\"dropdown-item rounded-1 export-csv\">[[admin/manage/users:download-csv]]</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row flex-grow-1\">\r\n\t\t<div class=\"col-lg-12 d-flex flex-column gap-2\">\r\n\t\t\t<div class=\"search " + 
      __escape(guard((context != null) ? context['search_display'] : null)) + 
      "\">\r\n\t\t\t\t<i class=\"fa fa-spinner fa-spin hidden\"></i>\r\n\r\n\t\t\t\t<div id=\"user-found-notify\" class=\"badge text-bg-light " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "" :
        "hidden") + 
      "\">[[admin/manage/users:alerts.x-users-found, " + 
      __escape(guard((context != null) ? context['matchCount'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['timing'] : null)) + 
      "]]</div>\r\n\r\n\t\t\t\t<div id=\"user-notfound-notify\" class=\"badge text-bg-warning " + 
      (guard((context != null) ? context['query'] : null) ?
        "" :
        "hidden") + 
      " " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/users:search.not-found]]</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"table-responsive flex-grow-1\">\r\n\t\t\t\t<table class=\"table users-table text-sm\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th><input component=\"user/select/all\" type=\"checkbox\"/></th>\r\n\t\t\t\t\t\t\t<th class=\"text-end text-muted\">[[admin/manage/users:users.uid]]</th>\r\n\t\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\r\n\t\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.email]]</th>\r\n\t\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.ip]]</th>\r\n\t\t\t\t\t\t\t<th data-sort=\"postcount\" class=\"text-end pointer text-nowrap\">[[admin/manage/users:users.postcount]] " + 
      (guard((context != null) ? context['sort_postcount'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t\t<th data-sort=\"reputation\" class=\"text-end pointer text-nowrap\">[[admin/manage/users:users.reputation]] " + 
      (guard((context != null) ? context['sort_reputation'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t\t<th data-sort=\"flags\" class=\"text-end pointer text-nowrap\">[[admin/manage/users:users.flags]] " + 
      (guard((context != null) ? context['sort_flags'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t\t<th data-sort=\"joindate\" class=\"pointer text-nowrap\">[[admin/manage/users:users.joined]] " + 
      (guard((context != null) ? context['sort_joindate'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t\t<th data-sort=\"lastonline\" class=\"pointer text-nowrap\">[[admin/manage/users:users.last-online]] " + 
      (guard((context != null) ? context['sort_lastonline'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\r\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\r\n\t\t<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t<li class=\"page-item next float-end " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\r\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\r\n\t\t<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n\t") + 
      "\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<tr class=\"user-row align-middle\">\r\n\t\t\t\t\t\t\t<th><input component=\"user/select/single\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" type=\"checkbox\"/></th>\r\n\t\t\t\t\t\t\t<td class=\"text-end\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<i title=\"[[admin/manage/users:users.banned]]\" class=\"ban fa fa-gavel text-danger" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['banned'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"administrator fa fa-shield text-success" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['administrator'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\"> " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class=\"text-nowrap \">\r\n\t\t\t\t\t\t\t\t<div class=\"d-flex flex-column gap-1\">\r\n\t\t\t\t\t\t\t\t\t" + 
          ((!guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null) && !guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) ?
            "\r\n\t\t\t\t\t\t\t\t\t<em class=\"text-muted\">[[admin/manage/users:users.no-email]]</em>\r\n\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t<span class=\"validated " + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null) ?
                "" :
                " hidden") + 
              "\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-check text-success\" title=\"[[admin/manage/users:users.validated]]\" data-bs-toggle=\"tooltip\"></i>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null) ?
                __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) :
                "") + 
              "\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"validated-by-admin hidden\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-check text-success\" title=\"[[admin/manage/users:users.validated]]\" data-bs-toggle=\"tooltip\"></i>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null) ?
                __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) :
                "") + 
              "\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"pending " + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:pending'] : null) ?
                "" :
                " hidden") + 
              "\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-clock-o text-warning\" title=\"[[admin/manage/users:users.validation-pending]]\" data-bs-toggle=\"tooltip\"></i>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) + 
              "\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"expired " + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:expired'] : null) ?
                "" :
                " hidden") + 
              "\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-times text-danger\" title=\"[[admin/manage/users:users.validation-expired]]\" data-bs-toggle=\"tooltip\"></i>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) + 
              "\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"notvalidated " + 
              ((guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:expired'] : null) || (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:pending'] : null) || guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null))) ?
                " hidden" :
                "") + 
              "\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-times text-danger\" title=\"[[admin/manage/users:users.not-validated]]\" data-bs-toggle=\"tooltip\"></i>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailToConfirm'] : null)) + 
              "\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ips'] != null) ? context['users'][key0]['ips']['length'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm\" data-bs-toggle=\"dropdown\"><i class=\"fa fa-fw fa-list text-muted\"></i></button>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu p-1\">\r\n\t\t\t\t\t\t\t\t\t\t" + 
              iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ips'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"d-flex gap-1 " + 
                  (index === length - 1 ?
                    "" :
                    "mb-1") + 
                  "\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item rounded-1\">" + 
                  __escape(guard(value)) + 
                  "</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<button data-ip=\"" + 
                  __escape(guard(value)) + 
                  "\" onclick=\"navigator.clipboard.writeText(this.getAttribute('data-ip'))\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-copy\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class=\"text-end\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)])) + 
          "</td>\r\n\t\t\t\t\t\t\t<td class=\"text-end\" component=\"user/reputation\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)])) + 
          "</td>\r\n\t\t\t\t\t\t\t<td class=\"text-end\">" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null) ?
            __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) :
            "0") + 
          "</td>\r\n\t\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
          "\"></span></td>\r\n\t\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
          "\"></span></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\r\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

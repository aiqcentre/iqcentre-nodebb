
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb mb-0 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
            "justify-content-center" :
            "") + 
          "\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n<div class=\"d-flex flex-column flex-md-row\">\n\t<div class=\"flex-shrink-0 d-flex flex-column gap-3 border-end-md text-sm mb-3 pe-4\" style=\"flex-basis: 240px !important;\">\n\t\t<div class=\"d-grid gap-1\">\n\t\t\t<a class=\"btn btn-ghost border btn-sm justify-content-start\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['type_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['targetId'] : null)) + 
      "\">\n\t\t\t\t<i class=\"fa fa-fw fa-external-link text-primary\"></i>\n\t\t\t\t[[flags:go-to-target]]\n\t\t\t</a>\n\n\t\t\t" + 
      (guard((context != null && context['target'] != null) ? context['target']['uid'] : null) ?
        "\n\t\t\t<div class=\"btn-group dropend\" data-uid=\"" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-ghost border btn-sm justify-content-start dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-street-view text-primary\"></i>\n\t\t\t\t\t[[flags:flagged-user]]\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">[[flags:view-profile]]</a></li>\n\t\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"chat\">[[flags:start-new-chat]]</a></li>\n\t\t\t\t\t") + 
          "\n\t\t\t\t\t<li class=\"dropdown-divider\"></li>\n\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['ban'] : null) ?
            "\n\t\t\t\t\t<li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                "hidden" :
                "") + 
              "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"ban\">[[user:ban_account]]</a></li>\n\t\t\t\t\t<li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                "" :
                "hidden") + 
              "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"unban\">[[user:unban_account]]</a></li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['mute'] : null) ?
            "\n\t\t\t\t\t<li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                "hidden" :
                "") + 
              "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"mute\">[[user:mute_account]]</a></li>\n\t\t\t\t\t<li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                "" :
                "hidden") + 
              "\"><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"unmute\">[[user:unmute_account]]</a></li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['admin:users'] : null) ?
            "\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-account\">[[user:delete_account_as_admin]]</a></li>\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-content\">[[user:delete_content]]</a></li>\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-action=\"delete-all\">[[user:delete_all]]</a></li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<a class=\"btn btn-ghost border btn-sm justify-content-start\" href=\"#\" data-action=\"assign\">\n\t\t\t\t<i class=\"fa fa-fw fa-id-card-o text-primary\"></i>\n\t\t\t\t[[flags:assign-to-me]]\n\t\t\t</a>\n\n\t\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['post'] : null) ?
        "\n\t\t\t" + 
          (guard((context != null && context['target'] != null) ? context['target']['deleted'] : null) ?
            "\n\t\t\t<a class=\"d-flex gap-2 align-items-center btn btn-sm btn-danger border border-secondary-subtle text-start\" href=\"#\" data-action=\"purge-post\"><i class=\"fa fa-fw fa-trash\"></i> [[flags:purge-post]]</a>\n\t\t\t<a class=\"d-flex gap-2 align-items-center btn btn-sm btn-outline-success border border-secondary-subtle text-start\" href=\"#\" data-action=\"restore-post\"><i class=\"fa fa-fw fa-reply\"></i><i class=\"fa fa-trash\"></i> [[flags:restore-post]]</a>\n\t\t\t" :
            "\n\t\t\t<a class=\"d-flex gap-2 align-items-center btn btn-sm btn-outline-danger border border-secondary-subtle text-start\" href=\"#\" data-action=\"delete-post\"><i class=\"fa fa-fw fa-trash\"></i> [[flags:delete-post]]</a>\n\t\t\t") + 
          "\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\n\t\t<form class=\"d-flex flex-column gap-3\" id=\"attributes\">\n\t\t\t<div>\n\t\t\t\t<label class=\"text-muted fw-semibold\" for=\"state\">[[flags:state]]</label>\n\t\t\t\t<select class=\"form-select form-select-sm\" id=\"state\" name=\"state\" disabled>\n\t\t\t\t\t<option value=\"open\">[[flags:state-open]]</option>\n\t\t\t\t\t<option value=\"wip\">[[flags:state-wip]]</option>\n\t\t\t\t\t<option value=\"resolved\">[[flags:state-resolved]]</option>\n\t\t\t\t\t<option value=\"rejected\">[[flags:state-rejected]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label class=\"text-muted fw-semibold\" for=\"assignee\">[[flags:assignee]]</label>\n\t\t\t\t<select class=\"form-control form-control-sm\" id=\"assignee\" name=\"assignee\" disabled>\n\t\t\t\t\t<option value=\"\">[[flags:no-assignee]]</option>\n\t\t\t\t\t" + 
      compiled.blocks['assignees'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"d-grid\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-action=\"update\">[[flags:update]]</button>\n\t\t\t</div>\n\t\t</form>\n\n\t\t<div class=\"overflow-auto\" component=\"flag/history\" style=\"max-height: 30rem;\">\n\t\t\t<h2 class=\"h6 fw-bold\">[[flags:history]]</h2>\n\t\t\t" + 
      (guard((context != null && context['history'] != null) ? context['history']['length'] : null) ?
        "" :
        "\n\t\t\t<div class=\"alert alert-success text-center\">[[flags:no-history]]</div>\n\t\t\t") + 
      "\n\t\t\t" + 
      compiled.blocks['history'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</div>\n\t<div class=\"flex-grow-1 ps-md-2 ps-lg-5\" style=\"min-width:0;\">\n\t\t<div class=\"d-flex flex-column gap-4\">\n\t\t\t<h2 class=\"h6 fw-bold\">\n\t\t\t\t" + 
      __escape(guard((context != null) ? context['target_readable'] : null)) + 
      "\n\t\t\t</h2>\n\t\t\t<div component=\"flag/content\" class=\"d-flex flex-column gap-1 pb-3 border-bottom\">\n\t\t\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['post'] : null) ?
        "\n\t\t\t\t<div class=\"d-flex gap-2 align-items-center\">\n\t\t\t\t\t<a class=\"d-flex text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['target'] != null) ? context['target']['user'] : null), "16px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['username'] : null)) + 
          "</a>\n\t\t\t\t\t<span class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t\t</div>\n\t\t\t\t<blockquote>" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['content'] : null)) + 
          "</blockquote>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['user'] : null) ?
        "\n\t\t\t\t<div class=\"d-flex gap-2\">\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['target'] : null), "16px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['username'] : null)) + 
          "</a>\n\t\t\t\t</div>\n\t\t\t\t<blockquote>" + 
          (guard((context != null && context['target'] != null) ? context['target']['aboutme'] : null) ?
            __escape(guard((context != null && context['target'] != null) ? context['target']['aboutme'] : null)) :
            "<em>[[flags:target-aboutme-empty]]</em>") + 
          "</blockquote>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['empty'] : null) ?
        "\n\t\t\t\t<div class=\"alert alert-warning\" role=\"alert\">[[flags:target-purged]]</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\t\t\t<div class=\"flag/reports\" class=\"pb-4 border-bottom\">\n\t\t\t\t<h2 class=\"h6 fw-bold\">[[flags:reports]]</h2>\n\t\t\t\t<ul class=\"list-unstyled mt-4\">\n\t\t\t\t\t" + 
      compiled.blocks['reports'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"pb-4 border-bottom\">\n\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t<h2 class=\"h6 fw-bold me-auto mb-0\">[[flags:notes]]</h2>\n\t\t\t\t\t<button class=\"btn btn-ghost border\" data-action=\"addEditNote\">[[flags:add-note]]</button>\n\t\t\t\t</div>\n\t\t\t\t<ul component=\"flag/notes\" class=\"list-unstyled mt-4\">\n\t\t\t\t\t" + 
      (guard((context != null && context['notes'] != null) ? context['notes']['length'] : null) ?
        "" :
        "\n\t\t\t\t\t<em>[[flags:no-notes]]</em>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      compiled.blocks['notes'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n\t\t\t<span class=\"fw-semibold\" itemprop=\"name\">" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "</span>\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'assignees': function assignees(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['assignees'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['assignees'] != null && context['assignees'][key0] != null) ? context['assignees'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['assignees'] != null && context['assignees'][key0] != null) ? context['assignees'][key0]['username'] : null)) + 
          "</option>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'history': function history(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['history'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<div class=\"d-flex flex-column gap-1\">\n\t\t\t\t<div class=\"d-flex gap-2 align-items-center\">\n\t\t\t\t\t<a class=\"d-flex text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['user'] : null), "16px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['username'] : null)) + 
          "</a>\n\t\t\t\t\t<span class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['datetimeISO'] : null)) + 
          "\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t" + 
          iter(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['fields'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t[[flags:" + 
              __escape(key) + 
              "]]" + 
              (guard(value) ?
                " &rarr; <span class=\"fw-semibold\">" + 
                  __escape(guard(value)) + 
                  "</span>" :
                "") + 
              "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t" + 
          iter(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['meta'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t" + 
              guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['key'] : null) + 
              (guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['value'] : null) ?
                " &rarr; <span class=\"fw-semibold\">" + 
                  __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['value'] : null)) + 
                  "</span>" :
                "") + 
              "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'reports': function reports(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['reports'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li class=\"d-flex flex-column gap-1\" component=\"flag/report\" data-timestamp=\"" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['timestamp'] : null)) + 
          "\">\n\t\t\t\t\t\t<div class=\"d-flex gap-2 align-items-center\">\n\t\t\t\t\t\t\t<a class=\"d-flex text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null && context['reports'][key0]['reporter'] != null) ? context['reports'][key0]['reporter']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['reporter'] : null), "16px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null && context['reports'][key0]['reporter'] != null) ? context['reports'][key0]['reporter']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null && context['reports'][key0]['reporter'] != null) ? context['reports'][key0]['reporter']['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t\t<span class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['value'] : null)) + 
          "</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notes': function notes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li class=\"d-flex flex-column gap-1\" component=\"flag/note\" data-datetime=\"" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['datetime'] : null)) + 
          "\" data-index=\"" + 
          __escape(index) + 
          "\">\n\t\t\t\t\t\t<div class=\"d-flex gap-2 align-items-center\">\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['user'] : null), "16px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t\t<span class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['datetimeISO'] : null)) + 
          "\"></span>\n\t\t\t\t\t\t\t<div class=\" ms-auto flex-shrink-0\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-sm btn-link\" data-action=\"addEditNote\"><i class=\"fa fa-pencil\"></i></a>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-sm btn-link\" data-action=\"delete-note\"><i class=\"fa fa-trash text-danger\"></i></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['content'] : null)) + 
          "</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

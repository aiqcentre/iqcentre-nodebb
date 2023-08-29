
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
    return "<div class=\"d-flex gap-1 align-items-stretch\">\n\t<!-- search -->\n\t<button class=\"btn-ghost-sm\" component=\"chat/room/search/toggle\" data-manual-tooltip=\"1\" title=\"[[global:header.search]]\">\n\t\t<i class=\"fa fa-search text-muted\"></i>\n\t</button>\n\t<div component=\"chat/room/search/container\" class=\"position-relative hidden align-self-center\">\n\t\t<input component=\"chat/room/search\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" style=\"width: 150px;\">\n\t\t<a component=\"chat/room/search/clear\" href=\"#\" class=\"hidden px-2 py-1 position-absolute top-50 end-0 translate-middle-y\">\n\t\t\t<i class=\"fa fa-times text-muted opacity-75\"></i>\n\t\t</a>\n\t</div>\n\n\n\t<!-- notification dropdown -->\n\t<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.notification-settings]]\" component=\"chat/notification/setting\">\n\t\t<button class=\"btn-ghost-sm position-relative\" data-bs-toggle=\"dropdown\">\n\t\t\t<i class=\"fa fa-bell text-muted\"></i>\n\t\t\t<span class=\"position-absolute top-0 end-0 text-xs text-muted opacity-50\" style=\"font-size: 10px!important; padding: 1px; line-height: 10px;\">\n\t\t\t\t<i component=\"chat/notification/setting/icon\" class=\"fa " + 
      __escape(guard((context != null) ? context['notificationOptionsIcon'] : null)) + 
      "\"></i>\n\t\t\t</span>\n\t\t</button>\n\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\">\n\t\t\t" + 
      compiled.blocks['notificationOptions'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\t</div>\n\n\t<!-- manage/options dropdown -->\n\t<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.options]]\">\n\t\t<button class=\"btn-ghost-sm\" data-bs-toggle=\"dropdown\" component=\"chat/controlsToggle\">\n\t\t\t<i class=\"fa fa-gear text-muted\"></i>\n\t\t</button>\n\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" component=\"chat/controls\">\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"manage\">\n\t\t\t\t\t<i class=\"fa fa-fw text-muted fa-cog\"></i> [[modules:chat.manage-room]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t" + 
      (guard((context != null) ? context['isOwner'] : null) ?
        "\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"rename\">\n\t\t\t\t\t<i class=\"fa fa-fw text-muted fa-edit\"></i> [[modules:chat.rename-room]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"leave\">\n\t\t\t\t\t<i class=\"fa fa-fw text-muted fa-sign-out\"></i> [[modules:chat.leave-room]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t" + 
      ((guard((context != null) ? context['public'] : null) && guard((context != null) ? context['isAdmin'] : null)) ?
        "\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-action=\"delete\">\n\t\t\t\t\t<i class=\"fa fa-fw text-danger fa-trash\"></i> [[modules:chat.delete-room]]\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\t\t</ul>\n\t</div>\n\n\t<!-- users toggle -->\n\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n\t<div component=\"chat/user/list/btn\" class=\"btn-ghost-sm d-none d-lg-flex flex-nowrap gap-3\" title=\"[[modules:chat.view-users-list]]\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\">\n\t\t<div class=\"d-flex text-nowrap\">\n\t\t\t" + 
          (guard((context != null && context['users'] != null) ? context['users']['0'] : null) ?
            "\n\t\t\t<span style=\"width: 18px; z-index: 3;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['0'] != null) ? context['users']['0']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['0'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n\t\t\t" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['users'] != null) ? context['users']['1'] : null) ?
            "\n\t\t\t<span style=\"width: 18px; z-index: 2;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['1'] != null) ? context['users']['1']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['1'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n\t\t\t" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['users'] != null) ? context['users']['2'] : null) ?
            "\n\t\t\t<span style=\"width: 18px; z-index: 1;\" class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['users'] != null && context['users']['2'] != null) ? context['users']['2']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users']['2'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n\t\t\t" :
            "") + 
          "\n\t\t</div>\n\t\t" + 
          __escape(guard((context != null) ? context['userCount'] : null)) + 
          "\n\t</div>\n\t" :
        "") + 
      "\n</div>\n";
  }

  compiled.blocks = {
    'notificationOptions': function notificationOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notificationOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li>\n\t\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" data-value=\"" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['value'] : null)) + 
          "\" data-icon=\"" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['icon'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"d-flex flex-column gap-1\">\n\t\t\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['label'] : null)) + 
          "</div>\n\t\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-check " + 
          (guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['selected'] : null) ?
            "" :
            "hidden") + 
          "\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" + 
          (index === 0 ?
            "\n\t\t\t\t\t\t<div component=\"chat/notification/setting/sub-label\" class=\"text-sm text-muted\">" + 
              __escape(guard((context != null && context['notificationOptions'] != null && context['notificationOptions'][key0] != null) ? context['notificationOptions'][key0]['subLabel'] : null)) + 
              "</div>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</li>\n\n\t\t\t" + 
          (index === 0 ?
            "\n\t\t\t<li><hr class=\"dropdown-divider\"></li>\n\t\t\t" :
            "") + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

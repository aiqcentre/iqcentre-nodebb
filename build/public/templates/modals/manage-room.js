
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
    return "<div class=\"\">\r\n\t<label class=\"form-label\">[[modules:chat.add-user]]</label>\r\n\t<input component=\"chat/manage/user/add/search\" class=\"form-control\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" />\r\n\t<p class=\"text-danger\"></p>\r\n\t<p class=\"form-text\">[[modules:chat.add-user-help]]</p>\r\n\r\n\t<hr />\r\n\r\n\t<label class=\"form-label\">[[global:users]]</label>\r\n\t<input component=\"chat/manage/user/list/search\" class=\"form-control mb-1\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" />\r\n\t<ul component=\"chat/manage/user/list\" class=\"list-group overflow-auto pe-1 mb-3\" style=\"max-height: 300px;\">\r\n\t\t<li class=\"list-group-item\"><i class=\"fa fa-spinner fa-spin\"></i> [[modules:chat.retrieving-users]]</li>\r\n\t</ul>\r\n\r\n\t" + 
      (guard((context != null && context['user'] != null) ? context['user']['isAdmin'] : null) ?
        "\r\n\t<hr/>\r\n\t<div class=\"d-flex gap-2 mb-3 align-items-center justify-content-between\">\r\n\t\t<label class=\"form-label text-nowrap mb-0\">[[modules:chat.default-notification-setting]]</label>\r\n\t\t<select component=\"chat/room/notification/setting\" class=\"form-select\" style=\"width: 200px;\">\r\n\t\t\t<option value=\"1\" " + 
          ((guard((context != null && context['room'] != null) ? context['room']['notificationSetting'] : null) == "1") ?
            "selected" :
            "") + 
          ">[[modules:chat.notification-setting-none]]</option>\r\n\t\t\t<option value=\"2\" " + 
          ((guard((context != null && context['room'] != null) ? context['room']['notificationSetting'] : null) == "2") ?
            "selected" :
            "") + 
          ">[[modules:chat.notification-setting-at-mention-only]]</option>\r\n\t\t\t<option value=\"3\" " + 
          ((guard((context != null && context['room'] != null) ? context['room']['notificationSetting'] : null) == "3") ?
            "selected" :
            "") + 
          ">[[modules:chat.notification-setting-all-messages]]</option>\r\n\t\t</select>\r\n\t</div>\r\n\r\n\t" + 
          (guard((context != null && context['room'] != null) ? context['room']['public'] : null) ?
            "\r\n\r\n\t<label class=\"form-label\">[[modules:chat.select-groups]]</label>\r\n\r\n\t<select component=\"chat/room/groups\" class=\"form-select mb-3\" multiple size=\"10\">\r\n\t\t" + 
              compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
              "\r\n\t</select>\r\n\t" :
            "") + 
          "\r\n\t<div class=\"d-flex justify-content-end\">\r\n\t\t<button component=\"chat/manage/save\" class=\"btn btn-sm btn-primary\">[[global:save]]</button>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\" " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

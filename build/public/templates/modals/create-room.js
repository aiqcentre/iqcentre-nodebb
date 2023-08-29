
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
    return "<div class=\"mb-3\">\r\n\t<div class=\"mb-3\">\r\n\t\t<label class=\"form-label text-nowrap\">[[modules:chat.room-name-optional]]</label>\r\n\t\t<input component=\"chat/room/name\" class=\"form-control\" />\r\n\t</div>\r\n\r\n\t<div class=\"mb-3\">\r\n\t\t<div class=\"dropdown\">\r\n\t\t\t<label class=\"form-label\">[[modules:chat.add-user]]</label>\r\n\t\t\t<input component=\"chat/search\" class=\"form-control\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" data-bs-toggle=\"dropdown\"/>\r\n\t\t\t<ul component=\"chat/search/list\" class=\"dropdown-menu p-1 overflow-auto\" style=\"max-height: 400px;\">\r\n\t\t\t\t<li component=\"chat/search/start-typing\"><a href=\"#\" class=\"dropdown-item rounded-1\">[[admin/menu:search.start-typing]]</a></li>\r\n\t\t\t\t<li component=\"chat/search/no-users\" class=\"hidden\"><a href=\"#\" class=\"dropdown-item rounded-1\">[[users:no-users-found]]</a></li>\r\n\t\t\t\t" + 
      compiled.blocks['searchUsers'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<ul component=\"chat/room/users\" class=\"list-group mt-2\">\r\n\t\t\t" + 
      compiled.blocks['selectedUsers'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\t" + 
      (guard((context != null && context['user'] != null) ? context['user']['isAdmin'] : null) ?
        "\r\n\t<select component=\"chat/room/type\" class=\"form-select mb-3\">\r\n\t\t<option value=\"private\">[[modules:chat.private.option]]</option>\r\n\t\t<option value=\"public\">[[modules:chat.public.option]]</option>\r\n\t</select>\r\n\r\n\t<div component=\"chat/room/public/options\" class=\"hidden\">\r\n\t\t<select component=\"chat/room/groups\" class=\"form-select\" multiple size=\"10\">\r\n\t\t\t" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t</select>\r\n\t\t<p class=\"form-text\">\r\n\t\t\t[[modules:chat.public.groups-help]]\r\n\t\t</p>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n</div>";
  }

  compiled.blocks = {
    'searchUsers': function searchUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['searchUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li component=\"chat/search/user\" data-uid=\"" + 
          __escape(guard((context != null && context['searchUsers'] != null && context['searchUsers'][key0] != null) ? context['searchUsers'][key0]['uid'] : null)) + 
          "\"><a href=\"#\" class=\"dropdown-item rounded-1\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['searchUsers'] != null && context['searchUsers'][key0] != null) ? context['searchUsers'][key0]['username'] : null)) + 
          "</a></li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'selectedUsers': function selectedUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['selectedUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li class=\"list-group-item d-flex gap-2 align-items-center justify-content-between\" component=\"chat/user\" data-uid=\"" + 
          __escape(guard((context != null && context['selectedUsers'] != null && context['selectedUsers'][key0] != null) ? context['selectedUsers'][key0]['uid'] : null)) + 
          "\">\r\n\t\t\t\t<a href=\"#\" class=\"text-reset text-decoration-none\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['selectedUsers'] != null && context['selectedUsers'][key0] != null) ? context['selectedUsers'][key0]['username'] : null)) + 
          "</a>\r\n\t\t\t\t<button component=\"chat/room/users/remove\" class=\"btn btn-sm btn-light\"><i class=\"fa fa-times text-danger\"></i></button>\r\n\t\t\t</li>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

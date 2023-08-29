
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"list-group-item d-flex align-items-center justify-content-between\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['index'] : null)) + 
          "\">\r\n\t<div class=\"d-flex gap-1 align-items-center\">\r\n\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\r\n\t\t<span>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          " <i component=\"chat/manage/user/owner/icon\" class=\"fa fa-star text-warning " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['isOwner'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[modules:chat.owner]]\" data-bs-toggle=\"tooltip\"></i></span>\r\n\t</div>\r\n\t<div class=\"d-flex gap-1\">\r\n\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['canToggleOwner'] : null) ?
            "\r\n\t\t<button class=\"btn btn-sm btn-light\" data-bs-toggle=\"tooltip\" data-action=\"toggleOwner\" data-uid=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\" title=\"[[modules:chat.grant-rescind-ownership]]\"><i class=\"fa fa-star text-warning\"></i></button>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['canKick'] : null) ?
            "\r\n\t\t<button class=\"btn btn-sm btn-light\" data-action=\"kick\" data-uid=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\" data-bs-toggle=\"tooltip\" title=\"[[modules:chat.kick]]\"><i class=\"fa fa-ban text-danger\"></i></button>\r\n\t\t" :
            "") + 
          "\r\n\t</div>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

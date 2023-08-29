
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
    return "<div class=\"btn-group bottom-sheet\">\n\t<button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t<i class=\"fa fa-gear fa-fw\"></i>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm account-sub-links\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/info\">[[user:account_info]]</a>\n\t\t</li>\n\t\t" + 
      ((guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null)) ?
        "\n\t\t<li role=\"separator\" class=\"dropdown-divider\"></li>\n\t\t" :
        "") + 
      "\n\t\t" + 
      (guard((context != null) ? context['canBan'] : null) ?
        "\n\t\t<li class=\"" + 
          (guard((context != null) ? context['banned'] : null) ?
            "hide" :
            "") + 
          "\">\n\t\t\t<a class=\"dropdown-item rounded-1\" component=\"account/ban\" href=\"#\">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class=\"" + 
          (guard((context != null) ? context['banned'] : null) ?
            "" :
            "hide") + 
          "\">\n\t\t\t<a class=\"dropdown-item rounded-1\" component=\"account/unban\" href=\"#\">[[user:unban_account]]</a>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\t\t" + 
      (guard((context != null) ? context['canMute'] : null) ?
        "\n\t\t<li class=\"" + 
          (guard((context != null) ? context['muted'] : null) ?
            "hide" :
            "") + 
          "\">\n\t\t\t<a class=\"dropdown-item rounded-1\" component=\"account/mute\" href=\"#\">[[user:mute_account]]</a>\n\t\t</li>\n\t\t<li class=\"" + 
          (guard((context != null) ? context['muted'] : null) ?
            "" :
            "hide") + 
          "\">\n\t\t\t<a class=\"dropdown-item rounded-1\" component=\"account/unmute\" href=\"#\">[[user:unmute_account]]</a>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\t\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n\t\t<li>\n\t\t\t<a component=\"account/delete-account\" href=\"#\" class=\"dropdown-item rounded-1\">[[user:delete_account_as_admin]]</a>\n\t\t\t<a component=\"account/delete-content\" href=\"#\" class=\"dropdown-item rounded-1\">[[user:delete_content]]</a>\n\t\t\t<a component=\"account/delete-all\" href=\"#\" class=\"dropdown-item rounded-1\">[[user:delete_all]]</a>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\t</ul>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
    return "<div class=\"profile-card\" data-username=\"" + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n    <div class=\"profile-card-cover-container mb-2\">\n        <div class=\"profile-card-cover rounded-top\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n            <div class=\"profile-card-avatar\">\n                <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\">\n                    " + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(value), "50px", guard((context != null) ? context['true'] : null)])) + 
      "\n                </a>\n            </div>\n            <div class=\"dropdown card-fab\">\n                <button type=\"button\" class=\"btn btn-light btn-sm rounded-circle fab dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fa fa-ellipsis-v\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-end p-1\">\n                    " + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n                    " + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n                    " + 
              (guard((context != null) ? context['hasPrivateChat'] : null) ?
                "\n                    <li>\n                        <a class=\"dropdown-item rounded-1\" component=\"account/chat\" href=\"#\">[[user:chat_with, " + 
                  __escape(guard((context != null) ? context['username'] : null)) + 
                  "]]</a>\n                    </li>\n                    <li class=\"dropdown-divider\"></li>\n                    " :
                "") + 
              "\n                    ") + 
          "\n                    ") + 
      "\n                    <li>\n                        <a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"inline-block\" id=\"profile\">[[user:profile]]</a>\n                    </li>\n\n                    <li class=\"dropdown-divider\"></li>\n                    <li><a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\">[[user:following]]</a></li>\n                    <li><a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\">[[user:followers]]</a></li>\n                    <li class=\"dropdown-divider\"></li>\n                    <li><a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\">[[global:topics]]</a></li>\n                    <li><a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\">[[global:posts]]</a></li>\n                    <li><a class=\"dropdown-item rounded-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\">[[global:header.groups]]</a></li>\n\n                    " + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"profile-card-info\">\n        <h1 class=\"fullname\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</h1>\n\n        <div class=\"text-center\">\n            " + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n            <a component=\"account/follow\" href=\"#\" class=\"btn btn-success btn-sm " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "hide" :
            "") + 
          "\">[[user:follow]]</a>\n            <a component=\"account/unfollow\" href=\"#\" class=\"btn btn-warning btn-sm " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "hide") + 
          "\">[[user:unfollow]]</a>\n            " + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n            <a component=\"account/chat\" href=\"#\" class=\"btn btn-primary btn-sm\">[[user:chat]]</a>\n            ") + 
          "\n            ") + 
      "\n        </div>\n\n        " + 
      (guard((context != null) ? context['aboutme'] : null) ?
        "\n        <div class=\"line-clamp-6 text-center\">\n            <span class=\"aboutme\">" + 
          __escape(guard((context != null) ? context['aboutme'] : null)) + 
          "</span>\n        </div>\n        " :
        "") + 
      "\n\n        <div class=\"account-stats\">\n            <div class=\"stat\">\n                <div class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['reputation'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['reputation'] : null)) + 
      "</div>\n                <span class=\"stat-label\">[[global:reputation]]</span>\n            </div>\n\n            <div class=\"stat\">\n                <div class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</div>\n                <span class=\"stat-label\">[[global:posts]]</span>\n            </div>\n\n            <div class=\"stat\">\n                <div class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['followerCount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['followerCount'] : null)) + 
      "</div>\n                <span class=\"stat-label\">[[user:followers]]</span>\n            </div>\n        </div>\n\n        <div class=\"text-center profile-meta\">\n            " + 
      (guard((context != null) ? context['email'] : null) ?
        "\n            <span><i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\"></i></span>\n            <strong><i class=\"fa fa-eye-slash " + 
          __escape(guard((context != null) ? context['emailClass'] : null)) + 
          "\" title=\"[[user:email_hidden]]\"></i> " + 
          __escape(guard((context != null) ? context['email'] : null)) + 
          "</strong>\n            <br/>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null) ? context['websiteName'] : null) ?
        "\n            <span><i class=\"fa fa-edge\" aria-hidden=\"true\"></i></span>\n            <strong><a href=\"" + 
          __escape(guard((context != null) ? context['websiteLink'] : null)) + 
          "\" target=\"_blank\" rel=\"nofollow\">" + 
          __escape(guard((context != null) ? context['websiteName'] : null)) + 
          "</a></strong>\n            <br/>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null) ? context['location'] : null) ?
        "\n            <span><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i></span>\n            <strong>" + 
          __escape(guard((context != null) ? context['location'] : null)) + 
          "</strong>\n            <br/>\n            " :
        "") + 
      "\n        </div>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <li class=\"dropdown-divider\"></li>\n                    <li id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\" class=\"plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          "\"><a class=\"dropdown-item rounded-1\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</a></li>\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

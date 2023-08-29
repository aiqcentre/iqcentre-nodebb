
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
    return (guard((context != null && context['rooms'] != null) ? context['rooms']['length'] : null) ?
        "" :
        "\n<li class=\"text-center p-4 d-flex flex-column\">\n    <div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n\t<div class=\"text-xs fw-semibold text-muted\">[[modules:chat.no_active]]</div>\n</li>\n") + 
      "\n\n" + 
      compiled.blocks['rooms'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['rooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          ((guard((context != null) ? context['loadingMore'] : null) && index === 0) ?
            "\n<hr class=\"my-1\" />\n" :
            "") + 
          "\n<div component=\"chat/recent/room\" data-roomid=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomId'] : null)) + 
          "\" data-full=\"1\" class=\"rounded-1 " + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\">\n\t<div class=\"d-flex gap-1 justify-content-between\">\n\t\t<div class=\"chat-room-btn position-relative d-flex flex-grow-1 gap-2 justify-content-start align-items-start btn-ghost-sm ff-sans\">\n\t\t\t<div class=\"main-avatar\">\n\t\t\t\t" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users']['length'] : null) ?
            "\n\t\t\t\t" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['groupChat'] : null) ?
                "\n\t\t\t\t<div class=\"position-relative stacked-avatars\">\n\t\t\t\t\t<span class=\"text-decoration-none position-absolute\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users']['1'] != null) ? context['rooms'][key0]['users']['1']['userslug'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users']['1'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
                  "</span>\n\t\t\t\t\t<span class=\"text-decoration-none position-absolute\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users']['0'] != null) ? context['rooms'][key0]['users']['0']['userslug'] : null)) + 
                  "\" >" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users']['0'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
                  "</span>\n\t\t\t\t</div>\n\t\t\t\t" :
                "\n\t\t\t\t<span href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users']['0'] != null) ? context['rooms'][key0]['users']['0']['userslug'] : null)) + 
                  "\" class=\"text-decoration-none\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users']['0'] : null), "32px", guard((context != null) ? context['true'] : null)])) + 
                  "</span>\n\t\t\t\t") + 
              "\n\t\t\t\t" :
            "\n\t\t\t\t<span class=\"avatar avatar-rounded text-bg-warning\" component=\"avatar/icon\" style=\"--avatar-size: 32px;\">?</span>\n\t\t\t\t") + 
          "\n\t\t\t</div>\n\n\t\t\t<div class=\"d-flex flex-grow-1 flex-column w-100\">\n\t\t\t\t<div component=\"chat/room/title\" class=\"room-name fw-semibold text-xs\">\n\t\t\t\t" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null) ?
            "\n\t\t\t\t" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null)) + 
              "\n\t\t\t\t" :
            "\n\t\t\t\t\t" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['uid'] : null) ?
                "\n\t\t\t\t\t" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['usernames'] : null)) + 
                  "\n\t\t\t\t\t" :
                "\n\t\t\t\t\t[[modules:chat.no-users-in-room]]\n\t\t\t\t\t") + 
              "\n\t\t\t\t") + 
          "\n\t\t\t\t</div>\n\n\t\t\t\t" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['teaser'] : null) ?
            "\n\t\t\t\t<div class=\"teaser-content text-sm line-clamp-3 text-break\">\n\t\t\t\t\t<span href=\"#\" class=\"text-decoration-none\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['user'] : null), "14px", guard((context != null) ? context['true'] : null)])) + 
              "</span>\n\t\t\t\t\t<strong class=\"text-xs fw-semibold teaser-username\">" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null && context['rooms'][key0]['teaser']['user'] != null) ? context['rooms'][key0]['teaser']['user']['username'] : null)) + 
              ":</strong>\n\t\t\t\t\t" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['content'] : null)) + 
              "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"teaser-timestamp text-muted text-xs\">" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['timeagoLong'] : null) ?
                __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['timeagoLong'] : null)) :
                "<span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['timestampISO'] : null)) + 
                  "\"></span>") + 
              "</div>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t<button class=\"mark-read btn-ghost-sm\" style=\"width: 1.5rem; height: 1.5rem;\">\n\t\t\t\t<i class=\"unread fa fa-2xs fa-circle text-primary " + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "" :
            "hidden") + 
          "\"></i>\n\t\t\t\t<i class=\"read fa fa-2xs fa-circle-o text-secondary " + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "hidden" :
            "") + 
          "\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n" + 
          (index === length - 1 ?
            "" :
            "\n<hr class=\"my-1\" />\n") + 
          "\n\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

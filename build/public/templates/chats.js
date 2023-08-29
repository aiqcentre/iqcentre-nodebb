
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
    return "<div class=\"chats-full d-flex gap-1 h-100 mt-3 mt-md-0 py-md-3\">\n\t<div component=\"chat/nav-wrapper\" class=\"flex-shrink-0 d-flex flex-column h-100 gap-1\" data-loaded=\"" + 
      (guard((context != null) ? context['roomId'] : null) ?
        "1" :
        "0") + 
      "\">\n\n\t\t<div>\n\t\t\t<button component=\"chat/create\" class=\"btn btn-primary btn-sm w-100\">[[modules:chat.create-room]]</button>\n\t\t</div>\n\n\t\t" + 
      (guard((context != null && context['publicRooms'] != null) ? context['publicRooms']['length'] : null) ?
        "\n\t\t<hr class=\"my-1\">\n\n\t\t<div class=\"d-flex flex-column gap-1\">\n\t\t\t<div class=\"d-flex gap-1 align-items-center justify-content-between justify-content-lg-start\">\n\t\t\t\t<button class=\"btn-ghost-sm p-1 order-1 order-lg-0\" data-bs-toggle=\"collapse\" data-bs-target=\"#public-rooms\"\n\t\t\t\tonclick=\"$(this).find('i').toggleClass('fa-rotate-180');\"><i class=\"fa fa-fw fa-chevron-up\" style=\"transition: 0.25s ease;\"></i></button>\n\t\t\t\t<label class=\"text-sm text-muted lh-1\">[[modules:chat.public-rooms, " + 
          __escape(guard((context != null && context['publicRooms'] != null) ? context['publicRooms']['length'] : null)) + 
          "]]</label>\n\t\t\t</div>\n\t\t\t<div id=\"public-rooms\" component=\"chat/public\" class=\"collapse show\">\n\t\t\t\t<div class=\"d-flex gap-1 flex-column\">\n\t\t\t\t\t" + 
          compiled.blocks['publicRooms'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t<hr class=\"my-1\">\n\n\t\t<div class=\"d-flex flex-column gap-1 overflow-auto\">\n\t\t\t" + 
      (guard((context != null && context['publicRooms'] != null) ? context['publicRooms']['length'] : null) ?
        "\n\t\t\t<div class=\"d-flex gap-1 align-items-center justify-content-between justify-content-lg-start\">\n\t\t\t\t<button class=\"btn-ghost-sm p-1 order-1 order-lg-0\" data-bs-toggle=\"collapse\" data-bs-target=\"#private-rooms\"\n\t\t\t\tonclick=\"$(this).find('i').toggleClass('fa-rotate-180')\"><i class=\"fa fa-fw fa-chevron-up\" style=\"transition: 0.25s ease;\"></i></button>\n\t\t\t\t<label class=\"text-sm text-muted lh-1\">[[modules:chat.private-rooms, " + 
          __escape(guard((context != null) ? context['privateRoomCount'] : null)) + 
          "]]</label>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<div id=\"private-rooms\" component=\"chat/recent\" class=\"chats-list overflow-auto mb-0 pe-1 collapse show\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n\t\t\t\t" + 
      compiled.blocks['rooms'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div component=\"chat/main-wrapper\" class=\"flex-grow-1 ms-md-2 ps-md-2 border-1 border-start-md h-100\" style=\"min-width: 0;\" data-roomid=\"" + 
      __escape(guard((context != null) ? context['roomId'] : null)) + 
      "\">\n\t\t<div component=\"chat/message/window\" class=\"d-flex flex-column h-100\">\n\t" + 
      (guard((context != null && context['widgets'] != null && context['widgets']['header'] != null) ? context['widgets']['header']['length'] : null) ?
        "\n\t<div data-widget-area=\"header\">\n\t\t" + 
          compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
          "\n\t</div>\n\t" :
        "") + 
      "\n\t" + 
      (guard((context != null) ? context['roomId'] : null) ?
        "\n\t<div component=\"chat/header\" class=\"d-flex align-items-center px-md-3 gap-3\">\n\t\t<a href=\"#\" data-action=\"close\" role=\"button\" class=\"flex-shrink-0 d-flex d-md-none btn btn-outline align-text-top\"><i class=\"fa fa-chevron-left\"></i></a>\n\t\t<h5 component=\"chat/header/title\" class=\"members flex-grow-1 fw-semibold tracking-tight mb-0 text-truncate text-nowrap\">\n\t\t\t" + 
          (guard((context != null) ? context['roomName'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null) ? context['icon'] : null)) + 
              " text-muted\"></i> " + 
              __escape(guard((context != null) ? context['roomName'] : null)) :
            __escape(guard((context != null) ? context['chatWithMessage'] : null))) + 
          "\n\t\t</h5>\n\n\t\t<div class=\"d-flex gap-1 align-items-stretch\">\n\t<!-- search -->\n\t<button class=\"btn-ghost-sm\" component=\"chat/room/search/toggle\" data-manual-tooltip=\"1\" title=\"[[global:header.search]]\">\n\t\t<i class=\"fa fa-search text-muted\"></i>\n\t</button>\n\t<div component=\"chat/room/search/container\" class=\"position-relative hidden align-self-center\">\n\t\t<input component=\"chat/room/search\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" style=\"width: 150px;\">\n\t\t<a component=\"chat/room/search/clear\" href=\"#\" class=\"hidden px-2 py-1 position-absolute top-50 end-0 translate-middle-y\">\n\t\t\t<i class=\"fa fa-times text-muted opacity-75\"></i>\n\t\t</a>\n\t</div>\n\n\n\t<!-- notification dropdown -->\n\t<div class=\"dropdown d-flex\" data-manual-tooltip=\"1\" title=\"[[modules:chat.notification-settings]]\" component=\"chat/notification/setting\">\n\t\t<button class=\"btn-ghost-sm position-relative\" data-bs-toggle=\"dropdown\">\n\t\t\t<i class=\"fa fa-bell text-muted\"></i>\n\t\t\t<span class=\"position-absolute top-0 end-0 text-xs text-muted opacity-50\" style=\"font-size: 10px!important; padding: 1px; line-height: 10px;\">\n\t\t\t\t<i component=\"chat/notification/setting/icon\" class=\"fa " + 
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
          "\n</div>\n\n\t</div>\n\t<div class=\"position-relative\">\n\t<div component=\"chat/messages/scroll-up-alert\" class=\"py-1 mt-1 position-absolute start-50 top-50 translate-middle text-sm scroll-up-alert alert alert-info d-none d-md-block text-nowrap hidden\" role=\"button\" style=\"z-index: 500;\"><i class=\"fa fa-fw fa-arrow-down\"></i> [[modules:chat.scroll-up-alert]]</div>\n</div>\n\t<hr class=\"my-1\"/>\n\t<div class=\"d-flex flex-grow-1 gap-1 overflow-auto\" style=\"min-width: 0px;\">\n\t\t<div component=\"chat/messages\" class=\"expanded-chat d-flex flex-column flex-grow-1\" data-roomid=\"" + 
          __escape(guard((context != null) ? context['roomId'] : null)) + 
          "\" style=\"min-width: 0px;\">\n\t\t\t<ul component=\"chat/message/content\" class=\"chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1\">\n\t\t\t\t" + 
          compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</ul>\n\t\t\t<ul component=\"chat/message/search/results\" class=\"chat-content p-0 m-0 list-unstyled overflow-auto flex-grow-1 hidden\">\n\t\t\t\t<div component=\"chat/message/search/no-results\" class=\"text-center p-4 d-flex flex-column\">\n\t\t\t\t\t<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n\t\t\t\t\t<div class=\"text-xs fw-semibold text-muted\">[[search:no-matches]]</div>\n\t\t\t\t</div>\n\t\t\t</ul>\n\t\t\t<div component=\"chat/composer\" class=\"d-flex flex-column gap-2 border-top pt-2 align-items-start\">\n\t<div component=\"chat/composer/replying-to\" data-tomid=\"\" class=\"text-sm px-2 d-flex gap-2 align-items-center hidden\">\n\t\t<div component=\"chat/composer/replying-to-text\"></div> <button component=\"chat/composer/replying-to-cancel\" class=\"btn-ghost-sm px-2 py-1\"><i class=\"fa fa-times\"></i></button>\n\t</div>\n\t<div class=\"w-100 flex-grow-1 flex-nowrap position-relative d-flex rounded-2 border border-secondary p-1 align-items-end\">\n\t\t<button component=\"chat/upload/button\" class=\"btn-ghost-sm px-2\" type=\"button\"><i class=\"fa fa-fw fa-upload\"></i></button>\n\t\t<div class=\"flex-grow-1 align-self-center\">\n\t\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder.mobile]]\" class=\"bg-transparent text-body form-control chat-input mousetrap rounded-0 border-0 shadow-none ps-1 py-0\" style=\"min-height: 1.5rem;height:0;max-height:30vh;resize:none;\"></textarea>\n\t\t</div>\n\t\t<div class=\"d-flex gap-1\">\n\t\t\t<div component=\"chat/message/remaining\" class=\"text-xs text-muted me-1 align-self-center\">" + 
          __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
          "</div>\n\t\t\t<button class=\"btn-ghost-sm px-2\" type=\"button\" data-action=\"send\"><i class=\"fa fa-fw fa-paper-plane text-primary\"></i></button>\n\t\t</div>\n\t</div>\n\t<form class=\"hidden\" component=\"chat/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n</div>\n\t\t</div>\n\n\t\t<div component=\"chat/user/list\" class=\"border-start hidden d-flex flex-column gap-1 p-1 overflow-auto\" style=\"min-width:240px; width: 240px;\">\n\t" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n</div>\n\t</div>\n\t" :
        "\n\t<div class=\"d-flex flex-column align-items-center gap-3 my-auto\">\n\t\t<i class=\"fa-solid fa-wind fs-2 text-muted\"></i>\n\t\t<span class=\"text-muted text-sm\">[[modules:chat.no_active]]</span>\n\t</div>\n\t") + 
      "\n</div>\n\t</div>\n\t<div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n</div>";
  }

  compiled.blocks = {
    'publicRooms': function publicRooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['publicRooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div component=\"chat/public/room\" class=\"btn-ghost-sm ff-sans justify-content-between hover-parent " + 
          (guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\" data-roomid=\"" + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['roomId'] : null)) + 
          "\">\n\t\t\t\t\t\t<div class=\"d-flex gap-1 align-items-center\"><i class=\"fa " + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['icon'] : null)) + 
          " text-muted\"></i> " + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['roomName'] : null)) + 
          " <div component=\"chat/public/room/unread/count\" data-count=\"" + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unreadCount'] : null)) + 
          "\" class=\"badge border bg-light text-primary " + 
          (guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unreadCount'] : null) ?
            "" :
            "hidden") + 
          "\">" + 
          __escape(guard((context != null && context['publicRooms'] != null && context['publicRooms'][key0] != null) ? context['publicRooms'][key0]['unreadCountText'] : null)) + 
          "</div></div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div component=\"chat/public/room/sort/handle\" class=\"text-muted " + 
          (guard((context != null) ? context['isAdmin'] : null) ?
            "hover-d-block" :
            "d-none") + 
          "\" style=\"cursor:grab;\"><i class=\"fa fa-bars\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['rooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t" + 
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
          "\n\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
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
    },
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['messages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['system'] : null) ?
            "\n\t<li component=\"chat/system-message\" class=\"system-message text-muted small py-2 gap-3 d-flex align-items-center justify-content-center\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"0\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\n\t<hr class=\"d-inline-block my-1\" style=\"width: 10%;\"/>\n\t<div>\n\t\t[[modules:chat.system." + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "]]\n\t</div>\n\t<hr class=\"d-inline-block my-1\" style=\"width: 10%;\"/>\n</li>\n\t" :
            "\n\t<li component=\"chat/message\" class=\"chat-message mx-2 pe-2 " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['deleted'] : null) ?
                " deleted" :
                "") + 
              " " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null) ?
                "border-top pt-3" :
                "") + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null)) + 
              "\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\" data-username=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
              "\">\n\n\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['parent'] : null) ?
                "\n\t<div class=\"d-flex ms-4 mb-2 align-items-center\">\n\t\t<div component=\"chat/message/parent\" data-parent-mid=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['mid'] : null)) + 
                  "\" data-uid=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['fromuid'] : null)) + 
                  "\" class=\"btn-ghost-sm align-items-start flex-row w-100\">\n\t\t\t<div class=\"d-flex gap-2 text-sm text-nowrap\">\n\t\t\t\t<div><i class=\"fa fa-sm fa-reply opacity-50\"></i></div>\n\t\t\t\t<div class=\"d-flex flex-nowrap gap-1 align-items-center\">\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['userslug'] : null)) + 
                  "\" class=\"text-decoration-none lh-1\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "not-responsive align-middle"])) + 
                  "</a>\n\t\t\t\t\t<a class=\"chat-user fw-semibold\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['userslug'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null && context['messages'][key0]['parent']['user'] != null) ? context['messages'][key0]['parent']['user']['displayname'] : null)) + 
                  "</a>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"chat-timestamp text-muted timeago text-nowrap hidden\" title=\"" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['timestampISO'] : null)) + 
                  "\"></span>\n\t\t\t</div>\n\t\t\t<div component=\"chat/message/parent/content\" class=\"text-muted line-clamp-1 w-100\">" + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['parent'] != null) ? context['messages'][key0]['parent']['content'] : null)) + 
                  "</div>\n\t\t</div>\n\t</div>\n\t" :
                "") + 
              "\n\n\t<div class=\"message-header lh-1 d-flex align-items-center gap-2 text-sm " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null) ?
                "" :
                "hidden") + 
              " pb-2\">\n\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\" class=\"text-decoration-none\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromUser'] : null), "18px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              "</a>\n\t\t<span class=\"chat-user fw-semibold\"><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
              "</a></span>\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['banned'] : null) ?
                "\n\t\t<span class=\"badge bg-danger\">[[user:banned]]</span>\n\t\t" :
                "") + 
              "\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['deleted'] : null) ?
                "\n\t\t<span class=\"badge bg-danger\">[[user:deleted]]</span>\n\t\t" :
                "") + 
              "\n\t\t<span class=\"chat-timestamp text-muted timeago\" title=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "\"></span>\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['edited'] : null) ?
                "\n\t\t<div class=\"text-muted ms-auto\" title=\"[[global:edited-timestamp, " + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['editedISO'] : null)) + 
                  "]]\"><i class=\"fa fa-edit\"></i></span></div>\n\t\t" :
                "") + 
              "\n\t</div>\n\t<div class=\"message-body-wrapper hover-parent\">\n\t\t<div component=\"chat/message/body\" class=\"message-body ps-0 py-0 overflow-auto text-break\">\n\t\t\t" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              "\n\t\t</div>\n\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n\t\t<div component=\"chat/message/controls\" class=\"position-relative\">\n\t\t\t<div class=\"btn-group border shadow-sm controls position-absolute bg-body hover-d-block end-0\" style=\"bottom:1rem;\">\n\t\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"reply\"><i class=\"fa fa-reply\"></i></button>\n\t\t\t\t" + 
              ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || (!guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) && guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null))) ?
                "\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"delete\"><i class=\"fa fa-trash\"></i></button>\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\n\t\t\t\t" :
                "") + 
              "\n\t\t\t\t" + 
              (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
                "\n\t\t\t\t<button class=\"btn btn-sm btn-link chat-ip-button\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle\"></i></button>\n\t\t\t\t" :
                "") + 
              "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</li>\n\t") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a data-index=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['index'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" class=\"btn-ghost-sm d-flex justify-content-start align-items-center gap-2 " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['online'] : null) ?
            "online" :
            "") + 
          "\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\n\t\t<div>" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</div>\n\t\t<div class=\"d-flex gap-1 flex-grow-1 text-nowrap text-truncate\">\n\t\t\t<span component=\"chat/user/list/username\" class=\"text-truncate\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</span>\n\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['isOwner'] : null) ?
            "<span><i class=\"fa fa-star text-warning\" data-bs-toggle=\"tooltip\" title=\"[[modules:chat.owner]]\"></i></span>" :
            "") + 
          "\n\t\t</div>\n\t</a>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

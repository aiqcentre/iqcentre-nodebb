
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
    return "<div class=\"account w-100 mx-auto\">\n\t<div data-widget-area=\"header\">\n\t\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\n\t<div class=\"cover position-absolute start-0 top-0 w-100\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n\t\t<div class=\"container\">\n\t\t\t" + 
      (guard((context != null) ? context['allowCoverPicture'] : null) ?
        "\n\t\t\t" + 
          (guard((context != null) ? context['canEdit'] : null) ?
            "\n\t\t\t<div class=\"controls text-center\">\n\t\t\t\t<span class=\"upload p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-upload\"></i></span>\n\t\t\t\t<span class=\"resize p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-arrows\"></i></span>\n\t\t\t\t<span class=\"remove p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-times\"></i></span>\n\t\t\t</div>\n\t\t\t<div class=\"save text-bg-primary\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n\t\t\t<div class=\"indicator text-bg-primary\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n\t\t\t" :
            "") + 
          "\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\n\t<div class=\"d-flex flex-column flex-md-row gap-2 w-100 pb-4 mb-4 mt-2 border-bottom\">\n\t\t<div " + 
      ((guard((context != null) ? context['allowProfilePicture'] : null) && guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null)) ?
        "component=\"profile/change/picture\"" :
        "") + 
      " class=\"avatar-wrapper border border-white border-4 rounded-circle position-relative align-self-center align-self-md-start hover-parent\" style=\"margin-top: -75px;\">\n\t\t\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard(value), "142px", guard((context != null) ? context['true'] : null)])) + 
      "\n\t\t\t" + 
      ((guard((context != null) ? context['allowProfilePicture'] : null) && guard((context != null) ? context['isSelfOrAdminOrGlobalModerator'] : null)) ?
        "\n\t\t\t<div component=\"profile/change/picture\" class=\"d-none d-md-block pointer p-2 rounded-1 opacity-75 text-bg-light position-absolute top-50 start-50 translate-middle hover-visible\">\n\t\t\t\t<span class=\"upload\"><i class=\"fa fa-fw fa-upload\"></i></span>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\n\t\t<div class=\"d-flex flex-column flex-md-row mt-1 justify-content-between w-100 gap-2\">\n\t\t\t<div class=\"d-flex flex-grow-1 flex-row gap-2\">\n\t\t\t\t<div class=\"d-flex flex-column gap-1\">\n\t\t\t\t\t<h2 class=\"fullname fw-semibold fs-2 tracking-tight mb-0\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</h2>\n\t\t\t\t\t<div class=\"d-flex flex-wrap gap-1 text-sm align-items-center\">\n\t\t\t\t\t\t<span class=\"username fw-bold\">" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null))) + 
      "</span>\n\t\t\t\t\t\t<div class=\"d-flex align-items-center gap-1 p-1\">\n\t\t\t\t\t\t\t" + 
      (guard((context != null && context['selectedGroup'] != null) ? context['selectedGroup']['length'] : null) ?
        "\n\t\t\t\t\t\t\t" + 
          compiled.blocks['selectedGroup'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex gap-2\" component=\"user/badges\"></div>\n\t\t\t\t\t" + 
      (guard((context != null) ? context['isAdminOrGlobalModeratorOrModerator'] : null) ?
        "\n\t\t\t\t\t" + 
          (guard((context != null) ? context['banned'] : null) ?
            "\n\t\t\t\t\t<div class=\"text-xm text-muted\">\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['banned_until'] : null) ?
                "\n\t\t\t\t\t\t[[user:info.banned-until, " + 
                  __escape(guard((context != null) ? context['banned_until_readable'] : null)) + 
                  "]]\n\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t[[user:info.banned-permanently]]\n\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"flex-shrink-0 d-flex gap-1 align-self-stretch align-self-md-start justify-content-end\">\n\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n\t\t\t\t<a component=\"account/unfollow\" href=\"#\" class=\"btn btn-info flex-fill" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "" :
                " hide") + 
              "\">[[user:unfollow]]</a>\n\t\t\t\t<a component=\"account/follow\" href=\"#\" class=\"btn btn-primary flex-fill" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                " hide" :
                "") + 
              "\">[[user:follow]]</a>\n\t\t\t\t") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      ((guard((context != null) ? context['loggedIn'] : null) && (!guard((context != null) ? context['isSelf'] : null) && (!guard((context != null) ? context['banned'] : null) && !guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null)))) ?
        "\n\t\t\t\t<div class=\"btn-group flex-fill\">\n\t\t\t\t\t<a " + 
          (guard((context != null) ? context['hasPrivateChat'] : null) ?
            "component=\"account/chat\"" :
            "component=\"account/new-chat\"") + 
          " href=\"#\" class=\"btn btn-light\" role=\"button\">[[user:chat]]</a>\n\t\t\t\t\t" + 
          (guard((context != null) ? context['hasPrivateChat'] : null) ?
            "\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-light dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\">\n\t\t\t\t\t\t<i class=\"fa fa-caret-down\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n\t\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"account/new-chat\">[[user:new_chat_with, " + 
              __escape(guard((context != null) ? context['username'] : null)) + 
              "]]</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n\t\t\t\t" + 
          ((guard((context != null) ? context['isAdmin'] : null) || (guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null))) ?
            "\n\t\t\t\t<div class=\"btn-group bottom-sheet\">\n\t<button type=\"button\" class=\"btn btn-light dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t<i class=\"fa fa-gear fa-fw\"></i>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm account-sub-links\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1\" href=\"" + 
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
              "\n\t</ul>\n</div>\n\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"d-flex flex-column flex-md-row\">\n\t\t<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200\">\n\t<div class=\"sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1\" style=\"top: 1rem;z-index: 1;\">\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"btn-ghost fw-semibold " + 
      (guard((context != null && context['template'] != null) ? context['template']['account/profile'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:about]]</div>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\"class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/posts'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/best'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/controversial'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/upvoted'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/downvoted'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/bookmarks'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:posts]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)])) + 
      "</span>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/topics'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/watched'] : null) ?
        "active" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/ignored'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:topics]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)])) + 
      "</span>\n\t\t</a>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/groups'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:header.groups]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/followers'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:followers]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['account/following'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:following]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)])) + 
      "</span>\n\t\t</a>\n\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/categories\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/categories'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:watched_categories]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/blocks'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:blocked-users]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)])) + 
          "</span>\n\t\t</a>\n\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/uploads\" class=\"btn-ghost fw-semibold\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/uploads'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:uploads]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)])) + 
          "</span>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      ((guard((context != null) ? context['loggedIn'] : null) && (!guard((context != null) ? context['isSelf'] : null) && !guard((context != null) ? context['banned'] : null))) ?
        "\n\t\t<hr class=\"w-100 my-2\"/>\n\t\t<a href=\"#\" component=\"account/flag\" class=\"btn-ghost-sm\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-flag text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:flag-profile]]</div>\n\t\t</a>\n\t\t<a href=\"#\" component=\"account/block\" class=\"btn-ghost-sm " + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "hidden" :
            "") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-ban text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:block_user]]</div>\n\t\t</a>\n\t\t<a href=\"#\" component=\"account/unblock\" class=\"btn-ghost-sm " + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa-solid fa-ban text-danger\"></i>\n\t\t\t<div class=\"flex-grow-1 text-nowrap\">[[user:unblock_user]]</div>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n\t\t<hr class=\"w-100 my-2\"/>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\" class=\"btn-ghost-sm text-xs\n\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/edit'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:edit-profile]]</div>\n\t\t</a>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\" class=\"btn-ghost-sm text-xs\n\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['account/settings'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">[[user:settings]]</div>\n\t\t</a>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n\n\t\t<div class=\"account-content flex-grow-1 ps-md-2 ps-lg-3 ps-xl-4\" style=\"min-width: 0;\">\n\n\n\n<div class=\"d-flex justify-content-between mb-3 align-items-center\">\n\t<h3 class=\"fw-semibold fs-5 mb-0\">" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "[[user:edit-profile]]" :
        "[[pages:account/edit, " + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "]]") + 
      "</h3>\n\t<button id=\"submitBtn\" class=\"btn btn-primary\">[[global:save_changes]]</button>\n</div>\n<div class=\"row\">\n\t<div class=\"col-xl-6 col-12\">\n\t\t<form role=\"form\" component=\"profile/edit/form\">\n\t\t\t<div class=\"mb-2\">\n\t\t\t\t<label class=\"form-label fw-bold\" for=\"fullname\">[[user:fullname]]</label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"fullname\" name=\"fullname\" placeholder=\"[[user:fullname]]\" value=\"" + 
      __escape(guard((context != null) ? context['fullname'] : null)) + 
      "\">\n\t\t\t</div>\n\t\t\t" + 
      (guard((context != null) ? context['allowWebsite'] : null) ?
        "\n\t\t\t<div class=\"mb-2\">\n\t\t\t\t<label class=\"form-label fw-bold\" for=\"website\">[[user:website]]</label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"website\" name=\"website\" placeholder=\"http://...\" value=\"" + 
          __escape(guard((context != null) ? context['website'] : null)) + 
          "\">\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<div class=\"mb-2\">\n\t\t\t\t<label class=\"form-label fw-bold\" for=\"location\">[[user:location]]</label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"location\" name=\"location\" placeholder=\"[[user:location]]\" value=\"" + 
      __escape(guard((context != null) ? context['location'] : null)) + 
      "\">\n\t\t\t</div>\n\n\t\t\t<div class=\"mb-2\">\n\t\t\t\t<label class=\"form-label fw-bold\" for=\"birthday\">[[user:birthday]]</label>\n\t\t\t\t<input class=\"form-control\" type=\"date\" id=\"birthday\" name=\"birthday\" value=\"" + 
      __escape(guard((context != null) ? context['birthday'] : null)) + 
      "\" placeholder=\"mm/dd/yyyy\">\n\t\t\t</div>\n\n\t\t\t<div class=\"mb-2\">\n\t\t\t\t<label class=\"form-label fw-bold\" for=\"groupTitle\">[[user:grouptitle]]</label>\n\n\t\t\t\t<select class=\"form-select mb-1\" id=\"groupTitle\" name=\"groupTitle\" " + 
      (guard((context != null) ? context['allowMultipleBadges'] : null) ?
        " size=\"" + 
          __escape(guard((context != null) ? context['groupSelectSize'] : null)) + 
          "\" multiple" :
        "") + 
      ">\n\t\t\t\t\t<option value=\"\">[[user:no-group-title]]</option>\n\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</select>\n\t\t\t\t" + 
      (guard((context != null) ? context['allowMultipleBadges'] : null) ?
        "\n\t\t\t\t<div class=\"d-none d-md-block\">\n\t\t\t\t\t<span class=\"form-text\">[[user:group-order-help]]</span>\n\t\t\t\t\t<i role=\"button\" component=\"group/order/up\" class=\"fa fa-chevron-up\"></i> <i role=\"button\" component=\"group/order/down\" class=\"fa fa-chevron-down\"></i>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\n\t\t\t" + 
      (guard((context != null) ? context['allowAboutMe'] : null) ?
        "\n\t\t\t<div class=\"mb-2\">\n\t\t\t\t<label class=\"form-label fw-bold\" for=\"aboutme\">[[user:aboutme]]</label> <small><label id=\"aboutMeCharCountLeft\"></label></small>\n\t\t\t\t<textarea class=\"form-control\" id=\"aboutme\" name=\"aboutme\" rows=\"5\">" + 
          __escape(guard((context != null) ? context['aboutme'] : null)) + 
          "</textarea>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      ((guard((context != null) ? context['allowSignature'] : null) && !guard((context != null) ? context['disableSignatures'] : null)) ?
        "\n\t\t\t<div class=\"mb-2\">\n\t\t\t\t<label class=\"form-label fw-bold\" for=\"signature\">[[user:signature]]</label> <small><label id=\"signatureCharCountLeft\"></label></small>\n\t\t\t\t<textarea class=\"form-control\" id=\"signature\" name=\"signature\" rows=\"5\">" + 
          __escape(guard((context != null) ? context['signature'] : null)) + 
          "</textarea>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t</form>\n\t\t<hr class=\"visible-xs visible-sm\"/>\n\t</div>\n\n\t<div class=\"col-xl-6 col-12\">\n\t\t<div class=\"text-center\">\n\t\t\t<ul class=\"list-group mb-3 text-sm text-nowrap\">\n\t\t\t\t" + 
      (guard((context != null) ? context['allowProfilePicture'] : null) ?
        "\n\t\t\t\t<a component=\"profile/change/picture\" href=\"#\" class=\"list-group-item px-1 text-decoration-none\">[[user:change_picture]]</a>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['username:disableEdit'] : null) ?
        "" :
        "\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/username\" class=\"list-group-item px-1 text-decoration-none\">[[user:change_username]]</a>\n\t\t\t\t") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['email:disableEdit'] : null) ?
        "" :
        "\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/email\" class=\"list-group-item px-1 text-decoration-none\">[[user:change_email]]</a>\n\t\t\t\t") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['canChangePassword'] : null) ?
        "\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/password\" class=\"list-group-item px-1 text-decoration-none\">[[user:change_password]]</a>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      compiled.blocks['editButtons'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['requireEmailConfirmation'] : null) ?
        "\n\t\t\t" + 
          ((guard((context != null) ? context['email'] : null) && guard((context != null) ? context['isSelf'] : null)) ?
            "\n\t\t\t<a id=\"confirm-email\" href=\"#\" class=\"btn btn-warning " + 
              (guard((context != null) ? context['email:confirmed'] : null) ?
                "hide" :
                "") + 
              "\">[[user:confirm_email]]</a><br/><br/>\n\t\t\t" :
            "") + 
          "\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\n\t\t" + 
      (guard((context != null && context['sso'] != null) ? context['sso']['length'] : null) ?
        "\n\t\t<label class=\"form-label text-sm fw-semibold\">[[user:sso.title]]</label>\n\t\t<div class=\"list-group\">\n\t\t\t" + 
          compiled.blocks['sso'](helpers, context, guard, iter, helper) + 
          "\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t<hr/>\n\t\t" + 
      ((guard((context != null) ? context['allowAccountDelete'] : null) && guard((context != null) ? context['isSelf'] : null)) ?
        "\n\t\t<div class=\"d-flex justify-content-end\">\n\t\t\t<button id=\"deleteAccountBtn\" class=\"btn btn-danger\">[[user:delete_account]]</button>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
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
    'selectedGroup': function selectedGroup(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['selectedGroup'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null) ?
            "\n\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null)) + 
              "\" class=\"badge rounded-1 text-uppercase text-truncate text-decoration-none\" style=\"max-width: 150px;color:" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['labelColor'] : null)) + 
              ";\"><i class=\"fa " + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null) ?
                __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null)) + 
                  (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null) ?
                    " me-1" :
                    "") :
                "hidden") + 
              "\"></i><span class=\"badge-text align-text-bottom\">" + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null) ?
                __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null)) :
                "") + 
              "</span></a>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\" class=\"btn-ghost-sm text-xs plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          " " + 
          ((guard((context != null) ? context['url'] : null) == guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['url'] : null)) ?
            "active" :
            "") + 
          "\" id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\">\n\t\t\t<div class=\"flex-grow-1\">" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</div>\n\t\t</a>\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitleEnabled'] : null) ?
            "\n\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
              "\" " + 
              (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
                "selected" :
                "") + 
              ">" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitle'] : null)) + 
              "</option>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'editButtons': function editButtons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['editButtons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['editButtons'] != null && context['editButtons'][key0] != null) ? context['editButtons'][key0]['link'] : null)) + 
          "\" class=\"list-group-item px-1 text-decoration-none\">" + 
          __escape(guard((context != null && context['editButtons'] != null && context['editButtons'][key0] != null) ? context['editButtons'][key0]['text'] : null)) + 
          "</a>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sso': function sso(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sso'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<div class=\"list-group-item d-flex align-items-center justify-content-between\">\n\t\t\t\t<a class=\"text-sm text-reset text-decoration-none\" data-component=\"" + 
          __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['component'] : null)) + 
          "\" href=\"" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['url'] : null) ?
            __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['url'] : null)) :
            "#") + 
          "\" target=\"" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['associated'] : null) ?
            "_blank" :
            "_top") + 
          "\">\n\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['icon'] : null)) + 
              "\"></i>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['associated'] : null) ?
            "[[user:sso.associated]]" :
            "[[user:sso.not-associated]]") + 
          "\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['name'] : null)) + 
          "\n\t\t\t\t</a>\n\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['deauthUrl'] : null) ?
            "\n\t\t\t\t<a data-component=\"" + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['component'] : null)) + 
              "\" class=\"btn btn-outline-secondary btn-sm\" href=\"" + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['deauthUrl'] : null)) + 
              "\">[[user:sso.dissociate]]</a>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</div>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return ((!guard((context != null) ? context['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null) ? context['widgets']['mainpost-header']['length'] : null)) ?
        "\n<div data-widget-area=\"mainpost-header\">\n\t" + 
          compiled.blocks['widgets.mainpost-header'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "") + 
      "\n\n<div class=\"d-flex align-items-start gap-3\">\n\t<div class=\"icon bg-body d-none d-sm-block rounded-circle\" style=\"outline: 2px solid var(--bs-body-bg);\">\n\t\t<a class=\"d-inline-block position-relative text-decoration-none\" href=\"" + 
      (guard((context != null && context['user'] != null) ? context['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) :
        "#") + 
      "\">\n\t\t\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null) ? context['posts']['user'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
      "\n\t\t\t<span component=\"user/status\" class=\"position-absolute translate-middle-y border border-white border-2 rounded-circle status " + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
      "\"><span class=\"visually-hidden\">[[global:" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
      "]]</span></span>\n\t\t</a>\n\t</div>\n\n\t<div class=\"post-container d-flex flex-grow-1 flex-column w-100\" style=\"min-width: 0;\">\n\t\t<div class=\"d-flex align-items-center gap-1 flex-wrap w-100 post-header mt-1\" itemprop=\"author\" itemscope itemtype=\"https://schema.org/Person\">\n\t\t\t<div class=\"icon bg-body d-sm-none\">\n\t\t\t\t<a class=\"d-inline-block position-relative text-decoration-none\" href=\"" + 
      (guard((context != null && context['user'] != null) ? context['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) :
        "#") + 
      "\">\n\t\t\t\t\t" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null) ? context['posts']['user'] : null), "20px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
      "\n\t\t\t\t\t<span component=\"user/status\" class=\"position-absolute translate-middle-y border border-white border-2 rounded-circle status " + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
      "\"><span class=\"visually-hidden\">[[global:" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
      "]]</span></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<span class=\"text-nowrap\">\n\t\t\t\t<a class=\"fw-bold\" href=\"" + 
      (guard((context != null && context['user'] != null) ? context['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) :
        "#") + 
      "\" itemprop=\"name\" data-username=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['username'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['uid'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['displayname'] : null)) + 
      "</a>\n\t\t\t</span>\n\n\t\t\t" + 
      compiled.blocks['posts.user.selectedGroups'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t\t" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['banned'] : null) ?
        "\n\t\t\t<span class=\"badge bg-danger rounded-1\">[[user:banned]]</span>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<div class=\"d-flex gap-1 align-items-center\">\n\t\t\t\t<span class=\"text-muted\">\n\t\t\t\t\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['toPid'] : null) ?
        "\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'generateRepliedTo', [guard(value), guard((context != null && context['config'] != null) ? context['config']['timeagoCutoff'] : null)])) + 
          "\n\t\t\t\t\t" :
        "\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'generateWrote', [guard(value), guard((context != null && context['config'] != null) ? context['config']['timeagoCutoff'] : null)])) + 
          "\n\t\t\t\t\t") + 
      "\n\t\t\t\t</span>\n\n\t\t\t\t<i component=\"post/edit-indicator\" class=\"fa fa-edit text-muted" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['posts:history'] : null) ?
        " pointer" :
        "") + 
      " edit-icon " + 
      (guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['username'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[global:edited-timestamp, " + 
      __escape(guard((context != null) ? context['editedISO'] : null)) + 
      "]]\"></i>\n\t\t\t\t<span data-editor=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['userslug'] : null)) + 
      "\" component=\"post/editor\" class=\"visually-hidden\">[[global:last_edited_by, " + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['username'] : null)) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['editedISO'] : null)) + 
      "\"></span></span>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<span>\n\t\t\t\t\t" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null) ? context['posts']['user']['custom_profile_info']['length'] : null) ?
        "\n\t\t\t\t\t&#124;\n\t\t\t\t\t" + 
          compiled.blocks['posts.user.custom_profile_info'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex align-items-center gap-1 flex-grow-1 justify-content-end\">\n\t\t\t\t<span class=\"bookmarked opacity-0 text-primary\"><i class=\"fa fa-bookmark-o\"></i></span>\n\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\" class=\"post-index text-muted d-none d-md-inline\">#" + 
      __escape(helper(context, helpers, 'increment', [guard((context != null) ? context['index'] : null), "1"])) + 
      "</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"content mt-2 text-break\" component=\"post/content\" itemprop=\"text\">\n\t\t\t" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['content'] : null)) + 
      "\n\t\t</div>\n\t</div>\n</div>\n\n<div component=\"post/footer\" class=\"post-footer border-bottom pb-2\">\n\t" + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['signature'] : null) ?
        "\n\t<div component=\"post/signature\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['uid'] : null)) + 
          "\" class=\"text-xs text-muted mt-2\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['signature'] : null)) + 
          "</div>\n\t" :
        "") + 
      "\n\n\t<div class=\"d-flex\">\n\t\t" + 
      (guard((context != null) ? context['hideReplies'] : null) ?
        "" :
        "\n\t\t<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"d-flex gap-2 align-items-center mt-2 btn-outline border rounded-1 p-1 threaded-replies user-select-none text-muted text-decoration-none text-xs " + 
          ((!guard((context != null) ? context['replies'] : null) || helper(context, helpers, 'shouldHideReplyContainer', [guard(value)])) ?
            "hidden" :
            "") + 
          "\">\n\t\t\t<span component=\"post/reply-count/avatars\" class=\"avatars d-inline-flex gap-1 align-items-top " + 
          (guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['hasMore'] : null) ?
            "hasMore" :
            "") + 
          "\">\n\t\t\t\t" + 
          compiled.blocks['posts.replies.users'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['hasMore'] : null) ?
            "\n\t\t\t\t<span><i class=\"fa fa-ellipsis\"></i></span>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</span>\n\n\t\t\t<span class=\"ms-2 replies-count fw-semibold\" component=\"post/reply-count/text\" data-replies=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['count'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['text'] : null)) + 
          "</span>\n\t\t\t<span class=\"ms-2 replies-last hidden-xs fw-semibold\">[[topic:last_reply_time]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['timestampISO'] : null)) + 
          "\"></span></span>\n\n\t\t\t<i class=\"fa fa-fw fa-chevron-down\" component=\"post/replies/open\"></i>\n\t\t\t<i class=\"fa fa-fw fa-chevron-up hidden\" component=\"post/replies/close\"></i>\n\t\t\t<i class=\"fa fa-fw fa-spin fa-spinner hidden\" component=\"post/replies/loading\"></i>\n\t\t</a>\n\t\t") + 
      "\n\t</div>\n\n\t<div component=\"post/replies/container\" class=\"my-2 col-11 border rounded-1 p-3 hidden-empty\"></div>\n\n\t<div component=\"post/actions\" class=\"d-flex justify-content-end gap-1 post-tools\">\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['enablePostReactions'] : null) ?
        "\n<span class=\"reactions\" component=\"post/reactions\" data-pid=\"" + 
          __escape(guard((context != null) ? context['pid'] : null)) + 
          "\">\n  <span class=\"reaction-add d-inline-block px-2 mx-1 btn-ghost-sm " + 
          (guard((context != null) ? context['maxReactionsReached'] : null) ?
            "max-reactions" :
            "") + 
          "\" component=\"post/reaction/add\" data-pid=\"" + 
          __escape(guard((context != null) ? context['pid'] : null)) + 
          "\" title=\"[[reactions:add-reaction]]\">\n    <i class=\"fa fa-face-smile text-primary\"></i>\n  </span>\n  " + 
          compiled.blocks['./reactions'](helpers, context, guard, iter, helper) + 
          "\n</span>\n" :
        "") + 
      "\n\t\t<a component=\"post/reply\" href=\"#\" class=\"btn-ghost-sm user-select-none " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:reply]]\"><i class=\"fa fa-fw fa-reply text-primary\"></i></a>\n\t\t<a component=\"post/quote\" href=\"#\" class=\"btn-ghost-sm user-select-none " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:quote]]\"><i class=\"fa fa-fw fa-quote-right text-primary\"></i></a>\n\n\t\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t\t<div class=\"d-flex votes align-items-stretch\">\n\t\t\t<a component=\"post/upvote\" href=\"#\" class=\"btn-ghost-sm " + 
          (guard((context != null && context['posts'] != null) ? context['posts']['upvoted'] : null) ?
            "upvoted" :
            "") + 
          "\">\n\t\t\t\t<i class=\"fa fa-fw fa-chevron-up text-primary\"></i>\n\t\t\t</a>\n\n\t\t\t<meta itemprop=\"upvoteCount\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['upvotes'] : null)) + 
          "\">\n\t\t\t<meta itemprop=\"downvoteCount\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['downvotes'] : null)) + 
          "\">\n\t\t\t<div class=\"d-inline-block px-2 mx-1 btn-ghost-sm\" component=\"post/vote-count\" data-votes=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['votes'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['votes'] : null)) + 
          "</div>\n\n\t\t\t" + 
          (guard((context != null) ? context['downvote:disabled'] : null) ?
            "" :
            "\n\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"btn-ghost-sm " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['downvoted'] : null) ?
                "downvoted" :
                "") + 
              "\">\n\t\t\t\t<i class=\"fa fa-fw fa-chevron-down text-primary\"></i>\n\t\t\t</a>\n\t\t\t") + 
          "\n\t\t</div>\n\t\t") + 
      "\n\n\t\t<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet d-inline-block " + 
      (guard((context != null) ? context['display_post_menu'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<a class=\"btn-ghost-sm dropdown-toggle d-block\" href=\"#\" data-bs-toggle=\"dropdown\"><i class=\"fa fa-fw fa-ellipsis-v text-primary\"></i></a>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-3\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-5\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-9\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-7\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-10\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-divider\"></li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-10\"></div>\n\t\t</li>\n\t</ul>\n</span>\n\n\t</div>\n</div>\n\n" + 
      ((!guard((context != null) ? context['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null) ? context['widgets']['mainpost-footer']['length'] : null)) ?
        "\n<div data-widget-area=\"mainpost-footer\">\n\t" + 
          compiled.blocks['widgets.mainpost-footer'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'widgets.mainpost-header': function widgetsmainpostheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null && context['widgets']['mainpost-header'][key0] != null) ? context['widgets']['mainpost-header'][key0]['html'] : null)) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'posts.user.selectedGroups': function postsuserselectedGroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['selectedGroups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null) ?
            "\n\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null)) + 
              "\" class=\"badge rounded-1 text-uppercase text-truncate text-decoration-none\" style=\"max-width: 150px;color:" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['labelColor'] : null)) + 
              ";\"><i class=\"fa " + 
              (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null) ?
                __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null)) + 
                  (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null) ?
                    " me-1" :
                    "") :
                "hidden") + 
              "\"></i><span class=\"badge-text align-text-bottom\">" + 
              (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null) ?
                __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null)) :
                "") + 
              "</span></a>\n\t\t\t" :
            "") + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts.user.custom_profile_info': function postsusercustom_profile_info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['custom_profile_info'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null && context['posts']['user']['custom_profile_info'][key0] != null) ? context['posts']['user']['custom_profile_info'][key0]['content'] : null)) + 
          "\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts.replies.users': function postsrepliesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<span>" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts']['replies'] != null && context['posts']['replies']['users'] != null) ? context['posts']['replies']['users'][key0] : null), "20px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
          "</span>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    './reactions': function reactions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['reactions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <span class=\"reaction " + 
          (guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['reacted'] : null) ?
            "reacted" :
            "") + 
          "\" component=\"post/reaction\" data-pid=\"" + 
          __escape(guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['pid'] : null)) + 
          "\" data-reaction=\"" + 
          __escape(guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['reaction'] : null)) + 
          "\">\n\t" + 
          __escape(guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['reactionImage'] : null)) + 
          "\n\t<small class=\"reaction-emoji-count\" data-count=\"" + 
          __escape(guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['reactionCount'] : null)) + 
          "\"></small>\n</span>\n\n  ";
      }, function alt() {
        return "";
      });
    },
    'widgets.mainpost-footer': function widgetsmainpostfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null && context['widgets']['mainpost-footer'][key0] != null) ? context['widgets']['mainpost-footer'][key0]['html'] : null)) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

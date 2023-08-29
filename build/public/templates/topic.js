
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
    return (guard((context != null && context['widgets'] != null && context['widgets']['header'] != null) ? context['widgets']['header']['length'] : null) ?
        "\n<div data-widget-area=\"header\">\n\t" + 
          compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "") + 
      "\n\n<div class=\"d-flex flex-column gap-3\" itemid=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" itemscope itemtype=\"https://schema.org/DiscussionForumPosting\">\n\t<div class=\"d-flex flex-wrap\">\n\t\t<div class=\"d-flex flex-column gap-3 flex-grow-1\">\n\t\t\t<h1 component=\"post/header\" class=\"tracking-tight fw-semibold fs-3 mb-0 text-break " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
        "text-center" :
        "") + 
      "\" itemprop=\"headline\">\n\t\t\t\t<span class=\"topic-title\" component=\"topic/title\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</span>\n\t\t\t</h1>\n\n\t\t\t<div class=\"topic-info d-flex gap-2 align-items-center flex-wrap " + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
        "justify-content-center" :
        "") + 
      "\">\n\t\t\t\t<span component=\"topic/labels\" class=\"d-flex gap-2 " + 
      ((!guard((context != null) ? context['scheduled'] : null) && (!guard((context != null) ? context['pinned'] : null) && (!guard((context != null) ? context['locked'] : null) && (!guard((context != null) ? context['oldCid'] : null) && !guard((context != null && context['icons'] != null) ? context['icons']['length'] : null))))) ?
        "hidden" :
        "") + 
      "\">\n\t\t\t\t\t<span component=\"topic/scheduled\" class=\"badge badge border border-gray-300 text-body " + 
      (guard((context != null) ? context['scheduled'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t\t\t\t[[topic:scheduled]]\n\t\t\t\t\t</span>\n\t\t\t\t\t<span component=\"topic/pinned\" class=\"badge badge border border-gray-300 text-body " + 
      ((guard((context != null) ? context['scheduled'] : null) || !guard((context != null) ? context['pinned'] : null)) ?
        "hidden" :
        "") + 
      "\">\n\t\t\t\t\t\t<i class=\"fa fa-thumb-tack\"></i>\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['pinExpiry'] : null) ?
        "[[topic:pinned-with-expiry, " + 
          __escape(helper(context, helpers, 'isoTimeToLocaleString', [guard((context != null) ? context['pinExpiryISO'] : null)])) + 
          "]]" :
        "[[topic:pinned]]") + 
      "\n\t\t\t\t\t</span>\n\t\t\t\t\t<span component=\"topic/locked\" class=\"badge badge border border-gray-300 text-body " + 
      (guard((context != null) ? context['locked'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\n\t\t\t\t\t\t[[topic:locked]]\n\t\t\t\t\t</span>\n\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null) ? context['oldCid'] : null)) + 
      "\" class=\"badge badge border border-gray-300 text-body text-decoration-none " + 
      (guard((context != null) ? context['oldCid'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t\t\t\t\t<i class=\"fa fa-arrow-circle-right\"></i>\n\t\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
        "[[topic:moved-from, " + 
          __escape(guard((context != null && context['oldCategory'] != null) ? context['oldCategory']['name'] : null)) + 
          "]]" :
        "[[topic:moved]]") + 
      "\n\t\t\t\t\t</a>\n\t\t\t\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</span>\n\t\t\t\t<a class=\"lh-1\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['slug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildCategoryLabel', [guard((context != null) ? context['category'] : null), "border"])) + 
      "</a>\n\t\t\t\t<div data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" component=\"topic/tags\" class=\"lh-1 tags tag-list d-flex flex-wrap hidden-xs hidden-empty gap-2\">" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "</div>\n\t\t\t\t<div class=\"d-flex hidden-xs gap-2\">\n\t\t\t\t\t<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t<i class=\"fa fa-fw fa-pencil visible-xs-inline\" title=\"[[global:posts]]\"></i>\n\t<span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\" class=\"fw-bold\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['postcount'] : null)])) + 
      "</span>\n\t<span class=\"hidden-xs text-lowercase fw-normal\">[[global:posts]]</span>\n</span>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t<i class=\"fa fa-fw fa-user visible-xs-inline\" title=\"[[global:posters]]\"></i>\n\t<span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\" class=\"fw-bold\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['postercount'] : null)])) + 
      "</span>\n\t<span class=\"hidden-xs text-lowercase fw-normal\">[[global:posters]]</span>\n</span>\n<span class=\"badge text-body border border-gray-300 stats text-xs\">\n\t<i class=\"fa fa-fw fa-eye visible-xs-inline\" title=\"[[global:views]]\"></i>\n\t<span class=\"fw-bold\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['viewcount'] : null)])) + 
      "</span>\n\t<span class=\"hidden-xs text-lowercase fw-normal\">[[global:views]]</span>\n</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"d-flex gap-2 justify-content-end align-items-center mt-2 hidden-empty\" component=\"topic/thumb/list\">" + 
      compiled.blocks['thumbs'](helpers, context, guard, iter, helper) + 
      "</div>\n\t</div>\n\n\t<div class=\"row mb-4 mb-lg-0\">\n\t\t<div class=\"topic " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n\t\t\t<div class=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['stickyToolbar'] : null) ?
        "sticky-tools" :
        "") + 
      "\">\n\t<nav class=\"d-flex flex-nowrap my-2 p-0 border-0 rounded topic-main-buttons\">\n\t\t<div class=\"d-flex flex-row p-2 text-bg-light border rounded w-100 align-items-center\">\n\t\t\t<ul class=\"d-flex list-unstyled me-auto mb-0 gap-2 align-items-center flex-wrap\">\n\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t\t\t<button component=\"topic/mark-unread\" class=\"btn-ghost-sm d-flex gap-2 align-items-center\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-inbox text-primary\"></i>\n\t\t\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:mark_unread]]</span>\n\t\t\t\t</button>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"topic/following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-o link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:watching]]</span>\n\t\t</span>\n\n\t\t<span component=\"topic/not-following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:not-watching]]</span>\n\t\t</span>\n\n\t\t<span component=\"topic/ignoring/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:ignoring]]</span>\n\t\t</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/following\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-o\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/not-following\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:not-watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:not-watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/ignoring\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:ignoring]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:ignoring.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\t\t\t\t<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span class=\"d-flex gap-2 align-items-center\">\n\t\t\t<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:sort_by]]</span>\n\t\t</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:oldest_to_newest]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw\"></i> \n\t\t</a>\n\t\t</li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:newest_to_oldest]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw\"></i> \n\t\t</a>\n\t\t</li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:most_votes]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw\"></i> \n\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n\n\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-gear link-primary\"></i>\n\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:thread_tools.title]]</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t\t<li class=\"placeholder-wave\"><a class=\"dropdown-item d-flex gap-2\" href=\"#\"><div class=\"placeholder bg-secondary rounded-1\" style=\"width: 1em;\"></div><div class=\"placeholder bg-secondary rounded-1 col-8\"></div></a></li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\n\t\t\t\t" + 
      ((!guard((context != null) ? context['feeds:disableRSS'] : null) && guard((context != null) ? context['rssFeedUrl'] : null)) ?
        "\n\t\t\t\t<a class=\"btn-ghost-sm d-none d-lg-flex align-self-stretch\" target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
          "\"><i class=\"fa fa-rss text-primary\"></i></a>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n\t\t\t\t<div class=\"hidden-xs\">\n\t\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</ul>\n\t\t\t<div component=\"topic/reply/container\" class=\"btn-group action-bar " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" class=\"d-flex align-items-center btn btn-sm btn-primary px-3 fw-semibold \" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply d-sm-block d-md-none\"></i><span class=\"d-none d-md-block\"> [[topic:reply]]</span></a>\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n\t\t" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\n\t\t<a component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n\t\t" :
                "") + 
              "\n\t") + 
          "\n\n\t" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\n\t<a component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n\t") + 
          "\n" :
        "\n\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n\t<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"d-flex align-items-center fw-semibold btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\n\t") + 
          "\n") + 
      "\n\t\t</div>\n\t</nav>\n</div>\n\n\n\t\t\t" + 
      (guard((context != null) ? context['merger'] : null) ?
        "\n\t\t\t<div component=\"topic/merged/message\" class=\"alert alert-warning mt-3 d-flex justify-content-between flex-wrap\">\r\n\t<span>[[topic:merged_message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null) ? context['mergeIntoTid'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['mergedIntoTitle'] : null)) + 
          "]]</span>\r\n\t<span>\r\n\t\t<a class=\"fw-bold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['username'] : null)) + 
          "</strong></a> <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['mergedTimestampISO'] : null)) + 
          "\"></small>\r\n\t</span>\r\n</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard((context != null) ? context['scheduled'] : null) ?
        "" :
        "\n\t\t\t<div component=\"topic/deleted/message\" class=\"alert alert-warning mt-3" + 
          (guard((context != null) ? context['deleted'] : null) ?
            "" :
            " hidden") + 
          " d-flex justify-content-between flex-wrap\">\r\n    <span>[[topic:deleted_message]]</span>\r\n    <span>\r\n        " + 
          (guard((context != null) ? context['deleter'] : null) ?
            "\r\n        <a class=\"fw-bold\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['username'] : null)) + 
              "</a> <small class=\"timeago\" title=\"" + 
              __escape(guard((context != null) ? context['deletedTimestampISO'] : null)) + 
              "\"></small>\r\n        " :
            "") + 
          "\r\n    </span>\r\n</div>\n\t\t\t") + 
      "\n\n\t\t\t<div class=\"d-flex gap-0 gap-lg-5\">\n\t\t\t\t<div class=\"posts-container\" style=\"min-width: 0;\">\n\t\t\t\t\t<ul component=\"topic\" class=\"posts timeline list-unstyled mt-sm-2 p-0 py-3\" style=\"min-width: 0;\" data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n\t\t\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</ul>\n\t\t\t\t\t" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n\t\t\t\t\t<div class=\"visible-xs\">\n\t\t\t\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n\t\t\t\t\t\t<hr/>\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['enableQuickReply'] : null) ?
        "\n\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "\n<div component=\"topic/quickreply/container\" class=\"quick-reply d-flex gap-3 mb-4\">\n\t<div class=\"icon hidden-xs\">\n\t\t<a class=\"d-inline-block position-relative\" href=\"" + 
              (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
                "#") + 
              "\">\n\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
              "\n\t\t\t" + 
              (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
                "<span component=\"user/status\" class=\"position-absolute translate-middle-y border border-white border-2 rounded-circle status " + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
                  "\"><span class=\"visually-hidden\">[[global:" + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
                  "]]</span></span>" :
                "") + 
              "\n\t\t</a>\n\t</div>\n\t<form class=\"flex-grow-1 d-flex flex-column gap-2\" method=\"post\" action=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/compose\">\n\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
              __escape(guard((context != null) ? context['tid'] : null)) + 
              "\" />\n\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\" />\n\t\t<div class=\"quickreply-message position-relative\">\n\t\t\t<textarea rows=\"4\" name=\"content\" component=\"topic/quickreply/text\" class=\"form-control mousetrap\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\n\t\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"d-flex justify-content-end gap-2\">\n\t\t\t\t<button type=\"submit\" component=\"topic/quickreply/expand\" class=\"btn btn-sm btn-outline\" formmethod=\"get\"><i class=\"fa fa-expand\"></i></button>\n\t\t\t\t<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-sm btn-primary\">[[topic:post-quick-reply]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\t<form class=\"d-none\" component=\"topic/quickreply/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n\n</div>\n" :
            "") + 
          "\n\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"pagination-block d-none d-lg-block flex-grow-1 mb-4\">\n\t<div class=\"d-flex justify-content-end sticky-top mt-4\" style=\"top:6rem;z-index:1;\">\n\t\t<div class=\"ps-1 ps-md-0 d-inline-block\">\n\t\t\t<div class=\"scroller-content d-flex gap-2 flex-column align-items-start\">\n\t\t\t\t<div class=\"pointer pagetop btn-ghost-sm d-inline-flex\" style=\"padding: 4px;\"><i class=\"fa fa-chevron-up\"></i> <span class=\"timeago text-xs text-muted text-nowrap\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span></div>\n\t\t\t\t<div class=\"scroller-container position-relative\">\n\t\t\t\t\t<div class=\"scroller-thumb d-flex gap-2 text-nowrap position-relative\" style=\"height: 40px;\">\n\t\t\t\t\t\t<div class=\"scroller-thumb-icon bg-primary rounded d-inline-block\" style=\"width:9px; height: 40px;\"></div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p class=\"small thumb-text d-none d-md-inline-block ff-secondary fw-semibold user-select-none mb-0\"></p>\n\t\t\t\t\t\t\t<p class=\"meta thumb-timestamp timeago text-xs text-muted ff-secondary fw-semibold mb-0 user-select-none\"></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"unread d-inline-block position-absolute bottom-0\">\n\t\t\t\t\t\t<div class=\"meta small position-absolute top-50 translate-middle-y text-nowrap fw-semibold ms-2\">\n\t\t\t\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pointer pagebottom btn-ghost-sm d-inline-flex\" style=\"padding: 4px;\"><i class=\"fa fa-chevron-down\"></i> <span class=\"timeago text-xs text-muted text-nowrap\" title=\"" + 
      __escape(guard((context != null) ? context['lastposttimeISO'] : null)) + 
      "\"></span></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\t\t\t</div>\n\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n\t\t<li class=\"page-item previous float-start" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
          compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
          "\n\n\t\t<li class=\"page-item next float-end " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
            "" :
            "\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
              "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
              "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
              "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
              "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
              "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n\t") + 
          "\n</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</div>\n</div>\n\n<div data-widget-area=\"footer\">\n\t" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "" :
        "\n<noscript>\n<div component=\"pagination\" class=\"pagination-container mt-3" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\n\t\t<li class=\"page-item previous float-start" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
          iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
                "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
                "\n\t\t\t<li class=\"page-item page" + 
                  (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                    " active" :
                    "") + 
                  "\" >\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
                  "\" data-page=\"" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
                  "</a>\n\t\t\t</li>\n\t\t\t") + 
              "\n\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\n\t\t<li class=\"page-item next float-end " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
            "" :
            "\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\n\t\t<li class=\"page-item first" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
              "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"page-item previous" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
              "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
              "</a>\n\t\t</li>\n\n\t\t<li class=\"page-item next" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
              "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"page-item last" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
                "" :
                " disabled") + 
              "\">\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
              "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n\t") + 
          "\n</div>\n</noscript>\n") + 
      "\n";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "<span class=\"lh-1\">" + 
          __escape(guard(value)) + 
          "</span>";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\"><span class=\"badge border border-gray-300 text-xs tag tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span></a>";
      }, function alt() {
        return "";
      });
    },
    'thumbs': function thumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a class=\"d-inline-block h-100\" href=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\">\n\t<img class=\"rounded-1 h-100 bg-light\" style=\"max-width: 5.33rem; object-fit: contain;\" src=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\" />\n</a>\n";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li component=\"post\" class=\"pt-4 " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            "deleted" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['selfPost'] : null) ?
            "self-post" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['topicOwnerPost'] : null) ?
            "topic-owner-post" :
            "") + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\" data-timestamp=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestamp'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-userslug=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\" itemscope itemtype=\"http://schema.org/Comment\">\n\t\t\t\t\t\t\t<a component=\"post/anchor\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" id=\"" + 
          __escape(helper(context, helpers, 'increment', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null), "1"])) + 
          "\"></a>\n\n\t\t\t\t\t\t\t<meta itemprop=\"datePublished\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\">\n\t\t\t\t\t\t\t<meta itemprop=\"dateModified\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\">\n\n\t\t\t\t\t\t\t" + 
          ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null) ? context['widgets']['mainpost-header']['length'] : null)) ?
            "\n<div data-widget-area=\"mainpost-header\">\n\t" + 
              iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-header'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t" + 
                  __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-header'] != null && context['widgets']['mainpost-header'][key1] != null) ? context['widgets']['mainpost-header'][key1]['html'] : null)) + 
                  "\n\t";
              }, function alt() {
                return "";
              }) + 
              "\n</div>\n" :
            "") + 
          "\n\n<div class=\"d-flex align-items-start gap-3\">\n\t<div class=\"icon bg-body d-none d-sm-block rounded-circle\" style=\"outline: 2px solid var(--bs-body-bg);\">\n\t\t<a class=\"d-inline-block position-relative text-decoration-none\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n\t\t\t<span component=\"user/status\" class=\"position-absolute translate-middle-y border border-white border-2 rounded-circle status " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
          "\"><span class=\"visually-hidden\">[[global:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
          "]]</span></span>\n\t\t</a>\n\t</div>\n\n\t<div class=\"post-container d-flex flex-grow-1 flex-column w-100\" style=\"min-width: 0;\">\n\t\t<div class=\"d-flex align-items-center gap-1 flex-wrap w-100 post-header mt-1\" itemprop=\"author\" itemscope itemtype=\"https://schema.org/Person\">\n\t\t\t<div class=\"icon bg-body d-sm-none\">\n\t\t\t\t<a class=\"d-inline-block position-relative text-decoration-none\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "20px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n\t\t\t\t\t<span component=\"user/status\" class=\"position-absolute translate-middle-y border border-white border-2 rounded-circle status " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
          "\"><span class=\"visually-hidden\">[[global:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
          "]]</span></span>\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<span class=\"text-nowrap\">\n\t\t\t\t<a class=\"fw-bold\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"name\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a>\n\t\t\t</span>\n\n\t\t\t" + 
          iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['selectedGroups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null) ?
                "\n\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/groups/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null)) + 
                  "\" class=\"badge rounded-1 text-uppercase text-truncate text-decoration-none\" style=\"max-width: 150px;color:" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['textColor'] : null)) + 
                  ";background-color: " + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['labelColor'] : null)) + 
                  ";\"><i class=\"fa " + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null) ?
                    __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null)) + 
                      (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null) ?
                        " me-1" :
                        "") :
                    "hidden") + 
                  "\"></i><span class=\"badge-text align-text-bottom\">" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null) ?
                    __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null)) :
                    "") + 
                  "</span></a>\n\t\t\t" :
                "") + 
              "\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\n\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['banned'] : null) ?
            "\n\t\t\t<span class=\"badge bg-danger rounded-1\">[[user:banned]]</span>\n\t\t\t" :
            "") + 
          "\n\n\t\t\t<div class=\"d-flex gap-1 align-items-center\">\n\t\t\t\t<span class=\"text-muted\">\n\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['toPid'] : null) ?
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
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[global:edited-timestamp, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "]]\"></i>\n\t\t\t\t<span data-editor=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['userslug'] : null)) + 
          "\" component=\"post/editor\" class=\"visually-hidden\">[[global:last_edited_by, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null)) + 
          "]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\"></span></span>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<span>\n\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null) ? context['posts'][key0]['user']['custom_profile_info']['length'] : null) ?
            "\n\t\t\t\t\t&#124;\n\t\t\t\t\t" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['custom_profile_info'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t\t" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null && context['posts'][key0]['user']['custom_profile_info'][key1] != null) ? context['posts'][key0]['user']['custom_profile_info'][key1]['content'] : null)) + 
                  "\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex align-items-center gap-1 flex-grow-1 justify-content-end\">\n\t\t\t\t<span class=\"bookmarked opacity-0 text-primary\"><i class=\"fa fa-bookmark-o\"></i></span>\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" class=\"post-index text-muted d-none d-md-inline\">#" + 
          __escape(helper(context, helpers, 'increment', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null), "1"])) + 
          "</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"content mt-2 text-break\" component=\"post/content\" itemprop=\"text\">\n\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n\t\t</div>\n\t</div>\n</div>\n\n<div component=\"post/footer\" class=\"post-footer border-bottom pb-2\">\n\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null) ?
            "\n\t<div component=\"post/signature\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\" class=\"text-xs text-muted mt-2\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null)) + 
              "</div>\n\t" :
            "") + 
          "\n\n\t<div class=\"d-flex\">\n\t\t" + 
          (guard((context != null) ? context['hideReplies'] : null) ?
            "" :
            "\n\t\t<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"d-flex gap-2 align-items-center mt-2 btn-outline border rounded-1 p-1 threaded-replies user-select-none text-muted text-decoration-none text-xs " + 
              ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['replies'] : null) || helper(context, helpers, 'shouldHideReplyContainer', [guard(value)])) ?
                "hidden" :
                "") + 
              "\">\n\t\t\t<span component=\"post/reply-count/avatars\" class=\"avatars d-inline-flex gap-1 align-items-top " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['hasMore'] : null) ?
                "hasMore" :
                "") + 
              "\">\n\t\t\t\t" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['users'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t<span>" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null && context['posts'][key0]['replies']['users'] != null) ? context['posts'][key0]['replies']['users'][key1] : null), "20px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
                  "</span>\n\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['hasMore'] : null) ?
                "\n\t\t\t\t<span><i class=\"fa fa-ellipsis\"></i></span>\n\t\t\t\t" :
                "") + 
              "\n\t\t\t</span>\n\n\t\t\t<span class=\"ms-2 replies-count fw-semibold\" component=\"post/reply-count/text\" data-replies=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['count'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['text'] : null)) + 
              "</span>\n\t\t\t<span class=\"ms-2 replies-last hidden-xs fw-semibold\">[[topic:last_reply_time]] <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['timestampISO'] : null)) + 
              "\"></span></span>\n\n\t\t\t<i class=\"fa fa-fw fa-chevron-down\" component=\"post/replies/open\"></i>\n\t\t\t<i class=\"fa fa-fw fa-chevron-up hidden\" component=\"post/replies/close\"></i>\n\t\t\t<i class=\"fa fa-fw fa-spin fa-spinner hidden\" component=\"post/replies/loading\"></i>\n\t\t</a>\n\t\t") + 
          "\n\t</div>\n\n\t<div component=\"post/replies/container\" class=\"my-2 col-11 border rounded-1 p-3 hidden-empty\"></div>\n\n\t<div component=\"post/actions\" class=\"d-flex justify-content-end gap-1 post-tools\">\n\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n\t\t<a component=\"post/reply\" href=\"#\" class=\"btn-ghost-sm user-select-none " + 
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
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['upvoted'] : null) ?
                "upvoted" :
                "") + 
              "\">\n\t\t\t\t<i class=\"fa fa-fw fa-chevron-up text-primary\"></i>\n\t\t\t</a>\n\n\t\t\t<meta itemprop=\"upvoteCount\" content=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['upvotes'] : null)) + 
              "\">\n\t\t\t<meta itemprop=\"downvoteCount\" content=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['downvotes'] : null)) + 
              "\">\n\t\t\t<div class=\"d-inline-block px-2 mx-1 btn-ghost-sm\" component=\"post/vote-count\" data-votes=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "</div>\n\n\t\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"btn-ghost-sm " + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['downvoted'] : null) ?
                    "downvoted" :
                    "") + 
                  "\">\n\t\t\t\t<i class=\"fa fa-fw fa-chevron-down text-primary\"></i>\n\t\t\t</a>\n\t\t\t") + 
              "\n\t\t</div>\n\t\t") + 
          "\n\n\t\t<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet d-inline-block " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['display_post_menu'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t<a class=\"btn-ghost-sm dropdown-toggle d-block\" href=\"#\" data-bs-toggle=\"dropdown\"><i class=\"fa fa-fw fa-ellipsis-v text-primary\"></i></a>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-3\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-5\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-9\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-7\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-10\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-divider\"></li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-10\"></div>\n\t\t</li>\n\t</ul>\n</span>\n\n\t</div>\n</div>\n\n" + 
          ((!guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) && guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null) ? context['widgets']['mainpost-footer']['length'] : null)) ?
            "\n<div data-widget-area=\"mainpost-footer\">\n\t" + 
              iter(guard((context != null && context['widgets'] != null) ? context['widgets']['mainpost-footer'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t" + 
                  __escape(guard((context != null && context['widgets'] != null && context['widgets']['mainpost-footer'] != null && context['widgets']['mainpost-footer'][key1] != null) ? context['widgets']['mainpost-footer'][key1]['html'] : null)) + 
                  "\n\t";
              }, function alt() {
                return "";
              }) + 
              "\n</div>\n" :
            "") + 
          "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t" + 
          ((guard((context != null && context['config'] != null) ? context['config']['topicPostSort'] : null) != "most_votes") ?
            "\n\t\t\t\t\t\t" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['events'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t\t\t<li component=\"topic/event\" class=\"timeline-event text-muted d-flex gap-2 pt-4\" data-topic-event-id=\"" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) + 
                  "\" data-topic-event-type=\"" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['type'] : null)) + 
                  "\">\n\t<div class=\"timeline-badge\">\n\t\t<i class=\"fa " + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['icon'] : null) ?
                    __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['icon'] : null)) :
                    "fa-circle") + 
                  " small\"></i>\n\t</div>\n\t<span class=\"timeline-text small d-flex align-items-center gap-1 flex-wrap\">\n\t\t" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['text'] : null)) + 
                  "\n\t</span>\n\t" + 
                  (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
                    "\n\t<span component=\"topic/event/delete\" data-topic-event-id=\"" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['id'] : null)) + 
                      "\" data-topic-event-type=\"" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['events'] != null && context['posts'][key0]['events'][key1] != null) ? context['posts'][key0]['events'][key1]['type'] : null)) + 
                      "\" class=\"timeline-text pointer\" title=\"[[topic:delete-event]]\"><i class=\"fa fa-trash\"></i></span>\n\t" :
                    "") + 
                  "\n</li>\n\n\n\t\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

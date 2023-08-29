
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
    return "<div component=\"bottombar\" class=\"bottombar d-flex flex-column d-lg-none fixed-bottom ff-secondary gap-1 align-items-center\">\n\n\t<div class=\"d-flex w-100\">\n\t<div class=\"pagination-block text-bg-light m-2 rounded-1 border border-gray-300 w-100\" style=\"height:30px;\">\n\t\t<div class=\"position-relative\">\n\t\t\t<div class=\"progress-bar rounded-1 bg-info d-block position-absolute\" style=\"height:28px;\"></div>\n\t\t</div>\n\t\t<div class=\"wrapper dropup-center d-flex align-items-center justify-content-between w-100 h-100\" style=\"padding: 5px 0px;\">\n\t\t\t<div class=\"d-flex\">\n\t\t\t\t<div class=\"lh-1 px-2\">\n\t\t\t\t\t<i class=\"fa fa-angles-left pointer fa-fw pagetop fs-5\" style=\"z-index: 1;\"></i>\n\t\t\t\t</div>\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t\t\t<div class=\"lh-1 px-2\">\n\t\t\t\t\t<i class=\"fa fa-angle-left pointer fa-fw pageprev fs-5\" style=\"z-index: 1;\"></i>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\n\t\t\t<a href=\"#\" class=\"text-reset dropdown-toggle d-inline-block px-3 text-decoration-none\" data-bs-toggle=\"dropdown\">\n\t\t\t\t<span class=\"d-inline-flex gap-2 align-items-center pagination-text position-relative fw-bold\"></span>\n\t\t\t</a>\n\n\t\t\t<div class=\"d-flex\">\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t\t\t<div class=\"lh-1 px-2\">\n\t\t\t\t\t<i class=\"fa fa-angle-right pointer fa-fw pagenext fs-5\" style=\"z-index: 1;\"></i>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t<div class=\"lh-1 px-2\">\n\t\t\t\t\t<i class=\"fa fa-angles-right pointer fa-fw pagebottom fs-5\" style=\"z-index: 1;\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<ul class=\"dropdown-menu p-0\" role=\"menu\" style=\"width: 100%;\">\n\t\t\t\t<li class=\"p-3\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-8 post-content overflow-hidden mb-3\" style=\"height: 350px;\"></div>\n\t\t\t\t\t\t<div class=\"col-4 ps-0 text-end\">\n\t\t\t\t\t\t\t<div class=\"scroller-content\">\n\t\t\t\t\t\t\t\t<span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\n\t\t\t\t\t\t\t\t<div class=\"scroller-container border-gray-200\" style=\"height: 300px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"scroller-thumb position-relative text-nowrap\" style=\"height: 40px;\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"thumb-text text-sm fw-bold user-select-none position-relative pe-2\" style=\"top: -15px;\"></span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rounded-2 scroller-thumb-icon bg-primary d-inline-block position-relative\" style=\"width: 9px; height:40px;\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<button id=\"myNextPostBtn\" class=\"btn btn-outline-secondary form-control text-truncate\" disabled>[[topic:go-to-my-next-post]]</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter_index]]\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n\n\t<div class=\"bottombar-nav p-2 text-dark bg-light d-flex justify-content-between align-items-center w-100\">\n\t\t<div class=\"\">\n\t\t\t<a href=\"#\" role=\"button\" class=\"nav-link nav-btn d-flex justify-content-between align-items-center position-relative\" data-bs-toggle=\"dropdown\">\n\t\t\t\t<span class=\"position-relative\">\n\t\t\t\t\t<i class=\"fa fa-fw fa-lg fa-bars\"></i>\n\t\t\t\t\t<span component=\"unread/count\" data-unread-url=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['unreadUrl'] : null)) + 
      "\" class=\"position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['mobileUnread'] : null) ?
        "" :
        "hidden") + 
      "\">" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['mobileUnread'] : null)) + 
      "</span>\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t\t<ul class=\"navigation-dropdown dropdown-menu\">\n\t\t\t\t" + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"\">\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n\t\t\t<ul id=\"logged-in-menu\" class=\"list-unstyled d-flex align-items-center w-100 gap-3 mb-0\">\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
            "\n\t\t\t\t<li component=\"sidebar/search\" class=\"nav-item m-0 search\">\n\t\t\t\t<a component=\"search/button\" id=\"search-button\" href=\"#\" role=\"button\" class=\"nav-link nav-btn text-truncate\" data-bs-toggle=\"dropdown\" title=\"[[global:header.search]]\">\n\t<i class=\"fa fa-search fa-fw\"></i>\n\t<span class=\"nav-text visible-open px-2 fw-semibold\">[[global:search]]</span>\n</a>\n<div class=\"search-dropdown dropdown-menu p-2 shadow\">\n\t<form component=\"search/form\" id=\"search-form\" class=\"d-flex justify-content-end align-items-center\" role=\"search\" method=\"GET\">\n\t\t<div component=\"search/fields\" class=\"w-100\" id=\"search-fields\">\n\t\t\t<div id=\"quick-search-container\" class=\"quick-search-container d-block hidden\">\n\t\t\t\t<div class=\"form-check filter-category mb-2 ms-2\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" checked>\n\t\t\t\t\t<label class=\"form-check-label name\"></label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t</div>\n\n\t\t\t<div class=\"d-flex gap-1 input-container\">\n\t\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\n\n\t\t\t\t<div class=\"nav-btn d-flex justify-content-center align-items-center advanced-search-link\">\n\t\t\t\t\t<i class=\"fa fa-gears fa-fw text-muted\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<button type=\"submit\" class=\"btn btn-outline-secondary hide\">[[global:search]]</button>\n\t\t</div>\n\t</form>\n</div>\n\t\t\t\t</li>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t<li component=\"notifications\" class=\"nav-item m-0 notifications\">\n\t\t\t\t<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link nav-btn d-flex gap-2 justify-content-between align-items-center position-relative\">\n\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t<span class=\"position-relative\">\n\t\t\t<i component=\"notifications/icon\" class=\"fa fa-fw " + 
          (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
            "fa-bell" :
            "fa-bell-o") + 
          " unread-count\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "\"></i>\n\t\t\t<span component=\"notifications/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary " + 
          (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
            "" :
            "hidden") + 
          "\">" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "</span>\n\t\t</span>\n\t\t<span class=\"nav-text small visible-open fw-semibold truncate-text\">[[global:header.notifications]]</span>\n\t</span>\n\t<span component=\"notifications/count\" class=\"visible-open badge rounded-1 bg-primary " + 
          (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null) ?
            "" :
            "hidden") + 
          "\">" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "</span>\n</a>\n<ul class=\"notifications-dropdown dropdown-menu p-1 shadow\">\n\t<li>\n\t\t<div component=\"notifications/list\" class=\"list-container notification-list overscroll-behavior-contain pe-1 ff-base\">\n\t\t\t<div class=\"mb-2 p-1\">\n\t\t\t\t<div class=\"d-flex gap-1 justify-content-between\">\n\t\t\t\t\t<div class=\"d-flex gap-2 flex-grow-1 placeholder-wave\">\n\t\t\t\t\t\t<div class=\"placeholder\" style=\"width: 32px; height: 32px;\"></div>\n\t\t\t\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t\t\t\t<div class=\"text-sm\">\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-4\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-6\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-7\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-2\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"placeholder placeholder-sm col-5\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"text-xs\">\n\t\t\t\t\t\t\t\t\t<div class=\"placeholder placeholder-xs col-6\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"mark-read btn-ghost-sm\" style=\"width: 1.5rem; height: 1.5rem;\">\n\t\t\t\t\t\t\t<i class=\"unread fa fa-2xs fa-circle text-primary\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t<li class=\"dropdown-divider\"></li>\n\t<li>\n\t\t<div class=\"d-flex justify-content-center gap-1 flex-wrap\">\n\t\t\t<a role=\"button\" href=\"#\" class=\"btn btn-sm btn-light mark-all-read flex-fill text-nowrap text-truncate ff-secondary\"><i class=\"fa fa-check-double\"></i> [[notifications:mark_all_read]]</a>\n\t\t\t<a class=\"btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/notifications\"><i class=\"fa fa-list\"></i> [[notifications:see_all]]</a>\n\t\t</div>\n\t</li>\n</ul>\n\n\t\t\t\t</li>\n\n\t\t\t\t" + 
          (guard((context != null) ? context['canChat'] : null) ?
            "\n\t\t\t\t<li class=\"nav-item m-0 chats\">\n\t\t\t\t<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link nav-btn d-flex gap-2 justify-content-between align-items-center position-relative\" component=\"chat/dropdown\">\n\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t<span class=\"position-relative\">\n\t\t\t<i component=\"chat/icon\" class=\"fa fa-fw " + 
              (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null) ?
                "fa-comment" :
                "fa-comment-o") + 
              " unread-count\" data-content=\"" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
              "\"></i>\n\t\t\t<span component=\"chat/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary " + 
              (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null) ?
                "" :
                "hidden") + 
              "\">" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
              "</span>\n\t\t</span>\n\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:header.chats]]</span>\n\t</span>\n\t<span component=\"chat/count\" class=\"visible-open badge rounded-1 bg-primary " + 
              (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null) ?
                "" :
                "hidden") + 
              "\">" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
              "</span>\n</a>\n<ul class=\"chats-dropdown dropdown-menu p-1 shadow\">\n\t<li>\n\t\t<div component=\"chat/list\" class=\"list-container chats-list overscroll-behavior-contain p-0 pe-1 ff-base\">\n\t\t\t<div class=\"rounded-1\">\n\t\t\t\t<div class=\"d-flex gap-1 justify-content-between\">\n\t\t\t\t\t<div class=\"dropdown-item p-2 d-flex gap-2 placeholder-wave\">\n\t\t\t\t\t\t<div class=\"main-avatar\">\n\t\t\t\t\t\t\t<div class=\"placeholder\" style=\"width: 32px; height: 32px;\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-flex flex-grow-1 flex-column w-100\">\n\t\t\t\t\t\t\t<div class=\"text-xs\"><div class=\"placeholder col-3\"></div></div>\n\t\t\t\t\t\t\t<div class=\"text-sm\"><div class=\"placeholder col-11\"></div></div>\n\t\t\t\t\t\t\t<div class=\"text-xs\"><div class=\"placeholder col-4\"></div></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"mark-read btn-ghost-sm\" style=\"width: 1.5rem; height: 1.5rem;\">\n\t\t\t\t\t\t\t<i class=\"unread fa fa-2xs fa-circle text-primary\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t<li class=\"dropdown-divider\"></li>\n\t<li>\n\t\t<div class=\"d-flex justify-content-center gap-1 flex-wrap\">\n\t\t\t<a component=\"chats/mark-all-read\" role=\"button\" href=\"#\" class=\"btn btn-sm btn-light mark-all-read flex-fill text-nowrap text-truncate ff-secondary\"><i class=\"fa fa-check-double\"></i> [[modules:chat.mark_all_read]]</a>\n\t\t\t<!-- on md and up see all chats button goes to last room -->\n\t\t\t<a class=\"d-none d-md-inline btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/chats" + 
              (guard((context != null && context['user'] != null) ? context['user']['lastRoomId'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['lastRoomId'] : null)) :
                "") + 
              "\"><i class=\"fa fa-list\"></i> [[modules:chat.see_all]]</a>\n\t\t\t<!-- on xs&sm the see all chats button goes to the list of chats -->\n\t\t\t<a class=\"d-inline d-md-none btn btn-sm btn-primary flex-fill text-nowrap text-truncate ff-secondary\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/chats\"><i class=\"fa fa-list\"></i> [[modules:chat.see_all]]</a>\n\t\t</div>\n\t</li>\n</ul>\n\n\t\t\t\t</li>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t<li component=\"sidebar/drafts\" class=\"hidden nav-item m-0 drafts\">\n\t\t\t\t<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link nav-btn d-flex gap-2 justify-content-between align-items-center position-relative\">\n\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t<span class=\"position-relative\">\n\t\t\t<i component=\"drafts/icon\" class=\"fa fa-fw fa-pen-to-square unread-count\"></i>\n\t\t\t<span component=\"drafts/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary hidden\">0</span>\n\t\t</span>\n\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:header.drafts]]</span>\n\t</span>\n\t<span component=\"drafts/count\" class=\"visible-open badge rounded-1 bg-primary hidden\">0</span>\n</a>\n<ul class=\"drafts-dropdown dropdown-menu p-1 shadow\">\n\t<li>\n\t\t<div component=\"drafts/list\" class=\"list-container draft-list list-unstyled d-flex flex-column overscroll-behavior-contain gap-1 pe-1\">\n\t\t\t<div class=\"dropdown-item rounded-1 p-2 d-flex gap-2 placeholder-wave\">\n\t\t\t\t<div class=\"d-flex flex-grow-1 flex-column w-100\">\n\t\t\t\t\t<div class=\"text-xs placeholder col-3\">&nbsp;</div>\n\t\t\t\t\t<div class=\"text-sm placeholder col-11\">&nbsp;</div>\n\t\t\t\t\t<div class=\"text-xs placeholder col-4\">&nbsp;</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"hidden no-drafts text-center p-4 d-flex flex-column\">\n\t\t\t\t<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n\t\t\t\t<div class=\"text-xs fw-semibold text-muted\">[[modules:composer.no-drafts]]</div>\n\t\t\t</div>\n\t\t\t<div class=\"draft-item-container\">\n\t\t\t\t" + 
          compiled.blocks['drafts'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</li>\n</ul>\n\n\t\t\t\t</li>\n\n\t\t\t\t<li id=\"user_label\" class=\"nav-item m-0 py-2 usermenu\">\n\t\t\t\t<label class=\"nav-link nav-btn text-truncate d-flex gap-2 align-items-center\" data-bs-toggle=\"dropdown\" id=\"user_dropdown\" role=\"button\" component=\"header/avatar\">\n\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "20px", guard((context != null) ? context['true'] : null)])) + 
          "\n\t<span id=\"user-header-name\" class=\"nav-text small visible-open fw-semibold\">" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
          "</span>\n</label>\n<ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"overscroll-behavior-contain user-dropdown dropdown-menu shadow p-1 text-sm ff-base\" aria-labelledby=\"user_dropdown\">\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
          "\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status " + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
          "\"><span class=\"visually-hidden\">[[global:" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
          "]]</span></span>\n\t\t\t<span class=\"fw-semibold\" component=\"header/username\">" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
          "</span>\n\t\t</a>\n\t</li>\n\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t<li><h6 class=\"dropdown-header text-xs\">[[global:status]]</h6></li>\n\t<li>\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
          (guard((context != null && context['user'] != null) ? context['user']['online'] : null) ?
            "selected" :
            "") + 
          "\" data-status=\"online\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status online\"><span class=\"visually-hidden\">[[global:online]]</span></span>\n\t\t\t<span class=\"flex-grow-1\">[[global:online]]</span>\n\t\t\t<i class=\"fa-solid fa-check text-muted flex-shrink-0\"></i>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
          (guard((context != null && context['user'] != null) ? context['user']['away'] : null) ?
            "selected" :
            "") + 
          "\" data-status=\"away\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status away\"><span class=\"visually-hidden\">[[global:away]]</span></span>\n\t\t\t<span class=\"flex-grow-1\">[[global:away]]</span>\n\t\t\t<i class=\"fa-solid fa-check text-muted flex-shrink-0\"></i>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
          (guard((context != null && context['user'] != null) ? context['user']['dnd'] : null) ?
            "selected" :
            "") + 
          "\" data-status=\"dnd\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status dnd\"><span class=\"visually-hidden\">[[global:dnd]]</span></span>\n\t\t\t<span class=\"flex-grow-1\">[[global:dnd]]</span>\n\t\t\t<i class=\"fa-solid fa-check text-muted flex-shrink-0\"></i>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1 user-status d-flex align-items-center gap-2 " + 
          (guard((context != null && context['user'] != null) ? context['user']['offline'] : null) ?
            "selected" :
            "") + 
          "\" data-status=\"offline\">\n\t\t\t<span component=\"user/status\" class=\"flex-shrink-0 border border-white border-2 rounded-circle status offline\"><span class=\"visually-hidden\">[[global:invisible]]</span></span>\n\t\t\t<span class=\"flex-grow-1\">[[global:invisible]]</span>\n\t\t\t<i class=\"fa-solid fa-check text-muted flex-shrink-0\"></i>\n\t\t</a>\n\t</li>\n\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
          "/bookmarks\">\n\t\t\t<i class=\"fa fa-fw fa-bookmark text-muted\"></i> <span>[[user:bookmarks]]</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink/edit\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
          "/edit\">\n\t\t\t<i class=\"fa fa-fw fa-edit text-muted\"></i> <span>[[user:edit-profile]]</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" component=\"header/profilelink/settings\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
          "/settings\">\n\t\t\t<i class=\"fa fa-fw fa-gear text-muted\"></i> <span>[[user:settings]]</span>\n\t\t</a>\n\t</li>\n\t" + 
          (guard((context != null) ? context['showModMenu'] : null) ?
            "\n\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t<li><h6 class=\"dropdown-header text-xs\">[[pages:moderator-tools]]</h6></li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/flags\">\n\t\t\t<i class=\"fa fa-fw fa-flag text-muted\"></i> <span>[[pages:flagged-content]]</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">\n\t\t\t<i class=\"fa fa-fw fa-list-alt text-muted\"></i> <span>[[pages:post-queue]]</span>\n\t\t</a>\n\t</li>\n\t" + 
              (guard((context != null) ? context['registrationQueueEnabled'] : null) ?
                "\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/registration-queue\">\n\t\t\t<i class=\"fa fa-fw fa-list-alt text-muted\"></i> <span>[[pages:registration-queue]]</span>\n\t\t</a>\n\t</li>\n\t" :
                "") + 
              "\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">\n\t\t\t<i class=\"fa fa-fw fa-ban text-muted\"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t</a>\n\t</li>\n\t" :
            "\n\t" + 
              (guard((context != null) ? context['postQueueEnabled'] : null) ?
                "\n\t<li>\n\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/post-queue\">\n\t\t\t<i class=\"fa fa-fw fa-list-alt text-muted\"></i> <span>[[pages:post-queue]]</span>\n\t\t</a>\n\t</li>\n\t" :
                "") + 
              "\n\t") + 
          "\n\n\t<li role=\"presentation\" class=\"dropdown-divider\"></li>\n\t<li component=\"user/logout\">\n\t\t<form method=\"post\" action=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/logout\">\n\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
          "\">\n\t\t\t<input type=\"hidden\" name=\"noscript\" value=\"true\">\n\t\t\t<button type=\"submit\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\">\n\t\t\t\t<i class=\"fa fa-fw fa-sign-out text-muted\"></i><span>[[global:logout]]</span>\n\t\t\t</button>\n\t\t</form>\n\t</li>\n</ul>\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t" :
        "\n\t\t\t<ul id=\"logged-out-menu\" class=\"list-unstyled d-flex w-100 gap-3 mb-0 logged-out-menu\">\n\t\t\t\t\n<li class=\"nav-item mx-2 order-last order-md-first\" title=\"[[global:login]]\">\n\t<a class=\"nav-link nav-btn\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/login\">\n\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t<span class=\"position-relative\">\n\t\t\t\t<i class=\"fa fa-fw fa-sign-in\"></i>\n\t\t\t</span>\n\t\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:login]]</span>\n\t\t</span>\n\t</a>\n</li>\n<hr class=\"my-2 mx-2 visible-open\">\n" + 
          (guard((context != null) ? context['allowRegistration'] : null) ?
            "\n<li class=\"nav-item mx-2\" title=\"[[global:register]]\">\n\t<span class=\"text-xs visible-open\">[[login:dont_have_account]]</span>\n\t<a class=\"nav-link nav-btn\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/register\">\n\t\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t\t<span class=\"position-relative\">\n\t\t\t\t<i class=\"fa fa-fw fa-user-plus\"></i>\n\t\t\t</span>\n\t\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:register]]</span>\n\t\t</span>\n\t</a>\n</li>\n<hr class=\"my-2 mx-2 visible-open\">\n" :
            "") + 
          "\n\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
            "\n<li component=\"sidebar/search\" class=\"visible-open nav-item mx-2 search\">\n\t<div class=\"d-flex gap-2 py-1 px-2 align-items-center\" title=\"[[themes/harmony:login-register-to-search]]\">\n\t\t<i class=\"fa fa-fw fa-search text-muted\"></i>\n\t\t<span class=\"nav-text visible-open text-xs text-muted\">[[themes/harmony:login-register-to-search]]</span>\n\t</a>\n</a>\n" :
            "") + 
          "\n\n\n\n\n\t\t\t</ul>\n\t\t\t") + 
      "\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t" + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\n\t\t\t\t<li class=\"nav-item " + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " dropend" :
                "") + 
              "\" title=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['title'] : null)) + 
              "\">\n\t\t\t\t\t<a class=\"nav-link nav-btn navigation-link px-3 py-2 " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "dropdown-toggle" :
                "") + 
              "\"\n\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " href=\"#\" role=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse-target-" + 
                  __escape(index) + 
                  "\" onclick=\"event.stopPropagation();\" " :
                " href=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
                  "\"") + 
              " " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null) ?
                "id=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
                  "\"" :
                "") + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['targetBlank'] : null) ?
                " target=\"_blank\"" :
                "") + 
              ">\n\t\t\t\t\t\t<span class=\"d-inline-flex justify-content-between align-items-center w-100\">\n\t\t\t\t\t\t\t<span class=\"text-nowrap\">\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
                "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) + 
                  "\" data-content=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "\"></i>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "\n\t\t\t\t\t\t\t\t<span class=\"nav-text px-2 fw-semibold\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "</span>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span component=\"navigation/count\" class=\"badge rounded-1 bg-primary " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null) ?
                "" :
                "hidden") + 
              "\">" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
              "</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n\t\t\t\t\t<div class=\"ps-3\">\n\t\t\t\t\t\t<ul id=\"collapse-target-" + 
                  __escape(index) + 
                  "\" class=\"collapse list-unstyled ps-3\">\n\t\t\t\t\t\t\t" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdownContent'] : null)) + 
                  "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t</li>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'drafts': function drafts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['drafts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t" + 
          (index === 0 ?
            "" :
            "\n\t\t\t\t<hr class=\"my-1\"/>\n\t\t\t\t") + 
          "\n\t\t\t\t<div data-save-id=\"" + 
          __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['save_id'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"d-flex gap-1 justify-content-between ff-base\">\n\t\t\t\t\t\t<div class=\"dropdown-item rounded-1 p-2 d-flex flex-column gap-2 pointer\" component=\"drafts/open\" data-save-id=\"" + 
          __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['save_id'] : null)) + 
          "\">\n\t\t\t\t\t\t\t" + 
          ((guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['action'] : null) == "topics.post") ?
            "\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['title'] : null) ?
                "\n\t\t\t\t\t\t\t<div class=\"text text-xs fw-semibold line-clamp-2 text-break\">" + 
                  __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['title'] : null)) + 
                  "</div>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t\t" + 
          ((guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['action'] : null) == "posts.reply") ?
            "\n\t\t\t\t\t\t\t<div class=\"text text-xs fw-semibold line-clamp-2 text-break\">[[topic:composer.replying_to, \"" + 
              __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['title'] : null)) + 
              "\"]]</div>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t\t" + 
          ((guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['action'] : null) == "posts.edit") ?
            "\n\t\t\t\t\t\t\t<div class=\"text text-xs fw-semibold line-clamp-2\">[[topic:composer.editing-in, \"" + 
              __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['title'] : null)) + 
              "\"]]</div>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['text'] : null) ?
            "\n\t\t\t\t\t\t\t<div class=\"text text-sm line-clamp-3 text-break\">" + 
              __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['text'] : null)) + 
              "</div>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t<div class=\"timeago text-xs text-muted\" title=\"" + 
          __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['timestampISO'] : null)) + 
          "\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button component=\"drafts/delete\" data-save-id=\"" + 
          __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['save_id'] : null)) + 
          "\" class=\"btn btn-light btn-sm\">\n\t\t\t\t\t\t\t\t<i class=\"unread fa fa-xs fa-trash text-secondary\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

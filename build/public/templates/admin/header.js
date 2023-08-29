
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
    return "<!DOCTYPE html>\r\n<html data-bs-theme=\"light\" lang=\"" + 
      __escape(helper(context, helpers, 'localeToHTML', [guard((context != null) ? context['acpLang'] : null), guard((context != null) ? context['defaultLang'] : null)])) + 
      "\" " + 
      (guard((context != null) ? context['languageDirection'] : null) ?
        "data-dir=\"" + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          "\" style=\"direction: " + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          ";\"" :
        "") + 
      ">\r\n\t<head>\r\n\t\t<title>" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</title>\r\n\r\n\t\t" + 
      compiled.blocks['metaTags'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t" + 
      compiled.blocks['linkTags'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/admin" + 
      ((guard((context != null) ? context['languageDirection'] : null) == "rtl") ?
        "-rtl" :
        "") + 
      ".css?" + 
      __escape(guard((context != null) ? context['cache-buster'] : null)) + 
      "\" />\r\n\r\n\t\t<script>\r\n\t\t\tvar config = JSON.parse('" + 
      guard((context != null) ? context['configJSON'] : null) + 
      "');\r\n\t\t\tvar app = {\r\n\t\t\t\tuser: JSON.parse('" + 
      guard((context != null) ? context['userJSON'] : null) + 
      "'),\r\n\t\t\t\tconfig: JSON.parse(decodeURIComponent(\"" + 
      guard((context != null) ? context['adminConfigJSON'] : null) + 
      "\")),\r\n\t\t\t\tflags: {},\r\n\t\t\t\tinAdmin: true\r\n\t\t\t};\r\n\t\t\tconst theme = localStorage.getItem('data-bs-theme');\r\n\t\t\tif (theme && theme === 'dark') {\r\n\t\t\t\tdocument.documentElement.setAttribute('data-bs-theme', 'dark');\r\n\t\t\t}\r\n\t\t</script>\r\n\r\n\t\t<script type=\"text/javascript\" src=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/admin.min.js?" + 
      __escape(guard((context != null) ? context['cache-buster'] : null)) + 
      "\"></script>\r\n\r\n\t\t" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\r\n\t</head>\r\n\r\n\t<body class=\"admin " + 
      __escape(guard((context != null) ? context['bodyClass'] : null)) + 
      "\">\r\n\t\t<div data-bs-theme=\"light\" class=\"offcanvas offcanvas-start gap-1\" tabindex=\"-1\" id=\"offcanvas\" aria-labelledby=\"offcanvasLabel\" style=\"width: 275px;\">\r\n\t<div class=\"offcanvas-body flex-0 pb-0 overflow-visible d-flex flex-column gap-1 ff-secondary\">\r\n\t\t<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "hidden") + 
      " mb-0 py-1 pe-2 alert-dismissible\">\r\n\t<div>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</div>\r\n\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\r\n\t\t[[admin/menu:alerts.upgrade, " + 
      __escape(guard((context != null) ? context['latestVersion'] : null)) + 
      "]]\r\n\t</a>\r\n\t<button type=\"button\" class=\"btn-close p-2\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n</div>\r\n\r\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\"><i class=\"fa fa-fw fa-home\"></i> [[admin/menu:view-forum]]</a>\r\n\r\n\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\r\n<div component=\"acp/search\" class=\"my-1 acp-search\">\r\n\t<div class=\"dropdown\">\r\n\t\t<input type=\"text\" data-bs-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\">\r\n\t\t<ul class=\"dropdown-menu state-start-typing p-1\" role=\"menu\">\r\n\t\t\t<li role=\"presentation\" class=\"no-results\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.no-results]]</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"dropdown-divider search-forum\"></li>\r\n\t\t\t<li role=\"presentation\" class=\"search-forum\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\" target=\"_top\" href=\"#\">\r\n\t\t\t\t\t[[admin/menu:search.search-forum]]\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"keep-typing\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.keep-typing]]</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"start-typing\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.start-typing]]</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n" :
        "") + 
      "\r\n\t</div>\r\n\r\n\t<div class=\"offcanvas-body d-flex flex-column pt-0 overflow-hidden\">\r\n\t\t<div class=\"d-flex flex-column gap-1 ff-secondary flex-1 overflow-auto\">\r\n\t\t\t<!-- main acp navigation menu -->\r\n\r\n<div class=\"accordion overflow-auto d-flex flex-column gap-1\" component=\"acp/accordion\" id=\"accordionACP\">\r\n\r\n\t<!-- dashboard menu -->\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseDashboard\" aria-expanded=\"true\" aria-controls=\"collapseDashboard\">\r\n\t\t\t<i class=\"fa fa-fw fa-gauge\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-dashboard]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseDashboard\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/searches\">[[admin/menu:dashboard/searches]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- manage menu -->\r\n\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseManage\" aria-expanded=\"true\" aria-controls=\"collapseManage\">\r\n\t\t\t<i class=\"fa fa-fw fa-list\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-manage]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseManage\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<h6 class=\"text-xs ps-4\">[[pages:moderator-tools]]</h6>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/flags\">[[admin/menu:manage/flagged-content]] <i class=\"fa fa-external-link\"></i></a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t<!-- settings menu -->\r\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseSettings\" aria-expanded=\"true\" aria-controls=\"collapseSettings\">\r\n\t\t\t<i class=\"fa fa-fw fa-sliders\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-settings]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseSettings\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<!-- appearance menu -->\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAppearance\" aria-expanded=\"true\" aria-controls=\"collapseAppearance\">\r\n\t\t\t<i class=\"fa fa-fw fa-paintbrush\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-appearance]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseAppearance\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<!-- extend menu -->\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseExtend\" aria-expanded=\"true\" aria-controls=\"collapseExtend\">\r\n\t\t\t<i class=\"fa fa-fw fa-wrench\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-extend]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseExtend\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- plugins menu -->\r\n\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsePlugins\" aria-expanded=\"true\" aria-controls=\"collapsePlugins\">\r\n\t\t\t<i class=\"fa fa-fw fa-plug\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-plugins]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapsePlugins\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t" + 
              compiled.blocks['plugins'](helpers, context, guard, iter, helper) + 
              "\r\n\r\n\t\t\t\t" + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<div class=\"text-sm ms-4\">[[admin/menu:section-social-auth]]</div>\r\n\t\t\t\t" + 
                  compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
                  "\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n\t" :
        "") + 
      "\r\n\r\n\t<!-- advanced menu -->\r\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAdvanced\" aria-expanded=\"true\" aria-controls=\"collapseAdvanced\">\r\n\t\t\t<i class=\"fa fa-fw fa-superpowers\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-advanced]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseAdvanced\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a>\r\n\t\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n  </div>\r\n\t\t</div>\r\n\t\t<hr class=\"my-1\"/>\r\n\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n<button component=\"rebuild-and-restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-refresh\"></i> [[admin/menu:rebuild-and-restart]]</button>\r\n\r\n<button component=\"restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-repeat\"></i> [[admin/menu:restart]]</button>\r\n" :
        "") + 
      "\r\n\r\n<button component=\"logout\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-sign-out\"></i> [[admin/menu:logout]]</button>\r\n\t</div>\r\n</div>\r\n\t\t<div class=\"d-flex\">\r\n\t\t\t<div data-bs-theme=\"light\" id=\"sidebar-left\" style=\"width:240px;\" class=\"vh-100 sticky-top start-0 d-none d-lg-flex text-bg-light p-2 flex-column justify-content-start text-sm border-end gap-1 flex-shrink-0\">\r\n\t<div class=\"d-flex flex-column gap-1 ff-secondary\">\r\n\r\n\t\t<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "hidden") + 
      " mb-0 py-1 pe-2 alert-dismissible\">\r\n\t<div>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</div>\r\n\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\r\n\t\t[[admin/menu:alerts.upgrade, " + 
      __escape(guard((context != null) ? context['latestVersion'] : null)) + 
      "]]\r\n\t</a>\r\n\t<button type=\"button\" class=\"btn-close p-2\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n</div>\r\n\r\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\"><i class=\"fa fa-fw fa-home\"></i> [[admin/menu:view-forum]]</a>\r\n\r\n\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\r\n<div component=\"acp/search\" class=\"my-1 acp-search\">\r\n\t<div class=\"dropdown\">\r\n\t\t<input type=\"text\" data-bs-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\">\r\n\t\t<ul class=\"dropdown-menu state-start-typing p-1\" role=\"menu\">\r\n\t\t\t<li role=\"presentation\" class=\"no-results\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.no-results]]</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"dropdown-divider search-forum\"></li>\r\n\t\t\t<li role=\"presentation\" class=\"search-forum\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\" target=\"_top\" href=\"#\">\r\n\t\t\t\t\t[[admin/menu:search.search-forum]]\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"keep-typing\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.keep-typing]]</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"start-typing\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.start-typing]]</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n" :
        "") + 
      "\r\n\t</div>\r\n\t<div class=\"d-flex flex-column gap-1 ff-secondary flex-1 overflow-auto\">\r\n\t\t<!-- main acp navigation menu -->\r\n\r\n<div class=\"accordion overflow-auto d-flex flex-column gap-1\" component=\"acp/accordion\" id=\"accordionACP\">\r\n\r\n\t<!-- dashboard menu -->\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseDashboard\" aria-expanded=\"true\" aria-controls=\"collapseDashboard\">\r\n\t\t\t<i class=\"fa fa-fw fa-gauge\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-dashboard]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseDashboard\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/searches\">[[admin/menu:dashboard/searches]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- manage menu -->\r\n\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseManage\" aria-expanded=\"true\" aria-controls=\"collapseManage\">\r\n\t\t\t<i class=\"fa fa-fw fa-list\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-manage]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseManage\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<h6 class=\"text-xs ps-4\">[[pages:moderator-tools]]</h6>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/flags\">[[admin/menu:manage/flagged-content]] <i class=\"fa fa-external-link\"></i></a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t<!-- settings menu -->\r\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseSettings\" aria-expanded=\"true\" aria-controls=\"collapseSettings\">\r\n\t\t\t<i class=\"fa fa-fw fa-sliders\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-settings]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseSettings\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<!-- appearance menu -->\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAppearance\" aria-expanded=\"true\" aria-controls=\"collapseAppearance\">\r\n\t\t\t<i class=\"fa fa-fw fa-paintbrush\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-appearance]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseAppearance\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<!-- extend menu -->\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseExtend\" aria-expanded=\"true\" aria-controls=\"collapseExtend\">\r\n\t\t\t<i class=\"fa fa-fw fa-wrench\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-extend]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseExtend\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- plugins menu -->\r\n\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsePlugins\" aria-expanded=\"true\" aria-controls=\"collapsePlugins\">\r\n\t\t\t<i class=\"fa fa-fw fa-plug\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-plugins]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapsePlugins\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t" + 
              iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
                var key = key0;
                return "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/admin" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
                  "</a>\r\n\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\r\n\t\t\t\t" + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<div class=\"text-sm ms-4\">[[admin/menu:section-social-auth]]</div>\r\n\t\t\t\t" + 
                  iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
                    var key = key0;
                    return "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
                      __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/admin" + 
                      __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
                      "</a>\r\n\t\t\t\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n\t" :
        "") + 
      "\r\n\r\n\t<!-- advanced menu -->\r\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n\t<div class=\"d-flex flex-column\">\r\n\t\t<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAdvanced\" aria-expanded=\"true\" aria-controls=\"collapseAdvanced\">\r\n\t\t\t<i class=\"fa fa-fw fa-superpowers\"></i>\r\n\t\t\t<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-advanced]]</div>\r\n\t\t</button>\r\n\r\n\t\t<div id=\"collapseAdvanced\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\r\n\t\t\t<div class=\"accordion-body p-0\">\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a>\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a>\r\n\t\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n  </div>\r\n\t</div>\r\n\r\n\t<div class=\"d-flex flex-column gap-1 ff-secondary\">\r\n\t\t<hr class=\"my-1\"/>\r\n\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n<button component=\"rebuild-and-restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-refresh\"></i> [[admin/menu:rebuild-and-restart]]</button>\r\n\r\n<button component=\"restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-repeat\"></i> [[admin/menu:restart]]</button>\r\n" :
        "") + 
      "\r\n\r\n<button component=\"logout\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-sign-out\"></i> [[admin/menu:logout]]</button>\r\n\t</div>\r\n</div>\r\n\r\n\t\t\t<div class=\"container flex-1 mt-4 mb-5\" id=\"content\">\r\n\r\n";
  }

  compiled.blocks = {
    'metaTags': function metaTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['metaTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildMetaTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'linkTags': function linkTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['linkTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildLinkTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['scripts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<script type=\"text/javascript\" src=\"" + 
          __escape(guard((context != null && context['scripts'] != null && context['scripts'][key0] != null) ? context['scripts'][key0]['src'] : null)) + 
          "\"></script>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'plugins': function plugins(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
          "</a>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "</a>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

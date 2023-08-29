
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
    return (guard((context != null) ? context['error'] : null) ?
        "" :
        "\r\n<li id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" data-plugin-index=\"" + 
          __escape(index) + 
          "\" data-plugin-id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" data-version=\"" + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2 " + 
          (guard((context != null) ? context['active'] : null) ?
            "active" :
            "") + 
          "\">\r\n\t<div>\r\n\t\t<h6><strong>" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</strong></h6>\r\n\r\n\t\t" + 
          (guard((context != null) ? context['description'] : null) ?
            "\r\n\t\t<p class=\"text-xs\">" + 
              __escape(guard((context != null) ? context['description'] : null)) + 
              "</p>\r\n\t\t" :
            "") + 
          "\r\n\t\t" + 
          (guard((context != null) ? context['outdated'] : null) ?
            "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
            "") + 
          "\r\n\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard((context != null) ? context['latest'] : null)) + 
          "</strong></small>\r\n\r\n\t\t" + 
          (guard((context != null) ? context['outdated'] : null) ?
            "\r\n\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\r\n\t\t<p class=\"text-xs\">\r\n\t\t\t" + 
              (guard((context != null) ? context['isCompatible'] : null) ?
                "\r\n\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                  __escape(guard((context != null) ? context['version'] : null)) + 
                  "]]\r\n\t\t\t" :
                "\r\n\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\r\n\t\t\t") + 
              "\r\n\t\t</p>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard((context != null) ? context['url'] : null) ?
            "\r\n\t\t<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard((context != null) ? context['url'] : null)) + 
              "\">" + 
              __escape(guard((context != null) ? context['url'] : null)) + 
              "</a></p>\r\n\t\t" :
            "") + 
          "\r\n\t</div>\r\n\r\n\t<div class=\"controls d-flex flex-column gap-1\">\r\n\t\t" + 
          (guard((context != null) ? context['installed'] : null) ?
            "\r\n\t\t\t" + 
              (guard((context != null) ? context['isTheme'] : null) ?
                "\r\n\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/admin/appearance/themes\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-arrow-up-right-from-square text-primary\"></i> [[admin/extend/plugins:plugin-item.themes]]</a>\r\n\t\t\t" :
                "\r\n\r\n\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                  (guard((context != null) ? context['active'] : null) ?
                    "" :
                    "hidden") + 
                  " " + 
                  (guard((context != null) ? context['canChangeState'] : null) ?
                    "" :
                    "disabled") + 
                  "\">\r\n\t\t\t\t<i class=\"fa fa-power-off text-danger\"></i> [[admin/extend/plugins:plugin-item.deactivate]]\r\n\t\t\t</button>\r\n\r\n\t\t\t<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm text-nowrap " + 
                  (guard((context != null) ? context['active'] : null) ?
                    "hidden" :
                    "") + 
                  " " + 
                  (guard((context != null) ? context['canChangeState'] : null) ?
                    "" :
                    "disabled") + 
                  "\">\r\n\t\t\t\t<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\r\n\t\t\t</button>\r\n\r\n\t\t\t") + 
              "\r\n\r\n\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\r\n\r\n\t\t\t" + 
              (guard((context != null) ? context['active'] : null) ?
                "\r\n\t\t\t" + 
                  (guard((context != null) ? context['settingsRoute'] : null) ?
                    "\r\n\t\t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      __escape(guard((context != null) ? context['settingsRoute'] : null)) + 
                      "\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-wrench text-primary\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\r\n\t\t\t" :
                    "") + 
                  "\r\n\t\t\t" :
                "") + 
              "\r\n\t\t" :
            "\r\n\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\"><i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\r\n\t\t") + 
          "\r\n\t</div>\r\n\r\n</li>\r\n") + 
      "\r\n\r\n" + 
      (guard((context != null) ? context['error'] : null) ?
        "\r\n<li data-plugin-id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" class=\"clearfix\">\r\n\t<div class=\"float-end\">\r\n\t\t<button class=\"btn btn-light btn-sm disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\r\n\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\r\n\t</div>\r\n\r\n\t<h2><strong>" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "</strong></h2>\r\n\t<p class=\"text-xs\">\r\n\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\r\n\t</p>\r\n</li>\r\n" :
        "") + 
      "\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

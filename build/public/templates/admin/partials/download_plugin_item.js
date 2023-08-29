
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
    return "<li id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" data-plugin-id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" class=\"d-flex gap-1 justify-content-between text-bg-light border-start border-primary border-3 p-3 mb-2\">\r\n\t<div class=\"\">\r\n\t\t<h6><strong>" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "</strong></h6>\r\n\r\n\t\t" + 
      (guard((context != null) ? context['description'] : null) ?
        "\r\n\t\t<p class=\"text-xs\">" + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "</p>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
      __escape(guard((context != null) ? context['latest'] : null)) + 
      "</strong></small>\r\n\t\t<p class=\"text-xs\">\r\n\t\t\t" + 
      (guard((context != null) ? context['isCompatible'] : null) ?
        "\r\n\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "]]\r\n\t\t\t" :
        "\r\n\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\r\n\t\t\t") + 
      "\r\n\t\t</p>\r\n\r\n\t\t" + 
      (guard((context != null) ? context['url'] : null) ?
        "\r\n\t\t<p class=\"text-xs mb-0\">[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "</a></p>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n\t<div class=\"d-flex flex-column gap-1\">\r\n\t\t<button data-action=\"toggleActive\" class=\"btn btn-light btn-sm hidden text-nowrap\">\r\n\t\t\t<i class=\"fa fa-power-off text-primary\"></i> [[admin/extend/plugins:plugin-item.activate]]\r\n\t\t</button>\r\n\r\n\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-light btn-sm text-nowrap\">\r\n\t\t\t<i class=\"fa fa-download text-primary\"></i> [[admin/extend/plugins:plugin-item.install]]\r\n\t\t</button>\r\n\t</div>\r\n</li>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

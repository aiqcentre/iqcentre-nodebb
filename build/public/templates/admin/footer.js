
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
    return "\t\t</div> <!-- #content end-->\r\n\t</div>\r\n\r\n\t<div component=\"bottombar\" class=\"bottombar d-flex d-lg-none fixed-bottom ff-secondary gap-1 align-items-center\">\r\n\t<div class=\"bottombar-nav p-2 text-dark bg-light d-flex justify-content-between align-items-center w-100\">\r\n\t\t<div class=\"\">\r\n\t\t\t<a href=\"#\" role=\"button\" class=\"p-2 nav-link nav-btn\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvas\" >\r\n\t\t\t\t<i class=\"fa fa-fw fa-lg fa-bars\"></i>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\t" + 
      (guard((context != null) ? context['isSpider'] : null) ?
        "" :
        "\r\n\t<div class=\"\">\r\n\t\t<div component=\"toaster/tray\" class=\"alert-window fixed-bottom mb-5 mb-md-2 me-2 me-md-5 ms-auto\" style=\"width:300px; z-index: 1090;\">\r\n\t\t\t<div id=\"reconnect-alert\" class=\"alert alert-dismissible alert-warning fade hide\" component=\"toaster/toast\">\r\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-hidden=\"true\"></button>\r\n\t\t\t\t<p class=\"mb-0\">[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t") + 
      "\r\n\t<script>\r\n\t\tif (document.readyState === 'loading') {\r\n\t\t\tdocument.addEventListener('DOMContentLoaded', prepareFooter);\r\n\t\t} else {\r\n\t\t\tprepareFooter();\r\n\t\t}\r\n\r\n\t\tfunction prepareFooter() {\r\n\t\t\t$(document).ready(function () {\r\n\t\t\t\tapp.coldLoad();\r\n\t\t\t});\r\n\t\t}\r\n\t</script>\r\n</body>\r\n</html>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

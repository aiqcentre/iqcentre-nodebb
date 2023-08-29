
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb mb-0 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
            "justify-content-center" :
            "") + 
          "\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n<div class=\"flex-fill\">\r\n\t<div class=\"alert alert-info\">\r\n\t\t[[reset_password:enter_email]]\r\n\t</div>\r\n\r\n\t<div class=\"card card-body bg-light\">\r\n\t\t<div class=\"alert alert-success alert-dismissible hide\" id=\"success\">\r\n\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\r\n\t\t\t[[reset_password:password_reset_sent]]\r\n\t\t</div>\r\n\t\t<div class=\"alert alert-danger alert-dismissible hide\" id=\"error\">\r\n\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\r\n\t\t\t[[reset_password:invalid_email]]\r\n\t\t</div>\r\n\t\t<form onsubmit=\"return false;\">\r\n\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t<input type=\"email\" class=\"form-control form-control-lg\" id=\"email\" placeholder=\"[[reset_password:enter_email_address]]\" autocomplete=\"off\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-grid\">\r\n\t\t\t\t<button class=\"btn btn-primary btn-lg\" id=\"reset\" type=\"submit\">[[reset_password:reset_password]]</button>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n\t\t\t<span class=\"fw-semibold\" itemprop=\"name\">" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "</span>\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

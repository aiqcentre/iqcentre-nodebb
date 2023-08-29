
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
      "\n\r\n\r\n<div class=\"row col-12 col-sm-6 offset-sm-3\">\r\n\t" + 
      (guard((context != null) ? context['valid'] : null) ?
        "\r\n\t<div class=\"card card-body bg-light\">\r\n\t\t" + 
          (guard((context != null) ? context['displayExpiryNotice'] : null) ?
            "\r\n\t\t<div class=\"alert alert-warning\">\r\n\t\t\t[[reset_password:password_expired]]\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t\t<div class=\"alert alert-success alert-dismissible hidden\" id=\"success\">\r\n\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\r\n\t\t\t<strong>[[reset_password:password_changed.title]]</strong>\r\n\t\t\t<p>[[reset_password:password_changed.message]]</p>\r\n\t\t</div>\r\n\t\t<div class=\"alert alert-warning hidden\" id=\"notice\">\r\n\t\t\t<strong></strong>\r\n\t\t\t<p></p>\r\n\t\t</div>\r\n\t\t<form onsubmit=\"return false;\" id=\"reset-form\">\r\n\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t<label class=\"form-label\" for=\"password\">[[reset_password:new_password]]</label>\r\n\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:new_password]]\" id=\"password\" /><br />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t<label class=\"form-label\" for=\"repeat\">[[reset_password:repeat_password]]</label>\r\n\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:repeat_password]]\" id=\"repeat\" /><br />\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-primary btn-block\" id=\"reset\" type=\"submit\">[[reset_password:reset_password]]</button>\r\n\t\t</form>\r\n\t</div>\r\n\t" :
        "\r\n\t<div class=\"card text-bg-danger\">\r\n\t\t<h5 class=\"card-header\">\r\n\t\t\t[[reset_password:wrong_reset_code.title]]\r\n\t\t</h5>\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<p>[[reset_password:wrong_reset_code.message]]</p>\r\n\t\t</div>\r\n\t</div>\r\n\t") + 
      "\r\n</div>";
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


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
    return "<div class=\"icon-container\">\r\n\t<div class=\"form-group\">\r\n\t\t<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\r\n\t</div>\r\n\t<div class=\"d-flex nbb-fa-icons flex-wrap\">\r\n\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n\t<p class=\"form-text text-center\">\r\n\t\tFor a full list of icons, please consult:\r\n\t\t<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\r\n\t</p>\r\n</div>";
  }

  compiled.blocks = {
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<i class=\"fa fa-xl fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['style'] : null)) + 
          " fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['id'] : null)) + 
          " rounded-1\"></i>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

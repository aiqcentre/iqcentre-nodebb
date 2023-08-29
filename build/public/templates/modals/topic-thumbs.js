
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
    return "<div class=\"topic-thumbs-modal\">\r\n\t" + 
      (guard((context != null && context['thumbs'] != null) ? context['thumbs']['length'] : null) ?
        "" :
        "\r\n\t<div class=\"alert alert-info\">[[modules:thumbs.modal.no-thumbs]]</div>\r\n\t") + 
      "\r\n\t" + 
      compiled.blocks['thumbs'](helpers, context, guard, iter, helper) + 
      "\r\n\t<hr />\r\n\t<p class=\"form-text\">[[modules:thumbs.modal.resize-note, " + 
      __escape(guard((context != null && context['config'] != null && context['config']['thumbs'] != null) ? context['config']['thumbs']['size'] : null)) + 
      "]]</p>\r\n</div>";
  }

  compiled.blocks = {
    'thumbs': function thumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"d-flex align-items-center mb-3\" data-id=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['id'] : null)) + 
          "\" data-path=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['path'] : null)) + 
          "\">\r\n\t\t<div class=\"flex-shrink-0 py-2\">\r\n\t\t\t<img class=\"rounded\" width=\"128px\" style=\"height: auto;\" src=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\" alt=\"\" />\r\n\t\t</div>\r\n\t\t<div class=\"flex-grow-1 ms-3\">\r\n\t\t\t<p>\r\n\t\t\t\t<code>" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['name'] : null)) + 
          "</code>\r\n\t\t\t</p>\r\n\t\t\t<button class=\"btn btn-danger btn-sm text-nowrap\" data-action=\"remove\"><i class=\"fa fa-times\"></i> [[modules:thumbs.modal.remove]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

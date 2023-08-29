
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
    return "<div class=\"d-flex flex-column gap-4 topic-thumbs-view-modal\">\r\n\t<div class=\"d-flex justify-content-center align-items-center mb-5\" style=\"height: 33vh; max-height: 33vh;\">\r\n\t\t<img component=\"topic/thumb/current\" src=\"" + 
      __escape(guard((context != null) ? context['src'] : null)) + 
      "\" style=\"max-height: 33vh;\" />\r\n\t</div>\r\n\t" + 
      ((guard((context != null && context['thumbs'] != null) ? context['thumbs']['length'] : null) != "1") ?
        "\r\n\t<hr/>\r\n\t<div class=\"d-flex justify-content-center mb-3 gap-3\">\r\n\t" + 
          compiled.blocks['thumbs'](helpers, context, guard, iter, helper) + 
          "\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n</div>";
  }

  compiled.blocks = {
    'thumbs': function thumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<div>\r\n\t\t\t<img component=\"topic/thumb/select\" class=\"pointer rounded p-1 border border-3 " + 
          (guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['selected'] : null) ?
            "border-primary" :
            "") + 
          "\" height=\"64px\" style=\"width: auto;\" src=\"" + 
          __escape(guard((context != null && context['thumbs'] != null && context['thumbs'][key0] != null) ? context['thumbs'][key0]['url'] : null)) + 
          "\"/>\r\n\t\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

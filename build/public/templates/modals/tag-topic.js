
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
    return "<div class=\"card tool-modal shadow\">\r\n\t<h5 class=\"card-header\">\r\n\t\t[[topic:thread_tools.tag]]\r\n\t</h5>\r\n\t<div class=\"card-body d-flex flex-column gap-2\">\r\n\t\t" + 
      (guard((context != null) ? context['tagWhitelist'] : null) ?
        "\r\n\t\t<div class=\"d-flex flex-column gap-1\">\r\n\t\t\t<span>[[tags:tag-whitelist]]</span>\r\n\t\t\t<div>\r\n\t\t\t\t" + 
          compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n\t<div class=\"card-footer text-end\">\r\n\t\t<button class=\"btn btn-link btn-sm\" id=\"tag-topic-cancel\">[[global:buttons.close]]</button>\r\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"tag-topic-commit\">[[global:save]]</button>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagWhitelist'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<span class=\"badge bg-info\">" + 
          __escape(guard(value)) + 
          "</span>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<div class=\"mb-3\">\r\n\t\t\t<label class=\"form-label\" for=\"fork-title\"><strong>" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</strong></label>\r\n\t\t\t<input class=\"tags\" type=\"text\" placeholder=\"[[tags:enter_tags_here, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['minimumTagLength'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['maximumTagLength'] : null)) + 
          "]]\" />\r\n\t\t</div>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

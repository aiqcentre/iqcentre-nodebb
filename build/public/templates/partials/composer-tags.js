
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
    return "<div class=\"tag-row\">\n\t<div class=\"tags-container d-flex align-items-center " + 
      (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
        "haswhitelist" :
        "") + 
      "\">\n\t\t<div class=\"btn-group dropup me-2 " + 
      (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
        "" :
        "hidden") + 
      "\" component=\"composer/tag/dropdown\">\n\t\t\t<button class=\"btn btn-sm btn-link text-body dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"><i class=\"fa fa-tags\"></i></span>\n\t\t\t\t[[tags:select_tags]]\n\t\t\t</button>\n\n\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t" + 
      compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\t\t</div>\n\t\t<input class=\"tags\" type=\"text\" class=\"\" placeholder=\"[[tags:enter_tags_here, " + 
      __escape(guard((context != null) ? context['minimumTagLength'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['maximumTagLength'] : null)) + 
      "]]\" tabindex=\"5\" />\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagWhitelist'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li data-tag=\"" + 
          __escape(guard(value)) + 
          "\"><a class=\"dropdown-item\" href=\"#\">" + 
          __escape(guard(value)) + 
          "</a></li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

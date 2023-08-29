
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
    return "<li data-type=\"item\" class=\"list-group-item\">\n    <div class=\"row\">\n        <div class=\"col-xs-9\">\n            <span data-reaction=\"" + 
      __escape(guard((context != null) ? context['reaction'] : null)) + 
      "\"></span><strong> " + 
      __escape(guard((context != null) ? context['reaction'] : null)) + 
      "</strong><br />\n            <small>[[reactions:settings.reaction-reputations.reaction]]: " + 
      __escape(guard((context != null) ? context['reputation'] : null)) + 
      "</small>\n        </div>\n        <div class=\"col-xs-3 text-right\">\n            <button type=\"button\" data-type=\"edit\" class=\"btn btn-info\">[[reactions:settings.reaction-reputations.edit]]</button>\n            <button type=\"button\" data-type=\"remove\" class=\"btn btn-danger\">[[reactions:settings.reaction-reputations.remove]]</button>\n        </div>\n    </div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

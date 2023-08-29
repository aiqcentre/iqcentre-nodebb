
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
    return "<li data-type=\"item\" class=\"list-group-item\">\n    <div class=\"row\">\n        <div class=\"col-9\">\n            <code>" + 
      __escape(guard((context != null) ? context['roleId'] : null)) + 
      "</code>\n            &rarr;\n            <span class=\"badge bg-info\">" + 
      __escape(guard((context != null) ? context['groupName'] : null)) + 
      "</span>\n        </div>\n        <div class=\"col-3 text-end\">\n            <button type=\"button\" data-type=\"edit\" class=\"btn btn-info\">Edit</button>\n            <button type=\"button\" data-type=\"remove\" class=\"btn btn-danger\">Delete</button>\n        </div>\n    </div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

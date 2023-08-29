
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
    return "<li data-type=\"item\" class=\"list-group-item\" data-theme-name=\"" + 
      __escape(guard((context != null) ? context['custom-skin-name'] : null)) + 
      "\" data-theme=\"" + 
      __escape(guard((context != null) ? context['custom-skin-name'] : null)) + 
      "\">\r\n    <div class=\"d-flex justify-content-between align-items-center\">\r\n        <div class=\"\">\r\n            <strong>" + 
      __escape(guard((context != null) ? context['custom-skin-name'] : null)) + 
      "</strong>\r\n        </div>\r\n        <div class=\"\">\r\n            <button type=\"button\" data-action=\"use\" class=\"btn btn-sm btn-primary\">[[admin/appearance/skins:select-skin]]</button>\r\n            <button type=\"button\" data-type=\"edit\" class=\"btn btn-sm btn-light\"><i class=\"fa fa-edit text-primary\"></i></button>\r\n            <button type=\"button\" data-type=\"remove\" class=\"btn btn-sm btn-light\"><i class=\"fa fa-trash-o text-danger\"></i></button>\r\n        </div>\r\n    </div>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

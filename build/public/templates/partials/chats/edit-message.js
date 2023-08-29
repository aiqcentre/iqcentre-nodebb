
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
    return "<div class=\"d-flex flex-column gap-1 mb-1\">\r\n\t<textarea class=\"form-control w-100\" style=\"height:0; max-height: 30vh; resize: none;\">" + 
      __escape(guard((context != null) ? context['rawContent'] : null)) + 
      "</textarea>\r\n\t<div class=\"align-self-end d-flex gap-2\">\r\n\t\t<button class=\"btn btn-sm btn-outline-secondary\" data-action=\"cancel\">[[global:cancel]]</button>\r\n\t\t<button class=\"btn btn-sm btn-success\" data-action=\"save\">[[global:save]]</button>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

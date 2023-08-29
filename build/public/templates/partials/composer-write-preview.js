
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
    return "<div class=\"write-preview-container d-flex gap-2 flex-grow-1 overflow-auto\">\n\t<div class=\"write-container d-flex d-md-flex w-50\">\n\t\t<div class=\"float-end draft-icon hidden-md hidden-lg\"></div>\n\t\t<textarea class=\"write shadow-none rounded-1 w-100 form-control\" tabindex=\"4\" placeholder=\"[[modules:composer.textarea.placeholder]]\">" + 
      __escape(guard((context != null) ? context['body'] : null)) + 
      "</textarea>\n\t</div>\n\t<div class=\"preview-container d-none d-md-flex w-50\">\n\t\t<div class=\"preview card card-body bg-light rounded-1 overflow-auto\"></div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

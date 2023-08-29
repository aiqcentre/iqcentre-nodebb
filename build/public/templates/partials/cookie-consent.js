
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
    return "<div class=\"row d-flex justify-content-center position-fixed start-0 bottom-0 vw-100 pb-5 mb-5 pb-md-0 mb-md-0\" style=\"z-index: 2;\">\n    <div class=\"cookie-consent text-bg-info col-10 col-sm-8 col-lg-6 p-3 rounded d-flex gap-2 mb-5 mb-md-3 justify-content-between align-items-center\">\n        <span>" + 
      __escape(guard((context != null) ? context['message'] : null)) + 
      " <a class=\"fw-bold\" target=\"_blank\" rel=\"noopener\" href=\"" + 
      __escape(guard((context != null) ? context['link_url'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['link'] : null)) + 
      "</a></span>\n        <button class=\"btn btn-primary text-nowrap\">" + 
      __escape(guard((context != null) ? context['dismiss'] : null)) + 
      "</button>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

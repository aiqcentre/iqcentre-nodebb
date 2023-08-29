
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
    return "<div component=\"bottombar\" class=\"bottombar d-flex d-lg-none fixed-bottom ff-secondary gap-1 align-items-center\">\r\n\t<div class=\"bottombar-nav p-2 text-dark bg-light d-flex justify-content-between align-items-center w-100\">\r\n\t\t<div class=\"\">\r\n\t\t\t<a href=\"#\" role=\"button\" class=\"p-2 nav-link nav-btn\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvas\" >\r\n\t\t\t\t<i class=\"fa fa-fw fa-lg fa-bars\"></i>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

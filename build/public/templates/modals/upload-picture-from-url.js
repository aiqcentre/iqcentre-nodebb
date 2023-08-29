
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
    return "<div id=\"upload-picture-from-url-modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload-picture-url\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\" id=\"upload-picture-url\">[[user:upload_picture]]</h5>\r\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<input id=\"uploadFromUrl\" class=\"form-control\" type=\"text\"/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">[[global:close]]</button>\r\n\t\t\t\t<button class=\"btn btn-primary upload-btn\">[[user:upload_picture]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

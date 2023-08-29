
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
    return "<div class=\"alert alert-danger hidden\" id=\"create-modal-error\"></div>\r\n<form>\r\n\t<div class=\"mb-3\">\r\n\t\t<label class=\"form-label\" for=\"create-user-name\">[[admin/manage/users:create.username]]</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"create-user-name\" placeholder=\"[[admin/manage/users:create.username]]\" />\r\n\t</div>\r\n\t<div class=\"mb-3\">\r\n\t\t<label class=\"form-label\" for=\"create-user-email\">[[admin/manage/users:create.email]]</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"create-user-email\" placeholder=\"[[admin/manage/users:create.email-placeholder]]\" />\r\n\t</div>\r\n\r\n\t<div class=\"mb-3\">\r\n\t\t<label class=\"form-label\" for=\"create-user-password\">[[admin/manage/users:create.password]]</label>\r\n\t\t<input type=\"password\" class=\"form-control\" id=\"create-user-password\" placeholder=\"[[admin/manage/users:create.password]]\" />\r\n\t</div>\r\n\r\n\t<div class=\"mb-3\">\r\n\t\t<label class=\"form-label\" for=\"create-user-password-again\">[[admin/manage/users:create.password-confirm]]</label>\r\n\t\t<input type=\"password\" class=\"form-control\" id=\"create-user-password-again\" placeholder=\"[[admin/manage/users:create.password]]\" />\r\n\t</div>\r\n</form>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

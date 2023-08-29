
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
    return "<div class=\"modal fade\" id=\"create-modal\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h4 class=\"modal-title\">[[admin/manage/groups:create]]</h4>\r\n\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"alert alert-danger hide\" id=\"create-modal-error\"></div>\r\n\t\t\t\t<form>\r\n\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"create-group-name\">[[admin/manage/groups:name]]</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-group-name\" placeholder=\"[[admin/manage/groups:name]]\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"create-group-desc\">[[admin/manage/groups:description]]</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-group-desc\" placeholder=\"[[admin/manage/groups:description-placeholder]]\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t\t<input class=\"form-check-input\" id=\"create-group-private\" name=\"private\" type=\"checkbox\" checked>\r\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"create-group-private\">[[admin/manage/groups:private]]</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t\t<input class=\"form-check-input\" id=\"create-group-hidden\" name=\"hidden\" type=\"checkbox\">\r\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"create-group-hidden\">[[admin/manage/groups:hidden]]</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\">\r\n\t\t\t\t\t[[global:close]]\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">\r\n\t\t\t\t\t[[admin/manage/groups:create-button]]\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

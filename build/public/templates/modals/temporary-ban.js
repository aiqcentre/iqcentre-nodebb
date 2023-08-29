
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
    return "<form class=\"form\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t[[admin/manage/users:temp-ban.explanation]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-5\">\r\n\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t<label class=\"form-label\" for=\"length\">[[admin/manage/users:temp-ban.length]]</label>\r\n\t\t\t\t<input class=\"form-control\" id=\"length\" name=\"length\" type=\"number\" min=\"0\" value=\"1\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t<label class=\"form-check-label\" for=\"unit-hours\">[[admin/manage/users:temp-ban.hours]]</label>\r\n\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"unit-hours\" name=\"unit\" value=\"0\" checked />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t<label class=\"form-check-label\" for=\"unit-days\">[[admin/manage/users:temp-ban.days]]</label>\r\n\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"unit-days\" name=\"unit\" value=\"1\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-7\">\r\n\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t<label class=\"form-label\" for=\"reason\">[[admin/manage/users:temp-ban.reason]]</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"reason\" name=\"reason\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

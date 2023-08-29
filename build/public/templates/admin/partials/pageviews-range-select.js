
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
    return "<form role=\"form\">\r\n\t<fieldset>\r\n\t\t<div class=\"alert alert-danger hidden\">[[admin/dashboard:page-views-custom-error]]</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-6\">\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"startRange\">[[admin/dashboard:page-views-custom-start]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" type=\"date\" id=\"startRange\" name=\"startRange\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-6\">\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"endRange\">[[admin/dashboard:page-views-custom-end]]</label>\r\n\t\t\t\t\t<input class=\"form-control\" type=\"date\" id=\"endRange\" name=\"endRange\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<p class=\"form-text\">[[admin/dashboard:page-views-custom-help]]</p>\r\n\t</fieldset>\r\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

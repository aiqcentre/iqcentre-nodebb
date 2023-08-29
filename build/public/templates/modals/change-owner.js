
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
    return "<div class=\"card tool-modal shadow\">\r\n\t<h5 class=\"card-header\">[[topic:thread_tools.change_owner]]</h5>\r\n\t<div class=\"card-body\">\r\n\t\t<p>\r\n\t\t\t[[topic:change_owner_instruction]]\r\n\t\t</p>\r\n\t\t<div class=\"mb-3\">\r\n\t\t\t<label class=\"form-label\" for=\"username\"><strong>[[user:username]]</strong></label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input id=\"username\" type=\"text\" class=\"form-control\">\r\n\t\t\t\t<span class=\"input-group-text\" type=\"button\">\r\n\t\t\t\t\t<i class=\"fa fa-search\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<p>\r\n\t\t\t<strong><span id=\"pids\"></span></strong>\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"card-footer text-end\">\r\n\t\t<button class=\"btn btn-link btn-sm\" id=\"change_owner_cancel\">[[global:buttons.close]]</button>\r\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"change_owner_commit\" disabled>[[topic:change-owner]]</button>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

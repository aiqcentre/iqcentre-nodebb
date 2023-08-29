
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
    return "<div class=\"card tool-modal shadow\">\r\n\t<h5 class=\"card-header\">\r\n\t\t[[topic:thread_tools.move-posts]]\r\n\t</h5>\r\n\t<div class=\"card-body\">\r\n\t\t<p>\r\n            [[topic:move_posts_instruction]]\r\n        </p>\r\n\t\t<div>\r\n\t\t\t<label class=\"form-label\" for=\"topicId\"><strong>[[topic:topic-id]]</strong></label>\r\n\t\t\t<input id=\"topicId\" type=\"text\" class=\"form-control\"><br/>\r\n\t\t</div>\r\n\t\t<p>\r\n    \t\t<strong><span id=\"pids\"></span></strong>\r\n        </p>\r\n\t</div>\r\n\t<div class=\"card-footer text-end\">\r\n\t\t<button class=\"btn btn-link btn-sm\" id=\"move_posts_cancel\">[[global:buttons.close]]</button>\r\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"move_posts_confirm\" disabled>[[topic:move]]</button>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

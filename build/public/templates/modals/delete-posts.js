
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
    return "<div class=\"card tool-modal shadow\">\r\n\t<h5 class=\"card-header\">\r\n\t\t[[topic:thread_tools.delete-posts]]\r\n\t</h5>\r\n\t<div class=\"card-body\">\r\n\t\t<p>\r\n\t\t\t[[topic:delete_posts_instruction]]\r\n\t\t</p>\r\n\t\t<p><strong><span id=\"pids\"></span></strong></p>\r\n\t</div>\r\n\t<div class=\"card-footer text-end\">\r\n\t\t<button class=\"btn btn-link btn-sm\" id=\"delete_posts_cancel\">[[global:buttons.close]]</button>\r\n\t\t<button class=\"btn btn-primary btn-sm\" id=\"delete_posts_confirm\" disabled>[[topic:delete]]</button>\r\n\t\t<button class=\"btn btn-danger btn-sm\" id=\"purge_posts_confirm\" disabled>[[topic:purge]]</button>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

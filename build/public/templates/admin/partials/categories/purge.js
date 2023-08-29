
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
    return "<form type=\"form\">\r\n    [[admin/manage/categories:alert.confirm-purge, " + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "]]\r\n    <hr/>\r\n    <div class=\"progress\">\r\n        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"" + 
      __escape(guard((context != null) ? context['topic_count'] : null)) + 
      "\" style=\"width: 0%;\">\r\n        </div>\r\n    </div>\r\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

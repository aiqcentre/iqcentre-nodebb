
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
    return "<div component=\"topic/deleted/message\" class=\"alert alert-warning mt-3" + 
      (guard((context != null) ? context['deleted'] : null) ?
        "" :
        " hidden") + 
      " d-flex justify-content-between flex-wrap\">\r\n    <span>[[topic:deleted_message]]</span>\r\n    <span>\r\n        " + 
      (guard((context != null) ? context['deleter'] : null) ?
        "\r\n        <a class=\"fw-bold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['username'] : null)) + 
          "</a> <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['deletedTimestampISO'] : null)) + 
          "\"></small>\r\n        " :
        "") + 
      "\r\n    </span>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

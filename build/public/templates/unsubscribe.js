
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
    return (guard((context != null) ? context['error'] : null) ?
        "\r\n<div class=\"alert alert-warning\">\r\n\t<strong>[[email:unsub.failure.title]]</strong>\r\n\t<p>[[email:unsub.failure.message, " + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/me/settings]]</p>\r\n" :
        "\r\n<div class=\"alert alert-success\">\r\n\t<strong>[[global:alert.success]]</strong>\r\n\t<p>[[email:unsub.success, " + 
          __escape(guard((context != null && context['payload'] != null) ? context['payload']['template'] : null)) + 
          "]]</p>\r\n") + 
      "\r\n\t<hr />\r\n\r\n\t<p>\r\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\">[[notifications:back_to_home, " + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "]]</a>\r\n\t</p>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

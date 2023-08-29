
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
    return "<p><strong>[[post-queue:category]]</strong></p>\r\n<p><a href=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['url'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "</a></p>\r\n\r\n<p><strong>" + 
      (guard((context != null && context['topic'] != null) ? context['topic']['tid'] : null) ?
        "[[post-queue:topic]]" :
        "[[post-queue:title]]") + 
      "</strong></p>\r\n<p>" + 
      (guard((context != null && context['topic'] != null) ? context['topic']['url'] : null) ?
        "<a href=\"" + 
          __escape(guard((context != null && context['topic'] != null) ? context['topic']['url'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topic'] != null) ? context['topic']['title'] : null)) + 
          "</a>" :
        __escape(guard((context != null && context['topic'] != null) ? context['topic']['title'] : null))) + 
      "</p>\r\n\r\n<p><strong>[[post-queue:user]]</strong></p>\r\n<p>" + 
      (guard((context != null && context['user'] != null) ? context['user']['url'] : null) ?
        "<a href=\"" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['url'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
          "</a>" :
        __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null))) + 
      "</p>\r\n<p>" + 
      __escape(guard((context != null) ? context['content'] : null)) + 
      "</p>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

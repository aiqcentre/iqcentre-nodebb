
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
    return "<div class=\"mb-3\">\r\n\t<h4>[[global:upvoters]] <small>(" + 
      __escape(guard((context != null) ? context['upvoteCount'] : null)) + 
      ")</small></h4>\r\n\t" + 
      compiled.blocks['upvoters'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n" + 
      (guard((context != null) ? context['showDownvotes'] : null) ?
        "\r\n<div>\r\n\t<h4>[[global:downvoters]] <small>(" + 
          __escape(guard((context != null) ? context['downvoteCount'] : null)) + 
          ")</small></h4>\r\n\t" + 
          compiled.blocks['downvoters'](helpers, context, guard, iter, helper) + 
          "\r\n</div>\r\n" :
        "");
  }

  compiled.blocks = {
    'upvoters': function upvoters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['upvoters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['upvoters'] != null && context['upvoters'][key0] != null) ? context['upvoters'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'downvoters': function downvoters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['downvoters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['downvoters'] != null && context['downvoters'][key0] != null) ? context['downvoters'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
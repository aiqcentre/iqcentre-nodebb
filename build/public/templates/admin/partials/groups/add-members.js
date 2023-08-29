
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
    return "\r\n<input class=\"form-control\" type=\"text\" placeholder=\"[[global:search]]\"/>\r\n\r\n<div class=\"list-group\" id=\"search-result\">\r\n    " + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n    <a href=\"#\" class=\"list-group-item\" data-username=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\"><i class=\"fa fa-fw fa-check invisible\"></i> " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\r\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

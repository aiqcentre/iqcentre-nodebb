
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
    return "<div class=\"mb-3\">\r\n\t<label class=\"form-label\" for=\"invite-modal-emails\">[[users:prompt-email]]</label>\r\n\t<input id=\"invite-modal-emails\" type=\"text\" class=\"form-control\" placeholder=\"friend1@example.com,friend2@example.com\" />\r\n</div>\r\n<div class=\"\">\r\n\t<label class=\"form-label\" for=\"invite-modal-groups\">[[users:groups-to-join]]</label>\r\n\t<select id=\"invite-modal-groups\" class=\"form-control\" multiple size=\"5\">\r\n\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n\t</select>\r\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

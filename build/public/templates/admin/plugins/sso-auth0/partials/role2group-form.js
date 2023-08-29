
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
    return "<form>\n\t<div class=\"mb-3\">\n\t\t<label for=\"roleId\">Role ID</label>\n\t\t<input type=\"text\" id=\"roleId\" name=\"roleId\" class=\"form-control\" />\n\t\t<p class=\"form-text\">\n\t\t\tYou can find this value by going into the role settings itself. It is shown under the role name.\n\t\t</p>\n\t</div>\n\t<div class=\"mb-3\">\n\t\t<label for=\"groupName\">Group Name</label>\n\t\t<select id=\"groupName\" name=\"groupName\" class=\"form-control\">\n\t\t\t" + 
      compiled.blocks['groupNames'](helpers, context, guard, iter, helper) + 
      "\n\t\t</select>\n\t</div>\n</form>";
  }

  compiled.blocks = {
    'groupNames': function groupNames(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groupNames'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

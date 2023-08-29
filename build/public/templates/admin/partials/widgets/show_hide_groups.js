
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
    return "<div class=\"row mb-3\">\r\n\t<div class=\"col-lg-6\">\r\n\t\t<label class=\"form-label\">[[admin/extend/widgets:show-to-groups]]</label>\r\n\t\t<select name=\"groups\" class=\"form-select\" multiple size=\"10\">\r\n\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</select>\r\n\t</div>\r\n\t<div class=\"col-lg-6\">\r\n\t\t<label class=\"form-label\">[[admin/extend/widgets:hide-from-groups]]</label>\r\n\t\t<select name=\"groupsHideFrom\" class=\"form-select\" multiple size=\"10\">\r\n\t\t\t" + 
      iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\r\n\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t</select>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

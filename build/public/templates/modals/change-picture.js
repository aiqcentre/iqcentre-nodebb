
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
    return "<div class=\"row gy-2\">\r\n\t<div class=\"col-12 col-sm-8 col-md-6\">\r\n\t\t<div class=\"list-group\">\r\n\t\t\t" + 
      compiled.blocks['pictures'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-12 col-sm-4 col-md-6\">\r\n\t\t<div class=\"list-group\">\r\n\t\t\t" + 
      (guard((context != null) ? context['allowProfileImageUploads'] : null) ?
        "\r\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-action=\"upload\">\r\n\t\t\t\t[[user:upload_new_picture]]\r\n\t\t\t</button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-action=\"upload-url\">\r\n\t\t\t\t[[user:upload_new_picture_from_url]]\r\n\t\t\t</button>\r\n\t\t\t" + 
      (guard((context != null) ? context['uploaded'] : null) ?
        "\r\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-action=\"remove-uploaded\">\r\n\t\t\t\t[[user:remove_uploaded_picture]]\r\n\t\t\t</button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<hr />\r\n\r\n<h4>[[user:avatar-background-colour]]</h4>\r\n\r\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"transparent\" /><span></span></label>\r\n" + 
      compiled.blocks['iconBackgrounds'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'pictures': function pictures(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['pictures'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<button type=\"button\" class=\"list-group-item d-flex p-3\" data-type=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['type'] : null)) + 
          "\">\r\n\t\t\t\t<div class=\"flex-shrink-0\">\r\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['pictures'] != null) ? context['pictures'][key0] : null), "48px", guard((context != null) ? context['true'] : null)])) + 
          "\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"flex-grow-1 ms-3 align-self-center fs-5 text-start\">\r\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['username'] : null)) + 
          "\r\n\t\t\t\t</div>\r\n\t\t\t</button>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'iconBackgrounds': function iconBackgrounds(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['iconBackgrounds'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"" + 
          __escape(guard(value)) + 
          "\" /><span style=\"background-color: " + 
          __escape(guard(value)) + 
          ";\"></span></label>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "<script defer src=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/nodebb.min.js?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\"></script>\r\n\r\n" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n<script>\r\n    if (document.readyState === 'loading') {\r\n        document.addEventListener('DOMContentLoaded', prepareFooter);\r\n    } else {\r\n        prepareFooter();\r\n    }\r\n\r\n    function prepareFooter() {\r\n        " + 
      (guard((context != null) ? context['useCustomJS'] : null) ?
        "\r\n        " + 
          guard((context != null) ? context['customJS'] : null) + 
          "\r\n        " :
        "") + 
      "\r\n\r\n        $(document).ready(function () {\r\n            app.coldLoad();\r\n        });\r\n    }\r\n</script>";
  }

  compiled.blocks = {
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['scripts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<script defer type=\"text/javascript\" src=\"" + 
          __escape(guard((context != null && context['scripts'] != null && context['scripts'][key0] != null) ? context['scripts'][key0]['src'] : null)) + 
          "\"></script>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

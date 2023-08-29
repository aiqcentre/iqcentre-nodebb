
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
    return "<div class=\"hooks-list panel-group px-lg-4\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\t" + 
      compiled.blocks['hooks'](helpers, context, guard, iter, helper) + 
      "\r\n</div>";
  }

  compiled.blocks = {
    'hooks': function hooks(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['hooks'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"card\">\r\n\t\t<div class=\"card-header\" role=\"tab\">\r\n\t\t\t<h6 class=\"mb-0\">\r\n\t\t\t\t<a style=\"text-transform: none;\" class=\"text-reset text-decoration-none\" role=\"button\" data-bs-toggle=\"collapse\" data-bs-parent=\"#accordion\" data-bs-target=\"#" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\" aria-expanded=\"true\" aria-controls=\"" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['hookName'] : null)) + 
          "</a>\r\n\t\t\t\t<span class=\"float-end\">" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['count'] : null)) + 
          " hooks</span>\r\n\t\t\t</h6>\r\n\t\t</div>\r\n\t\t<div id=\"" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\" class=\"accordion-collapse collapse\" role=\"tabpanel\">\r\n\t\t<div class=\"card-body\">\r\n\t\t\t" + 
          iter(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['methods'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t<strong>" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['id'] : null)) + 
              "</strong>\r\n\t\t\t\tPriority: " + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['priority'] : null)) + 
              "\r\n\r\n\t\t\t\t<button class=\"btn btn-primary btn-sm float-end\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\" aria-expanded=\"false\" aria-controls=\"" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\">\r\n\t\t\t\t\tShow Code <i class=\"fa fa-eye\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"collapse\" id=\"" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\">\r\n\t\t\t\t<pre class=\"p-3 text-bg-light border border-secondary rounded\">" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['method'] : null)) + 
              "</pre>\r\n\t\t\t</div>\r\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

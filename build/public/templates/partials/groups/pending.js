
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
    return (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
        "\n<div class=\"d-flex justify-content-end gap-2 mb-3\">\n\t<button class=\"btn btn-danger btn-sm\" data-action=\"rejectAll\">[[groups:pending.reject_all]]</button>\n\t<button class=\"btn btn-success btn-sm\" data-action=\"acceptAll\">[[groups:pending.accept_all]]</button>\n\n</div>\n" :
        "") + 
      "\n\n<div style=\"max-height: 500px;overflow: auto;\">\n\t<table component=\"groups/pending\" class=\"table table-hover\">\n\t" + 
      (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
        "" :
        "\n\t<div class=\"alert alert-info\">[[groups:pending.none]]</div>\n\t") + 
      "\n\t" + 
      compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
      "\n\t</table>\n</div>\n";
  }

  compiled.blocks = {
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\" class=\"align-middle\">\n\t\t<td class=\"member-name p-2 d-flex align-items-center justify-content-between\">\n\t\t\t<div class=\"d-flex gap-2\">\n\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex gap-2\">\n\t\t\t\t<button class=\"btn btn-danger btn-sm\" data-action=\"reject\">[[groups:pending.reject]]</a></li>\n\t\t\t\t<button class=\"btn btn-success btn-sm\" data-action=\"accept\">[[groups:pending.accept]]</a></li>\n\t\t\t</div>\n\t\t</td>\n\t</tr>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

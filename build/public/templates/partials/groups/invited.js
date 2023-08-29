
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
    return "<label class=\"text-xs text-muted\">[[groups:invited.search]]</label>\n<div class=\"input-group mb-2\">\n\t<input class=\"form-control\" type=\"text\" component=\"groups/members/invite\"/>\n\t<span class=\"input-group-text search-button\"><i class=\"fa fa-search\"></i></span>\n</div>\n\n<div class=\"mb-2\">\n\t<label class=\"text-xs text-muted\">[[groups:bulk-invite-instructions]]</label>\n\t<textarea class=\"form-control\" component=\"groups/members/bulk-invite\"></textarea>\n</div>\n\n<div class=\"mb-2 clearfix\">\n\t<button type=\"button\" class=\"btn btn-primary btn-sm float-end\" component=\"groups/members/bulk-invite-button\">[[groups:bulk-invite]]</button>\n</div>\n\n<div style=\"max-height: 500px; overflow: auto;\">\n\t<table component=\"groups/invited\" class=\"table table-hover\">\n\t\t" + 
      (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
        "" :
        "\n\t\t<div class=\"alert alert-info\">[[groups:invited.none]]</div>\n\t\t") + 
      "\n\t\t" + 
      compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
      "\n\t</table>\n</div>";
  }

  compiled.blocks = {
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\" class=\"align-middle\">\n\t\t\t<td class=\"member-name p-2 d-flex align-items-center justify-content-between\">\n\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-outline-secondary btn-sm text-nowrap\" data-action=\"rescindInvite\">[[groups:invited.uninvite]]</button>\n\t\t\t</td>\n\t\t</tr>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

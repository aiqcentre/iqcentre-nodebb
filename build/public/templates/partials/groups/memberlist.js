
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
    return "<div class=\"d-flex " + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "justify-content-between" :
        "justify-content-end") + 
      " mb-3\">\n\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n\t<div class=\"flex-shrink-0\">\n\t\t<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary btn-sm me-3\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i> [[groups:details.add-member]]</button>\n\t</div>\n\t" :
        "") + 
      "\n\t<div class=\"\">\n\t\t<div class=\"input-group\">\n\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n\t\t\t<button class=\"btn btn-primary btn-sm search-button\" type=\"button\">\n\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n\n<div component=\"groups/members\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\" class=\"mb-5\" style=\"max-height: 500px; overflow: auto;\">\n\t<table class=\"table table-hover\">\n\t\t<tbody>\n\t\t\t" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n\t\t</tbody>\n\t</table>\n</div>";
  }

  compiled.blocks = {
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr class=\"w-100\" data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\" data-isowner=\"" + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "1" :
            "0") + 
          "\">\n\t\t\t\t<td class=\"member-name p-2 w-100 \">\n\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t\t\t<a class=\"align-text-top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t\t<i component=\"groups/owner/icon\" title=\"[[groups:owner]]\" class=\"user-owner-icon fa fa-star align-text-top text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n\t\t\t\t\t\t<div class=\"owner-controls d-flex gap-1\">\n\t\t\t\t\t\t\t<a class=\"btn btn-light btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star text-warning\"></i>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<a class=\"btn btn-light btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-ban text-danger\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

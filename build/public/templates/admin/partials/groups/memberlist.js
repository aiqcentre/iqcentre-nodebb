
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
    return "<div class=\"d-flex justify-content-between mb-2\">\r\n\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\r\n\t<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary btn-sm text-nowrap\" title=\"[[groups:details.add-member]]\">[[groups:details.add-member]]</button>\r\n\t" :
        "") + 
      "\r\n\t<div>\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\r\n\t\t\t<span class=\"input-group-text search-button px-2\"><i class=\"fa fa-fw fa-search\"></i></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div component=\"groups/members\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\" class=\"overflow-auto\" style=\"max-height: 500px;\">\r\n\t<table  class=\"table table-hover\">\r\n\t\t<tbody>\r\n\t\t" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</tbody>\r\n\t</table>\r\n</div>";
  }

  compiled.blocks = {
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\">\r\n\t\t\t<td class=\"member-name d-flex justify-content-between align-items-center\">\r\n\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a> <i title=\"[[groups:owner]]\" class=\"user-owner-icon fa fa-star text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\r\n\t\t\t\t<div class=\"owner-controls d-flex gap-1\">\r\n\t\t\t\t\t<a class=\"btn btn-light btn-sm\" href=\"#\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\r\n\t\t\t\t\t\t<i class=\"fa fa-star text-warning\"></i>\r\n\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t<a class=\"btn btn-light btn-sm\" href=\"#\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\r\n\t\t\t\t\t\t<i class=\"fa fa-ban text-danger\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

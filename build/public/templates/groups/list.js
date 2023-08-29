
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
    return "<div data-widget-area=\"header\">\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"groups list\">\n\t<h3 class=\"fw-semibold\">[[pages:groups]]</h3>\n\t<div class=\"d-flex flex-wrap justify-content-between\">\n\t\t<div class=\"mb-2 mb-md-0\">\n\t\t\t<div class=\"text-sm d-flex flex-wrap align-items-center gap-2\">\n\t\t\t\t[[topic:sort_by]]\n\t\t\t\t<div class=\"d-flex gap-2\">\n\t\t\t\t\t<a href=\"?sort=alpha\" class=\"btn-ghost fw-semibold " + 
      ((guard((context != null) ? context['sort'] : null) == "alpha") ?
        "active" :
        "") + 
      "\">[[groups:details.group_name]]</a>\n\t\t\t\t\t<a href=\"?sort=count\" class=\"btn-ghost fw-semibold " + 
      ((guard((context != null) ? context['sort'] : null) == "count") ?
        "active" :
        "") + 
      "\">[[groups:details.member_count]]</a>\n\t\t\t\t\t<a href=\"?sort=date\" class=\"btn-ghost fw-semibold " + 
      ((guard((context != null) ? context['sort'] : null) == "date") ?
        "active" :
        "") + 
      "\">[[groups:details.creation_date]]</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"\">\n\t\t\t<div class=\"d-flex justify-content-end gap-2\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t" + 
      (guard((context != null) ? context['allowGroupCreation'] : null) ?
        "\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm text-nowrap\" data-action=\"new\"><i class=\"fa fa-users\"></i> [[groups:new_group]]</button>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t<select class=\"form-select hidden\" id=\"search-sort\">\n\t\t\t\t\t\t<option value=\"alpha\">[[groups:details.group_name]]</option>\n\t\t\t\t\t\t<option value=\"count\">[[groups:details.member_count]]</option>\n\t\t\t\t\t\t<option value=\"date\">[[groups:details.creation_date]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[global:search]]\" name=\"query\" id=\"search-text\">\n\t\t\t\t\t\t<button id=\"search-button\" class=\"btn btn-primary btn-sm\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<hr />\n\n\t<div component=\"groups/container\" class=\"row\" id=\"groups-list\" data-nextstart=" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      ">\n\t\t" + 
      (guard((context != null && context['groups'] != null) ? context['groups']['length'] : null) ?
        "\n\t\t" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\n\t\t" :
        "\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"alert alert-warning\">\n\t\t\t[[groups:no_groups_found]]\n\t\t\t</div>\n\t\t</div>\n\t\t") + 
      "\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"col-xl-4 col-lg-6 col-sm-12 mb-3\" component=\"groups/summary\" data-slug=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\">\n\t<div class=\"card h-100 group-hover-bg border-0\">\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\" class=\"card-header border-bottom-0 pointer d-block list-cover\" style=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null) ?
            "background-image: url(" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null)) + 
              ");background-size: cover; min-height: 125px; background-position: " + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:position'] : null)) :
            "") + 
          "\"></a>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\" class=\"d-block h-100 text-reset text-decoration-none\">\n\t\t\t<div class=\"card-body d-flex flex-column gap-1 border border-top-0 rounded-bottom h-100\">\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div class=\"flex-grow-1 fs-6 fw-semibold\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</div>\n\t\t\t\t\t<div class=\"flex-shrink-0 text-sm\"><i class=\"text-muted fa-solid fa-user\"></i> " + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['memberCount'] : null)) + 
          "</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-sm\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['description'] : null)) + 
          "</div>\n\t\t\t</div>\n\t\t</a>\n\t</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

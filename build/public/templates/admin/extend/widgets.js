
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
    return "<div class=\"tags d-flex flex-column gap-2 px-lg-4\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/extend/widgets:widgets]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex align-items-center gap-1\">\r\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"widgets\" class=\"row px-2\">\r\n\t\t<div class=\"col-md-8\" id=\"active-widgets\">\r\n\t\t\t<div class=\"dropdown mb-3\">\r\n\t\t\t\t<button class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t<span class=\"selected-template\">" + 
      __escape(guard((context != null && context['templates'] != null && context['templates']['0'] != null) ? context['templates']['0']['template'] : null)) + 
      "</span> <span class=\"caret\"></span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<ul class=\"dropdown-menu " + 
      (guard((context != null && context['config'] != null) ? context['config']['isRTL'] : null) ?
        "dropdown-menu-end" :
        "") + 
      " p-1\">\r\n\t\t\t\t\t" + 
      compiled.blocks['templates'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<div class=\"tab-pane " + 
          (index === 0 ?
            "active" :
            "") + 
          "\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\">\r\n\t\t\t\t\t\t" + 
          iter(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['areas'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t<div class=\"area\" data-template=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "\" data-location=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "\">\r\n\t\t\t\t\t\t\t\t<h4>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['name'] : null)) + 
              " <small>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "</small></h4>\r\n\t\t\t\t\t\t\t\t<div class=\"card card-body text-bg-light widget-area\">\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"card mb-3\">\r\n\t\t\t\t<div class=\"card-header\">[[admin/extend/widgets:available]]</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"available-widgets\">\r\n\t\t\t\t\t\t<p>[[admin/extend/widgets:explanation]]</p>\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['availableWidgets'] != null) ? context['availableWidgets']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t\t\t<div class=\"alert alert-info\">[[admin/extend/widgets:none-installed, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/extend/plugins]]</div>\r\n\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<select id=\"widget-selector\" class=\"form-select\">\r\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['availableWidgets'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t<div data-widget=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\" class=\"card widget-panel  pointer hide\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t<strong>" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</strong>\r\n\t\t\t\t\t\t\t\t\t\t<small><br />" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['description'] : null)) + 
          "</small>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body hidden\">\r\n\t\t\t\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['content'] : null)) + 
          "\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"btn-group\" component=\"clone\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" component=\"clone/button\">[[admin/extend/widgets:clone-from]] ...</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle flex-0\" data-bs-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-end\">\r\n\t\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t" + 
          (index === 0 ?
            "" :
            "\r\n\t\t\t\t\t\t\t\t<li><a class=\"dropdown-item\" href=\"#\">" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "</a></li>\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">[[admin/extend/widgets:containers.available]]</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<p>[[admin/extend/widgets:containers.explanation]]</p>\r\n\t\t\t\t\t<div class=\"available-containers\">\r\n\t\t\t\t\t\t<div class=\"containers\">\r\n\t\t\t\t\t\t\t<div class=\"pointer\" style=\"padding: 20px; border: 1px dotted #dedede; margin-bottom: 20px;\" data-container-html=\" \">\r\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:containers.none]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card card-header p-3 rounded-0 border-0 shadow-none mb-3 pointer\" data-container-html='<div class=\"card card-header p-3 rounded-0 border-0 shadow-none mb-3\">" + 
      "{{body}}</div>'>\r\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.well]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card card-header rounded-0 border-0 shadow-none p-5 mb-3 pointer\" data-container-html='<div class=\"card card-header rounded-0 border-0 shadow-none p-5 mb-3\">" + 
      "{{body}}</div>'>\r\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.jumbotron]]\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card mb-3\" data-container-html='<div class=\"card\"><div class=\"card-body\">" + 
      "{{body}}</div></div>'>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body pointer\">\r\n\t\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.card]]\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card mb-3 pointer\" data-container-html='<div class=\"card\"><h5 class=\"card-header\">" + 
      "{{title}}</h5><div class=\"card-body\">" + 
      "{{body}}</div></div>'>\r\n\t\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.card-header]]\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex gap-1 color-selector\">\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-primary\" class=\"btn btn-sm btn-primary\"</button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"\" class=\"btn btn-sm btn-secondary\"</button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-success\" class=\"btn btn-sm btn-success\"</button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-info\" class=\"btn btn-sm btn-info\"</button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-warning\" class=\"btn btn-sm btn-warning\"</button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"text-bg-danger\" class=\"btn btn-sm btn-danger\"</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.card-body]]\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"alert alert-info pointer\" data-container-html='<div class=\"alert alert-info\">" + 
      "{{body}}</div>'>\r\n\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.alert]]\r\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex gap-1 color-selector\">\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"alert-success\" class=\"btn btn-sm btn-success\"></button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"alert-info\" class=\"btn btn-sm btn-info\"></button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"alert-warning\" class=\"btn btn-sm btn-warning\"></button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-class=\"alert-danger\" class=\"btn btn-sm btn-danger\"></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'templates': function templates(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\" data-toggle=\"pill\">" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "</a></li>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'availableWidgets': function availableWidgets(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "<div class=\"navigation d-flex flex-column gap-2 px-lg-4\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/settings/navigation:navigation]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex gap-1\">\r\n\r\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n\t<div class=\"row\" id=\"navigation\">\r\n\t\t<div class=\"col-lg-9\">\r\n\t\t\t<div class=\"clearfix\">\r\n\t\t\t\t<ul id=\"active-navigation\" class=\"nav border\">\r\n\t\t\t\t\t" + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t\t<hr/>\r\n\r\n\t\t\t<ul id=\"enabled\">\r\n\t\t\t\t" + 
      compiled.blocks['enabled'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">[[admin/settings/navigation:available-menu-items]]</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<ul id=\"available\">\r\n\t\t\t\t\t\t<li data-id=\"custom\" class=\"clearfix\">\r\n\t\t\t\t\t\t\t<div data-id=\"custom\" class=\"drag-item alert alert-success float-start\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-plus-circle\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t<strong>[[admin/settings/navigation:custom-route]]</strong>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t" + 
      compiled.blocks['available'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<li data-index=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['index'] : null)) + 
          "\" class=\"float-start nav-item " + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
          " " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['selected'] : null) ?
            " active " :
            "") + 
          "\">\r\n\t\t\t\t\t\t<a href=\"#\" title=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
          "\" id=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
          "\" class=\"nav-link p-3 " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['enabled'] : null) ?
            "" :
            "text-muted") + 
          "\">\r\n\t\t\t\t\t\t\t<i class=\"nav-icon fa fa-fw " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
            __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) :
            "") + 
          "\"></i><i class=\"dropdown-icon fa fa-caret-down" + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'enabled': function enabled(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['enabled'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li data-index=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"card card-body text-bg-light border-0 " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['selected'] : null) ?
            "" :
            "hidden") + 
          "\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"row mb-3\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\">[[admin/settings/navigation:icon]]</label>\r\n\t\t\t\t\t\t\t\t<span class=\"iconPicker\"><i class=\"fa fa-2x " + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null)) + 
          "\"></i>\r\n\t\t\t\t\t\t\t\t\t<a class=\"change-icon-link " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null) ?
            "hidden" :
            "") + 
          "\" href=\"#\">[[admin/settings/navigation:change-icon]]</a>\r\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"hidden\" name=\"iconClass\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:route\">[[admin/settings/navigation:route]]</label>\r\n\t\t\t\t\t\t\t\t<input id=\"nav:route\" class=\"form-control\" type=\"text\" name=\"route\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['route'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:class\">[[admin/settings/navigation:class]]</label>\r\n\t\t\t\t\t\t\t\t<input id=\"nav:class\" class=\"form-control\" type=\"text\" name=\"class\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['class'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:id\">[[admin/settings/navigation:id]]</label>\r\n\t\t\t\t\t\t\t\t<input id=\"nav:id\" class=\"form-control\" type=\"text\" name=\"id\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['id'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row mb-3\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:text\">[[admin/settings/navigation:text]]</label>\r\n\t\t\t\t\t\t\t\t<input id=\"nav:text\" class=\"form-control unescape\" type=\"text\" name=\"text\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['text'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:text-class\">[[admin/settings/navigation:text-class]]</label>\r\n\t\t\t\t\t\t\t\t<input id=\"nav:text-class\" class=\"form-control\" type=\"text\" name=\"textClass\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['textClass'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"nav:tooltip\">[[admin/settings/navigation:tooltip]]</label>\r\n\t\t\t\t\t\t\t\t<input id=\"nav:tooltip\" class=\"form-control unescape\" type=\"text\" name=\"title\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['title'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row mb-3\">\r\n\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\">[[admin/settings/navigation:groups]]</label>\r\n\r\n\t\t\t\t\t\t\t\t<select name=\"groups\" class=\"form-select\" size=\"10\" multiple>\r\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['groups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['displayName'] : null)) + 
              "\"" + 
              (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['selected'] : null) ?
                " selected" :
                "") + 
              ">" + 
              __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['displayName'] : null)) + 
              "</option>\r\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"targetBlank-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" name=\"targetBlank\" " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['targetBlank'] : null) ?
            "checked" :
            "") + 
          "/>\r\n\t\t\t\t\t\t\t<label for=\"targetBlank-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"form-check-label\">[[admin/settings/navigation:open-new-window]]</label>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-check form-switch mb-3\">\r\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"dropdown-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" name=\"dropdown\" " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['dropdown'] : null) ?
            "checked" :
            "") + 
          "/>\r\n\t\t\t\t\t\t\t<label for=\"dropdown-" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"form-check-label\">[[admin/settings/navigation:dropdown]]</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t\t<p class=\"form-text\">\r\n\t\t\t\t\t\t\t\t[[admin/settings/navigation:dropdown-placeholder]]\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<textarea name=\"dropdownContent\" rows=\"5\" class=\"form-control\">" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['dropdownContent'] : null)) + 
          "</textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-end\">\r\n\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm toggle disable " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "" :
            "hidden") + 
          "\"><i class=\"fa fa-ban text-danger\"></i> [[admin/settings/navigation:btn.disable]]</button>\r\n\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-light btn-sm toggle enable " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-check text-success\"></i> [[admin/settings/navigation:btn.enable]]</button>\r\n\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm delete\">[[admin/settings/navigation:btn.delete]]</button>\r\n\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"enabled\" value=\"" + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "on" :
            "") + 
          "\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'available': function available(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['available'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li data-id=\"" + 
          __escape(index) + 
          "\" class=\"clearfix\">\r\n\t\t\t\t\t\t\t<div data-id=\"" + 
          __escape(index) + 
          "\" class=\"drag-item alert " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['core'] : null) ?
            "alert-warning" :
            "alert-info") + 
          " float-start\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['iconClass'] : null) ?
            __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['iconClass'] : null)) :
            "fa-navicon") + 
          "\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t<strong>" + 
          __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['text'] : null)) + 
          "</strong> " + 
          __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['route'] : null)) + 
          " <br/>\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['core'] : null) ?
            " [[admin/settings/navigation:core]] " :
            " [[admin/settings/navigation:plugin]] ") + 
          "\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "\r\n<div class=\"tags d-flex flex-column gap-2 px-lg-4\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/extend/rewards:rewards]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex align-items-center gap-1\">\r\n\t\t\t<button id=\"new\" class=\"btn btn-light btn-sm text-nowrap\" type=\"button\">\r\n\t\t\t\t<i class=\"fa fa-fw fa-plus\"></i> [[admin/extend/rewards:add-reward]]\r\n\t\t\t</button>\r\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id=\"rewards\" class=\"\">\r\n\t\t<ul id=\"active\" class=\"list-unstyled p-0 m-0\">\r\n\t\t\t" + 
      compiled.blocks['active'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</ul>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'active': function active(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['active'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li data-rid=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['rid'] : null)) + 
          "\" data-id=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['id'] : null)) + 
          "\">\r\n\t\t\t\t<div class=\"d-flex gap-1 mb-3 flex-wrap\">\r\n\t\t\t\t\t<form class=\"main d-flex gap-1 flex-wrap\">\r\n\t\t\t\t\t\t<div class=\"card card-body m-0 if-block border-info border border-2\">\r\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"condition-if-users\">[[admin/extend/rewards:condition-if-users]]</label>\r\n\t\t\t\t\t\t\t<select id=\"condition-if-users\" class=\"form-select form-select-sm\" name=\"condition\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['condition'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null) ? context['conditions'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['conditions'] != null && context['conditions'][key1] != null) ? context['conditions'][key1]['condition'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['conditions'] != null && context['conditions'][key1] != null) ? context['conditions'][key1]['name'] : null)) + 
              "</option>\r\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card card-body m-0 this-block border-warning border border-2\">\r\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"condition-is\">[[admin/extend/rewards:condition-is]]</label>\r\n\t\t\t\t\t\t\t<div class=\"d-flex gap-1 flex-nowrap\">\r\n\t\t\t\t\t\t\t\t<select id=\"condition-is\" class=\"form-select form-select-sm\" name=\"conditional\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['conditional'] : null)) + 
          "\" style=\"max-width: 64px;\">\r\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null) ? context['conditionals'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['conditionals'] != null && context['conditionals'][key1] != null) ? context['conditionals'][key1]['conditional'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['conditionals'] != null && context['conditionals'][key1] != null) ? context['conditionals'][key1]['name'] : null)) + 
              "</option>\r\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" name=\"value\" value=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['value'] : null)) + 
          "\" style=\"max-width: 64px;\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card card-body m-0 then-block border-primary border border-2\">\r\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"condition-then\">[[admin/extend/rewards:condition-then]]</label>\r\n\t\t\t\t\t\t\t<select id=\"condition-then\" class=\"form-select form-select-sm\" name=\"rid\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['rid'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null) ? context['rewards'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['rewards'] != null && context['rewards'][key1] != null) ? context['rewards'][key1]['rid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['rewards'] != null && context['rewards'][key1] != null) ? context['rewards'][key1]['name'] : null)) + 
              "</option>\r\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<form class=\"rewards\">\r\n\t\t\t\t\t\t<div class=\"inputs card card-body m-0 h-100 reward-block border-success border border-2\"><div class=\"d-flex h-100 align-items-center\">[[admin/extend/rewards:select-reward]]</div></div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"d-flex justify-content-between align-items-center gap-2\">\r\n\t\t\t\t\t<form class=\"main d-flex gap-1 align-items-start gap-2\">\r\n\t\t\t\t\t\t<div class=\"d-flex flex-column gap-0\">\r\n\t\t\t\t\t\t\t<label class=\"form-label\" for=\"claimable\">[[admin/extend/rewards:max-claims]]</label>\r\n\t\t\t\t\t\t\t<p class=\"form-text mb-0\">\r\n\t\t\t\t\t\t\t\t[[admin/extend/rewards:zero-infinite]]\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<input id=\"claimable\" class=\"form-control form-control-sm\" type=\"text\" name=\"claimable\" value=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['claimable'] : null)) + 
          "\" placeholder=\"1\" style=\"max-width: 64px;\"/>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<div class=\"d-flex gap-1 align-self-start\">\r\n\t\t\t\t\t\t<button class=\"btn btn-light btn-sm toggle text-nowrap disable " + 
          (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['disabled'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-ban text-danger\"></i> [[admin/extend/rewards:disable]]</button>\r\n\r\n\t\t\t\t\t\t<button class=\"btn btn-light btn-sm toggle text-nowrap enable " + 
          (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['disabled'] : null) ?
            "" :
            "hidden") + 
          "\"><i class=\"fa fa-check text-success\"></i> [[admin/extend/rewards:enable]]</button>\r\n\r\n\t\t\t\t\t\t<button class=\"btn btn-light btn-sm text-nowrap delete\"><i class=\"fa fa-trash text-danger\"></i> [[admin/extend/rewards:delete]]</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<hr/>\r\n\t\t\t</li>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

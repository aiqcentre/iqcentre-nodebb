
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
    return "<div class=\"tags d-flex flex-column gap-2 px-lg-4\">\r\n\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/tags:manage-tags]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex align-items-center gap-1 flex-wrap\">\r\n\t\t\t<div class=\"input-group flex-nowrap w-auto\">\r\n\t\t\t\t<input class=\"form-control form-control-sm w-auto\" type=\"text\" id=\"tag-search\" placeholder=\"[[admin/manage/tags:search]]\"/>\r\n\t\t\t\t<span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<button class=\"btn btn-light btn-sm text-nowrap\" id=\"rename\"><i class=\"fa fa-pencil text-primary\"></i> [[admin/manage/tags:rename]]</button>\r\n\t\t\t<button class=\"btn btn-light btn-sm text-nowrap\" id=\"deleteSelected\"><i class=\"fa fa-trash text-danger\"></i> [[admin/manage/tags:delete]]</button>\r\n\t\t\t<button class=\"btn btn-primary btn-sm text-nowrap\" id=\"create\">[[admin/manage/tags:add-tag]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"tags\">\r\n\t\t<div class=\"\">\r\n\t\t\t<div class=\"tag-management\">\r\n\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t<div class=\"alert alert-light text-sm\">\r\n\t\t\t\t\t\t[[admin/manage/tags:description]]\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t\t[[admin/manage/tags:none]]\r\n\t\t\t\t\t") + 
      "\r\n\r\n\t\t\t\t\t<div class=\"tag-list\">\r\n\t\t\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"modal fade\" id=\"create-modal\">\r\n\t\t\t<div class=\"modal-dialog\">\r\n\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t<h4 class=\"modal-title\">[[admin/manage/tags:create]]</h4>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"create-tag-name\">[[admin/manage/tags:name]]</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-tag-name\" placeholder=\"[[admin/manage/tags:name]]\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">[[admin/manage/tags:create]]</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"rename-modal hidden\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"form-label\" for=\"value\">[[admin/manage/tags:name]]</label>\r\n\t\t\t\t<input id=\"value\" data-name=\"value\" value=\"\" class=\"form-control\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<div class=\"tag-row p-2 me-3 mb-1\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<button disabled class=\"rounded-3 btn btn-light border position-relative\">\r\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\r\n\t\t\t\t\t\t\t\t\t<span class=\"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          " <span class=\"visually-hidden\">[[tags:tags]]</span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

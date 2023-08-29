
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
    return "<div class=\"logs settings d-flex flex-column gap-2 px-lg-4\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/advanced/logs:logs]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex align-items-center gap-1\">\r\n\t\t\t<button class=\"btn btn-sm btn-light text-nowrap\" data-action=\"clear\">\r\n\t\t\t\t<i class=\"fa fa-trash text-danger\"></i> [[admin/advanced/logs:clear]]\r\n\t\t\t</button>\r\n\t\t\t<button class=\"btn btn-sm btn-light text-nowrap\" data-action=\"reload\">\r\n\t\t\t\t<i class=\"fa fa-refresh text-primary\"></i> [[admin/advanced/logs:reload]]\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<pre class=\"text-break\" style=\"height: 600px; white-space: break-spaces;\">" + 
      __escape(guard((context != null) ? context['data'] : null)) + 
      "</pre>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

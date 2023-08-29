
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
    return "<div class=\"d-flex w-100\">\n\t<div class=\"pagination-block text-bg-light m-2 rounded-1 border border-gray-300 w-100\" style=\"height:30px;\">\n\t\t<div class=\"position-relative\">\n\t\t\t<div class=\"progress-bar rounded-1 bg-info d-block position-absolute\" style=\"height:28px;\"></div>\n\t\t</div>\n\t\t<div class=\"wrapper dropup-center d-flex align-items-center justify-content-between w-100 h-100\" style=\"padding: 5px 0px;\">\n\t\t\t<div class=\"d-flex\">\n\t\t\t\t<div class=\"lh-1 px-2\">\n\t\t\t\t\t<i class=\"fa fa-angles-left pointer fa-fw pagetop fs-5\" style=\"z-index: 1;\"></i>\n\t\t\t\t</div>\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t\t\t<div class=\"lh-1 px-2\">\n\t\t\t\t\t<i class=\"fa fa-angle-left pointer fa-fw pageprev fs-5\" style=\"z-index: 1;\"></i>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\n\t\t\t<a href=\"#\" class=\"text-reset dropdown-toggle d-inline-block px-3 text-decoration-none\" data-bs-toggle=\"dropdown\">\n\t\t\t\t<span class=\"d-inline-flex gap-2 align-items-center pagination-text position-relative fw-bold\"></span>\n\t\t\t</a>\n\n\t\t\t<div class=\"d-flex\">\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t\t\t<div class=\"lh-1 px-2\">\n\t\t\t\t\t<i class=\"fa fa-angle-right pointer fa-fw pagenext fs-5\" style=\"z-index: 1;\"></i>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t<div class=\"lh-1 px-2\">\n\t\t\t\t\t<i class=\"fa fa-angles-right pointer fa-fw pagebottom fs-5\" style=\"z-index: 1;\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<ul class=\"dropdown-menu p-0\" role=\"menu\" style=\"width: 100%;\">\n\t\t\t\t<li class=\"p-3\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-8 post-content overflow-hidden mb-3\" style=\"height: 350px;\"></div>\n\t\t\t\t\t\t<div class=\"col-4 ps-0 text-end\">\n\t\t\t\t\t\t\t<div class=\"scroller-content\">\n\t\t\t\t\t\t\t\t<span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\n\t\t\t\t\t\t\t\t<div class=\"scroller-container border-gray-200\" style=\"height: 300px;\">\n\t\t\t\t\t\t\t\t\t<div class=\"scroller-thumb position-relative text-nowrap\" style=\"height: 40px;\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"thumb-text text-sm fw-bold user-select-none position-relative pe-2\" style=\"top: -15px;\"></span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rounded-2 scroller-thumb-icon bg-primary d-inline-block position-relative\" style=\"width: 9px; height:40px;\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<button id=\"myNextPostBtn\" class=\"btn btn-outline-secondary form-control text-truncate\" disabled>[[topic:go-to-my-next-post]]</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter_index]]\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

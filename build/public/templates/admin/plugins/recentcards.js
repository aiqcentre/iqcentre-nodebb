
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
    return "<div class=\"acp-page-container\">\n\t<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\r\n\t<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\r\n\t\t<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\r\n\t</div>\r\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\r\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t</div>\r\n</div>\n\n\t<div class=\"row m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<form role=\"form\" id=\"recentcards\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<div class=\"form-check mb-3\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" data-key=\"enableCarousel\" id=\"enableCarousel\" name=\"enableCarousel\" />\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"enableCarousel\">\n\t\t\t\t\t\t\tEnable Carousel Mode\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-check mb-3\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" data-key=\"enableCarouselPagination\" id=\"enableCarouselPagination\" name=\"enableCarouselPagination\" />\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"enableCarouselPagination\">\n\t\t\t\t\t\t\tTurn on paginator for carousel\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label for=\"maxSlides\">Max slides to show for carousel</label>\n\t\t\t\t\t\t<input id=\"maxSlides\" type=\"text\" class=\"form-control\" placeholder=\"4\" name=\"maxSlides\" data-key=\"maxSlides\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t</div>\n</div>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

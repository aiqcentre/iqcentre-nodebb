
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
    return "<a component=\"search/button\" id=\"search-button\" href=\"#\" role=\"button\" class=\"nav-link nav-btn d-flex gap-2 align-items-center text-truncate\" data-bs-toggle=\"dropdown\">\n\t<span>\n\t\t<i class=\"fa fa-search fa-fw\"></i>\n\t</span>\n\t<span class=\"nav-text small visible-open fw-semibold\">[[global:search]]</span>\n</a>\n<div class=\"search-dropdown dropdown-menu p-2 shadow\">\n\t<form component=\"search/form\" id=\"search-form\" class=\"d-flex justify-content-end align-items-center\" role=\"search\" method=\"GET\">\n\t\t<div component=\"search/fields\" class=\"w-100\" id=\"search-fields\">\n\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\n\n\t\t\t\t<div class=\"btn-ghost advanced-search-link\">\n\t\t\t\t\t<i class=\"fa fa-gears fa-fw text-muted\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id=\"quick-search-container\" class=\"quick-search-container d-block mt-2 hidden\">\n\t\t\t\t<div class=\"form-check filter-category mb-2 ms-2\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" checked>\n\t\t\t\t\t<label class=\"form-check-label name text-sm\"></label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-outline-secondary hide\">[[global:search]]</button>\n\t\t</div>\n\t</form>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

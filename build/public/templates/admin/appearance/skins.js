
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
    return "<div id=\"skins\" class=\"d-flex flex-column gap-2 px-lg-4\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"d-flex flex-wrap gap-3 align-items-center\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/appearance/skins:skins]]</h4>\r\n\t\t\t<ul class=\"nav nav-pills d-flex gap-1 text-sm\">\r\n\t\t\t\t<li class=\"nav-item\"><a href=\"#\" class=\"nav-link active px-2 py-1\" data-bs-target=\"#skins-tab\" data-bs-toggle=\"tab\">[[admin/appearance/skins:bootswatch-skins]]</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a href=\"#\" class=\"nav-link px-2 py-1\" data-bs-target=\"#custom-skins-tab\" data-bs-toggle=\"tab\">[[admin/appearance/skins:custom-skins]]</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex align-items-center gap-1\">\r\n\t\t\t<div data-type=\"bootswatch\" data-theme=\"\" data-css=\"\">\r\n\t\t\t\t<button data-action=\"use\" class=\"btn btn-primary btn-sm text-nowrap\" type=\"button\">[[admin/appearance/skins:revert-skin]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"tab-content\">\r\n\t\t<div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"skins-tab\">\r\n\t\t\t<div class=\"skins px-2\">\r\n\t\t\t\t<div class=\"directory row text-center\" id=\"bootstrap_themes\">\r\n\t\t\t\t\t<i class=\"fa fa-refresh fa-spin\"></i> [[admin/appearance/skins:loading]]\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade\" role=\"tabpanel\" id=\"custom-skins-tab\">\r\n\t\t\t<form role=\"form\" class=\"custom-skin-settings\">\r\n\t\t\t\t<div class=\"mb-3\" data-type=\"sorted-list\" data-sorted-list=\"custom-skin-list\" data-item-template=\"admin/partials/appearance/skins/item-custom-skin\" data-form-template=\"admin/partials/appearance/skins/form-custom-skin\">\r\n\t\t\t\t\t<input hidden=\"text\" name=\"custom-skin-list\">\r\n\t\t\t\t\t<div class=\"d-flex gap-1 mb-3 justify-content-between\">\r\n\t\t\t\t\t\t<button type=\"button\" data-type=\"add\" class=\"btn btn-sm btn-light\">[[admin/appearance/skins:add-skin]]</button>\r\n\t\t\t\t\t\t<button id=\"save-custom-skins\" class=\"btn btn-sm btn-primary\">[[admin/appearance/skins:save-custom-skins]]</button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<ul data-type=\"list\" class=\"list-group mb-3\"></ul>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

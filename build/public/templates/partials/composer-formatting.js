
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
    return "<div class=\"d-flex justify-content-between gap-2 align-items-center formatting-bar\">\n\t<ul class=\"list-unstyled mb-0 d-flex formatting-group gap-2 overflow-auto\">\n\t\t" + 
      compiled.blocks['formatting'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['upload:post:image'] : null) ?
        "\n\t\t<li class=\"img-upload-btn btn btn-sm btn-link text-reset\" data-format=\"picture\" tabindex=\"-1\" title=\"[[modules:composer.upload-picture]]\">\n\t\t\t<i class=\"fa fa-file-image-o\"></i>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['upload:post:file'] : null) ?
        "\n\t\t<li href=\"#\" class=\"file-upload-btn btn btn-sm btn-link text-reset\" data-format=\"upload\" tabindex=\"-1\" title=\"[[modules:composer.upload-file]]\">\n\t\t\t<i class=\"fa fa-file-o\"></i>\n\t\t</li>\n\t\t" :
        "") + 
      "\n\n\t\t<form id=\"fileForm\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<input type=\"file\" id=\"files\" name=\"files[]\" multiple class=\"gte-ie9 hide\"/>\n\t\t</form>\n\t</ul>\n\t<div class=\"d-flex align-items-center gap-1\">\n\t\t<div class=\"draft-icon m-2 hidden-xs hidden-sm\"></div>\n\t\t<button class=\"btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap\" data-action=\"preview\">\n\t\t\t<i class=\"fa fa-eye\"></i>\n\t\t\t<span class=\"d-none d-md-inline show-text\">[[modules:composer.show_preview]]</span>\n\t\t\t<span class=\"d-none d-md-inline hide-text\">[[modules:composer.hide_preview]]</span>\n\t\t</button>\n\t\t" + 
      (guard((context != null) ? context['composer:showHelpTab'] : null) ?
        "\n\t\t<button class=\"btn btn-sm btn-link py-2 text-body fw-semibold text-nowrap\" data-action=\"help\">\n\t\t\t<i class=\"fa fa-question\"></i>\n\t\t\t<span class=\"d-none d-md-inline\">[[modules:composer.help]]</span>\n\t\t</button>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n\n";
  }

  compiled.blocks = {
    'formatting': function formatting(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['formatting'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['spacer'] : null) ?
            "\n\t\t\t<li class=\"small spacer\"></li>\n\t\t\t" :
            "\n\t\t\t" + 
              ((guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['desktop'] : null) && ((guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['main'] : null)) || (!guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['reply'] : null)))) ?
                "\n\t\t\t" + 
                  (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null) ? context['formatting'][key0]['dropdownItems']['length'] : null) ?
                    "\n\t\t\t<li class=\"dropdown bottom-sheet\" tabindex=\"-1\">\n\t\t\t\t<button class=\"btn btn-sm btn-link text-reset\" data-bs-toggle=\"dropdown\" title=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n\t\t\t\t\t<i class=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                      "\"></i>\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"dropdown-menu p-1\">\n\t\t\t\t" + 
                      iter(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['dropdownItems'] : null), function each(key1, index, length, value) {
                        var key = key1;
                        return "\n\t\t\t\t\t<li data-format=\"" + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['name'] : null)) + 
                          "\">\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-item rounded-1 position-relative\">\n\t\t\t\t\t\t\t<i class=\"" + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['className'] : null)) + 
                          " text-secondary\"></i> " + 
                          __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['text'] : null)) + 
                          "\n\t\t\t\t\t\t\t" + 
                          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['dropdownItems'] != null && context['formatting'][key0]['dropdownItems'][key1] != null) ? context['formatting'][key0]['dropdownItems'][key1]['badge'] : null) ?
                            "\n\t\t\t\t\t\t\t<span class=\"px-1 position-absolute top-0 start-100 translate-middle-x badge rounded text-bg-info\"></span>\n\t\t\t\t\t\t\t" :
                            "") + 
                          "\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t";
                      }, function alt() {
                        return "";
                      }) + 
                      "\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
                    "\n\t\t\t<li class=\"btn btn-sm btn-link text-reset position-relative\" tabindex=\"-1\" data-format=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['name'] : null)) + 
                      "\" title=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                      "\">\n\t\t\t\t<i class=\"" + 
                      __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                      "\"></i>\n\t\t\t\t" + 
                      (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['badge'] : null) ?
                        "\n\t\t\t\t<span class=\"px-1 position-absolute top-0 start-100 translate-middle-x badge rounded text-bg-info\"></span>\n\t\t\t\t" :
                        "") + 
                      "\n\t\t\t</li>\n\t\t\t") + 
                  "\n\t\t\t" :
                "") + 
              "\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

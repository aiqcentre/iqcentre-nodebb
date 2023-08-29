
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
      "</h4>\r\n\t</div>\r\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\r\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t</div>\r\n</div>\n\n\t<div class=\"row m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<form role=\"form\" class=\"question-and-answer-settings\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">\n\n\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t<label class=\"form-check-label\">[[qanda:admin.form.label.toggle_lock]]</label>\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" name=\"toggleLock\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t<label class=\"form-check-label\">[[qanda:admin.form.label.only_allow_admins]]</label>\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" name=\"onlyAdmins\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t<label class=\"form-check-label\">[[qanda:admin.form.label.only_allow_all]]</label>\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" name=\"forceQuestions\">\n\t\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t\t[[qanda:admin.form.tips]]\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<hr />\n\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t[[qanda:admin.form.label.only_allow_following]]\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<div class=\"all-categories\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
      "</h4>\r\n\t</div>\r\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\r\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t</div>\r\n</div>\n\n\t<div class=\"row m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<form class=\"form markdown-settings\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">Markdown</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"xhtmlOut\" id=\"xhtmlOut\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"xhtmlOut\">\n\t\t\t\t\t\t\t\t\t\tUse '/' to close single tags (<code>&lt;br /&gt;</code>)\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"breaks\" id=\"breaks\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"breaks\">\n\t\t\t\t\t\t\t\t\t\tTreat newlines as single line breaks\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"typographer\" id=\"typographer\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"typographer\">\n\t\t\t\t\t\t\t\t\t\tEnable smartypants and other sweet transforms (e.g. <code>(c)</code> &rarr; <code>&copy;</code>)\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"multimdTables\" id=\"multimdTables\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"multimdTables\">\n\t\t\t\t\t\t\t\t\t\tAllow advanced table syntax\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"linkify\" id=\"linkify\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"linkify\">\n\t\t\t\t\t\t\t\t\t\tAutoconvert url-like texts to links\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"externalBlank\" id=\"externalBlank\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"externalBlank\">\n\t\t\t\t\t\t\t\t\t\tOpen external links in a new tab/window\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"nofollow\" id=\"nofollow\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"nofollow\">\n\t\t\t\t\t\t\t\t\t\tTell web crawlers that external links are not to be followed\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"allowRTLO\" id=\"allowRTLO\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"allowRTLO\">\n\t\t\t\t\t\t\t\t\t\tAllow RTL override unicode in link content\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"checkboxes\" id=\"checkboxes\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkboxes\">\n\t\t\t\t\t\t\t\t\t\tInterpret <code>[ ]</code> and <code>[x]</code> as checkboxes\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-header\">Code Formatting</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"highlight\" id=\"highlight\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"highlight\">\n\t\t\t\t\t\t\t\t\t\tAutomatically detect and highlight code blocks\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"highlightTheme\">Use this theme for highlighted code blocks</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-select\" name=\"highlightTheme\" id=\"highlightTheme\">\n\t\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['themes'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"defaultHighlightLanguage\">\n\t\t\t\t\t\t\t\t\t\tDefault language for code blocks with no language defined\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"e.g. js\" type=\"text\" name=\"defaultHighlightLanguage\" id=\"defaultHighlightLanguage\" />\n\t\t\t\t\t\t\t\t\t<p class=\"form-text\">Leave blank to use auto-language detection</p>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"langPrefix\">\n\t\t\t\t\t\t\t\t\t\tPrefix for <code>code</code> blocks\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"language-\" type=\"text\" name=\"langPrefix\" id=\"langPrefix\" />\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"hljsLanguages\">Apply syntax highlighting to the following languages</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-select\" multiple=\"true\" name=\"hljsLanguages\" id=\"hljsLanguages\" size=\"20\">\n\t\t\t\t\t\t\t\t\t\t<optgroup label=\"Pre-defined lists\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"all\">All supported languages (greatest file size)</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"common\" selected>Common languages (a good compromise)</option>\n\t\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t\t<optgroup label=\"Individual languages\">\n\t\t\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['hljsLanguages'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t\t\t\tYou can use <code>ctrl</code> and <code>shift</code> to select/deselect multiple\n\t\t\t\t\t\t\t\t\t\titems and select/deselect items in ranges. <em>(Default: \"Common languages\".)</em>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t\t\t\tYou are able to mix and match any of the items above, although \"All\" will include\n\t\t\t\t\t\t\t\t\t\teverything anyway.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"highlightLinesLanguageList\">\n\t\t\t\t\t\t\t\t\t\tEnable line numbers for the following languages\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-select\" multiple=\"true\" name=\"highlightLinesLanguageList\" id=\"highlightLinesLanguageList\" size=\"20\">\n\t\t\t\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['hljsLanguages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n\t\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t\t\t\tYou can use <code>ctrl</code> and <code>shift</code> to select/deselect multiple\n\t\t\t\t\t\t\t\t\t\titems and select/deselect items in ranges.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-header\">Images</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"probe\" id=\"probe\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"probe\">\n\t\t\t\t\t\t\t\t\t\tAppend image sizes for externally linked images\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-label\" for=\"probeCacheSize\">Cache size (number of images)</label>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" id=\"probeCacheSize\" name=\"probeCacheSize\" placeholder=\"256 (Default)\" />\n\t\t\t\t\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t\t\t\t\tMarkdown automatically saves image sizes so as to not make too many unnecessary calls. It remembers this value for 24 hours, to a maximum number of images as defined here. Increase this number if your forum posts contain links to many external images.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-header bg-danger text-light\">Danger Zone</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" name=\"html\" id=\"html\" />\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"html\">\n\t\t\t\t\t\t\t\t\t\tAllow HTML\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"alert alert-warning\">\n\t\t\t\t\t\t\t\t\t<strong><i class=\"icon-warning-sign\"></i> Careful!</strong>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\tAutomatic HTML sanitization is an important part of ensuring that\n\t\t\t\t\t\t\t\t\t\tyour users do not run arbitrary javascript or alter parts of the\n\t\t\t\t\t\t\t\t\t\tpage that were not meant to be altered. If this option is checked,\n\t\t\t\t\t\t\t\t\t\tbeware the consequences!\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'themes': function themes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['themes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n\t\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'hljsLanguages': function hljsLanguages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['hljsLanguages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n\t\t\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

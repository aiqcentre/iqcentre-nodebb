
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
    return "<div class=\"tool-modal d-flex\">\r\n\t<div class=\"position-relative\">\r\n\t\t<div class=\"quick-search-container dropdown-menu d-block p-2 hidden\" style=\"right: 10px;\">\r\n\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\r\n\t\t\t<div class=\"quick-search-results-container\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"card shadow\">\r\n\t\t<h5 class=\"card-header\">[[topic:thread_tools.merge_topics]]</h5>\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<p>\r\n\t\t\t\t[[topic:merge_topics_instruction]]\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t<input class=\"form-control topic-search-input\" type=\"text\">\r\n\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t\t</div>\r\n\t\t\t</p>\r\n\r\n\t\t\t<p><strong>[[topic:merge-topic-list-title]]</strong></p>\r\n\t\t\t<ul class=\"topics-section\">\r\n\t\t\t\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</ul>\r\n\t\t\t<p>\r\n\t\t\t\t<strong>[[topic:merge-options]]</strong>\r\n\t\t\t</p>\r\n\t\t\t<form>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<input class=\"merge-main-topic-radio\" type=\"radio\" name=\"merge-topic-option\" checked=\"true\"> [[topic:merge-select-main-topic]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<select class=\"form-select merge-main-topic-select\">\r\n\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<input class=\"merge-new-title-radio\" type=\"radio\" name=\"merge-topic-option\"> [[topic:merge-new-title-for-topic]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<input class=\"merge-new-title-input form-control\" type=\"text\">\r\n\t\t\t\t</p>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"card-footer text-end\">\r\n\t\t\t<button class=\"btn btn-link btn-sm\" id=\"merge_topics_cancel\">[[global:buttons.close]]</button>\r\n\t\t\t<button class=\"btn btn-primary btn-sm\" id=\"merge_topics_confirm\" disabled>[[topic:thread_tools.merge]]</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</strong></a></li>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
      "</h4>\r\n\t</div>\r\n\t<div class=\"col-12 col-md-4 px-0 px-md-3\">\r\n\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t</div>\r\n</div>\n\n\t<div class=\"row m-0\">\n\t\t<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n\t\t\t<form role=\"form\" class=\"mentions-settings\">\n\t\t\t\t<div id=\"general\" class=\"mb-4\">\n\t\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">General</h5>\n\n\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"autofillGroups\" name=\"autofillGroups\" />\n\t\t\t\t\t\t<label for=\"autofillGroups\" class=\"form-check-label\">\n\t\t\t\t\t\t\t<span>Allow mentioning User Groups</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"overrideIgnores\" name=\"overrideIgnores\" />\n\t\t\t\t\t\t<label for=\"overrideIgnores\" class=\"form-check-label\">\n\t\t\t\t\t\t\t<span>Notify recipients of mentions even if topic is explictly ignored</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"disableGroupMentions\">Select groups you wish to disable mentions</label>\n\t\t\t\t\t\t<select class=\"form-select\" id=\"disableGroupMentions\" name=\"disableGroupMentions\" multiple>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<label class=\"form-label\" for=\"display\">Mentions will display ...</label>\n\t\t\t\t\t\t<select class=\"form-select\" id=\"display\" name=\"display\">\n\t\t\t\t\t\t\t<option value=\"\">... as written</option>\n\t\t\t\t\t\t\t<option value=\"fullname\">... as user&apos;s full name (if set)</option>\n\t\t\t\t\t\t\t<option value=\"username\">... as user&apos;s username</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"restrictions\" class=\"mb-4\">\n\t\t\t\t\t<h5 class=\"fw-bold tracking-tight settings-header\">Restrictions</h5>\n\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"disableFollowedTopics\" name=\"disableFollowedTopics\" />\n\t\t\t\t\t\t\t<label for=\"disableFollowedTopics\" class=\"form-check-label\">\n\t\t\t\t\t\t\t\t<span>Disable mentions for followed topics</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t\t<div class=\"mb-3 form-check\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"privilegedDirectReplies\" name=\"privilegedDirectReplies\" />\n\t\t\t\t\t\t\t<label for=\"privilegedDirectReplies\" class=\"form-check-label\">\n\t\t\t\t\t\t\t\t<span>Restrict mentions to privileged users (mods, global mods, administrators), unless it is a direct reply to a post</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\r\n\t<div class=\"sticky-top\" style=\"top: 4.0rem;\">\r\n\t\t<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\r\n\t\t<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\r\n\t\t\t<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\r\n\t\t\t\t<!-- this is filled by public/src/admin/settings.js populateTOC function -->\r\n\t\t\t</nav>\r\n\t\t</nav>\r\n\t</div>\r\n</div>\n\t</div>\n</div>\n\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "<div class=\"mb-3\">\n\t<label class=\"form-label\">Category</label>\n\t<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\n\t<p class=\"form-text\">Set the category IDs you want to display this widget on (separated by commas)</p>\n</div>\n\n<div class=\"mb-3\">\n\t<label class=\"form-label\">Topics from Category</label>\n\t<input type=\"text\" class=\"form-control\" name=\"topicsFromCid\" placeholder=\"0\" />\n\t<p class=\"form-text\">Set the category IDs you want to pull topics from (separated by commas)</p>\n</div>\n\n<div class=\"mb-3\">\n\t<label class=\"form-label\">Topic IDs</label>\n\t<input type=\"text\" class=\"form-control\" name=\"topicsTids\" placeholder=\"0\" />\n\t<p class=\"form-text\">Set the topic IDs you want to display in the widget (separated by commas). This overrides category IDs setting.</p>\n</div>\n\n<div class=\"mb-3\">\n\t<label class=\"form-label\">Select Groups to show topics from</label>\n\t<select name=\"fromGroups\" class=\"form-select\" multiple size=\"10\">\n\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t</select>\n</div>\n\n<div class=\"mb-3\">\n\t<label class=\"form-label\" for=\"teaserPost\">Teaser Post</label>\n\t<select class=\"form-select\" id=\"teaserPost\" name=\"teaserPost\">\n\t\t<option value=\"first\">First Post</option>\n\t\t<option value=\"last-post\">Last Post</option>\n\t</select>\n</div>\n\n<div class=\"mb-3\">\n\t<label class=\"form-label\" for=\"sortBy\">Sort Topics</label>\n\t<select class=\"form-select\" id=\"sortBy\" name=\"sort\">\n\t\t<option value=\"recent\">Recently Replied</option>\n\t\t<option value=\"posts\">Most Posts</option>\n\t\t<option value=\"votes\">Most Votes</option>\n\t</select>\n</div>\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['name'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['name'] : null)) + 
          "</option>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

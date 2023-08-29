
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
    return "<div class=\"form-check mb-3\">\n\t<input type=\"checkbox\" class=\"form-check-input\" id=\"enableQuickSearch\" name=\"enableQuickSearch\" />\n\t<label class=form-check-label\" for=\"enableQuickSearch\">Enable Quick Search</label>\n</div>\n\n<div class=\"form-check mb-3\">\n\t<input type=\"checkbox\" class=\"form-check-input\" id=\"showInControl\" name=\"showInControl\" />\n\t<label class=form-check-label\" for=\"showInControl\">Show In Control</label>\n</div>\n\n<div class=\"mb-3\">\n\t<label class=form-label\" for=\"defaultIn\">Default In</label>\n\t<select class=\"form-select\" id=\"defaultIn\" name=\"defaultIn\">\n\t\t<option value=\"titles\">[[search:titles]]</option>\n\t\t<option value=\"titlesposts\">[[search:titles-posts]]</option>\n\t\t<option value=\"posts\">[[global:posts]]</option>\n\t\t<option value=\"categories\">[[global:header.categories]]</option>\n\t\t<option value=\"users\">[[global:users]]</option>\n\t\t<option value=\"tags\">[[tags:tags]]</option>\n\t</select>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
    return "<div class=\"mb-3\">\n\t<label class=\"form-label\">Number of posts to display:</label>\n\t<input type=\"text\" class=\"form-control\" name=\"numPosts\" placeholder=\"1\" />\n</div>\n\n<div class=\"mb-3\">\n\t<label class=\"form-label\">Uid of user (leave empty to use uid from profile page):</label>\n\t<input type=\"text\" class=\"form-control\" name=\"uid\"/>\n</div>\n\n<div class=\"mb-3\">\n\t<label class=form-label\" for=\"postType\">Post type</label>\n\t<select class=\"form-select\" id=\"postType\" name=\"postType\">\n\t\t<option value=\"last\">Last</option>\n\t\t<option value=\"first\">First</option>\n\t\t<option value=\"best\">Best</option>\n\t</select>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

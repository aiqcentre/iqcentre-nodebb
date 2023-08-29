
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
    return "<div class=\"mb-3\">\n\t<label class=\"form-label\">Amount of Topics to display:</label>\n\t<input type=\"text\" class=\"form-control\" name=\"numTopics\" placeholder=\"8\" />\n</div>\n\n<div class=\"mb-3\">\n\t<label class=\"form-label\">Select Duration:</label>\n\t<select name=\"duration\" class=\"form-select\">\n\t\t<option value=\"day\">Day</option>\n\t\t<option value=\"week\">Week</option>\n\t\t<option value=\"month\">Month</option>\n\t\t<option value=\"alltime\">Alltime</option>\n\t</select>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

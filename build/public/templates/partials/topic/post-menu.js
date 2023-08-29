
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
    return "<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet d-inline-block " + 
      (guard((context != null) ? context['display_post_menu'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<a class=\"btn-ghost-sm dropdown-toggle d-block\" href=\"#\" data-bs-toggle=\"dropdown\"><i class=\"fa fa-fw fa-ellipsis-v text-primary\"></i></a>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-3\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-5\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-9\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-7\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-10\"></div>\n\t\t</li>\n\t\t<li class=\"dropdown-divider\"></li>\n\t\t<li class=\"dropdown-item placeholder-wave\">\n\t\t\t<div class=\"placeholder\" style=\"width: 20px;\"></div>\n\t\t\t<div class=\"placeholder col-10\"></div>\n\t\t</li>\n\t</ul>\n</span>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

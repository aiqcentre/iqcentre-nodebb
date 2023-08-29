
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
    return "<div class=\"d-flex align-items-start gap-3\">\n\t<div class=\"icon py-1 bg-body d-none d-sm-block\">\n\t\t<div class=\"placeholder bg-secondary rounded-circle\" style=\"width: 48px; height: 48px;\"></div>\n\t</div>\n\n\t<div class=\"d-flex flex-grow-1 flex-column placeholder-wave\">\n\t\t<div class=\"d-flex align-items-center gap-1 flex-wrap w-100 post-header mt-1\">\n\t\t\t<div class=\"placeholder bg-secondary rounded-1 col-2\">&nbsp;</div>\n\t\t</div>\n\n\t\t<div class=\"content mt-2 placeholder bg-secondary rounded-1 col-5\" component=\"post/content\" itemprop=\"text\">\n\t\t\t<p>&nbsp;</p>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

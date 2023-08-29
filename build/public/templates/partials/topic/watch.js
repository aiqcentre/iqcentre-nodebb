
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
    return (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"topic/following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-o link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:watching]]</span>\n\t\t</span>\n\n\t\t<span component=\"topic/not-following/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:not-watching]]</span>\n\t\t</span>\n\n\t\t<span component=\"topic/ignoring/menu\" class=\"d-flex gap-2 align-items-center" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            " hidden") + 
          "\">\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash link-primary\"></i>\n\t\t\t<span class=\"d-none d-md-inline fw-semibold\">[[topic:ignoring]]</span>\n\t\t</span>\n\t</button>\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/following\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-o\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/not-following\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-bell-slash-o\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:not-watching]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:not-watching.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 p-2\" href=\"#\" component=\"topic/ignoring\">\n\t\t\t\t<div class=\"flex-grow-1 d-flex flex-column\">\n\t\t\t\t\t<span class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t<i class=\"flex-shrink-0 fa fa-fw fa-eye-slash\"></i>\n\t\t\t\t\t\t<span class=\"flex-grow-1 fw-semibold\">[[topic:ignoring]]</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"help-text text-muted text-xs\">[[topic:ignoring.description]]</div>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"flex-shrink-0\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})


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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "\n<div component=\"topic/quickreply/container\" class=\"quick-reply d-flex gap-3 mb-4\">\n\t<div class=\"icon hidden-xs\">\n\t\t<a class=\"d-inline-block position-relative\" href=\"" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "48px", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n\t\t\t" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
            "<span component=\"user/status\" class=\"position-absolute translate-middle-y border border-white border-2 rounded-circle status " + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "\"><span class=\"visually-hidden\">[[global:" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "]]</span></span>" :
            "") + 
          "\n\t\t</a>\n\t</div>\n\t<form class=\"flex-grow-1 d-flex flex-column gap-2\" method=\"post\" action=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose\">\n\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
          __escape(guard((context != null) ? context['tid'] : null)) + 
          "\" />\n\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
          "\" />\n\t\t<div class=\"quickreply-message position-relative\">\n\t\t\t<textarea rows=\"4\" name=\"content\" component=\"topic/quickreply/text\" class=\"form-control mousetrap\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\n\t\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n\t\t</div>\n\t\t<div>\n\t\t\t<div class=\"d-flex justify-content-end gap-2\">\n\t\t\t\t<button type=\"submit\" component=\"topic/quickreply/expand\" class=\"btn btn-sm btn-outline\" formmethod=\"get\"><i class=\"fa fa-expand\"></i></button>\n\t\t\t\t<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-sm btn-primary\">[[topic:post-quick-reply]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\t<form class=\"d-none\" component=\"topic/quickreply/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n\n</div>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

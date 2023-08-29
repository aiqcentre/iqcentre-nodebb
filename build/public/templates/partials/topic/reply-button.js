
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
    return "<div component=\"topic/reply/container\" class=\"btn-group action-bar " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" class=\"d-flex align-items-center btn btn-sm btn-primary px-3 fw-semibold \" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply d-sm-block d-md-none\"></i><span class=\"d-none d-md-block\"> [[topic:reply]]</span></a>\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-bs-toggle=\"dropdown\">\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-end p-1 text-sm\" role=\"menu\">\n\t\t<li><a class=\"dropdown-item rounded-1\" href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n\t\t" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\n\t\t<a component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n\t\t" :
                "") + 
              "\n\t") + 
          "\n\n\t" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\n\t<a component=\"topic/reply/locked\" class=\"d-flex gap-2 align-items-center fw-semibold btn btn-sm btn-primary disabled hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n\t") + 
          "\n" :
        "\n\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n\t<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"d-flex align-items-center fw-semibold btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\n\t") + 
          "\n");
  }

  compiled.blocks = {
    
  };

  return compiled;
})

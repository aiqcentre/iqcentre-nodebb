
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
    return "<div component=\"user/list/menu\" class=\"text-sm d-flex flex-wrap align-items-center gap-2\">\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=online\">[[global:online]]</a>\n\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=sort-posts\">[[users:top_posters]]</a>\n\n\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=sort-reputation\">[[users:most_reputation]]</a>\n\t") + 
      "\n\n\t" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=flagged\">[[users:most_flags]]</a>\n\n\t<a class=\"btn-ghost fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=banned\">[[user:banned]]</a>\n\t" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

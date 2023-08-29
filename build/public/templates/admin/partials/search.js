
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
    return (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\r\n<div component=\"acp/search\" class=\"my-1 acp-search\">\r\n\t<div class=\"dropdown\">\r\n\t\t<input type=\"text\" data-bs-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\">\r\n\t\t<ul class=\"dropdown-menu state-start-typing p-1\" role=\"menu\">\r\n\t\t\t<li role=\"presentation\" class=\"no-results\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.no-results]]</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"dropdown-divider search-forum\"></li>\r\n\t\t\t<li role=\"presentation\" class=\"search-forum\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\" role=\"menuitem\" target=\"_top\" href=\"#\">\r\n\t\t\t\t\t[[admin/menu:search.search-forum]]\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"keep-typing\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.keep-typing]]</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" class=\"start-typing\">\r\n\t\t\t\t<a class=\"dropdown-item rounded-1\">[[admin/menu:search.start-typing]]</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})

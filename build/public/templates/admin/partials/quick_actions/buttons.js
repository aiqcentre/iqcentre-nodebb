
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
    return (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\r\n<button component=\"rebuild-and-restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-refresh\"></i> [[admin/menu:rebuild-and-restart]]</button>\r\n\r\n<button component=\"restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-repeat\"></i> [[admin/menu:restart]]</button>\r\n" :
        "") + 
      "\r\n\r\n<button component=\"logout\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-sign-out\"></i> [[admin/menu:logout]]</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

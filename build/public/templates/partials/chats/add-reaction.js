
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
    return (guard((context != null && context['config'] != null) ? context['config']['enableMessageReactions'] : null) ?
        "\n<button class=\"reaction-add btn btn-sm btn-link " + 
          (guard((context != null && context['messages'] != null) ? context['messages']['maxReactionsReached'] : null) ?
            "max-reactions" :
            "") + 
          "\" component=\"message/reaction/add\" data-mid=\"" + 
          __escape(guard((context != null && context['messages'] != null) ? context['messages']['mid'] : null)) + 
          "\" title=\"[[reactions:add-reaction]]\">\n    <i class=\"fa fa-face-smile\"></i>\n</button>\n" :
        "") + 
      "\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

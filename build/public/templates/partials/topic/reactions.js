
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
    return (guard((context != null && context['config'] != null) ? context['config']['enablePostReactions'] : null) ?
        "\n<span class=\"reactions\" component=\"post/reactions\" data-pid=\"" + 
          __escape(guard((context != null) ? context['pid'] : null)) + 
          "\">\n  <span class=\"reaction-add d-inline-block px-2 mx-1 btn-ghost-sm " + 
          (guard((context != null) ? context['maxReactionsReached'] : null) ?
            "max-reactions" :
            "") + 
          "\" component=\"post/reaction/add\" data-pid=\"" + 
          __escape(guard((context != null) ? context['pid'] : null)) + 
          "\" title=\"[[reactions:add-reaction]]\">\n    <i class=\"fa fa-face-smile text-primary\"></i>\n  </span>\n  " + 
          compiled.blocks['./reactions'](helpers, context, guard, iter, helper) + 
          "\n</span>\n" :
        "");
  }

  compiled.blocks = {
    './reactions': function reactions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['reactions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <span class=\"reaction " + 
          (guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['reacted'] : null) ?
            "reacted" :
            "") + 
          "\" component=\"post/reaction\" data-pid=\"" + 
          __escape(guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['pid'] : null)) + 
          "\" data-reaction=\"" + 
          __escape(guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['reaction'] : null)) + 
          "\">\n\t" + 
          __escape(guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['reactionImage'] : null)) + 
          "\n\t<small class=\"reaction-emoji-count\" data-count=\"" + 
          __escape(guard((context != null && context['reactions'] != null && context['reactions'][key0] != null) ? context['reactions'][key0]['reactionCount'] : null)) + 
          "\"></small>\n</span>\n\n  ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "<span class=\"reaction " + 
      (guard((context != null) ? context['reacted'] : null) ?
        "reacted" :
        "") + 
      "\" component=\"post/reaction\" data-pid=\"" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\" data-reaction=\"" + 
      __escape(guard((context != null) ? context['reaction'] : null)) + 
      "\">\n\t" + 
      __escape(guard((context != null) ? context['reactionImage'] : null)) + 
      "\n\t<small class=\"reaction-emoji-count\" data-count=\"" + 
      __escape(guard((context != null) ? context['reactionCount'] : null)) + 
      "\"></small>\n</span>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

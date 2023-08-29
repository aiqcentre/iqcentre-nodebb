
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
        "\n<div class=\"reactions " + 
          (guard((context != null && context['messages'] != null) ? context['messages']['deleted'] : null) ?
            "hidden" :
            "") + 
          "\" component=\"message/reactions\" data-mid=\"" + 
          __escape(guard((context != null && context['messages'] != null) ? context['messages']['mid'] : null)) + 
          "\">\n\t" + 
          compiled.blocks['messages.reactions'](helpers, context, guard, iter, helper) + 
          "\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'messages.reactions': function messagesreactions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['messages'] != null) ? context['messages']['reactions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<span class=\"reaction mb-2 " + 
          (guard((context != null && context['messages'] != null && context['messages']['reactions'] != null && context['messages']['reactions'][key0] != null) ? context['messages']['reactions'][key0]['reacted'] : null) ?
            "reacted" :
            "") + 
          "\" component=\"message/reaction\" data-mid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['reactions'] != null && context['messages']['reactions'][key0] != null) ? context['messages']['reactions'][key0]['mid'] : null)) + 
          "\" data-reaction=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['reactions'] != null && context['messages']['reactions'][key0] != null) ? context['messages']['reactions'][key0]['reaction'] : null)) + 
          "\">\n\t" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['reactions'] != null && context['messages']['reactions'][key0] != null) ? context['messages']['reactions'][key0]['reactionImage'] : null)) + 
          "\n\t<small class=\"reaction-emoji-count\" data-count=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['reactions'] != null && context['messages']['reactions'][key0] != null) ? context['messages']['reactions'][key0]['reactionCount'] : null)) + 
          "\"></small>\n</span>\n\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

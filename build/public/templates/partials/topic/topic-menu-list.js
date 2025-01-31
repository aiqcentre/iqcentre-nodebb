
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['editable'] : null) ?
        "\n<li " + 
          (guard((context != null) ? context['locked'] : null) ?
            "hidden" :
            "") + 
          "><a component=\"topic/lock\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          (guard((context != null) ? context['locked'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-fw text-muted fa-lock\"></i> [[topic:thread_tools.lock]]</a></li>\n<li " + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "hidden") + 
          "><a component=\"topic/unlock\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "hidden") + 
          "\"><i class=\"fa fa-fw text-muted fa-unlock\"></i> [[topic:thread_tools.unlock]]</a></li>\n<li " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "hidden" :
            "") + 
          "><a component=\"topic/pin\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-fw text-muted fa-thumb-tack\"></i> [[topic:thread_tools.pin]]</a></li>\n<li " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "" :
            "hidden") + 
          "><a component=\"topic/unpin\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "" :
            "hidden") + 
          "\"><i class=\"fa fa-fw text-muted fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]</a></li>\n\n<li><a component=\"topic/move\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\"><i class=\"fa fa-fw text-muted fa-arrows\"></i> [[topic:thread_tools.move]]</a></li>\n<li><a component=\"topic/merge\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\"><i class=\"fa fa-fw text-muted fa-code-fork\"></i> [[topic:thread_tools.merge]]</a></li>\n<li><a component=\"topic/fork\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\"><i class=\"fa fa-fw text-muted fa-code-fork\"></i> [[topic:thread_tools.fork]]</a></li>\n<li><a component=\"topic/tag\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\"><i class=\"fa fa-fw text-muted fa-tag\"></i> [[topic:thread_tools.tag]]</a></li>\n" + 
          (guard((context != null) ? context['scheduled'] : null) ?
            "" :
            "\n<li><a component=\"topic/move-posts\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\"><i class=\"fa fa-fw text-muted fa-arrows\"></i> [[topic:thread_tools.move-posts]]</a></li>\n") + 
          "\n<li><a component=\"topic/mark-unread-for-all\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\"><i class=\"fa fa-fw text-muted fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]</a></li>\n<li class=\"dropdown-divider\"></li>\n" :
        "") + 
      "\n\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['deletable'] : null) ?
        "\n<li " + 
          (guard((context != null) ? context['deleted'] : null) ?
            "hidden" :
            "") + 
          "><a component=\"topic/delete\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          (guard((context != null) ? context['deleted'] : null) ?
            "hidden" :
            "") + 
          "\"><i class=\"fa fa-fw text-muted fa-trash-o\"></i> [[topic:thread_tools.delete]]</a></li>\n" + 
          (guard((context != null) ? context['scheduled'] : null) ?
            "" :
            "\n<li " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "><a component=\"topic/restore\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "\"><i class=\"fa fa-fw text-muted fa-history\"></i> [[topic:thread_tools.restore]]</a></li>\n") + 
          "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['purge'] : null) ?
            "\n<li " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "><a component=\"topic/purge\" href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "\"><i class=\"fa fa-fw text-muted fa-eraser\"></i> [[topic:thread_tools.purge]]</a></li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
            "\n<li><a component=\"topic/delete/posts\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\"><i class=\"fa fa-fw text-muted fa-trash-o\"></i> [[topic:thread_tools.delete-posts]]</a></li>\n" :
            "") + 
          "\n\n" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n" :
        "");
  }

  compiled.blocks = {
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li><a href=\"#\" class=\"dropdown-item rounded-1 d-flex align-items-center gap-2 " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\"><i class=\"fa fa-fw text-muted " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a></li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

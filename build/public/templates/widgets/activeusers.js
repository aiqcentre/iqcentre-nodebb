
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
    return "<div data-component=\"widget/active-users\" class=\"d-flex flex-wrap gap-1 mb-3\">\n\t" + 
      compiled.blocks['active_users'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n<script type=\"text/javascript\">\n\t(function() {\n\t\tfunction handleActiveUsers() {\n\t\t\tfunction onNewTopic(topic) {\n\t\t\t\tconst activeUsersEl = $('[data-component=\"widget/active-users\"]');\n\t\t\t\tconst activeUser = activeUsersEl.find('a[data-uid=\"' + topic.uid + '\"]');\n\n\t\t\t\tif (activeUser.length) {\n\t\t\t\t\treturn activeUser.prependTo(activeUsersEl);\n\t\t\t\t}\n\n\t\t\t\tapp.parseAndTranslate('widgets/activeusers', 'active_users', {\n\t\t\t\t\trelative_path: config.relative_path,\n\t\t\t\t\tactive_users: [topic.user],\n\t\t\t\t}, function (html) {\n\t\t\t\t\thtml.prependTo(activeUsersEl);\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tfunction onAjaxifyEnd() {\n\t\t\t\tconst activeUsersEl = $('[data-component=\"widget/active-users\"]');\n\t\t\t\tsocket.removeListener('event:new_topic', onNewTopic);\n\t\t\t\tif (activeUsersEl.length) {\n\t\t\t\t\tsocket.on('event:new_topic', onNewTopic);\n\t\t\t\t} else {\n\t\t\t\t\t$(window).off('action:ajaxify.end', onAjaxifyEnd);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t$(window).on('action:ajaxify.end', onAjaxifyEnd);\n\t\t}\n\n\t\tif (document.readyState === 'loading') {\n\t\t\tdocument.addEventListener('DOMContentLoaded', handleActiveUsers);\n\t\t} else {\n\t\t\thandleActiveUsers();\n\t\t}\n\t})();\n</script>";
  }

  compiled.blocks = {
    'active_users': function active_users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['active_users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a class=\"text-decoration-none\" data-uid=\"" + 
          __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['uid'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['active_users'] != null) ? context['active_users'][key0] : null), "24px", guard((context != null) ? context['true'] : null), "avatar-tooltip not-responsive"])) + 
          "</a>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

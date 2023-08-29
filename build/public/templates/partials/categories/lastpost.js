
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
    return "<div class=\"lastpost border-start border-2 lh-sm h-100\" style=\"border-color: " + 
      __escape(guard((context != null) ? context['bgColor'] : null)) + 
      "!important;\">\n\t" + 
      compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
      "\n\n\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n\t<div component=\"category/posts\" class=\"ps-2\">\n\t\t<div class=\"post-content overflow-hidden text-xs\">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t") + 
      "\n</div>\n";
  }

  compiled.blocks = {
    './posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (index === 0 ?
            "\n\t<div component=\"category/posts\" class=\"ps-2 text-xs d-flex flex-column h-100 gap-1\">\n\t\t<div class=\"text-nowrap text-truncate\">\n\t\t\t<a class=\"text-decoration-none\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "18px", guard((context != null) ? context['true'] : null), "avatar-tooltip"])) + 
              "</a>\n\t\t\t<a class=\"permalink text-muted\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\">\n\t\t\t\t<span class=\"timeago text-xs\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"post-content text-xs text-break line-clamp-sm-2 lh-sm position-relative flex-fill\">\n\t\t\t<a class=\"stretched-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\"></a>\n\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n\t\t</div>\n\t</div>\n\t" :
            "") + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

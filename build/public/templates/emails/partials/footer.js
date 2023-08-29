
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
    return "\t\t\t<!-- Email Footer : BEGIN -->\r\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 680px;\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"padding: 40px 10px;width: 100%;font-size: 12px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height:18px; text-align: center; color: #888888;\">\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showUnsubscribe'] : null) ?
        "\r\n\t\t\t\t\t\t[[email:notif.post.unsub.info]] <a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null) ? context['uid'] : null)) + 
          "/settings\">[[email:unsub.cta]]</a>.\r\n\t\t\t\t\t\t<br />[[email:notif.post.unsub.one-click]] <a href=\"" + 
          __escape(guard((context != null) ? context['unsubUrl'] : null)) + 
          "\">[[email:unsubscribe]]</a>.\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<!-- Email Footer : END -->\r\n\r\n\t\t\t<!--[if mso]>\r\n\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<![endif]-->\r\n\t\t</div>\r\n\r\n\t</center>\r\n</body>\r\n\r\n</html>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

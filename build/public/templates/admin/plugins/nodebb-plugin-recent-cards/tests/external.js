
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
    return "<html>\r\n\t<head>\r\n\t\t<script\r\n\t\tsrc=\"https://code.jquery.com/jquery-3.2.1.min.js\"\r\n\t\tintegrity=\"sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=\"\r\n\t\tcrossorigin=\"anonymous\"></script>\r\n\r\n\t\t<script src=\"" + 
      __escape(guard((context != null) ? context['forumURL'] : null)) + 
      "/plugins/nodebb-plugin-recent-cards/static/bxslider/jquery.bxslider.min.js\"></script>\r\n\t\t<script>\r\n\t\twindow.path_to_nodebb = '" + 
      __escape(guard((context != null) ? context['forumURL'] : null)) + 
      "';\r\n\t\t</script>\r\n\t\t<script src=\"" + 
      __escape(guard((context != null) ? context['forumURL'] : null)) + 
      "/plugins/nodebb-plugin-recent-cards/static/lib/external.js\"></script>\r\n\t\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-timeago/1.6.1/jquery.timeago.min.js\"></script>\r\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['forumURL'] : null)) + 
      "/plugins/nodebb-plugin-recent-cards/render/style.css\" />\r\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['forumURL'] : null)) + 
      "/plugins/nodebb-plugin-recent-cards/static/external/bootstrap-grid.css\" />\r\n\r\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\r\n\t</head>\r\n\r\n\t<body>\r\n\t\t<div id=\"nodebb-plugin-recent-cards\"></div>\r\n\t</body>\r\n</html>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

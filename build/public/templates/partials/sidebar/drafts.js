
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
    return "<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link nav-btn d-flex gap-2 justify-content-between align-items-center position-relative\">\n\t<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n\t\t<span class=\"position-relative\">\n\t\t\t<i component=\"drafts/icon\" class=\"fa fa-fw fa-pen-to-square unread-count\"></i>\n\t\t\t<span component=\"drafts/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary hidden\">0</span>\n\t\t</span>\n\t\t<span class=\"nav-text small visible-open fw-semibold\">[[global:header.drafts]]</span>\n\t</span>\n\t<span component=\"drafts/count\" class=\"visible-open badge rounded-1 bg-primary hidden\">0</span>\n</a>\n<ul class=\"drafts-dropdown dropdown-menu p-1 shadow\">\n\t<li>\n\t\t<div component=\"drafts/list\" class=\"list-container draft-list list-unstyled d-flex flex-column overscroll-behavior-contain gap-1 pe-1\">\n\t\t\t<div class=\"dropdown-item rounded-1 p-2 d-flex gap-2 placeholder-wave\">\n\t\t\t\t<div class=\"d-flex flex-grow-1 flex-column w-100\">\n\t\t\t\t\t<div class=\"text-xs placeholder col-3\">&nbsp;</div>\n\t\t\t\t\t<div class=\"text-sm placeholder col-11\">&nbsp;</div>\n\t\t\t\t\t<div class=\"text-xs placeholder col-4\">&nbsp;</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"hidden no-drafts text-center p-4 d-flex flex-column\">\n\t\t\t\t<div class=\"p-4\"><i class=\"fa-solid fa-wind fs-2 text-muted\"></i></div>\n\t\t\t\t<div class=\"text-xs fw-semibold text-muted\">[[modules:composer.no-drafts]]</div>\n\t\t\t</div>\n\t\t\t<div class=\"draft-item-container\">\n\t\t\t\t" + 
      compiled.blocks['drafts'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</li>\n</ul>\n";
  }

  compiled.blocks = {
    'drafts': function drafts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['drafts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t" + 
          (index === 0 ?
            "" :
            "\n\t\t\t\t<hr class=\"my-1\"/>\n\t\t\t\t") + 
          "\n\t\t\t\t<div data-save-id=\"" + 
          __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['save_id'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"d-flex gap-1 justify-content-between ff-base\">\n\t\t\t\t\t\t<div class=\"dropdown-item rounded-1 p-2 d-flex flex-column gap-2 pointer\" component=\"drafts/open\" data-save-id=\"" + 
          __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['save_id'] : null)) + 
          "\">\n\t\t\t\t\t\t\t" + 
          ((guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['action'] : null) == "topics.post") ?
            "\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['title'] : null) ?
                "\n\t\t\t\t\t\t\t<div class=\"text text-xs fw-semibold line-clamp-2 text-break\">" + 
                  __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['title'] : null)) + 
                  "</div>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t\t" + 
          ((guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['action'] : null) == "posts.reply") ?
            "\n\t\t\t\t\t\t\t<div class=\"text text-xs fw-semibold line-clamp-2 text-break\">[[topic:composer.replying_to, \"" + 
              __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['title'] : null)) + 
              "\"]]</div>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t\t" + 
          ((guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['action'] : null) == "posts.edit") ?
            "\n\t\t\t\t\t\t\t<div class=\"text text-xs fw-semibold line-clamp-2\">[[topic:composer.editing-in, \"" + 
              __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['title'] : null)) + 
              "\"]]</div>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['text'] : null) ?
            "\n\t\t\t\t\t\t\t<div class=\"text text-sm line-clamp-3 text-break\">" + 
              __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['text'] : null)) + 
              "</div>\n\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t<div class=\"timeago text-xs text-muted\" title=\"" + 
          __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['timestampISO'] : null)) + 
          "\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button component=\"drafts/delete\" data-save-id=\"" + 
          __escape(guard((context != null && context['drafts'] != null && context['drafts'][key0] != null) ? context['drafts'][key0]['save_id'] : null)) + 
          "\" class=\"btn btn-light btn-sm\">\n\t\t\t\t\t\t\t\t<i class=\"unread fa fa-xs fa-trash text-secondary\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})


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
    return "<li component=\"chat/message\" class=\"chat-message mx-2 pe-2 " + 
      (guard((context != null && context['messages'] != null) ? context['messages']['deleted'] : null) ?
        " deleted" :
        "") + 
      " " + 
      (guard((context != null && context['messages'] != null) ? context['messages']['newSet'] : null) ?
        "border-top pt-3" :
        "") + 
      "\" data-mid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['messageId'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['fromuid'] : null)) + 
      "\" data-self=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['self'] : null)) + 
      "\" data-break=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['newSet'] : null)) + 
      "\" data-timestamp=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestamp'] : null)) + 
      "\" data-username=\"" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['username'] : null)) + 
      "\">\n\n\t" + 
      (guard((context != null && context['messages'] != null) ? context['messages']['parent'] : null) ?
        "\n\t<div class=\"d-flex ms-4 mb-2 align-items-center\">\n\t\t<div component=\"chat/message/parent\" data-parent-mid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['mid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['fromuid'] : null)) + 
          "\" class=\"btn-ghost-sm align-items-start flex-row w-100\">\n\t\t\t<div class=\"d-flex gap-2 text-sm text-nowrap\">\n\t\t\t\t<div><i class=\"fa fa-sm fa-reply opacity-50\"></i></div>\n\t\t\t\t<div class=\"d-flex flex-nowrap gap-1 align-items-center\">\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['userslug'] : null)) + 
          "\" class=\"text-decoration-none lh-1\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['user'] : null), "14px", guard((context != null) ? context['true'] : null), "not-responsive align-middle"])) + 
          "</a>\n\t\t\t\t\t<a class=\"chat-user fw-semibold\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null && context['messages']['parent']['user'] != null) ? context['messages']['parent']['user']['displayname'] : null)) + 
          "</a>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"chat-timestamp text-muted timeago text-nowrap hidden\" title=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t</div>\n\t\t\t<div component=\"chat/message/parent/content\" class=\"text-muted line-clamp-1 w-100\">" + 
          __escape(guard((context != null && context['messages'] != null && context['messages']['parent'] != null) ? context['messages']['parent']['content'] : null)) + 
          "</div>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t<div class=\"message-header lh-1 d-flex align-items-center gap-2 text-sm " + 
      (guard((context != null && context['messages'] != null) ? context['messages']['newSet'] : null) ?
        "" :
        "hidden") + 
      " pb-2\">\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['userslug'] : null)) + 
      "\" class=\"text-decoration-none\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null) ? context['messages']['fromUser'] : null), "18px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
      "</a>\n\t\t<span class=\"chat-user fw-semibold\"><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['displayname'] : null)) + 
      "</a></span>\n\t\t" + 
      (guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['banned'] : null) ?
        "\n\t\t<span class=\"badge bg-danger\">[[user:banned]]</span>\n\t\t" :
        "") + 
      "\n\t\t" + 
      (guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['deleted'] : null) ?
        "\n\t\t<span class=\"badge bg-danger\">[[user:deleted]]</span>\n\t\t" :
        "") + 
      "\n\t\t<span class=\"chat-timestamp text-muted timeago\" title=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestampISO'] : null)) + 
      "\"></span>\n\t\t" + 
      (guard((context != null && context['messages'] != null) ? context['messages']['edited'] : null) ?
        "\n\t\t<div class=\"text-muted ms-auto\" title=\"[[global:edited-timestamp, " + 
          __escape(guard((context != null && context['messages'] != null) ? context['messages']['editedISO'] : null)) + 
          "]]\"><i class=\"fa fa-edit\"></i></span></div>\n\t\t" :
        "") + 
      "\n\t</div>\n\t<div class=\"message-body-wrapper hover-parent\">\n\t\t<div component=\"chat/message/body\" class=\"message-body ps-0 py-0 overflow-auto text-break\">\n\t\t\t" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['content'] : null)) + 
      "\n\t\t</div>\n\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n\t\t<div component=\"chat/message/controls\" class=\"position-relative\">\n\t\t\t<div class=\"btn-group border shadow-sm controls position-absolute bg-body hover-d-block end-0\" style=\"bottom:1rem;\">\n\t\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"reply\"><i class=\"fa fa-reply\"></i></button>\n\t\t\t\t" + 
      ((guard((context != null) ? context['isAdminOrGlobalMod'] : null) || (!guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) && guard((context != null && context['messages'] != null) ? context['messages']['self'] : null))) ?
        "\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"delete\"><i class=\"fa fa-trash\"></i></button>\n\t\t\t\t<button class=\"btn btn-sm btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\n\t\t\t\t<button class=\"btn btn-sm btn-link chat-ip-button\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle\"></i></button>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

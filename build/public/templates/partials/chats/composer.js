
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
    return "<div component=\"chat/composer\" class=\"d-flex flex-column gap-2 border-top pt-2 align-items-start\">\n\t<div component=\"chat/composer/replying-to\" data-tomid=\"\" class=\"text-sm px-2 d-flex gap-2 align-items-center hidden\">\n\t\t<div component=\"chat/composer/replying-to-text\"></div> <button component=\"chat/composer/replying-to-cancel\" class=\"btn-ghost-sm px-2 py-1\"><i class=\"fa fa-times\"></i></button>\n\t</div>\n\t<div class=\"w-100 flex-grow-1 flex-nowrap position-relative d-flex rounded-2 border border-secondary p-1 align-items-end\">\n\t\t<button component=\"chat/upload/button\" class=\"btn-ghost-sm px-2\" type=\"button\"><i class=\"fa fa-fw fa-upload\"></i></button>\n\t\t<div class=\"flex-grow-1 align-self-center\">\n\t\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder.mobile]]\" class=\"bg-transparent text-body form-control chat-input mousetrap rounded-0 border-0 shadow-none ps-1 py-0\" style=\"min-height: 1.5rem;height:0;max-height:30vh;resize:none;\"></textarea>\n\t\t</div>\n\t\t<div class=\"d-flex gap-1\">\n\t\t\t<div component=\"chat/message/remaining\" class=\"text-xs text-muted me-1 align-self-center\">" + 
      __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
      "</div>\n\t\t\t<button class=\"btn-ghost-sm px-2\" type=\"button\" data-action=\"send\"><i class=\"fa fa-fw fa-paper-plane text-primary\"></i></button>\n\t\t</div>\n\t</div>\n\t<form class=\"hidden\" component=\"chat/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

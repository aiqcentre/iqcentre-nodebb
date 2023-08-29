
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
    return "<div data-widget-area=\"header\">\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"row register flex-fill\">\n\t<div class=\"d-flex flex-column gap-2 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n\t\t<h2 class=\"tracking-tight fw-semibold text-center\">[[global:register]]</h2>\n\t\t<div class=\"row justify-content-center gap-5\">\n\n\t\t\t<div class=\"col-12 col-md-5 col-lg-3 px-md-0\">\n\t\t\t\t<div class=\"register-block\">\n\t\t\t\t\t<div class=\"alert alert-danger" + 
      (guard((context != null) ? context['error'] : null) ?
        "" :
        " hidden") + 
      "\" id=\"register-error-notify\" >\n\t\t\t\t\t\t<strong>[[error:registration-error]]</strong>\n\t\t\t\t\t\t<p>" + 
      __escape(guard((context != null) ? context['error'] : null)) + 
      "</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<form component=\"register/local\" class=\"d-flex flex-column gap-3\" role=\"form\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register\" method=\"post\">\n\t\t\t\t\t\t<div class=\"mb-2 d-flex flex-column gap-2\">\n\t\t\t\t\t\t\t<label for=\"username\">[[register:username]]</label>\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"[[register:username_placeholder]]\" name=\"username\" id=\"username\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"off\" />\n\t\t\t\t\t\t\t\t<span class=\"register-feedback text-xs text-danger\" id=\"username-notify\"></span>\n\t\t\t\t\t\t\t\t<span class=\"form-text text-xs\">[[register:help.username_restrictions, " + 
      __escape(guard((context != null) ? context['minimumUsernameLength'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['maximumUsernameLength'] : null)) + 
      "]]</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"mb-2 d-flex flex-column gap-2\">\n\t\t\t\t\t\t\t<label for=\"password\">[[register:password]]</label>\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column\">\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[register:password_placeholder]]\" name=\"password\" id=\"password\" />\n\t\t\t\t\t\t\t\t<span class=\"register-feedback text-xs text-danger\" id=\"password-notify\"></span>\n\t\t\t\t\t\t\t\t<span class=\"form-text text-xs\">[[register:help.minimum_password_length, " + 
      __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
      "]]</span>\n\t\t\t\t\t\t\t\t<p id=\"caps-lock-warning\" class=\"text-danger hidden\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exclamation-triangle\"></i> [[login:caps-lock-enabled]]\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"mb-2 d-flex flex-column gap-2\">\n\t\t\t\t\t\t\t<label for=\"password-confirm\">[[register:confirm_password]]</label>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[register:confirm_password_placeholder]]\" name=\"password-confirm\" id=\"password-confirm\" />\n\t\t\t\t\t\t\t\t<span class=\"register-feedback text-xs text-danger\" id=\"password-confirm-notify\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t" + 
      compiled.blocks['regFormEntry'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t\t\t\t\t<button class=\"btn btn-primary\" id=\"register\" type=\"submit\">[[register:register_now_button]]</button>\n\t\t\t\t\t\t<hr/>\n\n\t\t\t\t\t\t<span class=\"text-sm\">[[register:already-have-account]]</span>\n\t\t\t\t\t\t<a class=\"btn btn-outline-light text-body\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/login\">[[global:login]]</a>\n\n\t\t\t\t\t\t<input id=\"token\" type=\"hidden\" name=\"token\" value=\"\" />\n\t\t\t\t\t\t<input id=\"noscript\" type=\"hidden\" name=\"noscript\" value=\"true\" />\n\t\t\t\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" />\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t" + 
      (guard((context != null) ? context['alternate_logins'] : null) ?
        "\n\t\t\t<div class=\"col-12 col-md-5 col-lg-3 px-md-0\">\n\t\t\t\t<div class=\"alt-register-block d-flex flex-column gap-2\">\n\t\t\t\t\t<label>[[register:alternative_registration]]</label>\n\t\t\t\t\t<ul class=\"alt-logins list-unstyled\">\n\t\t\t\t\t\t" + 
          compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n<div data-widget-area=\"footer\">\n\t" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'regFormEntry': function regFormEntry(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['regFormEntry'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"mb-2 regFormEntry d-flex flex-column gap-2\">\n\t\t\t\t\t\t\t<label for=\"register-" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['styleName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['label'] : null)) + 
          "</label>\n\t\t\t\t\t\t\t<div id=\"register-" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['styleName'] : null)) + 
          "\">" + 
          guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['html'] : null) + 
          "</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li class=\"" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          " mb-2\">\n\t\t\t\t\t\t\t<a class=\"btn btn-outline-light d-flex align-items-center\" rel=\"nofollow noopener noreferrer\" target=\"_top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['url'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['icons'] != null) ? context['authentication'][key0]['icons']['svg'] : null) ?
            "\n\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['icons'] != null) ? context['authentication'][key0]['icons']['svg'] : null)) + 
              "\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t<i class=\"flex-shrink-0 " + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['icons'] != null) ? context['authentication'][key0]['icons']['normal'] : null)) + 
              "\" style=\"color:" + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['color'] : null)) + 
              ";\"></i>\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['labels'] != null) ? context['authentication'][key0]['labels']['register'] : null) ?
            "\n\t\t\t\t\t\t\t\t<div class=\"flex-grow-1 text-body text-sm\">" + 
              __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null && context['authentication'][key0]['labels'] != null) ? context['authentication'][key0]['labels']['register'] : null)) + 
              "</div>\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

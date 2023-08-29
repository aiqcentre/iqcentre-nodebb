
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
    return "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\t<title>NodeBB Web Installer</title>\r\n\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"bootstrap.min.css\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"installer.css\">\r\n\r\n\t<script type=\"text/javascript\" async defer src=\"/assets/installer.min.js\"></script>\r\n</head>\r\n\r\n<body>\r\n\t<nav class=\"navbar navbar-expand-lg bg-light\">\r\n\t\t<div class=\"container-fluid\">\r\n\t\t\t<a class=\"navbar-brand\" href=\"#\">NodeBB</a>\r\n\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbar-menu\" aria-controls=\"navbar-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n\t\t\t\t<ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" href=\"/\">Installer</a></li>\r\n\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" href=\"https://docs.nodebb.org\" target=\"_blank\">Get Help</a></li>\r\n\t\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" href=\"https://community.nodebb.org\" target=\"_blank\">Community</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</nav>\r\n\t" + 
      (guard((context != null) ? context['installing'] : null) ?
        "" :
        "\r\n\t<div class=\"container " + 
          (guard((context != null) ? context['success'] : null) ?
            "hide" :
            "") + 
          "\">\r\n\t\t<p>\r\n\t\t\t<h1>Welcome to the NodeBB Installer</h1>\r\n\t\t\tYou are just a few steps away from launching your own NodeBB forum!\r\n\t\t</p>\r\n\t\t<form id=\"install\" action=\"/\" method=\"post\" autocomplete=\"off\">\r\n\t\t\t" + 
          (guard((context != null) ? context['skipGeneralSetup'] : null) ?
            "" :
            "\r\n\t\t\t<div class=\"general\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<h2><small>General Instance Setup</small></h2>\r\n\t\t\t\t\t<hr />\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<div class=\"row input-row\">\r\n\t\t\t\t\t<div class=\"col-sm-7 col-12 input-field\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"install:url\">Web Address (URL)</label>\r\n\t\t\t\t\t\t<input id=\"install:url\" type=\"text\" class=\"form-control\" name=\"url\" value=\"" + 
              (guard((context != null) ? context['url'] : null) ?
                __escape(guard((context != null) ? context['url'] : null)) :
                "") + 
              "\" placeholder=\"http://localhost:4567\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-5 form-text\" data-help=\"This is the address that resolves to your NodeBB forum. If no port is specified, <code>4567</code> will be used.\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t") + 
          "\r\n\t\t\t<div class=\"admin\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<h2><small>Create an Administrator account</small></h2>\r\n\t\t\t\t\t<hr />\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<div class=\"row input-row\">\r\n\t\t\t\t\t<div class=\"col-sm-7 col-12 input-field\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"admin:username\">Username</label>\r\n\t\t\t\t\t\t<input id=\"admin:username\" type=\"text\" class=\"form-control\" name=\"admin:username\" value=\"" + 
          (guard((context != null) ? context['admin:username'] : null) ?
            __escape(guard((context != null) ? context['admin:username'] : null)) :
            "") + 
          "\" placeholder=\"Username\" autocomplete=\"off\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-5 form-text\" data-help=\"Enter an <strong>alphanumeric username</strong>. Spaces between words are allowed. You can always change your username later on your profile page.\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row input-row\">\r\n\t\t\t\t\t<div class=\"col-sm-7 col-12 input-field\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"admin:email\">Email Address</label>\r\n\t\t\t\t\t\t<input id=\"admin:email\" type=\"text\" class=\"form-control\" name=\"admin:email\" value=\"" + 
          (guard((context != null) ? context['admin:email'] : null) ?
            __escape(guard((context != null) ? context['admin:email'] : null)) :
            "") + 
          "\" placeholder=\"Email Address\" autocomplete=\"off\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-5 form-text\" data-help=\"Please enter your email address.\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row input-row\">\r\n\t\t\t\t\t<div class=\"col-sm-7 col-12 input-field\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"admin:password\">Password</label>\r\n\t\t\t\t\t\t<input id=\"admin:password\" type=\"password\" class=\"form-control\" name=\"admin:password\" value=\"" + 
          (guard((context != null) ? context['admin:password'] : null) ?
            __escape(guard((context != null) ? context['admin:password'] : null)) :
            "") + 
          "\" placeholder=\"Password\" data-minimum-strength=\"" + 
          __escape(guard((context != null) ? context['minimumPasswordStrength'] : null)) + 
          "\" data-minimum-length=\"" + 
          __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
          "\" autocomplete=\"off\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-5 form-text\" data-help=\"Use a combination of numbers, symbols, and different cases. You can change the strictness of password creation in the Admin Control Panel. Minimum " + 
          __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
          " characters.\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row input-row\">\r\n\t\t\t\t\t<div class=\"col-sm-7 col-12 input-field\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"admin:passwordConfirm\">Confirm Password</label>\r\n\t\t\t\t\t\t<input id=\"admin:passwordConfirm\" type=\"password\" class=\"form-control\" name=\"admin:passwordConfirm\" value=\"" + 
          (guard((context != null) ? context['admin:passwordConfirm'] : null) ?
            __escape(guard((context != null) ? context['admin:passwordConfirm'] : null)) :
            "") + 
          "\" placeholder=\"Confirm Password\" autocomplete=\"off\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-5 form-text\" data-help=\"Please confirm your password.\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t" + 
          (guard((context != null) ? context['skipDatabaseSetup'] : null) ?
            "" :
            "\r\n\t\t\t<div class=\"database mb-3\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<h2><small>Configure your database</small></h2>\r\n\t\t\t\t\t<hr />\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<div class=\"row input-row\">\r\n\t\t\t\t\t<div class=\"col-sm-7 col-12 input-field\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"install:database\">Database Type</label>\r\n\t\t\t\t\t\t<select id=\"install:database\" class=\"form-select\" name=\"database\">\r\n\t\t\t\t\t\t\t<option value=\"mongo\">MongoDB</option>\r\n\t\t\t\t\t\t\t<option value=\"redis\">Redis</option>\r\n\t\t\t\t\t\t\t<option value=\"postgres\">PostgreSQL</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-5 form-text\" data-help=\"Leave the fields blank to use the default settings.\">" + 
              (guard((context != null) ? context['error'] : null) ?
                "There was an error connecting to your database. Please try again." :
                "") + 
              "</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div id=\"database-config\"></div>\r\n\t\t\t</div>\r\n\t\t\t") + 
          "\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-7 col-12\">\r\n\t\t\t\t\t<div class=\"d-flex gap-2 mb-3\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['skipDatabaseSetup'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t<button id=\"test-database\" class=\"btn btn-light\">\r\n\t\t\t\t\t\t\t<div id=\"test-database-spinner\" class=\"spinner-border spinner-border-sm text-primary hidden\" role=\"status\"></div>\r\n\t\t\t\t\t\t\t<span>Test Database</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t<button id=\"submit\" type=\"submit\" class=\"btn btn-primary\">Install NodeBB <i class=\"working hide\"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"database-success\" class=\"alert alert-success hidden\" role=\"alert\">Database connection successful!</div>\r\n\t\t\t\t\t<div id=\"database-error\" class=\"alert alert-danger hidden\" role=\"alert\"></div>\r\n\t\t\t\t\t<div id=\"database-full\" class=\"alert alert-warning hidden\" role=\"alert\"><pre></pre></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\t") + 
      "\r\n\r\n\t" + 
      (guard((context != null) ? context['installing'] : null) ?
        "\r\n\t<div id=\"installing\" class=\"container\" data-url=\"" + 
          __escape(guard((context != null) ? context['launchUrl'] : null)) + 
          "\">\r\n\t\t<p>\r\n\t\t\t<h1>Hang tight! Your NodeBB is being installed.</h1>\r\n\t\t</p>\r\n\t\t<p class=\"lead\">This might take a few minutes, you will be redirected once your forum is ready.</p>\r\n\t\t<div class=\"progress\" style=\"height: 20px;\">\r\n\t\t\t<div class=\"progress-bar\" role=\"progressbar\" data-percent=\"" + 
          __escape(guard((context != null) ? context['percentInstalled'] : null)) + 
          "\" style=\"width: " + 
          __escape(guard((context != null) ? context['percentInstalled'] : null)) + 
          "%;\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\r\n\t<div class=\"hide\">\r\n\t\t" + 
      compiled.blocks['databases'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n</body>\r\n</html>";
  }

  compiled.blocks = {
    'databases': function databases(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['databases'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<div data-database=\"" + 
          __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null) ? context['databases'][key0]['name'] : null)) + 
          "\">\r\n\t\t\t " + 
          iter(guard((context != null && context['databases'] != null && context['databases'][key0] != null) ? context['databases'][key0]['questions'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t<div class=\"row input-row\">\r\n\t\t\t\t\t<div class=\"col-sm-7 col-12 input-field\">\r\n\t\t\t\t\t\t<label class=\"form-label\" for=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['description'] : null)) + 
              "</label>\r\n\t\t\t\t\t\t<input id=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\" type=\"" + 
              (guard((context != null) ? context['hidden'] : null) ?
                "password" :
                "text") + 
              "\" class=\"form-control\" name=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\" placeholder=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['default'] : null)) + 
              "\" value=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['default'] : null)) + 
              "\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t</div>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

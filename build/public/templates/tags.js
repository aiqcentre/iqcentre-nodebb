
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
      "\n</div>\n\n<div class=\"row\">\n\t<div class=\"tags " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n\t\t<h3 class=\"fw-semibold\">[[pages:tags]]</h3>\n\t\t" + 
      (guard((context != null) ? context['displayTagSearch'] : null) ?
        "\n\t\t" + 
          (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
            "\n\t\t<div class=\"row justify-content-end mb-3\">\n\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t<div class=\"d-flex justify-content-end\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[global:search]]\" id=\"tag-search\">\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" type=\"button\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t\t" :
        "") + 
      "\n\t\t<hr/>\n\t\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "" :
        "\n\t\t<div class=\"alert alert-warning\">[[tags:no_tags]]</div>\n\t\t") + 
      "\n\n\t\t<div class=\"category\">\n\t\t\t<div class=\"tag-list row row-cols-2 row-cols-lg-4 row-cols-xl-5 gx-3 gy-2\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n\n<div data-widget-area=\"footer\">\n\t" + 
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
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\" class=\"btn-ghost flex-column gap-0 align-items-start justify-content-start text-truncate p-2 ff-base\">\n\t<div class=\"fw-semibold text-nowrap tag-item w-100 text-truncate\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</div>\n\t<div class=\"text-xs text-muted text-nowrap tag-topic-count\">[[global:x-topics, " + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)])) + 
          "]]</div>\n</a>\n";
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

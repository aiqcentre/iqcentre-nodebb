
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
    return "<div class=\"options\">\n\t<form component=\"groups/settings\" role=\"form\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 col-lg-6\">\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"name\">[[groups:details.group_name]]</label>\n\t\t\t\t\t<input " + 
      (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
        "readonly" :
        "") + 
      " class=\"form-control\" name=\"name\" id=\"name\" type=\"text\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"name\">[[groups:details.description]]</label>\n\t\t\t\t\t<textarea class=\"form-control\" name=\"description\" id=\"description\" type=\"text\" maxlength=\"255\">" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
      "</textarea>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t<label class=\"form-check-label\">[[groups:details.private]]</label>\n\t\t\t\t\t<input class=\"form-check-input\" name=\"private\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t\t\t" + 
      (guard((context != null) ? context['allowPrivateGroups'] : null) ?
        "" :
        "\n\t\t\t\t\t<p class=\"form-text\">\n\t\t\t\t\t\t[[groups:details.private_system_help]]\n\t\t\t\t\t</p>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t<p class=\"form-text text-xs m-0\">\n\t\t\t\t\t\t[[groups:details.private_help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t<label class=\"form-check-label\">[[groups:details.hidden]]</label>\n\t\t\t\t\t<input class=\"form-check-input\" name=\"hidden\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t\t\t<p class=\"form-text text-xs m-0\">\n\t\t\t\t\t\t[[groups:details.hidden_help]]\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t<label class=\"form-check-label\">[[groups:details.disableJoinRequests]]</label>\n\t\t\t\t\t<input class=\"form-check-input\" name=\"disableJoinRequests\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t<label class=\"form-check-label\">[[groups:details.disableLeave]]</label>\n\t\t\t\t\t<input class=\"form-check-input\" name=\"disableLeave\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['disableLeave'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-lg-6\">\n\t\t\t\t<div class=\"d-flex gap-2 align-items-center\">\n\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t<label class=\"form-check-label\">[[groups:details.userTitleEnabled]]</label>\n\t\t\t\t\t\t<input class=\"form-check-input\" name=\"userTitleEnabled\" type=\"checkbox\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        " checked" :
        "") + 
      ">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"badge rounded-1 text-uppercase text-truncate rounded-1 " + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " hide") + 
      "\" style=\"max-width:150px; color: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
      "; background-color: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
      "\"><i class=\"fa " + 
      (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
        " " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
            " me-1" :
            "") :
        "") + 
      "\"></i><span class=\"badge-text\">" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) :
        "") + 
      "</span></span>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label text-xs text-muted\" for=\"userTitle\">[[groups:details.badge_text]]</label>\n\t\t\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t\t\t<input component=\"groups/userTitleOption\" class=\"form-control\" name=\"userTitle\" id=\"userTitle\" type=\"text\" maxlength=\"40\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['userTitleEscaped'] : null)) + 
      "\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " disabled") + 
      " />\n\t\t\t\t\t\t<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-outline-secondary text-nowrap\" data-action=\"icon-select\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
        "" :
        " disabled") + 
      ">[[groups:details.change_icon]]</button>\n\t\t\t\t\t\t<input type=\"hidden\" name=\"icon\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
        "") + 
      "\" />\n\t\t\t\t\t\t<div id=\"icons\" class=\"hidden\">\n\t\t\t\t\t\t\t<div class=\"icon-container\">\n\t\t\t\t\t\t\t\t<div class=\"row nbb-fa-icons\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon-container\">\r\n\t<div class=\"form-group\">\r\n\t\t<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\r\n\t</div>\r\n\t<div class=\"d-flex nbb-fa-icons flex-wrap\">\r\n\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n\t<p class=\"form-text text-center\">\r\n\t\tFor a full list of icons, please consult:\r\n\t\t<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\r\n\t</p>\r\n</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label text-xs text-muted\" for=\"labelColor\" class=\"badge-color-label\">[[groups:details.change_label_colour]]</label>\n\t\t\t\t\t<input class=\"form-control\" component=\"groups/userTitleOption\" type=\"color\" name=\"labelColor\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
        "") + 
      "\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<label class=\"form-label text-xs text-muted\" for=\"color\" class=\"badge-color-label\">[[groups:details.change_text_colour]]</label>\n\t\t\t\t\t<input class=\"form-control\" component=\"groups/userTitleOption\" type=\"color\" name=\"textColor\" value=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
        __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
        "") + 
      "\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<hr />\n\n\t\t<div class=\"mb-3\">\n\t\t\t<label class=\"form-label\" for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\n\t\t\t<div class=\"d-flex gap-1\">\n\t\t\t\t<div class=\"member-post-cids-selector\">\n\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\r\n\t<button type=\"button\" class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">\n        " + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\n        <span class=\"category-item d-inline-flex align-items-center gap-1\">\n            " + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\n            <span class=\"fw-semibold\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>\n        </span>\n        " :
        "\n        <i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          " text-primary\"></i>\n        <span class=\"visible-md-inline visible-lg-inline fw-semibold\">" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread_tools.select_category]]") + 
          "</span>\n        ") + 
      "\n    </span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu p-1 text-sm category-dropdown-menu\" role=\"menu\">\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n        <a class=\"dropdown-item rounded-1\" role=\"menu-item\">[[search:no-matches]]</a>\n    </li>\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\r\n</div>\n\t\t\t\t</div>\n\t\t\t\t<input id=\"memberPostCids\" type=\"text\" class=\"form-control form-control-sm\" value=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
      "\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<button class=\"btn btn-link text-danger float-end\" type=\"button\" data-action=\"delete\">[[groups:details.delete_group]]</button>\n\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save_changes]]</button>\n\t</form>\n</div>\n";
  }

  compiled.blocks = {
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<i class=\"fa fa-xl fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['style'] : null)) + 
          " fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['id'] : null)) + 
          " rounded-1\"></i>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n        <a class=\"dropdown-item rounded-1\" role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n            <span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n                <div class=\"category-item d-inline-flex align-items-center gap-1\">\n                    " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n                    " + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n                    " :
            "") + 
          "\n                    " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n                </div>\n            </span>\n        </a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

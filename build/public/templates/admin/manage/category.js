
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
    return "<div class=\"category acp-page-container\" data-cid=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\">\r\n\t<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\r\n\t\t<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0 d-flex justify-content-between align-items-center\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/categories:edit-category]]</h4>\r\n\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\r\n<button type=\"button\" class=\"btn-ghost-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\r\n\t<span component=\"category-selector-selected\">\r\n\t\t<span class=\"category-item d-inline-flex align-items-center gap-1\">\r\n\t\t" + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\r\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\r\n\t\t\t" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "\r\n\t\t" :
        "\r\n\t\t<i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i>\r\n\t\t" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread_tools.select_category]]") + 
          "\r\n\t\t") + 
      "\r\n\t\t</span>\r\n\t</span> <span class=\"caret\"></span>\r\n</button>\r\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\r\n\t<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\r\n</div>\r\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu p-1\" role=\"menu\">\r\n\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n\t\t<a class=\"dropdown-item rounded-1\" role=\"menu-item\">[[search:no-matches]]</a>\r\n\t</li>\r\n\t" + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-12 col-md-4 px-0 px-md-3 \">\r\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row m-0\">\r\n\t\t<div class=\"col-12 col-md-8 px-0\" id=\"category-settings\">\r\n\t\t\t<div class=\"category-settings-form\">\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-name\">\r\n\t\t\t\t\t\t[[admin/manage/categories:name]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-name\" type=\"text\" class=\"form-control\" data-name=\"name\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-description\">\r\n\t\t\t\t\t\t[[admin/manage/categories:description]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<textarea id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-description\" data-name=\"description\" class=\"form-control category_description description\" rows=\"4\" />" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['description'] : null)) + 
      "</textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-parentCid\">[[admin/manage/categories:parent-category]]</label>\r\n\t\t\t\t\t<div id=\"parent-category-selector\">\r\n\t\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left bottom-sheet\">\r\n<button type=\"button\" class=\"btn-ghost-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\r\n\t<span component=\"category-selector-selected\">\r\n\t\t<span class=\"category-item d-inline-flex align-items-center gap-1\">\r\n\t\t" + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\r\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\r\n\t\t\t" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "\r\n\t\t" :
        "\r\n\t\t<i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i>\r\n\t\t" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread_tools.select_category]]") + 
          "\r\n\t\t") + 
      "\r\n\t\t</span>\r\n\t</span> <span class=\"caret\"></span>\r\n</button>\r\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\r\n\t<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\r\n</div>\r\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu p-1\" role=\"menu\">\r\n\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n\t\t<a class=\"dropdown-item rounded-1\" role=\"menu-item\">[[search:no-matches]]</a>\r\n\t</li>\r\n\t" + 
      iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\r\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\r\n\t\t\t<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\r\n\t\t\t\t<div class=\"category-item d-inline-flex align-items-center gap-1\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\r\n\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</a>\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n</ul>\r\n</div>\r\n\t\t\t\t\t\t<input data-name=\"parentCid\" id=\"parent-cid\" class=\"hidden\" type=\"text\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['parentCid'] : null)) + 
      "\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-numRecentReplies\">\r\n\t\t\t\t\t\t[[admin/manage/categories:num-recent-replies]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-numRecentReplies\" type=\"text\" class=\"form-control\" placeholder=\"1\" data-name=\"numRecentReplies\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['numRecentReplies'] : null)) + 
      "\" style=\"max-width: 64px;\"/>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-subcategories-per-page\">\r\n\t\t\t\t\t\t[[admin/manage/categories:subcategories-per-page]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input id=\"cid-subcategories-per-page\" type=\"text\" class=\"form-control\" data-name=\"subCategoriesPerPage\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['subCategoriesPerPage'] : null)) + 
      "\" style=\"max-width: 64px;\"/>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-subcategories-per-page\">\r\n\t\t\t\t\t\t[[admin/settings/tags:tags-per-topic]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"d-flex gap-3 align-items-center\">\r\n\t\t\t\t\t\t<div class=\"d-flex gap-1 align-items-center\">\r\n\t\t\t\t\t\t\t<label for=\"cid-min-tags\">[[admin/admin:min]]</label>\r\n\t\t\t\t\t\t\t<input id=\"cid-min-tags\" type=\"text\" class=\"form-control\" data-name=\"minTags\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['minTags'] : null)) + 
      "\" style=\"max-width: 64px;\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex gap-1 align-items-center\">\r\n\t\t\t\t\t\t\t<label for=\"cid-max-tags\">[[admin/admin:max]]</label>\r\n\t\t\t\t\t\t\t<input id=\"cid-max-tags\" type=\"text\" class=\"form-control\" data-name=\"maxTags\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['maxTags'] : null)) + 
      "\" style=\"max-width: 64px;\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"tag-whitelist\">[[admin/manage/categories:tag-whitelist]]</label>\r\n\t\t\t\t\t<input id=\"tag-whitelist\" type=\"text\" class=\"form-control\" data-name=\"tagWhitelist\" value=\"\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex flex-column\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-link\">\r\n\t\t\t\t\t\t[[admin/manage/categories:ext-link]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-link\" type=\"text\" class=\"form-control\" placeholder=\"http://domain.com\" data-name=\"link\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['link'] : null)) + 
      "\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<div class=\"form-check form-switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"cid-isSection\" data-name=\"isSection\" " + 
      (guard((context != null && context['category'] != null) ? context['category']['isSection'] : null) ?
        "checked" :
        "") + 
      " />\r\n\t\t\t\t\t\t<label for=\"cid-isSection\" class=\"form-check-label\">[[admin/manage/categories:is-section]]</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['postQueueEnabled'] : null) ?
        "\r\n\t\t\t\t<div class=\"mb-3\">\r\n\t\t\t\t\t<div class=\"form-check form-switch\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"postQueue\" data-name=\"postQueue\" " + 
          (guard((context != null && context['category'] != null) ? context['category']['postQueue'] : null) ?
            "checked" :
            "") + 
          " />\r\n\t\t\t\t\t\t<label for=\"postQueue\" class=\"form-check-label\">[[admin/manage/categories:post-queue]]</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t<hr/>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex flex-column\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"category-image\">\r\n\t\t\t\t\t\t[[admin/manage/categories:image-and-icon]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<div class=\"d-flex gap-2 align-items-center\">\r\n\t\t\t\t\t\t<div component=\"category/preview\" class=\"category-preview rounded-1 d-flex align-items-center justify-content-center pointer\"\r\n\t\t\t\t\t\tdata-bs-toggle=\"tooltip\" title=\"[[admin/admin:select-icon]]\"\r\n\t\t\t\t\t\tstyle=\"\r\n\t\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null) ?
        "background-image: url(" + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null)) + 
          ");" :
        "") + 
      "\r\n\t\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null) ?
        "background-color: " + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null)) + 
          ";" :
        "") + 
      "\r\n\t\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null) ?
        "background-size: " + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null)) + 
          ";" :
        "") + 
      "\r\n\t\t\t\t\t\t\tcolor: " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['color'] : null)) + 
      ";\r\n\t\t\t\t\t\t\twidth: 40px; height: 40px; font-size: 20px;\r\n\t\t\t\t\t\t\">\r\n\t\t\t\t\t\t\t<div class=\"icon\">\r\n\t\t\t\t\t\t\t\t<i data-name=\"icon\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      "\" class=\"fa " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      "\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<input id=\"category-image\" type=\"text\" class=\"form-control flex-1\" placeholder=\"[[admin/manage/categories:category-image]]\" data-name=\"backgroundImage\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null)) + 
      "\" />\r\n\t\t\t\t\t\t<button type=\"button\" data-cid=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn btn-light upload-button\">[[admin/manage/categories:upload]]</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-light delete-image\">\r\n\t\t\t\t\t\t\t<i data-name=\"icon\" value=\"fa-times\" class=\"fa fa-trash text-danger\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label align-self-center\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-bgColor\">\r\n\t\t\t\t\t\t[[admin/manage/categories:bg-color]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<!-- added this to match the height of other blocks -->\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control invisible\" style=\"width: 0px;\">\r\n\t\t\t\t\t<input type=\"color\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-bgColor\" placeholder=\"#0059b2\" data-name=\"bgColor\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null)) + 
      "\" class=\"form-control category_bgColor p-1 h-auto align-self-stretch\" style=\"max-width: 64px;\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label align-self-center\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-color\">\r\n\t\t\t\t\t\t[[admin/manage/categories:text-color]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<!-- added this to match the height of other blocks -->\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control invisible\" style=\"width: 0px;\">\r\n\t\t\t\t\t<input type=\"color\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-color\" placeholder=\"#ffffff\" data-name=\"color\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['color'] : null)) + 
      "\" class=\"form-control category_color p-1 h-auto align-self-stretch\" style=\"max-width: 64px;\" />\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-imageClass\">\r\n\t\t\t\t\t\t[[admin/manage/categories:bg-image-size]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<select id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-imageClass\" class=\"form-select w-auto\" data-name=\"imageClass\" data-value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null)) + 
      "\">\r\n\t\t\t\t\t\t<option value=\"auto\">auto</option>\r\n\t\t\t\t\t\t<option value=\"cover\">cover</option>\r\n\t\t\t\t\t\t<option value=\"contain\">contain</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"mb-3 d-flex flex-column justify-content-between\">\r\n\t\t\t\t\t<label class=\"form-label\" for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-class\">\r\n\t\t\t\t\t\t[[admin/manage/categories:custom-class]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input list=\"customClasses\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-class\" type=\"text\" class=\"form-control\" placeholder=\"" + 
      (guard((context != null && context['customClasses'] != null) ? context['customClasses']['length'] : null) ?
        compiled.blocks['customClasses'](helpers, context, guard, iter, helper) :
        "col-md-6 col-6") + 
      "\" data-name=\"class\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['class'] : null)) + 
      "\" />\r\n\t\t\t\t\t<datalist id=\"customClasses\">\r\n\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['customClasses'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<option>" + 
          __escape(guard(value)) + 
          "</option>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\r\n\t\t\t\t\t</datalist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-12 col-md-4 px-0 px-md-3 options acp-sidebar\">\r\n\t\t\t<div class=\"p-2 d-flex flex-column text-bg-light border rounded-1 gap-1\">\r\n\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/categories\" class=\"btn-ghost-sm justify-content-start\"><i class=\"fa fa-fw fa-chevron-left text-primary\"></i> [[admin/manage/categories:back-to-categories]]</a>\r\n\r\n\t\t\t\t<hr class=\"my-1\"/>\r\n\r\n\t\t\t\t<button class=\"btn-ghost-sm justify-content-start copy-settings\">\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-files-o text-primary\"></i> [[admin/manage/categories:copy-settings]]\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t<a class=\"btn-ghost-sm justify-content-start\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/categories/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "/analytics\"><i class=\"fa fa-fw fa-chart-simple text-primary\"></i> [[admin/manage/categories:analytics]]</a>\r\n\r\n\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/privileges/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn-ghost-sm justify-content-start\">\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-primary\"></i> [[admin/manage/categories:privileges]]\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn-ghost-sm justify-content-start\">\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-eye text-primary\"></i> [[admin/manage/categories:view-category]]\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<hr class=\"my-1\"/>\r\n\r\n\t\t\t\t<button data-action=\"toggle\" data-disabled=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['disabled'] : null)) + 
      "\" class=\"btn-ghost-sm justify-content-start\">\r\n\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['disabled'] : null) ?
        "\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-check text-success\"></i>\r\n\t\t\t\t\t<span class=\"label\">[[admin/manage/categories:enable]]</span>\r\n\t\t\t\t\t" :
        "\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-ban text-danger\"></i>\r\n\t\t\t\t\t<span class=\"label\">[[admin/manage/categories:disable]]</span>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t<button class=\"btn-ghost-sm purge justify-content-start\">\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-trash text-danger\"></i> [[admin/manage/categories:purge]]\r\n\t\t\t\t</button>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\r\n\t\t<a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\r\n\t\t\t<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\r\n\t\t\t\t<div class=\"category-item d-inline-flex align-items-center gap-1\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\r\n\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</a>\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'customClasses': function customClasses(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customClasses'] : null), function each(key0, index, length, value) {
        var key = key0;
        return (index === 0 ?
            __escape(guard(value)) :
            "");
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

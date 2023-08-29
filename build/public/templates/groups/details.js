
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
    return "<div component=\"groups/container\" class=\"groups details\">\n\t<div class=\"cover position-absolute start-0 top-0\" component=\"groups/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:position'] : null)) + 
      ";\">\n\t\t<div class=\"container\">\n\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n\t\t\t<div class=\"controls text-center\">\n\t\t\t\t<span class=\"upload p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-upload\"></i></span>\n\t\t\t\t<span class=\"resize p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-arrows\"></i></span>\n\t\t\t\t<span class=\"remove p-2 m-2 rounded-1 text-bg-light opacity-75\"><i class=\"fa fa-fw fa-times\"></i></span>\n\t\t\t</div>\n\t\t\t<div class=\"save text-bg-primary\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n\t\t\t<div class=\"indicator text-bg-primary\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\n\t<div class=\"d-flex flex-column flex-md-row justify-content-md-between pb-4 mb-4 mt-2 border-bottom\">\n\t\t<div class=\"d-flex flex-column mt-1\">\n\t\t\t<div class=\"d-flex align-items-center gap-2\">\n\t\t\t\t<h3 class=\"mb-0\">" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "</h3>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex gap-2\">\n\t\t\t\t" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['descriptionParsed'] : null)) + 
      "\n\t\t\t\t<div>\n\t\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        "<span class=\"badge text-bg-light border border-1\">[[groups:details.private]]</span>" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        "<span class=\"badge text-bg-light border border-1\">[[groups:details.hidden]]</span>" :
        "") + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t\t" + 
          __escape(helper(context, helpers, 'membershipBtn', [guard((context != null) ? context['group'] : null)])) + 
          "\n\t\t\t" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['nameEncoded'] : null)) + 
          "\" target=\"_blank\" class=\"btn btn-light\"><i class=\"fa fa-gear\"></i> [[user:edit]]</a>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n\n\t<div class=\"d-flex flex-column flex-md-row\">\n\t\t<div data-widget-area=\"left\">\n\t\t\t" + 
      compiled.blocks['widgets.left'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t\t<div class=\"flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200\">\n\t<div class=\"nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1\" style=\"top: 1rem; z-index: 1;\">\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-posts\" class=\"btn-ghost fw-semibold " + 
      (guard((context != null && context['template'] != null) ? context['template']['groups/details'] : null) ?
        "active" :
        "") + 
      "\">\n\t\t\t<div class=\"flex-grow-1\">[[global:posts]]</div>\n\t\t</button>\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-members\" class=\"btn-ghost fw-semibold\">\n\t\t\t<div class=\"flex-grow-1\">[[groups:members]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['memberCount'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null) ? context['group']['memberCount'] : null)])) + 
      "</span>\n\t\t</button>\n\n\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-pending\" class=\"btn-ghost fw-semibold\">\n\t\t\t<div class=\"flex-grow-1\">[[groups:details.pending]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null && context['group']['group'] != null && context['group']['group']['pending'] != null) ? context['group']['group']['pending']['length'] : null)])) + 
          "</span>\n\t\t</button>\n\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-invited\" class=\"btn-ghost fw-semibold\">\n\t\t\t<div class=\"flex-grow-1\">[[groups:details.invited]]</div>\n\t\t\t<span class=\"flex-shrink-0 text-xs\" title=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['group'] != null && context['group']['group'] != null && context['group']['group']['invited'] != null) ? context['group']['group']['invited']['length'] : null)])) + 
          "</span>\n\t\t</button>\n\n\t\t<button data-bs-toggle=\"tab\" data-bs-target=\"#groups-admin\" class=\"btn-ghost fw-semibold\">\n\t\t\t<div class=\"flex-grow-1\">[[global:header.admin]]</div>\n\t\t</button>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n\n\n\t\t<div class=\"flex-grow-1 ps-md-2 ps-lg-5\" style=\"min-width:0;\">\n\t\t\t<div class=\"tab-content\">\n\t\t\t\t<div class=\"tab-pane fade show active\" id=\"groups-posts\" role=\"tabpanel\">\n\t\t\t\t\t<h3 class=\"fw-semibold fs-5 mb-0\">[[global:posts]]</h3>\n\t\t\t\t\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n\t\t\t\t\t<div class=\"alert alert-info\">[[groups:details.has_no_posts]]</div>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t<ul component=\"posts\" class=\"posts-list list-unstyled\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\n\t<i class=\"fa fa-refresh fa-spin\"></i>\n</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tab-pane fade\" id=\"groups-members\" role=\"tabpanel\">\n\t\t\t\t\t<h3 class=\"fw-semibold fs-5 mb-3\">[[groups:details.members]]</h3>\n\n\t\t\t\t\t<div class=\"d-flex " + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "justify-content-between" :
        "justify-content-end") + 
      " mb-3\">\n\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n\t<div class=\"flex-shrink-0\">\n\t\t<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary btn-sm me-3\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i> [[groups:details.add-member]]</button>\n\t</div>\n\t" :
        "") + 
      "\n\t<div class=\"\">\n\t\t<div class=\"input-group\">\n\t\t\t<input class=\"form-control form-control-sm\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n\t\t\t<button class=\"btn btn-primary btn-sm search-button\" type=\"button\">\n\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n\n<div component=\"groups/members\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\" class=\"mb-5\" style=\"max-height: 500px; overflow: auto;\">\n\t<table class=\"table table-hover\">\n\t\t<tbody>\n\t\t\t" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n\t\t</tbody>\n\t</table>\n</div>\n\t\t\t\t</div>\n\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n\t\t\t\t<div class=\"tab-pane fade\" id=\"groups-pending\" role=\"tabpanel\">\n\t\t\t\t\t<h3 class=\"fw-semibold fs-5 mb-3\">[[groups:details.pending]]</h3>\n\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "\n<div class=\"d-flex justify-content-end gap-2 mb-3\">\n\t<button class=\"btn btn-danger btn-sm\" data-action=\"rejectAll\">[[groups:pending.reject_all]]</button>\n\t<button class=\"btn btn-success btn-sm\" data-action=\"acceptAll\">[[groups:pending.accept_all]]</button>\n\n</div>\n" :
            "") + 
          "\n\n<div style=\"max-height: 500px;overflow: auto;\">\n\t<table component=\"groups/pending\" class=\"table table-hover\">\n\t" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "" :
            "\n\t<div class=\"alert alert-info\">[[groups:pending.none]]</div>\n\t") + 
          "\n\t" + 
          compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
          "\n\t</table>\n</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"tab-pane fade\" id=\"groups-invited\" role=\"tabpanel\">\n\t\t\t\t\t<h3 class=\"fw-semibold fs-5 mb-3\">[[groups:details.invited]]</h3>\n\t\t\t\t\t<label class=\"text-xs text-muted\">[[groups:invited.search]]</label>\n<div class=\"input-group mb-2\">\n\t<input class=\"form-control\" type=\"text\" component=\"groups/members/invite\"/>\n\t<span class=\"input-group-text search-button\"><i class=\"fa fa-search\"></i></span>\n</div>\n\n<div class=\"mb-2\">\n\t<label class=\"text-xs text-muted\">[[groups:bulk-invite-instructions]]</label>\n\t<textarea class=\"form-control\" component=\"groups/members/bulk-invite\"></textarea>\n</div>\n\n<div class=\"mb-2 clearfix\">\n\t<button type=\"button\" class=\"btn btn-primary btn-sm float-end\" component=\"groups/members/bulk-invite-button\">[[groups:bulk-invite]]</button>\n</div>\n\n<div style=\"max-height: 500px; overflow: auto;\">\n\t<table component=\"groups/invited\" class=\"table table-hover\">\n\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
            "" :
            "\n\t\t<div class=\"alert alert-info\">[[groups:invited.none]]</div>\n\t\t") + 
          "\n\t\t" + 
          compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
          "\n\t</table>\n</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"tab-pane fade\" id=\"groups-admin\" role=\"tabpanel\">\n\t\t\t\t\t<h3 class=\"fw-semibold fs-5 mb-3\">[[groups:details.owner_options]]</h3>\n\t\t\t\t\t<div class=\"options\">\n\t<form component=\"groups/settings\" role=\"form\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 col-lg-6\">\n\t\t\t\t<div class=\"mb-3\">\n\t\t\t\t\t<label class=\"form-label\" for=\"name\">[[groups:details.group_name]]</label>\n\t\t\t\t\t<input " + 
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
          "\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<button class=\"btn btn-link text-danger float-end\" type=\"button\" data-action=\"delete\">[[groups:details.delete_group]]</button>\n\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save_changes]]</button>\n\t</form>\n</div>\n\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div data-widget-area=\"right\">\n\t\t\t" + 
      compiled.blocks['widgets.right'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'widgets.left': function widgetsleft(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['left'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['left'] != null && context['widgets']['left'][key0] != null) ? context['widgets']['left'][key0]['html'] : null) + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<hr/>\n<a class=\"topic-title fw-semibold fs-5 mb-3 text-reset text-break\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\n    " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "<i class=\"fa fa-book text-muted\" title=\"[[topic:topic]]\"></i> " :
            "") + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "\n</a>\n<li component=\"post\" class=\"posts-list-item  " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"post-body d-flex flex-column gap-1\">\n        <div class=\"d-flex gap-3 post-info\">\n            <div class=\"post-author d-flex align-items-center gap-1\">\n                <a class=\"lh-1 text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "16px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
          "</a>\n                <a class=\"fw-semibold text-sm\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a>\n            </div>\n            <span class=\"timeago text-sm text-muted\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n        </div>\n\n        <div component=\"post/content\" class=\"content text-sm text-break\">\n            " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n        </div>\n    </div>\n</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr class=\"w-100\" data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\" data-isowner=\"" + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "1" :
            "0") + 
          "\">\n\t\t\t\t<td class=\"member-name p-2 w-100 \">\n\t\t\t\t\t<div class=\"d-flex align-items-center justify-content-between\">\n\t\t\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t\t\t<a class=\"align-text-top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t\t<i component=\"groups/owner/icon\" title=\"[[groups:owner]]\" class=\"user-owner-icon fa fa-star align-text-top text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n\t\t\t\t\t\t<div class=\"owner-controls d-flex gap-1\">\n\t\t\t\t\t\t\t<a class=\"btn btn-light btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star text-warning\"></i>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<a class=\"btn btn-light btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-ban text-danger\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\" class=\"align-middle\">\n\t\t<td class=\"member-name p-2 d-flex align-items-center justify-content-between\">\n\t\t\t<div class=\"d-flex gap-2\">\n\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\n\t\t\t</div>\n\t\t\t<div class=\"d-flex gap-2\">\n\t\t\t\t<button class=\"btn btn-danger btn-sm\" data-action=\"reject\">[[groups:pending.reject]]</a></li>\n\t\t\t\t<button class=\"btn btn-success btn-sm\" data-action=\"accept\">[[groups:pending.accept]]</a></li>\n\t\t\t</div>\n\t\t</td>\n\t</tr>\n\t";
      }, function alt() {
        return "";
      });
    },
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\" class=\"align-middle\">\n\t\t\t<td class=\"member-name p-2 d-flex align-items-center justify-content-between\">\n\t\t\t\t<div class=\"d-flex align-items-center gap-2\">\n\t\t\t\t\t<a class=\"text-decoration-none\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"btn btn-outline-secondary btn-sm text-nowrap\" data-action=\"rescindInvite\">[[groups:invited.uninvite]]</button>\n\t\t\t</td>\n\t\t</tr>\n\t\t";
      }, function alt() {
        return "";
      });
    },
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
    },
    'widgets.right': function widgetsright(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['right'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['right'] != null && context['widgets']['right'][key0] != null) ? context['widgets']['right'][key0]['html'] : null) + 
          "\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

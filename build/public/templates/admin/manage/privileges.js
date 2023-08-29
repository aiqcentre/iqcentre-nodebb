
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
    return "<div class=\"d-flex flex-column gap-2 px-lg-4\">\r\n\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/privileges:manage-privileges]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex gap-1\">\r\n\t\t\t<button id=\"discard\" class=\"btn btn-light btn-sm text-nowrap\" type=\"button\">\r\n\t\t\t\t<i class=\"fa fa-rotate-left text-danger\"></i> [[admin/manage/privileges:discard-changes]]\r\n\t\t\t</button>\r\n\r\n\t\t\t<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<form role=\"form\" class=\"category\">\r\n\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t[[admin/manage/categories:privileges.description]]\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t<div class=\"lead mb-3\">\r\n\t\t\t\t\t\t[[admin/manage/categories:privileges.category-selector]]\r\n\t\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group dropdown-left bottom-sheet\">\r\n<button type=\"button\" class=\"btn-ghost-sm dropdown-toggle\" data-bs-toggle=\"dropdown\">\r\n\t<span component=\"category-selector-selected\">\r\n\t\t<span class=\"category-item d-inline-flex align-items-center gap-1\">\r\n\t\t" + 
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
      "\r\n</ul>\r\n</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"privilege-table-container\">\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['cid'] : null) ?
        "\r\n\t\t\t\t\t\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table privilege-table text-sm\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\r\n\t\t\t\t\t\t\t\t\t<th class=\"privilege-filters\" colspan=\"100\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar justify-content-end gap-1\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"3,5\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-viewing]]</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"6,15\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-posting]]</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"16,18\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-moderation]]</button>\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"19,99\" class=\"btn btn-outline-secondary btn-sm\">[[admin/manage/categories:privileges.section-other]]</button>\r\n\t\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\r\n\t\t\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.labels.groups'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"search.group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyPrivilegesFrom\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyToChildren\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary text-nowrap\" data-ajaxify=\"false\" data-action=\"copyToAll\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<hr/>\r\n\r\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table privilege-table text-sm\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\r\n\t\t\t\t\t\t\t\t\t<th class=\"privilege-filters\" colspan=\"100\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"3,5\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"6,15\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"16,18\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\r\n\t\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"19,99\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\r\n\t\t\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\r\n\t\t\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.labels.users'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.user\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t" :
        "\r\n\t\t\t\t\t\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table privilege-table text-sm\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['isAdminPriv'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\r\n\t\t\t\t\t\t\t\t\t<th class=\"privilege-filters\" colspan=\"100\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"9,15\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"3,8\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"16,18\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"19,99\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\r\n\t\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\r\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['groups'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
              __escape(guard(value)) + 
              "</th>\r\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\r\n\t\t\t\t\t\t\t\t<tr data-group-name=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
              "\" data-private=\"" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
                "1" :
                "0") + 
              "\">\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t\t\t\t" + 
                  ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                    "\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-none\"></i>\r\n\t\t\t\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
              "\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\r\n\t\t\t\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null)])) + 
              "\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-text\">\r\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table privilege-table text-sm\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['isAdminPriv'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\r\n\t\t\t\t\t\t\t\t\t<th class=\"privilege-filters\" colspan=\"100\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar justify-content-end gap-1 flex-nowrap\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"9,15\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-viewing]]</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"3,8\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-posting]]</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"16,18\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-moderation]]</button>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"19,99\" class=\"btn btn-outline-secondary btn-sm text-nowrap\">[[admin/manage/categories:privileges.section-other]]</button>\r\n\t\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\r\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
              __escape(guard(value)) + 
              "</th>\r\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\r\n\t\t\t\t\t\t\t\t<tr data-uid=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
              "\"" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
                " data-banned" :
                "") + 
              ">\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null) ? context['privileges']['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "\r\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\r\n\t\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
              "\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- need this empty -->\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\r\n\t\t\t\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null)])) + 
              "\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar justify-content-end\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-ajaxify=\"false\" data-action=\"search.user\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
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
    'privileges.labels.groups': function privilegeslabelsgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard(value)) + 
          "</th>\r\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.groups': function privilegesgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t<tr data-group-name=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
          "\" data-private=\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "1" :
            "0") + 
          "\">\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t\t" + 
              ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                "\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-none\"></i>\r\n\t\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
          "\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToAllGroup\"><a class=\"dropdown-item\" href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToChildrenGroup\"><a class=\"dropdown-item\" href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyPrivilegesFromGroup\"><a class=\"dropdown-item\" href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-check text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input autocomplete=\"off\" type=\"checkbox\" class=\"form-check-input float-none checkbox-helper\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null)])) + 
          "\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.labels.users': function privilegeslabelsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard(value)) + 
          "</th>\r\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.users': function privilegesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
          "\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            " data-banned" :
            "") + 
          ">\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null) ? context['privileges']['users'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\r\n\t\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
          "\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- need this empty -->\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-check text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input autocomplete=\"off\" type=\"checkbox\" class=\"form-check-input float-none checkbox-helper\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null)])) + 
          "\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

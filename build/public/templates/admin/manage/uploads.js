
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
    return "<div class=\"acp-page-container px-lg-4\">\r\n\t<div class=\"d-flex border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center justify-content-between flex-wrap gap-2\">\r\n\t\t<div class=\"\">\r\n\t\t\t<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/uploads:manage-uploads]]</h4>\r\n\t\t</div>\r\n\t\t<div class=\"d-flex gap-1\">\r\n\r\n\t\t\t<button id=\"new-folder\" class=\"btn btn-light btn-sm\"><i class=\"fa fa-folder\"></i> [[admin/manage/uploads:new-folder]]</button>\r\n\r\n\t\t\t<button id=\"upload\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-upload\"></i> [[global:upload]]</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"\">\r\n\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\r\n<ol class=\"breadcrumb mb-0\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\t</div>\r\n\r\n\t<div class=\"table-responsive\">\r\n\t\t<table class=\"table\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>[[admin/manage/uploads:filename]]</th>\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['showPids'] : null) ?
        "<th class=\"text-end\">[[admin/manage/uploads:usage]]</th>" :
        "") + 
      "\r\n\t\t\t\t\t<th class=\"text-end\">[[admin/manage/uploads:size/filecount]]</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t" + 
      compiled.blocks['files'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\r\n\t<div component=\"pagination\" class=\"pagination-container mt-3" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\r\n\t<ul class=\"pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center\">\r\n\t\t<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t<li class=\"page-item next float-end " + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t" + 
      (guard((context != null && context['template'] != null) ? context['template']['topic'] : null) ?
        "" :
        "\r\n\t<ul class=\"pagination pagination-sm hidden-md hidden-lg justify-content-center\">\r\n\t\t<li class=\"page-item first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"page-item last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a class=\"page-link fw-secondary\"  href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n\t") + 
      "\r\n</div>\r\n</div>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\r\n\t\t\t<span class=\"fw-semibold\" itemprop=\"name\">" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "</span>\r\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'files': function files(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['files'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<tr data-path=\"" + 
          __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['path'] : null)) + 
          "\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['isDirectory'] : null) ?
            "\r\n\t\t\t\t\t<td class=\"align-middle\" role=\"button\">\r\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-folder-o\"></i> <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/manage/uploads?dir=" + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['path'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['name'] : null)) + 
              "</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t" + 
          (guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['isFile'] : null) ?
            "\r\n\t\t\t\t\t<td class=\"align-middle\">\r\n\t\t\t\t\t\t<i class=\"fa fa-fw fa-file-text-o\"></i> <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['url'] : null)) + 
              "\" target=\"_blank\">" + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['name'] : null)) + 
              "</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['showPids'] : null) ?
            "\r\n\t\t\t\t\t<td class=\"text-end align-middle\">\r\n\t\t\t\t\t\t" + 
              iter(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['inPids'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t\t<a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/post/" + 
                  __escape(guard(value)) + 
                  "\"><span class=\"label label-default\">" + 
                  __escape(guard(value)) + 
                  "</span></a>\r\n\t\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\r\n\t\t\t\t\t\t" + 
              (guard((context != null && context['files'] != null && context['files'][key0] != null && context['files'][key0]['inPids'] != null) ? context['files'][key0]['inPids']['length'] : null) ?
                "" :
                "\r\n\t\t\t\t\t\t<span class=\"label label-danger\">[[admin/manage/uploads:orphaned]]</span>\r\n\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t<td class=\"text-end align-middle\">" + 
          (guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['isFile'] : null) ?
            __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['sizeHumanReadable'] : null)) :
            "[[admin/manage/uploads:filecount, " + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['fileCount'] : null)) + 
              "]]") + 
          "</td>\r\n\r\n\t\t\t\t\t<td role=\"button\" class=\" text-end\">\r\n\t\t\t\t\t\t<button class=\"delete btn btn-sm btn-light " + 
          (guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['isFile'] : null) ?
            "" :
            " hidden") + 
          "\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-trash-o text-danger\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page-item page select-page\">\r\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a class=\"page-link rounded fw-secondary px-3\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})

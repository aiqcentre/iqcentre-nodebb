
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
    return "<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n\t<button class=\"btn-ghost-sm d-flex gap-2 dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-arrow-down-wide-short text-primary\"></i>\n\t\t<span class=\"visible-md-inline visible-lg-inline fw-semibold\">[[topic:sort_by]]</span>\n\t</button>\n\n\t<ul class=\"dropdown-menu p-1 text-sm\">\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:newest_to_oldest]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:oldest_to_newest]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_posts\" data-sort=\"most_posts\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:most_posts]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:most_votes]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t\t<li><a class=\"dropdown-item rounded-1 d-flex align-items-center gap-2\" href=\"#\" class=\"most_views\" data-sort=\"most_views\">\n\t\t\t<span class=\"flex-grow-1\">[[topic:most_views]]</span>\n\t\t\t<i class=\"flex-shrink-0 fa fa-fw text-muted\"></i>\n\t\t</a></li>\n\t</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

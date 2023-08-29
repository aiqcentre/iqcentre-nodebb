
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
    return "<table class=\"table markdown-reference\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Type</th>\n\t\t\t<th>… to Get</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">*Italic*</td>\n\t\t\t<td><em>Italic</em></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">**Bold**</td>\n\t\t\t<td><strong>Bold</strong></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t# Heading 1\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<h1 class=\"smaller-h1\">Heading 1</h1>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t## Heading 2\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<h2 class=\"smaller-h2\">Heading 2</h2>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t[Link](http://a.com)\n\t\t\t</td>\n\t\t\t<td><a href=\"https://commonmark.org/\">Link</a></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t![Image](http://url/a.png)\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<img src=\"/assets/logo.png\" width=\"auto\" height=\"36\" alt=\"NodeBB Logo\">\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t&gt; Blockquote\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<blockquote>Blockquote</blockquote>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t<p>\n\t\t\t\t\t* List<br>\n\t\t\t\t\t* List<br>\n\t\t\t\t\t* List\n\t\t\t\t</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>List</li>\n\t\t\t\t\t<li>List</li>\n\t\t\t\t\t<li>List</li>\n\t\t\t\t</ul>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t<p>\n\t\t\t\t\t1. One<br>\n\t\t\t\t\t2. Two<br>\n\t\t\t\t\t3. Three\n\t\t\t\t</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<ol>\n\t\t\t\t\t<li>One</li>\n\t\t\t\t\t<li>Two</li>\n\t\t\t\t\t<li>Three</li>\n\t\t\t\t</ol>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\tHorizontal rule:<br>\n\t\t\t\t<br>\n\t\t\t\t---\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\tHorizontal rule:\n\t\t\t\t<hr class=\"custom-hr\">\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t`Inline code` with backticks\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<code class=\"preformatted\">Inline code</code> with backticks\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"preformatted\">\n\t\t\t\t```<br>\n\t\t\t\t# code block<br>\n\t\t\t\tprint '3 backticks or'<br>\n\t\t\t\tprint 'indent 4 spaces'<br>\n\t\t\t\t```\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<pre class=\"code-block text-nowrap\">\n\t\t\t\t\t# code block\n\t\t\t\t\t<br> print '3 backticks or'\n\t\t\t\t\t<br> print 'indent 4 spaces'\n\t\t\t\t</pre>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})

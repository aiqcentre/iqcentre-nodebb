{{{ if config.enablePostReactions }}}
<span class="reactions" component="post/reactions" data-pid="{./pid}">
  <span class="reaction-add d-inline-block px-2 mx-1 btn-ghost-sm {{{ if ./maxReactionsReached }}}max-reactions{{{ end }}}" component="post/reaction/add" data-pid="{./pid}" title="[[reactions:add-reaction]]">
    <i class="fa fa-face-smile text-primary"></i>
  </span>
  {{{ each ./reactions }}}
    <span class="reaction {{{ if ./reacted }}}reacted{{{ end }}}" component="post/reaction" data-pid="{./pid}" data-reaction="{./reaction}">
	{./reactionImage}
	<small class="reaction-emoji-count" data-count="{./reactionCount}"></small>
</span>

  {{{ end }}}
</span>
{{{ end }}}
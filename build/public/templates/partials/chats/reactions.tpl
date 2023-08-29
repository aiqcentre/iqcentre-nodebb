{{{ if config.enableMessageReactions }}}
<div class="reactions {{{ if messages.deleted}}}hidden{{{ end }}}" component="message/reactions" data-mid="{messages.mid}">
	{{{ each messages.reactions }}}
	<span class="reaction mb-2 {{{ if ./reacted }}}reacted{{{ end }}}" component="message/reaction" data-mid="{./mid}" data-reaction="{./reaction}">
	{./reactionImage}
	<small class="reaction-emoji-count" data-count="{./reactionCount}"></small>
</span>

	{{{ end }}}
</div>
{{{ end }}}
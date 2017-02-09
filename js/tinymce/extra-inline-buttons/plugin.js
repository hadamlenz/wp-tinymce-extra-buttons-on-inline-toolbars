// JavaScript Document
jQuery( document ).on( 'tinymce-editor-init', function( event, editor ) {
	var wpview = editor.plugins.wpview;
	editor.addButton('embed_stacked', {
		title: 'Stacked Embed Layout',
		classes: 'embed_stacked',
		onclick: function(e){
			var node = editor.selection.getNode();
			var viewType = editor.dom.getAttrib( node, 'data-wpview-type' )
			if( editor.dom.hasClass( node, 'wpview' ) && viewType === 'embed' ){
				console.log(node);
				console.log(viewType);
			}
		}
	});

	editor.addButton('embed_sideByside', {
		title: 'Side by Side Embed Layout',
		classes: 'embed_sideByside',
		onclick: function(e){
			var node = editor.selection.getNode();
			var viewType = editor.dom.getAttrib( node, 'data-wpview-type' )
			if(editor.dom.hasClass( node, 'wpview' ) && viewType === 'embed' ){
				console.log(node);
				console.log(viewType);
			}
		}
	});
	if (editor.wp && editor.wp._createToolbar) {
		var toolbar = editor.wp._createToolbar([
			'wp_view_edit',
			'wp_view_remove',
			'embed_sideByside',
			'embed_stacked'
		]);
	}
	if (toolbar) {
		editor.on('wptoolbar', function (event) {
			if (editor.dom.hasClass(event.element, 'wpview')) {
				event.toolbar = toolbar;
			}
		});
	}
});
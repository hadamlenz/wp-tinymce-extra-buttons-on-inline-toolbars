// JavaScript Document
jQuery( document ).on( 'tinymce-editor-init', function( event, editor ) {
	//add your buttons here
	
	editor.addButton('embed_stacked', {
		title: 'Stacked Embed Layout',
		classes: 'embed_stacked',
		onclick: function(e){
			var node = editor.selection.getNode();
			var viewType = editor.dom.getAttrib( node, 'data-wpview-type' )
			if( editor.dom.hasClass( node, 'wpview' ) && viewType === 'embed' ){
				console.log(node);
				console.log(viewType);
				//this is where you add code to do something
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
				//this is where you add code to do something
			}
		}
	});
	
	//end adding buttons
	
	//this captures the two buttons that are there and adds the two new buttons from above
	if (editor.wp && editor.wp._createToolbar) {
		var toolbar = editor.wp._createToolbar([
			'wp_view_edit',
			'wp_view_remove',
			'embed_sideByside',
			'embed_stacked'
		]);
	}
	
	
	if (toolbar) {
		//this creates the toolbar, unsure if it over writes the old one
		editor.on('wptoolbar', function (event) {
			if (editor.dom.hasClass(event.element, 'wpview')) {
				event.toolbar = toolbar;
			}
		});
	}
});
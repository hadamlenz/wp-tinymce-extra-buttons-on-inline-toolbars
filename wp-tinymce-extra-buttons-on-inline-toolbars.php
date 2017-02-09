<?php
/*
  Plugin Name: Extra Buttons on TinyMCE Toolbars
  Plugin URI: https://github.com/hadamlenz/wp-tinymce-extra-buttons-on-inline-toolbars
  Description:  This is an example plugin to show how to add extra buttons on a toolbar in tinymce in the wordpress backend.  Do not use for production
  Author: H. Adam Lenz
  Version: 0.1
  Author URI:  http://hadamlenz.wordpress.com
 */


class Lenz_Tmce_Inline_Buttons{
	function __construct(){
		add_action( 'admin_init', array( $this, 'add_tinymce_plugins' ) );
		//add_action( 'admin_init', array( $this, 'add_editor_styles' ) );
		add_filter( 'admin_enqueue_scripts', array( $this,  'admin_scripts' ) );
	}
	
	//only add plugins for users who can edit posts
	public function add_tinymce_plugins(){
		if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
			return;
		if ( get_user_option('rich_editing') == 'true') {
			add_filter( 'mce_external_plugins', array( $this,'add_tinymce_plugin' ) );
		}
	}
	
	//attach the plugin js to the plugin array
	public function add_tinymce_plugin($plugin_array) {
		$plugin_array['extra_inline_buttons'] = plugins_url( '/js/tinymce/extra-inline-buttons/plugin.min.js', __FILE__ );
		return $plugin_array;
	}
	
	//add the button styles, this should work, but it doesn't, using the admin enqueue below
	public function add_editor_styles(){
		add_editor_style( plugins_url('/css/style.min.css', __FILE__ ));
	}
	
	//add the button styles
	public function admin_scripts(){
		wp_enqueue_style('embed', plugins_url('/css/style.min.css', __FILE__ ),array(), '0.1','screen' );
	}
}

new Lenz_Tmce_Inline_Buttons();
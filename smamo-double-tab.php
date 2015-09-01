<?php

/*
    Plugin name: SmartMonkey Double Tab
    Description: Super simpel js plugin, som gennemtvinger dobbelt klik på overmenupunkter på tablets. Antager standard WP markup.
    Version: 1.0
*/

add_action('init','smamo_double_tab_load');

function smamo_double_tab_load(){
    wp_enqueue_script('smamo-double-tab',plugins_url( 'doubleTab.min.js', __FILE__ ),array('jquery'),'1.0',true);

}
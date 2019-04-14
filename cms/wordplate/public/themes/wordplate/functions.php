<?php

declare(strict_types=1);

// Register plugin helpers.
require template_path('includes/plugins/plate.php');


require get_template_directory().'/post-types/branch.php';
require get_template_directory().'/post-types/activity.php';
require get_template_directory().'/post-types/story.php';
require get_template_directory().'/post-types/project.php';

require get_template_directory().'/inc/activities-search.php';

add_action('init', 'my_rem_editor_from_post_type');
function my_rem_editor_from_post_type() {
    remove_post_type_support( 'activity', 'editor' );
    remove_post_type_support( 'branch', 'editor' );
    remove_post_type_support( 'story', 'editor' );
    remove_post_type_support( 'project', 'editor' );
}

add_theme_support('plate-disable-menu', [
    'edit-comments.php', // comments
    'index.php', // dashboard
    'upload.php', // media
    'edit.php?post_type=page', // Custom post type
    'tools.php?page=wp-migrate-db', // Plugin in Tools
    'options-general.php?page=menu_editor', // Plugin in Settings
    'admin.php?page=theseoframework-settings', // Plugin in menu root
]);
// Set theme defaults.
add_action('after_setup_theme', function () {
    // Disable the admin toolbar.
    show_admin_bar(false);

    // Add post thumbnails support.
    add_theme_support('post-thumbnails');

    // Add title tag theme support.
    add_theme_support('title-tag');

    // Add HTML5 theme support.
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'widgets',
    ]);

    // Register navigation menus.
    register_nav_menus([
        'navigation' => __('Navigation', 'wordplate'),
    ]);
});

// Enqueue and register scripts the right way.
add_action('wp_enqueue_scripts', function () {
    wp_deregister_script('jquery');

    // wp_enqueue_style('wordplate', mix('styles/app.css'));

    // wp_register_script('wordplate', mix('scripts/app.js'), '', '', true);
    // wp_enqueue_script('wordplate');
});

// Remove JPEG compression.
add_filter('jpeg_quality', function () {
    return 100;
}, 10, 2);

add_filter('graphql_branch_fields', function ($fields) {
    $fields['location'] = [
        'type' => \WPGraphQL\Types::string(),
        'resolve' => function ($post) {
            $field = get_field('location', $post->ID);
            return !empty($field) ? $field : null;
        },
    ];

    return $fields;
});

add_filter('graphql_branch_fields', function ($fields) {
    $fields['header_image'] = [
        'type' => \WPGraphQL\Types::string(),
        'resolve' => function ($post) {
            $field = get_field('header_image', $post->ID);
            return !empty($field) ? $field : null;
        },
    ];

    return $fields;
});

/**
 * Add REST API support to an already registered post type.
 */
add_filter( 'register_post_type_args', 'my_branch_type_args', 10, 2 );

function my_branch_type_args( $args, $post_type ) {

    if ( 'branch' === $post_type ) {
        $args['show_in_rest'] = true;

        // Optionally customize the rest_base or rest_controller_class
        $args['rest_base']             = 'branches';
        $args['rest_controller_class'] = 'WP_REST_Posts_Controller';
    }

    return $args;
}

add_filter( 'register_post_type_args', 'my_story_type_args', 10, 2 );

function my_story_type_args( $args, $post_type ) {

    if ( 'story' === $post_type ) {
        $args['show_in_rest'] = true;

        // Optionally customize the rest_base or rest_controller_class
        $args['rest_base']             = 'stories';
        $args['rest_controller_class'] = 'WP_REST_Posts_Controller';
    }

    return $args;
}

add_filter( 'register_post_type_args', 'my_activity_type_args', 10, 2 );

function my_activity_type_args( $args, $post_type ) {

    if ( 'activity' === $post_type ) {
        $args['show_in_rest'] = true;

        // Optionally customize the rest_base or rest_controller_class
        $args['rest_base']             = 'activities';
        $args['rest_controller_class'] = 'WP_REST_Posts_Controller';
    }

    return $args;
}

add_filter( 'register_post_type_args', 'my_project_type_args', 10, 2 );

function my_project_type_args( $args, $post_type ) {

    if ( 'project' === $post_type ) {
        $args['show_in_rest'] = true;

        // Optionally customize the rest_base or rest_controller_class
        $args['rest_base']             = 'projects';
        $args['rest_controller_class'] = 'WP_REST_Posts_Controller';
    }

    return $args;
}

let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copyDirectory('resources/assets/bower_components/lms-css-hungph', 'public/assets');

mix.copyDirectory('resources/assets/bower_components/lms-js-hungph', 'public/assets');

mix.copyDirectory('resources/assets/bower_components/lms', 'public/assets/admin');

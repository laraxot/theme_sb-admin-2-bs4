const mix = require('laravel-mix');

require('laravel-mix-merge-manifest');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 https://github.com/xgenem/sb-admin-laravel/blob/master/webpack.mix.js
 https://github.com/Atnic/laravel-sb-admin-2/blob/master/webpack.mix.js
 https://github.com/laravel-frontend-presets/laravel-preset-bootstrap4/blob/master/src/bootstrap4-stubs/webpack.mix.js
 https://github.com/start-laravel/sb-admin-laravel-5/blob/master/gulpfile.js
 https://github.com/laraning/nova-time-field/blob/master/webpack.mix.js

 https://stackoverflow.com/questions/54205925/url-rewriting-generate-wrong-urls-in-compiled-css-file-in-laravel-application?rq=1
 https://gist.github.com/karlhillx/5e3bb4892fe18b61b644798751c7ba35
 https://scotch.io/tutorials/using-font-awesome-5-with-react !! per icone
 https://laravel-mix.com/docs/4.1/workflow
 https://pusher.com/tutorials/getting-started-laravel-mix-frontend
 */
 /* */
mix.autoload({
	jquery: ['$', 'window.jQuery', 'jQuery'],
	tether: ['window.Tether', 'Tether'],
	'tether-shepherd': ['Shepherd'],
	'popper.js/dist/popper.js': ['Popper'],
	moment: 'moment' // only one
});
/*
mix.js(['resources/js/app.js'], 'public/js/ostregheta.js')
	.sass('resources/sass/app.scss', 'public/css/uno.css');
*/
/*
mix.js(['resources/js/app1.js'], 'public/js/due.js')
	.styles(['resources/css/app1.css'], 'public/css/due.css');

mix.combine([
	'resources/js/app.js',
	'resources/js/app1.js'
	],
	'public/js/merged.js'
	);


*/
/*
mix.setPublicPath('dist')
   .js(['resources/js/app.js'], 'js/app.js')
   .sass('resources/sass/app.scss', 'css/app.css')
   ;
*/

var base_src  = 'resources';
var base_dest = 'dist';
mix.setResourceRoot('/themes/sb-admin-2-bs4'); //percorso
mix.js('resources/js/app.js', 'dist/js/app.js')
	.scripts([
        'dist/js/app.js',
        //'js/foodpicky.js',
        'resources/js/lighbox.js',
        'resources/js/modal_ajax.js',
        'resources/js/btnDeleteX2.js',
        'js/sb-admin-2.js',
        'js/xot1.js',
    ], 'dist/js/app.js')
   .sass('resources/sass/app.scss', 'dist/css/app.css')
   .styles([
        'dist/css/app.css',
        'resources/css/lighbox.css',
        'css/xot.css',
        //'css/style.css'
        //'vendor/fontawesome-free/css/all.min.css',
        'css/sb-admin-2.min.css',
        ],'dist/css/app.css')
   //.combine(['dist/css/app.css','dist/css/all.css'],'dist/css/app.css')
   ;
   //mix.copyDirectory('node_modules/font-awesome/fonts', 'public/fonts/font-awesome');

//mix.setPublicPath('../../').mergeManifest();
//mix.extract();
//mix.setPublicPath('public');
//mix.setResourceRoot('../');
/*
mix.styles([
	'public/css/vendor/normalize.css',
	'public/css/vendor/videojs.css'
	], 'public/css/all.css');
	*/
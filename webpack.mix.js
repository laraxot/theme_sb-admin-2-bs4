<<<<<<< HEAD
const mix = require('laravel-mix');
require('dotenv').config({
    path: __dirname + '/../../../../.env'
});

require('laravel-mix-polyfill');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    moment: 'moment' // only one
});

mix.js('Resources/js/app.js', 'dist/js')
    .sass('Resources/sass/app.scss', 'dist/css');


mix.extract(['jquery']);

mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: { "firefox": "50", "ie": 11 }
});


var $prefix = '../../../../';
var $suffix = '/themes/sb-admin-2-bs4'
var $resource_root = $prefix + $suffix;
var $public_path = $prefix + process.env.MIX_PUBLIC_FOLDER + $suffix;

console.log('public_path :' + $public_path);
console.log('dirname :' + __dirname);
=======
const mix = require('laravel-mix');
require('dotenv').config({
    path: __dirname + '/../../../../.env'
});

require('laravel-mix-polyfill');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    moment: 'moment' // only one
});

mix.js('Resources/js/app.js', 'dist/js')
    .sass('Resources/sass/app.scss', 'dist/css');


mix.extract(['jquery']);

mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: { "firefox": "50", "ie": 11 }
});


var $prefix = '../../../../';
var $suffix = '/themes/sb-admin-2-bs4'
var $resource_root = $prefix + $suffix;
var $public_path = $prefix + process.env.MIX_PUBLIC_FOLDER + $suffix;

console.log('public_path :' + $public_path);
console.log('dirname :' + __dirname);
>>>>>>> 7acc7b40bfadbdb97addbca0d76889ee2eeeba7f
$res = mix.copyDirectory(__dirname + '/dist', $public_path + '/dist');
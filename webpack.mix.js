let mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.options({
 	purifyCss: false,
});

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    tether: ['window.Tether', 'Tether'],
	'tether-shepherd': ['Shepherd'],
	'popper.js/dist/popper.js': ['Popper'],
  	sweetalert2:['Swal'],
  	'magnific-popup':['magnificPopup'],
  	'multiselect-two-sides':['multiselect'],
    moment: 'moment' // only one
});

var src = 'resources'; 
var dest = 'dist'; 
 
mix.js(src+'/js/auth.js', dest+'/js')
	.sass(src+'/sass/auth.scss', dest+'/css',{ outputStyle: 'expanded' });
  
mix.js(src+'/js/app.js', dest+'/js')
   .sass(src+'/sass/app.scss', dest+'/css');

mix.extract([
   'jquery', 'raphael',
    //    'datatables.net', 'datatables.net-bs', 'datatables.net-responsive', 'datatables.net-responsive-bs',
   'vue', 'axios'
]);
mix.version();

mix.setResourceRoot('../')
	.setPublicPath(dest)
  //.webpackConfig(Object.assign(webpack))
  //.sourceMaps()
  .polyfill({
      enabled: true,
      useBuiltIns: "usage",
      targets: {"firefox": "50", "ie": 11}
   })
 ;

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
window.Vuetify = require('vuetify');
window.VApp = require('vuetify/es5/components/VApp');
/*

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});
*/

/*
import Vuetify from 'vuetify';
import VApp from 'vuetify/es5/components/VApp';
*/
Vue.use(Vuetify, { components: { VApp } });

/*
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const opts = {};
Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(opts)
}).$mount('#app');
*/
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('date-component', require('./components/DateComponent.vue').default);
Vue.component('rating-component', require('./components/RatingComponent.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
/*
const app = new Vue({
    el: '#app',
});
//*/
//*
new Vue({
  Vuetify,
}).$mount('#app');
//*/
// ES6 Modules or TypeScript
//import Swal from 'sweetalert2'

// CommonJS
var pub_res='.';
//require('./sb-admin-2.js');
require('./lighbox.js'); //magnificPopup is not a function
require('./modal_ajax.js');
require('./btnDeleteX2.js');
require('./flatpickr.js');
//import './sb-admin-2.js';
require('./typeahead_js.js');
require('./html5imageupload.js');

require('./xot.js');
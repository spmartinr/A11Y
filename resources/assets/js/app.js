
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap'); - This throws a 404 error, research.

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

let allyheader = require('./components/allyheader.vue');
let allyfooter = require('./components/allyfooter.vue');
let allyaccordion = require('./components/allyaccordion.vue');
let allymodal = require('./components/allymodal.vue');
let allyspinner = require('./components/allyspinner.vue');


const app = new Vue({
    el: '#app',

    components:{allyheader,allyfooter,allyspinner,allymodal,allyaccordion}


});

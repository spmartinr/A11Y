
require('./bootstrap'); // Working

window.Vue = require('vue');

import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
let allyheader = require('./components/allyheader.vue');
let allyfooter = require('./components/allyfooter.vue');
let allyaccordion = require('./components/allyaccordion.vue');
let allymodal = require('./components/allymodal.vue');
let allyspinner = require('./components/allyspinner.vue');
let allyhero = require('./components/allyhero.vue');

// Routes
let home = require('./components/home.vue');
let about = require('./components/about.vue');
let project0 = require('./components/project0.vue');
let project1 = require('./components/project1.vue');
let project2 = require('./components/project2.vue');


const routes = [
	{ path: '/home', component: home },
	{ path: '/about', component: about }
]

const router = new VueRouter({
	mode: 'history', // gets rid of the # in the URL on route change
	routes // short for 'routes: routes'
})

const app = new Vue({
    el: '#app',

    router,

    components:{
    	allyheader,
    	allyfooter,
    	allyspinner,
    	allymodal,
    	allyaccordion,
    	allyhero
    }
});

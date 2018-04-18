
// Enable Dependencies
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

import VueRouter from 'vue-router';

import { focus } from 'vue-focus';

Vue.use(VueRouter);

// Defined Components
let allyheader = require('./components/allyheader.vue');
let allyfooter = require('./components/allyfooter.vue');
let allyhero = require('./components/allyhero.vue');

// Defined Routes
let accessibility = require('./components/accessibility.vue');
let development = require('./components/development.vue');
let management = require('./components/management.vue');
let peers = require('./components/peers.vue');
let realestate = require('./components/realestate.vue');
let automotive = require('./components/automotive.vue');
let hiking = require('./components/hiking.vue');
let contact = require('./components/contact.vue');
let section = require('./components/section.vue');
let CVAA = require('./components/CVAA.vue');
let WCAG = require('./components/WCAG.vue');
let office = require('./components/office.vue');
let accordion = require('./components/accordion.vue');
let modal = require('./components/modal.vue');
let spinner = require('./components/spinner.vue');
let alerts = require('./components/alerts.vue');
let bgimages = require('./components/bgimages.vue');
let badges = require('./components/badges.vue');
let buttons = require('./components/buttons.vue');
let cards = require('./components/cards.vue');
let contextmenu = require('./components/contextmenu.vue');
let datatable = require('./components/datatable.vue');
let datep = require('./components/datep.vue');
let hints = require('./components/hints.vue');
let expanel = require('./components/expanel.vue');
let pageheader = require('./components/pageheader.vue');
let pagination = require('./components/pagination.vue');
let playercontrols = require('./components/playercontrols.vue');
let selectioncontrols = require('./components/selectioncontrols.vue');
let links = require('./components/links.vue');
let listiles = require('./components/listiles.vue');
let segcontrols = require('./components/segcontrols.vue');
let tabs = require('./components/tabs.vue');
let formz = require('./components/formz.vue');
let textlist = require('./components/textlist.vue');
let toast = require('./components/toast.vue');
let tooltip = require('./components/tooltip.vue');
let browsercontrol = require('./components/browsercontrol.vue');
let responsecodes = require('./components/responsecodes.vue');
let loadmore = require('./components/loadmore.vue');
let navigation = require('./components/navigation.vue');
let session = require('./components/session.vue');

// Enabled Routes
const routes = [
	{ path: '/accessibility', component: accessibility },
    { path: '/development', component: development },
    { path: '/management', component: management },
	{ path: '/peers', component: peers },
    { path: '/realestate', component: realestate },
    { path: '/automotive', component: automotive },
    { path: '/hiking', component: hiking },
    { path: '/contact', component: contact },
    { path: '/section', component: section },
    { path: '/CVAA', component: CVAA },
    { path: '/WCAG', component: WCAG },
    { path: '/office', component: office },
    { path: '/accordion', component: accordion },
    { path: '/modal', component: modal },
    { path: '/spinner', component: spinner },
    { path: '/alerts', component: alerts },
    { path: '/bgimages', component: bgimages },
    { path: '/badges', component: badges },
    { path: '/buttons', component: buttons },
    { path: '/cards', component: cards },
    { path: '/contextmenu', component: contextmenu },
    { path: '/datatable', component: datatable },
    { path: '/datep', component: datep },
    { path: '/hints', component: hints },
    { path: '/expanel', component: expanel },
    { path: '/pageheader', component: pageheader },
    { path: '/pagination', component: pagination },
    { path: '/playercontrols', component: playercontrols },
    { path: '/selectioncontrols', component: selectioncontrols },
    { path: '/links', component: links },
    { path: '/listiles', component: listiles },
    { path: '/segcontrols', component: segcontrols },
    { path: '/tabs', component: tabs },
    { path: '/formz', component: formz },
    { path: '/textlist', component: textlist },
    { path: '/toast', component: toast },
    { path: '/tooltip', component: tooltip },
    { path: '/browsercontrol', component: browsercontrol },
    { path: '/responsecodes', component: responsecodes },
    { path: '/loadmore', component: loadmore },
    { path: '/navigation', component: navigation },
    { path: '/session', component: session },
]

// Router
const router = new VueRouter({
	mode: 'history', // gets rid of the # in the URL on route change
	routes, // short for 'routes: routes'
    
});

// Enable Vue in the #app container
const app = new Vue({
    el: '#app',

    router,

    components:{
    	allyheader,
    	allyfooter,
    	allyhero,
    }
});

// Use in conjunction with v-focus on any element natively focusable (or given tabindex='-1')
Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
});

// aria-expanded manager - use 'expansion' class with 'aria-expanded' on any element
function expandMe() {
    var x = document.getElementsByClassName('expansion').getAttribute('aria-expanded');
    if (x == 'true')
    {
        x = 'false'
    } else {
        x = 'true'
    }
    document.getElementsByClassName('expansion').setAttribute('aria-expanded', x);
    document.getElementsByClassName('expansion').innerHTML = 'aria-expanded=' + x;
}
import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vuelidate from 'vuelidate';

import VueAxios from 'vue-axios';
import Axios from 'axios';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueAxios, Axios);

Vue.config.productionTip = false;

import Home from './components/HomeComponent';
import Edit from './components/EditComponent';
import Create from './components/CreateComponent';
import Delete from './components/CreateComponent';
import Index from './components/IndexComponent';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'create',
    path: '/create',
    component: Create
  },
  {
    name: 'edit',
    path: '/edit/id',
    component: Edit
  },
  {
    name: 'todelete',
    path: '/delete/id',
    component: Delete
  },
  {
    name: 'contacts',
    path: '/contacts',
    component: Index
  }
]

const router = new VueRouter({ mode: 'history', routes: routes });


new Vue(Vue.util.extend({ router }, App)).$mount('#app');

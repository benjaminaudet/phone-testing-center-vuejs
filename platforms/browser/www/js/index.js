import Vue from 'vue';
import VueRouter from 'vue-router';

import Navigation from './navigation.vue';
import Home from './home.vue';
import Battery from './battery.vue';
import Contacts from './contacts.vue';
import Location from './location.vue';
import Incremental from './incremental.vue';
import Language from './language.vue';
import Accelerometer from './accelerometer.vue';
import Back from './back.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/battery', component: Battery },
  { path: '/contacts', component: Contacts },
  { path: '/location', component: Location },
  { path: '/incremental', component: Incremental },
  { path: '/language', component: Language },
  { path: '/accelerometer', component: Accelerometer },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes,
})

const app = new Vue({
    router,
    components: { 
      Home,
      Navigation,
      Battery,
      Contacts,
      Location,
      Incremental,
      Language,
      Accelerometer,
      Back
    }
}).$mount('#vue-app')
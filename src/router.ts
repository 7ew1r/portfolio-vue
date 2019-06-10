import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Bio from './views/Bio.vue';
import Works from './views/Works.vue';
import Contact from './views/Contact.vue';
import Portfolio from './views/Work/Portfolio.vue';
import Laranale from './views/Work/Laranale.vue';
import VueTaskApp from './views/Work/VueTaskApp.vue';
import Hajimete from './views/Work/Hajimete.vue';
import UEP from './views/Work/UEP.vue';
import PCDViewer from './views/Work/PCDViewer.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/biography',
      name: 'biography',
      component: Bio,
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/laranale',
      name: 'laranale',
      component: Laranale,
    },
    {
      path: '/vue-task-app',
      name: 'vue-task-app',
      component: VueTaskApp,
    },
    {
      path: '/uep',
      name: 'uep',
      component: UEP,
    },
    {
      path: '/hajimete',
      name: 'hajimete',
      component: Hajimete,
    },
    {
      path: '/pcd-viewer',
      name: 'pcd-viewer',
      component: PCDViewer,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

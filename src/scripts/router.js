import Vue from 'vue';
import Router from 'vue-router';

import Landing from './../components/_common/Landing';
import Bio from './../components/_common/Bio';
import Transformations from './../components/_common/Transformations';
import Contact from './../components/_common/Contact';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Landing
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/before-and-after',
      name: 'Transformations',
      component: Transformations
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    { path: '*',
      redirect: '/'
    }
  ]
});

export default router;

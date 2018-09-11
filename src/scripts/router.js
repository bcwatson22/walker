import Vue from 'vue';
import Router from 'vue-router';

import Home from './../components/_common/Home';
import Services from './../components/_common/Services';
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
      component: Home
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/transformations',
      name: 'Transformations',
      component: Transformations
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      props: (route) => ({
        formSent: route.query.form
      })
    },
    { path: '*',
      redirect: '/'
    }
  ]
});

export default router;

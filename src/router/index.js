import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard'
import Preferences from '@/components/Preferences'
import Tables from '@/components/Tables'
import Maps from '@/components/Maps'
import BadGateway from '@/components/BadGateway'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/preferences',
      name: 'Preferences',
      props: { page: 1 },
      component: Preferences
      
    },
    {
      path: '/tables',
      name: 'Tables',
      props: { page: 3 },
      component: Tables
    },
    {
      path: '/maps',
      name: 'Maps',
      props: { page: 4 },
      component: Maps
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
})
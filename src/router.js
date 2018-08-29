import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Chatticus from './views/Chatticus.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/chatticus',
      name: 'chatticus',
      component: Chatticus
    },
  ]
})

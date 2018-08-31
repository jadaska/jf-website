import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Chatticus from './views/chatticus/Chatticus.vue'
import ChatticusOverview from './views/chatticus/components/Overview.vue'
import ChatticusIntegrations from './views/chatticus/components/Inteigrations.vue'
import ChatticusIntelligent from './views/chatticus/components/Intelligent.vue'
import ChatticusCustom from './views/chatticus/components/Custom.vue'

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
      component: Chatticus,
      // meta: { transition_name: },
      children: [
        {
          path: '',
          name: 'overview',
          component: ChatticusOverview,
          meta: { transition_name: 'slide', save_scroll: true },
        },{
          path: 'integrations',
          name: 'integrations',
          component: ChatticusIntegrations,
          meta: { transition_name: 'slide'},
        },{
          path: 'intelligent',
          name: 'intelligent',
          component: ChatticusIntelligent,
          meta: { transition_name: 'slide'},
        },{
          path: 'custom',
          name: 'custom',
          component: ChatticusCustom,
          meta: { transition_name: 'slide'},
        }
      ]
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

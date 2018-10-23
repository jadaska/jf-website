import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/Home.vue'

import Atticus from './views/atticus/Atticus.vue'
import AtticusOverview from './views/atticus/components/Overview.vue'
import AtticusIntegrations from './views/atticus/components/Inteigrations.vue'
import AtticusIntelligent from './views/atticus/components/Intelligent.vue'
import AtticusCustom from './views/atticus/components/Custom.vue'

import Scribe from './views/scribe/Scribe.vue'
import ScribeOverview from './views/scribe/components/Overview.vue'

import Respondent from './views/oas/OAS.vue'
import RespondentOverview from './views/oas/components/Overview.vue'

import Story from './views/story/Story.vue'

import Contact from './views/contact/Contact.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/atticus',
      name: 'atticus',
      component: Atticus,
      // meta: { transition_name: },
      children: [
        {
          path: '',
          name: 'overview',
          component: AtticusOverview,
          meta: { transition_name: 'slide', save_scroll: true, scroll_position: 0},
        },{
          path: 'integrations',
          name: 'integrations',
          component: AtticusIntegrations,
          meta: { transition_name: 'slide', return_scroll: true},
        },{
          path: 'intelligent',
          name: 'intelligent',
          component: AtticusIntelligent,
          meta: { transition_name: 'slide', return_scroll: true},
        },{
          path: 'custom',
          name: 'custom',
          component: AtticusCustom,
          meta: { transition_name: 'slide', return_scroll: true},
        }
      ]
    },{
      path: '/scribe',
      name: 'scribe',
      component: Scribe,
      // meta: { transition_name: },
      children: [
        {
          path: '',
          name: 'overview',
          component: ScribeOverview,
          meta: { transition_name: 'slide', save_scroll: true },
        },
      ]
    },{
      path: '/respondent',
      name: 'respondent',
      component: Respondent,
      // meta: { transition_name: },
      children: [
        {
          path: '',
          name: 'overview',
          component: RespondentOverview,
          meta: { transition_name: 'slide', save_scroll: true },
        },
      ]
    },{
      path: '/Story',
      name: 'Story',
      component: Story,
      // meta: { transition_name: },
    },{
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      // meta: { transition_name: },
    }
  ],
  scrollBehavior(to, from, savedPosition){
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);
    // if(savedPosition){
    //   console.log("C");
    //   return savedPosition
    // }else if(to.meta.save_scroll && from.meta.return_scroll){
    //   return { x: 0, y: to.meta.scroll_position }
    // }else{
    //   console.log("D");
    //   return { x: 0, y: 0 }
    // }
    if(savedPosition){
      return savedPosition
    }else{
      return { x: 0, y: 0 }
    }
    //   return new Promise((resolve, reject) => {
    //     if((to.meta.save_scroll && from.meta.return_scroll)||(to.meta.return_scroll && from.meta.save_scroll)){
    //       setTimeout(() => {
    //         if(to.meta.save_scroll && from.meta.return_scroll){
    //           console.log("X");
    //           console.log(to.meta.scroll_position);
    //           // resolve({ x: 0, y: to.meta.scroll_position })
    //           resolve({ x: 0, y: 0 })
    //         }else{
    //           console.log("B");
    //           resolve({ x: 0, y: 0 })
    //         }
    //       }, 5000)
    //     }else{
    //       if(savedPosition){
    //         console.log("C");
    //         resolve(savedPosition);
    //         // resolve({ x: 0, y: 0 })
    //       }else{
    //         console.log("D");
    //         resolve({ x: 0, y: 0 })
    //       }
    //     }
    //   })
    // }
  }
})

router.beforeEach((to, from, next) => {
  if(from.meta.save_scroll){
    from.meta.scroll_position = window.scrollY;
  }
  next();
})

export default router

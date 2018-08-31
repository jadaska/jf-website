import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.directive("click-outside", {
  bind: function(el, binding, vNode){
    if(typeof binding.value !== 'function'){
    	const compName = vNode.context.name
      let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
      if(compName){
        warn += `Found in component '${compName}'`
      }
      console.warn(warn)
    }
    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
      	binding.value(e)
      }
    }
    el.__vueClickOutside__ = handler
    document.addEventListener('click', handler)
	},
  unbind: function(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';
import autosize from 'autosize';
// import './registerServiceWorker' // TEMP causes conflict with microsoft auth redirect

import Checkbox from './components/inputs/Checkbox.vue';
import Input from './components/inputs/Input.vue';
import Select from './components/inputs/Select.vue';
import Textarea from './components/inputs/Textarea.vue';
import Datepicker from './components/inputs/Date.vue';

Vue.config.productionTip = false;

Vue.use(VeeValidate);

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

Vue.directive("autosize", {
  inserted: function(el){
    autosize(el);
  },
  update: function(el){
    autosize(el);
	},
})

Vue.component("v-checkbox", Checkbox)
Vue.component("v-input", Input)
Vue.component("v-select", Select)
Vue.component("v-textarea", Textarea)
Vue.component("v-date", Datepicker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

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

import requests from './mixins/requests.js';

Vue.config.productionTip = false;

Vue.use(VeeValidate);

Vue.directive('click-outside', {
  inserted: function (el, binding, vnode) {
    setTimeout(()=>{
      el.clickOutsideEvent = event => {
        if(!(el == event.target || el.contains(event.target))){
          binding.value();
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent)
      document.body.addEventListener("touchstart", el.clickOutsideEvent)
    }, 200)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
    document.body.removeEventListener("touchstart", el.clickOutsideEvent)
  },
});

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

Vue.mixin(requests);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screen: {
      width: 0,
      height: 0
    }
  },
  getters: {
    mobile: (state)=>{
      return state.screen.width < 540;
    }
  },
  mutations: {
    updateScreenSize(state, val){
      state.screen = val;
    }
  },
  actions: {

  },
})

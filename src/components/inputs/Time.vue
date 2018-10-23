<style lang="scss" scoped>
  @import "./common.scss";
  input{
    width: 100%;
    padding: 4px 28px 2px 6px;
    font-size: 15px;
  }
  .fa-alarm-clock{
    position: absolute;
    top: 15px;
    right: 6px;
    color: #DDD;
    font-size: 15px;
    &:hover{
      color: $b;
      cursor: pointer;
    }
  }
</style>

<template>
  <div class="user-input input">
    <timers :show-timers="show_timers" :trigger-id="'clock:'+_uid" :timer-name="timerName" @close="show_timers = false" @use-time="val => { active_value = val; show_timers = false}"></timers>
    <div class="material-input">
      <div class="name" :class="{'active': focus || active_value || active_value === 0}">
        <span>{{name}}</span>
        <span class="error">
          {{ active_error }}
        </span>
      </div>
      <input v-if="!locked" v-model.number="active_value" v-validate="active_validations" data-vv-delay="1000" :data-vv-scope="scope" :name="name" @input="$emit('input', $event.target.value)" @focus="focus = true; $emit('focus', $event)" @blur="focus = false; $emit('blur', $event)" @keyup="$emit('keyup', $event)" @keydown="$emit('keydown', $event)"/>
      <div v-else class="locked">
        {{active_value}}
      </div>
      <loading v-if="loading"></loading>
      <transition name="fade-placeholder">
        <span v-if="show_placeholder" class="placeholder">{{placeholder}}</span>
      </transition>
      <span :id="'clock:'+_uid" class="fa fa-alarm-clock" @click="show_timers = true"></span>
    </div>
  </div>
</template>

<script>
  import Timers from "../Timers.vue";
  import common from "./common.js";
  export default{
    components: { Timers },
    mixins: [ common ],
    props: [ "timerName" ],
    data(){
      return{
        show_timers: false,
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

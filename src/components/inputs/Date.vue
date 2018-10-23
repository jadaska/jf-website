<style lang="scss">
  @import "./common.scss";
  .vdp-datepicker{
    position: inherit !important;
    .vdp-datepicker__calendar{
      border: 0px solid #FFF;
      box-shadow: $z_depth_3;
      header{
        span{
          background-color: $r;
          color: #FFF;
          &:hover{
            background-color: $dr !important;
          }
        }
        .prev::after{
          border-right-color: #FFF !important;
        }
        .next::after{
          border-left-color: #FFF !important;
        }
      }
      .selected{
        background-color: $r !important;
        color: #FFF;
      }
      .day-header{
        color: #AAA;
      }
      .day, .month, .year{
        &.cell{
          border-radius: 1px;
          &:not(.blank){
            &:hover{
              border-color: $dr !important;
              // background-color: $elb;
              // color: #FFF;
            }
          }
        }
      }
    }
    input{
      width: 100%;
    }
  }
  .input-calendar-icon{
    position: absolute;
    top: 15px;
    right: 6px;
    color: #DDD;
    font-size: 15px;
  }
  input{
    font-size: 15px;
  }
  .loading-container{
    top: 39px;
    position: absolute;
    left: 0px;
    width: 100%;
    height: 1px;
    overflow: hidden;
  }
</style>

<template>
  <div class="user-input input">
    <div class="material-input">
      <div class="name" :class="{'active': focus || active_value || active_value === 0}">
        <span>{{name}}</span>
        <span class="error">
          {{ active_error }}
        </span>
      </div>
      <span class="fa fa-calendar input-calendar-icon"></span>
      <loading class="loading-container" v-if="loading"></loading>
    </div>
    <datepicker v-if="!locked" v-model="date" format="MMM d, yyyy" @input="val => $emit('input', toISO(val))" @selected="focus = true; $emit('focus', $event)" @closed="focus = false; $emit('blur', $event)"></datepicker>
    <div v-else class="locked">
      {{active_value}}
    </div>
  </div>
</template>

<script>
  import datepicker from 'vuejs-datepicker';
  import common from "./common.js";
  export default{
    components: { datepicker },
    mixins: [ common ],
    computed: {
      date: {
        get(){
          return this.fromISO(this.active_value);
        },
        set(val){
          this.active_value = this.toISO(val);
        }
      }
    },
    methods: {
      fromISO(val){
        if(val){
          return val.replace(/-/g, '\/');
        }else{
          return null
        }
      },
      toISO(val){
        var d = new Date(val);
        return d.getFullYear()+'-' + (d.getMonth()+1) + '-'+d.getDate();
      }
    }
  }
</script>

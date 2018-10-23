<style lang="scss" scoped>
  @import "./common.scss";
  .input{
    .material-input{
      position: relative;
      input{
        width: 100%;
        padding: 4px 6px 2px 6px;
        font-size: 15px;
      }
    }
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
      <input v-if="!locked" v-model="active_value" :type="type" v-validate="active_validations" data-vv-delay="1000" :data-vv-scope="scope" :name="name" @input="$emit('input', $event.target.value)" @focus="focus = true; $emit('focus', $event); showAutofill()" @blur="focus = false; $emit('blur', $event); hideAutofill($event)" @keyup="$emit('keyup', $event)" @keydown="$emit('keydown', $event)" @keyup.down="scrollAutofill(1)" @keyup.up="scrollAutofill(-1)" @keydown.enter="autofill($event)"/>
      <div v-else class="locked">
        {{active_value}}
      </div>
      <loading v-if="loading"></loading>
      <transition name="fade-placeholder">
        <span v-if="show_placeholder" class="placeholder">{{placeholder}}</span>
      </transition>

      <div v-if="show_visible_autofills" class="autofill-container" :id="'autofill:'+_uid">
        <div v-for="(opt, opt_index) in visible_autofills" :class="{'selected': opt_index == autofill_selected}" class="autofill" @mousedown="fillValue(opt)">
          {{ getOption(opt) }}
        </div>
      </div>

    </div>
    <!-- <datalist :id="'input-data:'+_uid" v-if="options && options.length > 0">
      <option v-for="opt in options">{{ opt }}</option>
    </datalist> -->
  </div>
</template>

<script>
  import autofill from "./autofill.js";
  import common from "./common.js";
  export default{
    mixins: [ common, autofill ],
    props: [ "type" ],
    computed: {
      // active_list: function(){
      //   if(this.options && this.options.length > 0){
      //     return 'input-data:'+this._uid;
      //   }else if(this.list){
      //     return this.list;
      //   }
      //   return "";
      // },
    },
  }
</script>

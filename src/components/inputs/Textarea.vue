<style lang="scss" scoped>
  @import "./common.scss";
  .textarea{
    .material-input{
      position: relative;
      textarea{
        width: 100%;
        padding: 4px 6px 2px 6px;
        font-size: 15px;
        background-color: rgba(255,255,255,0);
      }
    }
  }
</style>

<template>
  <div class="user-input textarea">
    <div class="material-input">
      <div class="name" :class="{'active': focus || active_value || active_value === 0}">
        <span>{{name}}</span>
        <span class="error">
          {{ active_error }}
        </span>
      </div>
      <textarea v-if="!locked" v-autosize v-model="active_value" v-validate="active_validations" data-vv-delay="1000" :data-vv-scope="scope" :name="name" @input="$emit('input', $event.target.value)" @focus="focus = true; $emit('focus', $event); showAutofill()" @blur="focus = false; $emit('blur', $event); hideAutofill($event)" @keyup="$emit('keyup', $event)" @keydown="$emit('keydown', $event)" @keyup.down="scrollAutofill(1)" @keyup.up="scrollAutofill(-1)" @keydown.enter="autofill($event)" rows="1"></textarea>
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
  </div>
</template>

<script>
  import common from "./common.js";
  import autofill from "./autofill.js";
  export default{
    mixins: [ common, autofill ],
    watch: {
      options: function(val){
        console.log(val)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "./common.scss";
  select{
    width: 100%;
    padding: 4px 22px 2px 6px;
    font-size: 15px;
  }
  .fa-sort{
    position: absolute;
    right: 6px;
    bottom: 8px;
    color: #DDD;
  }
  ::-ms-expand {
    display: none;
  }
</style>

<template>
  <div class="user-input textarea">
    <div class="material-input">
      <div class="name" :class="{'active': this.active_value}">
        <span>{{name}}</span>
        <span class="error">
          {{ active_error }}
        </span>
      </div>
      <select v-model="active_value" v-validate="active_validations" data-vv-delay="1000" :data-vv-scope="scope" :name="name" @input="$emit('input', $event.target.value)" @focus="$emit('focus', $event)" @blur="$emit('blur', $event)">
        <option disabled selected>select one</option>
        <option v-for="opt in active_options" :value="opt.value">{{opt.display}}</option>
      </select>
      <loading v-if="loading"></loading>
      <span class="fa fa-sort"></span>
    </div>
  </div>
</template>

<script>
  import common from "./common.js";
  export default{
    mixins: [ common ],
    computed: {
      active_options: function(){
        if(this.options && this.options.length > 0 && typeof this.options[0] == "string"){
          return this.options.map(val=>{
            return { display: val, value: val };
          })
        }else{
          return this.options;
        }
      },
    }
  }
</script>

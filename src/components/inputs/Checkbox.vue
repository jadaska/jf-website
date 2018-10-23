<style lang="scss" scoped>
  @import "./common.scss";
  .material-input{
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    &:hover{
      cursor: pointer;
      .checkbox-name{
        color: $r;
      }
    }
    &:active{
      .checkbox{
        transform: scale(0.9);
      }
    }
    .checkbox{
      width: 16px;
      height: 16px;
      border: 2px solid #BBB;
      border-radius: 2px;
      &.active{
        border: 2px solid $r;
        background-color: $r;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      .fa-check{
        font-size: 10px;
        color: #FFF;
      }
    }
    .checkbox-name{
      margin-left: 10px;
      margin-right: 10px;
      font-size: 15px;
      color: #AAA;
      user-select: none;
    }
  }
</style>

<template>
  <div class="user-input textarea">
    <div class="material-input" @click="toggleActiveValue()">
      <div class="name active">
        <span class="error">
          {{ active_error }}
        </span>
      </div>
      <div class="checkbox" :class="{'active': active_value}">
        <span v-if="active_value" class="fa fa-check"></span>
      </div>
      <div class="checkbox-name">
        {{name}}
      </div>
    </div>
  </div>
</template>

<script>
  import common from "./common.js";
  export default{
    mixins: [ common ],
    methods: {
      toggleActiveValue(){
        if(this.active_value && this.active_value != ""){
          this.active_value = false;
        }else{
          this.active_value = true;
        }
      }
    },
  }
</script>

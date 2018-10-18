<style lang="scss" scoped>
  @import "@/styles/generics.scss";
  #section-nav{
    position: fixed;
    right: 20px;
    top: 50vh;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
    @media screen and (max-width: 600px){
      display: none;
    }
    .section{
      padding: 8px 0px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &:hover{
        // width: 40px;
        .box{
          background-color: $fp;
        }
      }
      .box{
        width: 30px;
        height: 12px;
        background-color: #DDD;
        transition: width 0.1s ease;
        &.active{
          width: 50px;
        }
      }
    }
  }
</style>

<template>
  <div id="section-nav">
    <div class="section" v-for="(section, section_index) in sections" @click="scrollToSection(section)">
      <div class="box" :class="{'active': section_index == active_section}"></div>
    </div>
  </div>
</template>

<script>
  import sectionController from "@/mixins/sectionController.js";
  export default{
    mixins: [ sectionController ]
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";
  @import "@/styles/pageAnimations.scss";

  #get-started-banner{
    background-color: $fr;
    .banner-module{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 120px 0px;
      .title{
        color: #FFF;
        font-size: 42px;
        font-weight: 600;
        margin-bottom: 30px;
        @media screen and (max-width: 1000px){
          font-size: 32px;
        }
        @media screen and (max-width: 750px){
          font-size: 26px;
          margin-bottom: 20px;
        }
      }
      .try-now{
        color: #FFF;
        border: 3px solid #FFF;
        font-weight: 500;
        padding: 10px 30px;
        font-size: 24px;
        transition: all 0.15s ease;
        @media screen and (max-width: 750px){
          padding: 8px 24px;
          font-size: 20px;
        }
        &:hover{
          background-color: #FFF;
          color: $fr;
          cursor: pointer;
          box-shadow: $z_depth_2;
        }
      }
    }
  }
</style>

<template>
  <div id="atticus" class="product-container">
    <!-- <section-nav></section-nav> -->
    <!-- <transition :name="transition_name" mode="out-in" @beforeLeave="beforeLeave" @enter="enter"> -->
      <router-view></router-view>
      <!-- :app-elm="app_elm" :sections="sections" @scroll-to-section="(sec)=>{scrollToSection(sec)}" -->
    <!-- </transition> -->
    <div id="get-started-banner" class="banner">
      <div class="banner-module">
        <div class="title">Want to get started?</div>
        <div class="try-now">Get In Touch</div>
      </div>
    </div>
    <contact-footer></contact-footer>
  </div>
</template>

<script>
  import contactFooter from "@/components/footer.vue";
  import SectionNav from "@/components/SectionNav.vue";

  import sectionController from '@/mixins/sectionController.js';
  import pageController from '@/mixins/pageController.js';

  export default {
    components: { contactFooter, SectionNav },
    // mixins: [ sectionController, pageController ],
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";
  @import "@/styles/pageAnimations.scss";

  #get-started-banner{
    // background-color: $fr;
    .banner-module{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 60px 0px 160px 0px;
      .question{
        text-align: center;
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 30px;
      }
      .email{
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
        @media screen and (max-width: 1000px){
          font-size: 32px;
        }
        @media screen and (max-width: 750px){
          font-size: 26px;
          margin-bottom: 20px;
        }
      }
      .try-now{
        background-color: $r;
        color: #FFF;
        // font-weight: 600;
        padding: 15px 40px;
        font-size: 20px;
        transition: all 0.15s ease;
        box-shadow: $z_depth_1;
        border-radius: 2px;
        @media screen and (max-width: 750px){
          padding: 8px 24px;
          font-size: 20px;
        }
        &:hover{
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
        <div class="question">
          Want to learn more? <br />
          Contact our team for a live demo.
        </div>
        <div class="email">Info@jurisfutura.com</div>
        <div class="try-now" @click="$router.push('/Contact')">Get In Touch</div>
      </div>
    </div>
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

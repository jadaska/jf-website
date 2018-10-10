<style lang="scss" scoped>
@import "@/styles/constants.scss";
@import "@/styles/generics.scss";
@import "@/styles/buttons.scss";
.button-row{
  .button{
    margin-right: 20px;
  }
}
.section-image{
  position: relative;
  .box{
    position: absolute;
    top: -50px;
    left: -500px;
    width: 400px;
    height: 400px;
    border: 3px solid $fp;
  }
  #orbit-image{
    margin: 0px 100px 0px -50px;
  }
  #intelligent-image{
    margin: 0px -120px 0px 80px;
  }
  #custom-image{
    margin: -40px 80px 0px -50px;
  }
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
</style>

<template>
  <div class="product-col">
    <div class="product-page">
      <div class="page-section full-page">
        <div class="futura-title">
          Atticus
        </div>
        <div class="futura-sub-title">
          A platform for improving <br />
          legal practitioners’ workflow
        </div>
        <div class="button-row">
          <div class="button f-white">
            Get Started
          </div>
          <div class="button f-white">
            See What's New
          </div>
        </div>
        <span class="scroll-down">
          <span class="scroll-down-row" @click="$emit('scroll-to-section', sections[1])">
            <span class="fa fa-arrow-down"></span>
            Learn More
          </span>
        </span>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img id="orbit-image" src="../assets/planet-01.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              Streamline your work
            </div>
            <div class="section-sub-title">
              Increase productivity, save time, and enjoy a frictionless technology experience.
            </div>
            <div class="section-content">
              Chatticus unifies the various apps you already use under one conveint and easy to use interface that integrates directly into your email application.
            </div>
            <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/chatticus/integrations')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side">
          <div class="section-text">
            <div class="section-title">
              Intelligent Support
            </div>
            <div class="section-sub-title">
              Leave the non-billable work to the machines and focus on what matters to you.
            </div>
            <div class="section-content">
              Chatticus uses a sophistiacted AI layer to intelligently scan your emails, provide recomendations and transfer information into your favorite applications.
            </div>
            <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/chatticus/intelligent')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span>
          </div>
          <div class="section-image">
            <img id="intelligent-image" src="../assets/intelligent-01.svg" />
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side">
          <div class="section-image">
            <img id="custom-image" src="../assets/custom-01.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              Custom Legal Solutions
            </div>
            <div class="section-sub-title">
              Our mission is to make your life easier.
            </div>
            <div class="section-content">
              We work with our users everyday to invent powerful new tools that are tailored to meet their needs.
              <!-- From IP to Immigration, and Corporate to CommLit, our vision is to customize intelligent tools specific to your practice’s substantive legal work and administrative workflow needs. -->
            </div>
            <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/chatticus/custom')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { TweenLite, TimelineLite } from "gsap";
  export default{
    props: [ "appElm", "sections", "saveScroll" ],
    mounted: function(){
      if(this.appElm){
        if(this.saveScroll){
          this.appElm.scrollTop = this.saveScroll;
        }else{
          this.appElm.scrollTop = 0;
        }
      }
    },
  }
</script>

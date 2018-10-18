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
    // position: absolute;
    // top: -50px;
    // left: -500px;
    // width: 400px;
    // height: 400px;
    // border: 3px solid $fp;
  }
  #orbit-image{
    // margin: 0px 100px 0px -50px;
  }
  #intelligent-image{
    // margin: 0px -120px 0px 80px;
  }
  #custom-image{
    // margin: -40px 80px 0px -50px;
  }
}
// .fade-enter, .fade-leave-active {
//   opacity: 0;
// }
// .fade-enter-active, .fade-leave-active {
//   transition: opacity 1s ease;
// }

.atticus-logo{
  width: 200px;
  margin-right: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 1000px){
    width: 140px;
  }
  @media screen and (max-width: 600px){
    width: 100px;
  }
}

</style>

<template>
  <div class="product-col">
    <div class="main-page">
      <div class="title-module">
        <img class="atticus-logo" src="@/../public/futura_atticus.svg"></img>
        <div class="product-title">
          Atticus
        </div>
        <div class="product-sub-title">
          A platform for optimizing <br>legal workflow
        </div>
      </div>
      <!-- <span class="scroll-down">
        <span class="scroll-down-row" @click="$emit('scroll-to-section', sections[1])">
          <span class="fa fa-arrow-down"></span>
          Learn More
        </span>
      </span> -->
    </div>
    <div class="product-page">
      <div class="page-section full-page">
        <div class="side-2-side left">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img id="orbit-image" src="../assets/planet-01.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              Streamline <br />Your Work
            </div>
            <div class="section-sub-title">
              Increase productivity, save time, and enjoy a frictionless technology experience.
            </div>
            <div class="section-content">
              Atticus is a digital platform that brings together attorney workflow tools under one convenient and easy-to-use interface that integrates directly into your favorite applications. This removes the need for you to switch between applications to get your work done.
              <!-- Atticus is a digital platform that brings together attorney workflow tools under one conveint and easy to use interface that integrates directly into your favorite applications. -->
            </div>
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/atticus/integrations')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span> -->
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side right">
          <div class="section-text">
            <div class="section-title">
              Intelligent <br />Support
            </div>
            <div class="section-sub-title">
              Leave the non-billable work to the machines and focus on what matters to you.
            </div>
            <div class="section-content">
              Atticus scans your emails and extracts relevant information to your task at hand. While Atticus currently focuses on time entry, document management, and docketing-related applications, we are constantly expanding its functionality and intelligence.
            </div>
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/atticus/intelligent')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span> -->
          </div>
          <div class="section-image">
            <img id="intelligent-image" src="../assets/intelligent-01.svg" />
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side left">
          <div class="section-image">
            <img id="orbit-image" src="../assets/planet-01.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              Always Learning <br />Always Evolving
            </div>
            <div class="section-sub-title">
              The more you use it, the better it gets.
            </div>
            <div class="section-content">
              As Atticus starts to learn your workflow and preferences, it will also start to provide recommendations on what else you might like to do, based on tasks that you regularly complete each day.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { TweenLite, TimelineLite } from "gsap";
  export default{
    props: [ "sections", "saveScroll" ],
    mounted: function(){
      if(this.saveScroll){
        this.$nextTick(()=>{
          window.scrollTo( 0, this.saveScroll );
        })
      }else{
        this.$nextTick(()=>{
          window.scrollTo( 0, 0 );
        })
      }
    }
  }
</script>

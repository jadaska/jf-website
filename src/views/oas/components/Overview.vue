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

.respondent-logo{
  width: 150px;
  margin-right: 20px;
  margin-bottom: 10px;
}

</style>

<template>
  <div class="product-col">
    <div class="main-page">
      <div class="title-module">
        <img class="respondent-logo" src="@/../public/respondent.svg"></img>
        <div class="product-title">
          Respondent
        </div>
        <div class="product-sub-title">
          Rapid Office Action Responses
        </div>
      </div>
    </div>
    <div class="product-page">
      <!-- <div class="page-section full-page">
        <div class="futura-title">
          OA Scribe
        </div>
        <div class="futura-sub-title">
          *Something
        </div>
        <div class="button-row">
          <div class="button f-white">
            Get Started
          </div>
          <div class="button f-white">
            See What's New
          </div>
        </div>
      </div> -->
      <div class="page-section full-page">
        <div class="side-2-side">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img id="orbit-image" src="../assets/planet-01.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              IP Prosecution<br />Redefined
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              Scribe Office Action takes an Office Action and dynamically returns a custom shell response and associated materials (e.g., references).
            </div>
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side">
          <div class="section-text">
            <div class="section-title">
              Intelligent<br />Information<br />Extraction
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              Through scanning the USPTO office action, and extracting the core arguments/information, Scribe Office Action quickly pre-populates a response for the IP practitioner to review.
            </div>
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
              Consistency<br />In Response
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              The tool enables a consistent quality in response, thereby reducing human errors, while also supporting your clients’ or attorneys’ preferences.
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
    props: [ "appElm", "sections", "saveScroll" ],
  }
</script>

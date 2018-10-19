<style lang="scss" scoped>
@import "@/styles/constants.scss";
@import "@/styles/generics.scss";
@import "@/styles/buttons.scss";

.scribe-logo{
  width: 150px;
  margin-right: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 1000px){
    width: 100px;
  }
  @media screen and (max-width: 800px){
    width: 70px;
  }
}

</style>

<template>
  <div class="product-col">
    <div class="main-page">
      <div class="title-module">
        <img class="scribe-logo" src="@/../public/scribe.svg"></img>
        <div class="product-title">
          Scribe
        </div>
        <div class="product-sub-title">
          Simple and Swift<br />
          Document Creation
        </div>
      </div>
    </div>
    <div class="product-page">
      <!-- <div class="page-section full-page">
        <div class="side-2-side">
          <div class="section-text">
            <div class="futura-title">
              Scribe
            </div>
            <div class="futura-sub-title">
              Document Creation<br />
              Simple and Swift
            </div>
            <div class="button-row">
              <div class="button f-white">
                Get Started
              </div>
            </div>
            <span class="scroll-down">
              <span class="scroll-down-row" @click="$emit('scroll-to-section', sections[1])">
                <span class="fa fa-arrow-down"></span>
                Learn More
              </span>
            </span>
          </div>
          <div class="section-image">
            <img id="scribe-icon" src="../assets/scribe.svg" />
          </div>
        </div>
      </div> -->
      <div class="page-section full-page">
        <div class="side-2-side left">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img id="scribe-icon-1" src="../assets/scribe_1.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              More Files<br />
              Less Time
            </div>
            <div class="section-sub-title">
              Any Document, Any Format, Any Device, Any Time
            </div>
            <div class="section-content">
              Scribe helps you create frequently-used documents quickly. We preload your documents for you, so all you need to do is answer some quick questions online and your completed documents will be generated.
            </div>
            <!-- It also works across a variety of document types, including Word, Excel, PDF forms, email (EML), and calendar invites (ICS). -->
            <!-- Send us your preferred document templates that include your legal language and the desired dynamic sections, and the Scribe team will generate template forms for you, creating a custom, easy-to-use Scribe application for the documents you frequently use. -->
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
              Simplicity <br />in Numbers
            </div>
            <div class="section-sub-title">
              Whether You Have Just One Document or a Hundred
            </div>
            <div class="section-content">
              Scribe unifies common fields across a variety of document types to ensure you only need to enter information once. This reduces the complexity of managing multiple documents, supports accuracy, and frees up your time.
            </div>
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/atticus/intelligent')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span> -->
          </div>
          <div class="section-image">
            <img id="scribe-icon-2" src="../assets/scribe_2.svg" />
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side left">
          <div class="section-image">
            <img id="scribe-icon-3" src="../assets/scribe_3.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              Available <br />On-the-go
            </div>
            <div class="section-sub-title">
              No Matter Where You Are
            </div>
            <div class="section-content">
              Simply launch Scribe on your phone, tablet, or desktop, fill out the form, and generate your documents.  Immediately download the results for review or to share with colleagues, all from Scribe’s simple-to-use interface.
            </div>
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/atticus/custom')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span> -->
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

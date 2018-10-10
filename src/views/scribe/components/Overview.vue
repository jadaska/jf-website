<style lang="scss" scoped>
@import "@/styles/constants.scss";
@import "@/styles/generics.scss";
@import "@/styles/buttons.scss";
.button-row{
  .button{
    margin-right: 20px;
  }
}
#scribe-text{
  // width: 600px;
  // margin-bottom: -90px;
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
  #scribe-icon{
    width: 350px;
    // margin-left: 200px;
    margin-left: 120px;
  }
  #scribe-icon-1{
    margin: -40px 100px 0px -50px;
  }
  #scribe-icon-2{
    margin: 0px -80px 0px 30px;
  }
  #scribe-icon-3{
    margin: 0px 100px 0px -50px;
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
        <div class="side-2-side">
          <div class="section-text">
            <div class="futura-title">
              <!-- <img id="scribe-text" src="../assets/scribe_text.svg" /> -->
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
      </div>
      <div class="page-section full-page">
        <div class="side-2-side">
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
              Scribe helps you create frequently-used documents fast. We preload your document templates, so all you need to do is answer some quick questions online and your completed documents are ready.
            </div>
            <!-- It also works across a variety of document types, including Word, Excel, PDF forms, email (EML), and calendar invites (ICS). -->
            <!-- Send us your preferred document templates that include your legal language and the desired dynamic sections, and the Scribe team will generate template forms for you, creating a custom, easy-to-use Scribe application for the documents you frequently use. -->
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/chatticus/integrations')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span> -->
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side">
          <div class="section-text">
            <div class="section-title">
              Simplicity <br />in Numbers
            </div>
            <div class="section-sub-title">
              Whether you have just one document or hundreds
            </div>
            <div class="section-content">
              Scribe unifies common fields to ensure you only need to enter information once. No more headaches from managing and checking countless documents to ensure consistency. Instead free up your time to focus on what matters.
            </div>
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/chatticus/intelligent')">
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
        <div class="side-2-side">
          <div class="section-image">
            <img id="scribe-icon-3" src="../assets/scribe_3.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              Available <br />On-the-go
            </div>
            <div class="section-sub-title">
              No matter where you are
            </div>
            <div class="section-content">
              Simply launch Scribe on your phone, tablet, or desktop, fill out the form, and generate your documents.  Immediately download the results for review or to share with colleagues, all from Scribe’s simple-to-use interface.
            </div>
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/chatticus/custom')">
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

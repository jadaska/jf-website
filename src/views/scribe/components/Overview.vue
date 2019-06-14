<style lang="scss" scoped>
@import "@/styles/constants.scss";
@import "@/styles/generics.scss";
@import "@/styles/buttons.scss";

.main-page{
  .product-hook-container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 45%;
    margin-left: 100px;
    .product-hook {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      position: relative;
      margin-bottom: 160px;
      .flair{
        position: absolute;
        width: 260px;
        &.top{
          top: 0px;
          left: 5px;
          transform: translateY(-140%);
        }
        &.bottom{
          bottom: 0px;
          left: 5px;
          transform: translateY(140%);
        }
      }
      .product-title{
        color: #5D5179;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 25px;
      }
      .product-sub-title{
        color: #5D5179;
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 35px;
      }
      .get-started-container {
        display: flex;
        .email {
          width: 300px;
          padding: 10px 18px;
          border: 2px solid #5D5179;
          border-radius: 3px;
          margin-right: 10px;
        }
        .get-started {
          padding: 10px 26px;
          background-color: $r;
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
        }
      }
    }
  }
  .splash-container{
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .splash{
      width: 85%;
      // margin-left: -50px;
    }
  }
}

</style>

<template>
  <div class="product-col">
    <div class="main-page">
      <div class="splash-container">
        <img class="splash" src="../assets/scribe-computer.svg" />
      </div>
      <div class="product-hook-container">
        <div class="product-hook">
          <!-- <img class="respondent-logo" src="@/../public/respondent.svg"></img> -->
          <!-- <img class="flair top" src="../assets/top-flair.svg" /> -->
          <div class="product-title">
            <span class="juvo-link">JUVO</span> / SCRIBE
          </div>
          <div class="product-sub-title">
            Document Creation<br />
            Simple and Swift
          </div>
          <!-- <div class="scroll-down yellow" @click="scroll()">
            Learn More
          </div> -->
          <div class="get-started-container">
            <div class="email">
              Email
            </div>
            <div class="get-started">
              Get Started
            </div>
          </div>
          <img class="flair bottom" src="../assets/bottom-flair.svg" />
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
      <div id="first-section" class="page-section full-page">
        <div class="row right">
          <div class="col text">
            <div class="section-text">
              <div class="section-title">
                More Files Less Time
              </div>
              <div class="section-sub-title">

              </div>
              <div class="section-content">
                Scribe helps you create frequently-used documents fast. We preload your document templates, so all you need to do is answer some quick questions online and your completed documents are ready.
              </div>
            </div>
          </div>
          <div class="col image">
            <div class="section-image">
              <!-- <div id="orbit-animation"></div> -->
              <!-- <div class="box"></div> -->
              <img class="shred-image" src="../assets/assist.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="row left">
          <div class="col image">
            <div class="section-image">
              <!-- <div id="orbit-animation"></div> -->
              <!-- <div class="box"></div> -->
              <img class="shred-image" src="../assets/launch.svg" />
            </div>
          </div>
          <div class="col text">
            <div class="section-text">
              <div class="section-title">
                Simplicity in Numbers
              </div>
              <div class="section-sub-title">

              </div>
              <div class="section-content">
                Scribe unifies common fields to ensure you only need to enter information once. No more headaches from managing and checking countless documents to ensure consistency. Instead free up your time to focus on what matters.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="row right">
          <div class="col text">
            <div class="section-text">
              <div class="section-title">
                Available On-the-go
              </div>
              <div class="section-sub-title">

              </div>
              <div class="section-content">
                Simply launch Scribe on your phone, tablet, or desktop, fill out the form, and generate your documents. Immediately download the results for review or to share with colleagues, all from Scribe’s simple-to-use interface.
              </div>
            </div>
          </div>
          <div class="col image">
            <div class="section-image">
              <!-- <div id="orbit-animation"></div> -->
              <!-- <div class="box"></div> -->
              <img class="shred-image" src="../assets/moving.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sectionController from '@/mixins/sectionController.js';

  export default{
    mixins: [ sectionController ],
    methods: {
      scroll(){
        var elm = document.getElementById("first-section");
        if(elm){
          this.scrollToSection(elm);
        }
      },
    }
  }
</script>

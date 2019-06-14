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
      .flair{
        position: absolute;
        width: 160px;
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

.row{
  &.first-section{
    margin-bottom: 0px;
    .shred-image{
      transform: scale(1.2);
    }
  }
  &.second-section{
    margin-bottom: 80px;
    .extract-image{
      transform: scale(1);
    }
  }
  &.third-section{
    margin-bottom: 0px;
    .machine-learning-image{
      transform: scale(2.2);
    }
  }
}

</style>

<template>
  <div class="product-col">
    <div class="main-page">
      <div class="splash-container">
        <img class="splash" src="../assets/respondent-computer.svg" />
      </div>
      <div class="product-hook-container">
        <div class="product-hook">
          <!-- <img class="respondent-logo" src="@/../public/respondent.svg"></img> -->
          <img class="flair top" src="../assets/top-flair.svg" />
          <div class="product-title">
            <span class="juvo-link">JUVO</span> / RESPONDENT
          </div>
          <div class="product-sub-title">
            Faster and Smoother<br />
            Office Action Responses
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
      <div class="row first-section">
        <div class="col text">
          <div class="section-text">
            <div class="section-title">
              IP Prosecution <br />
              Re-defined
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              The Respondant takes an Office Action and dynamically returns a custom shell response and associated materials (e.g., references).
            </div>
          </div>
        </div>
        <div class="col image">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img class="shred-image" src="../assets/shred.svg" />
          </div>
        </div>
      </div>
      <div class="row second-section">
        <div class="col image">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img class="extract-image" src="../assets/extract.svg" />
          </div>
        </div>
        <div class="col text">
          <div class="section-text">
            <div class="section-title">
              Intelligent Extraction
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              Through scanning the USPTO office action, and extracting the core arguments/information, Scribe Office Action quickly pre-populates a document for the IP practitioner to review.
            </div>
          </div>
        </div>
      </div>
      <div class="row third-section">
        <div class="col text">
          <div class="section-text">
            <div class="section-title">
              Consistent Responses
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              The tool enables a consistent quality in response, thereby reducing human errors, while also supporting your clients’ or attorneys’ preferences.
            </div>
          </div>
        </div>
        <div class="col image">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img class="award-image" src="../assets/award.svg" />
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

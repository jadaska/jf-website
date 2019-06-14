<style lang="scss" scoped>
@import "@/styles/constants.scss";
@import "@/styles/generics.scss";
@import "@/styles/buttons.scss";

// .respondent-logo{
//   width: 150px;
//   margin-right: 20px;
//   margin-bottom: 10px;
//   @media screen and (max-width: 1000px){
//     width: 100px;
//   }
//   @media screen and (max-width: 800px){
//     width: 70px;
//   }
// }
//
// .image-module{
//   width: 450px;
//   @media screen and (max-width: 1300px){
//     width: 350px;
//   }
//   @media screen and (max-width: 1000px){
//     width: 260px;
//   }
//   @media screen and (max-width: 750px){
//     width: 32%;
//   }
//   @media screen and (max-width: 600px){
//     width: 50%;
//   }
// }

.main-page{
  .product-hook-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    .product-hook {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      position: relative;
      .flair{
        position: absolute;
        &.top{
          top: 0px;
          left: 0px;
          transform: translateX(-70%) translateY(-90%);
        }
        &.bottom{
          bottom: 0px;
          right: 0px;
          transform: translateX(70%) translateY(100%);
        }
      }
      .product-title{
        color: #5D5179;
        font-size: 56px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .product-sub-title{
        color: #5D5179;
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 40px;
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
    width: 50%;
    .splash{
      width: 85%;
      // margin-left: -50px;
    }
  }
}

.row{
  &.first-section{
    margin-bottom: 120px;
    .relax-image{
      // transform: scale(0.9);
    }
  }
  &.second-section{
    margin-bottom: 240px;
    .stride-image{
      transform: scale(1.4);
    }
  }
  &.third-section{
    margin-bottom: 60px;
    .machine-learning-image{
      margin-left: 60px;
      transform: scale(2.2);
    }
  }
}

</style>

<template>
  <div class="product-col">
    <div class="main-page">
      <div class="product-hook-container">
        <div class="product-hook">
          <!-- <img class="respondent-logo" src="@/../public/respondent.svg"></img> -->
          <img class="flair top" src="../assets/top_flair.svg" />
          <div class="product-title">
            JUVO
          </div>
          <div class="product-sub-title">
            A Better Legal Workflow<br />
            Inside The Tools You <br />
            Already Rely On<br />
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
          <img class="flair bottom" src="../assets/bottom_flair.svg" />
        </div>
      </div>
      <div class="splash-container">
        <img class="splash" src="../assets/platform_computer.svg" />
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
      <div class="first-section row">
        <div class="col image">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img class="relax-image" src="../assets/relax.svg" />
          </div>
        </div>
        <div class="col text">
          <div class="section-text">
            <div class="section-title">
              Enjoy a frictionless <br />
              technology experience.
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              Juvo is a digital platform that provides you with cutting edge legal tools under one easy-to-use interface that integrates directly into your favorite applications.
            </div>
          </div>
        </div>
      </div>
      <div class="second-section row">
        <div class="col text">
          <div class="section-text">
            <div class="section-title yellow">
              Leave the non-billable<br />
              work to the machines.
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              Using Artificial Intelligence and Machine Learning, Juvo will help you extract information, gather resources, draft emails and generate documents.
            </div>
          </div>
        </div>
        <div class="col image">
          <div class="section-image">
            <img class="stride-image" src="../assets/stride.svg" />
          </div>
        </div>
      </div>
      <div class="third-section row">
        <div class="col image">
          <div class="section-image">
            <img class="machine-learning-image" src="../assets/machineLearning.gif" />
          </div>
        </div>
        <div class="col text">
          <div class="section-text">
            <div class="section-title yellow">
              The more you use it, <br />
              the better it gets.
            </div>
            <div class="section-sub-title">

            </div>
            <div class="section-content">
              As you interact with Juvo it will start to adapt to your desired workflow and personal preferences so that you can focus your time on what matters the most.
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

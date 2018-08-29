<style lang="scss">
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";
  @import "@/styles/buttons.scss";
  .futura-title{
  }
  .futura-sub-title{
    max-width: 900px;
  }
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
      margin-right: 100px;
    }
    #intelligent{
      margin-left: 100px;
    }
    #custom-image{
      margin-right: 100px;
    }
  }
</style>

<template>
  <div id="chatticus" class="product-container">
    <div class="product-page">
      <div class="page-section">
        <div class="futura-title">
          Chatticus
        </div>
        <div class="futura-sub-title">
          An email integration for improving legal practitioners’ workflow
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
          <span class="scroll-down-row">
            <span class="fa fa-arrow-down"></span>
            Learn More
          </span>
        </span>
      </div>
      <div class="page-section">
        <div class="side-2-side">
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img id="orbit-image" src="@/assets/planet-01.svg" />
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
            <div class="learn-more">
              Learn More
            </div>
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="side-2-side">
          <div class="section-text">
            <div class="section-title">
              Intelligent Support
            </div>
            <div class="section-sub-title">
              Leave the non-billable work to the machines and focus on what matters to you.
            </div>
            <div class="section-content">
              Chatticus uses a sophistiacted AI layer to intelligently scan your emails, provide recomendations and input relivant information into your favorite applications.
            </div>
            <div class="learn-more">
              Learn More
            </div>
          </div>
          <div class="section-image">
            <img id="intelligent-image" src="@/assets/intelligent-01.svg" />
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="side-2-side">
          <div class="section-image">
            <img id="custom-image" src="@/assets/custom-01.svg" />
          </div>
          <div class="section-text">
            <div class="section-title">
              Custom Legal Solutions
            </div>
            <div class="section-sub-title">
              Our mission is to increase productivity and make your life easier.
            </div>
            <div class="section-content">
              We work with our users everyday to invent powerful new tools that are tailored to meet their specific needs.
              <!-- From IP to Immigration, and Corporate to CommLit, our vision is to customize intelligent tools specific to your practice’s substantive legal work and administrative workflow needs. -->
            </div>
            <div class="learn-more">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
    <
  </div>
</template>

<script>
  export default {

  }
</script>

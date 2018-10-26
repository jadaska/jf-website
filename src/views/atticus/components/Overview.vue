<style lang="scss" scoped>
@import "@/styles/constants.scss";
@import "@/styles/generics.scss";
@import "@/styles/buttons.scss";

.atticus-logo{
  width: 200px;
  margin-right: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 1000px){
    width: 140px;
  }
  @media screen and (max-width: 800px){
    width: 100px;
  }
}

</style>

<template>
  <div class="product-col">
    <div class="main-page">
      <img class="image-module" src="../assets/img_3.svg"></img>
      <div class="title-module">
        <!-- <img class="atticus-logo" src="@/../public/futura_atticus.svg"></img> -->
        <div class="product-title blue">
          Atticus
        </div>
        <div class="product-sub-title">
          A platform for optimizing <br>legal workflow
        </div>
        <div class="scroll-down blue" @click="scroll()">
          Learn More
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
      <div id="first-section" class="page-section full-page">
        <div class="side-2-side right">
          <div class="section-text">
            <div class="section-title blue">
              Streamline <br />Your Work
            </div>
            <div class="section-sub-title">
              Increase productivity, save time, and enjoy a frictionless technology experience.
            </div>
            <div class="section-content">
              It all starts with Atticus. Atticus is a digital platform that brings together attorney workflow tools under one convenient and easy-to-use interface that integrates directly into your favorite applications. This removes the need for you to switch between applications to get your work done.
              <!-- Atticus is a digital platform that brings together attorney workflow tools under one conveint and easy to use interface that integrates directly into your favorite applications. -->
            </div>
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/atticus/integrations')">
                Learn More
                <span class="fa fa-arrow-right"></span>
              </span>
            </span> -->
          </div>
          <div class="section-image">
            <!-- <div id="orbit-animation"></div> -->
            <!-- <div class="box"></div> -->
            <img id="orbit-image" src="../assets/planet-01.svg" />
          </div>
        </div>
      </div>
      <div class="page-section full-page">
        <div class="side-2-side left">
          <div class="section-image">
            <img id="intelligent-image" src="../assets/intelligent-01.svg" />
          </div>
          <div class="section-text">
            <div class="section-title blue">
              Intelligent <br />Support
            </div>
            <div class="section-sub-title">
              Leave the non-billable work to the machines and focus on what matters to you.
            </div>
            <div class="section-content">
              Using Artificial Intelligence and Machine Learning, Atticus scans your emails and extracts relevant information to your task at hand. Atticus currently focuses on time entry, document management, and docketing-related applications, and is constantly expanding its functionality and intelligence.
            </div>
            <!-- <span class="scroll-down small">
              <span class="scroll-down-row" @click="$router.push('/atticus/intelligent')">
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
            <div class="section-title blue">
              Always Learning <br />
              Always Evolving
            </div>
            <div class="section-sub-title">
              The more you use it, the better it will get.
            </div>
            <div class="section-content">
              As Atticus starts to learn your workflow and preferences, the AI embedded within it will also start to provide recommendations on what else you might like to do, based on tasks that you regularly complete each day.
            </div>
          </div>
          <div class="section-image">
            <img id="orbit-image" src="../assets/custom-01.svg" />
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

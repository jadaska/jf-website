<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";
  @import "@/styles/buttons.scss";

  .scroll-down{
    margin-bottom: 40px;
  }
</style>

<template>
  <div class="product-col">
    <div class="product-page">
      <div class="page-section">
        <span class="scroll-down">
          <span class="scroll-down-row" @click="$router.push('/chatticus')">
            <span class="fa fa-arrow-left"></span>
            Back
          </span>
        </span>
        <div class="detail-page-app">
          Chatticus
        </div>
        <div class="detail-page-title">
          Custom Solutions
        </div>
        <div class="section-sub-title">
          Our goal is to meet your needs and exceed them.
        </div>
        <div class="section-content">
          From IP to Immigration, and Corporate to CommLit, our vision is to build intelligent tools specific to your practice’s substantive legal work and administrative workflow needs. If you have thoughts about how your workflow could be improved reach out to our team and we will be happy to assist you!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import common from "./mixins/common.js";
  export default{
    mixins: [ common ],
  }
</script>

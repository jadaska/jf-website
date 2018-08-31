<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";
  @import "@/styles/buttons.scss";
  .scroll-down{
    margin-bottom: 40px;
    &.tight{
      margin-bottom: 20px;
    }
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
          Always Learning <br />
          Always Evolving
        </div>
        <div class="section-sub-title">
          It gets even better with time.
        </div>
        <div class="section-content">
          Chatticus scans your emails and extracts relevant information to your task at hand. As it starts to learn your workflow and preferences, it will also provide recommendations on what else you might like to do, based on tasks that you regularly complete each day. While Chatticus currently focuses on time entry, document management, and docketing-related applications, it continues to expand functionality and intelligence.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import common from "./mixins/common.js";
  export default{
    mixins: [ common ]
  }
</script>

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
          <span class="scroll-down-row" @click="$router.push('/atticus')">
            <span class="fa fa-arrow-left"></span>
            Back
          </span>
        </span>
        <div class="detail-page-app">
          Atticus
        </div>
        <div class="detail-page-title">
          Always Learning <br />
          Always Evolving
        </div>
        <div class="section-sub-title">
          The more you use it, the better it gets.
        </div>
        <div class="section-content">
          As Atticus starts to learn your workflow and preferences, it will also provide recommendations on what else you might like to do, based on tasks that you regularly complete each day. While Atticus currently focuses on time entry, document management, and docketing-related applications, we are constantly expanding its functionality and intelligence.
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

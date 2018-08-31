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
      <div class="crumbs">
        <!-- <span class="" -->
      </div>
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
          Integrations <br />
          & Exclusives
        </div>
      </div>
      <div class="page-section">
        <div class="futura-sub-title">
          Integrations
        </div>
        <div class="section-content">
          Chatticus brings together many popular legal tools such as time entry, document management, and docketing, directly into your preferred email program. This removes the need for you to switch between applications to get your work done.
        </div>
        <div class="section-content bold">
          Current Integrations:
        </div>
        <div class="card-container">
          <div class="card">
            <div class="card-image">
              <img src="../assets/aderant.png" />
            </div>
            <div class="card-description">
              Aderant Time Entry
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="../assets/foundation_ip.svg" />
            </div>
            <div class="card-description">
              Foundation IP Docketing
            </div>
          </div>
        </div>
        <div class="section-content bold">
          Upcoming Integrations:
        </div>
        <div class="card-container">
          <div class="card">
            <div class="card-image">
              <img src="../assets/i-manage.png" />
            </div>
            <div class="card-description">
              IManage Filing
            </div>
          </div>
        </div>
      </div>
      <div class="page-section">
        <div class="futura-sub-title">
          Exclusives
        </div>
        <div class="section-content">
          In addition to connecting with your existing application, Chatticus also comes with a many original tools that are only available through Chatticus.
        </div>
        <div class="section-content bold">
          Current Exclusives:
        </div>
        <div class="card-container">
          <div class="card">
            <div class="card-image">
              <img src="../assets/notes.svg" />
            </div>
            <div class="card-description">
              Email Notes
            </div>
          </div>
        </div>
        <div class="section-content bold">
          Upcoming Exclusives:
        </div>
        <div class="card-container">
          <div class="card">
            <div class="card-image">
              <img src="../assets/atticus.svg" />
            </div>
            <div class="card-description">
              Scribe Document Generation
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="../assets/futura_logo.svg" />
            </div>
            <div class="card-description">
              Trademark / SOEI Pipeline
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="../assets/futura_logo.svg" />
            </div>
            <div class="card-description">
              Trademark Handbill Generation
            </div>
          </div>
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

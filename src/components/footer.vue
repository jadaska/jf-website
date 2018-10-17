<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  #credits-banner{
    // background-image: url("~@/assets/geo_purple.png");
    background-color: $b1;
    .banner-module{
      width: 100%;
      display: flex;
      color: #FFF;
      margin: 60px;
      .col{
        padding: 20px 50px 10px 50px;
        display: flex;
        flex-direction: column;
        width: 50%;
        &.left-col{
          border-right: 2px solid #FFF;
          align-items: flex-end;
        }
        .title{
          font-size: 18px;
          // font-weight: 300;
          margin-bottom: 20px;
        }
        .row{
          font-size: 26px;
          // font-weight: 600;
          margin-bottom: 16px;
          #fututra-credit{
            width: 180px;
          }
          #hh-credit{
            width: 220px;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="credits-banner" class="banner">
    <div class="banner-module">
      <div class="col left-col">
        <div class="title">
          Contact The Team
        </div>
        <div class="row">
          sales@jurisfutura.com
        </div>
      </div>
      <div class="col">
        <div class="title">
          Powered By
        </div>
        <div class="row">
          <img id="fututra-credit" src="../assets/_logos/futura_horizontal_white_red.svg" />
        </div>
        <div class="row">
          <img id="hh-credit" src="../assets/_logos/WhiteHHLogoShort.png" />
        </div>
      </div>
    </div>
  </div>
</template>

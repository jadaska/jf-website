<style lang="scss" scoped>
  #credits-banner{
    background-image: url("~@/assets/geo_purple.png");
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
          border-right: 3px solid #FFF;
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
            width: 240px;
          }
          #hh-credit{
            width: 280px;
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
          Atticus@HollandHart.com
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

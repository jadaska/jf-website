<style lang="scss" scoped>
  @import "../styles/constants.scss";
  .home{
    position: relative;
    width: 100%;
    height: 100%;
    $info-container-height: 200px;
    .splash-container{
      position: relative;
      z-index: 7;
      width: 100%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $dark-grey;
      .juris-futura{
        width: 40%;
      }
    }
    .main-container{
      position: relative;
      z-index: 10;
      height: 30%;
      margin-bottom: $info-container-height;
      background-color: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: $z_depth_3;
      .comming-soon{
        font-weight: 500;
        font-size: 50px;
      }
    }
    .info-container{
      z-index: 5;
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: $info-container-height;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFF;
      background-color: $dark-grey;
      .futura{
        height: 50%;
        margin-right: 30px;
      }
      .contact-row{
        z-index: 0;
        .header{
          font-size: 40px;
        }
        .email{
          font-size: 30px;
        }
      }
    }
  }
</style>

<template>
  <div class="home page">
    <div class="splash-container">
      <!-- <img class="juris-futura" src="../assets/logos/futura_hor_white_full.svg" /> -->
    </div>
    <div class="main-container">
      <div class="comming-soon">
        Coming Soon!
      </div>
    </div>
    <div class="info-container">
      <!-- <img class="futura" src="../assets/logos/futura_logo.svg" /> -->
      <div class="contact-row">
        <div class="header">
          Contact
        </div>
        <div class="email">
          Jason@JurisFutura.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

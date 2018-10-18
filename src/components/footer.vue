<style lang="scss" scoped>
  @import "@/styles/constants.scss";

  #contact-page{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $b1;
    color: #FFF;
    height: 400px;
    box-shadow: $z_depth_2;
    z-index: 1;
    @media screen and (max-width: 1550px){
      height: 350px;
    }
    @media screen and (max-width: 1050px){
      height: 300px;
    }
    @media screen and (max-width: 700px){
      height: 250px;
    }
    .center-module{
      font-size: 28px;
      .message{
        @media screen and (max-width: 1550px){
          font-size: 30px;
        }
        @media screen and (max-width: 1250px){
          font-size: 26px;
        }
        @media screen and (max-width: 1050px){
          font-size: 22px;
        }
        @media screen and (max-width: 870px){
          font-size: 18px;
        }
        @media screen and (max-width: 700px){
          font-size: 16px;
        }
        @media screen and (max-width: 500px){
          font-size: 14px;
        }
        @media screen and (max-width: 400px){
          font-size: 12px;
        }
        @media screen and (max-width: 350px){
          font-size: 11px;
        }
        .email{
          // font-size: 34px;

        }
      }
    }
  }
</style>

<template>
  <div id="contact-page">
    <div class="center-module">
      <div class="message">
        Want to learn more about our solutions?<br />
        Email our team. We are always happy to chat!<br /><br />
        <div class="email">Sales@jurisfutura.com</div>
      </div>
    </div>
  </div>
</template>

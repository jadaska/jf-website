<style lang="scss" scoped>
  @import "@/styles/constants.scss";

  #contact-page{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    color: #7A6181;
    height: 900px;
    // box-shadow: $z_depth_2;
    z-index: 1;
    .center-module{
      font-size: 28px;
      font-weight: 500;
      display: flex;
      align-items: center;
      .message{
        margin-right: 150px;
        .hello{
          font-size: 80px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .text{
          font-weight: 600;
        }
        .contact{
          margin-top: 40px;
          margin-bottom: 5px;
          font-weight: 700;
        }
      }
      .contact-image-container{
        .contact-image{
          width: 450px;
        }
      }
    }
  }
</style>

<template>
  <div id="contact-page">
    <div class="center-module">
      <div class="message">
        <div class="hello">
          Hello,
        </div>
        <div class="text">
          If you’d like to learn more about how <br />
          you can benefit from our tools
        </div>
        <div class="contact">
          Contact
        </div>
        <div class="email text">
          Sales@JurisFutura.com
        </div>
      </div>
      <div class="contact-image-container">
        <img class="contact-image" src="../assets/contact.png" />
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods: {
      openMail(){
        window.open('mailto:info@jurisfutura.com');
      }
    }
  }
</script>

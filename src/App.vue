<style lang="scss">
  @import url("https://use.typekit.net/umi0nir.css");
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,800,900');
  @import "./styles/constants.scss";
  html{
    min-width: 100%;
    min-height: 100%;
    font-family: 'Montserrat', sans-serif;
    color: $dp;
    body{
      padding: 0px;
      margin: 0px;
      color: #b5afb6;
      max-width: 100%;
      overflow-x: hidden;
      #app{
        // width: 100%;
        // position: fixed;
        // top: 0px;
        // left: 0px;
        // width: 100%;
        // height: 100%;
        // overflow-y: auto;
        // overflow-x: hidden;
        #nav-bar{
          position: fixed;
          top: 0px;
          left: 0px;
          height: 60px;
          width: 100%;
          max-width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: $z_depth_1;
          background-color: #FFF;
          z-index: 100;
          @media screen and (max-width: 750px){
            height: 40px;
          }
          #full-nav-container{
            width: 100%;
            height: 100%;
            max-width: 1200px;
            padding: 0px 40px;
            display: flex;
            align-items: center;
            @media screen and (max-width: 1300px){
              max-width: 800px;
            }
            @media screen and (max-width: 850px){
              max-width: 700px;
            }
            @media screen and (max-width: 540px){
              max-width: 100%;
              margin: 0px 30px;
            }
            #futura-banner-logo{
              height: 30px;
              width: 205px;
              margin-right: 30px;
              @media screen and (max-width: 750px){
                height: 20px;
                width: 137px;
                margin-right: 20px;
              }
              &:hover{
                cursor: pointer;
              }
            }
            .nav-item{
              position: relative;
              margin: 0px 20px;
              padding: 3px;
              font-size: 20px;
              font-weight: 600;
              color: $fp;
              letter-spacing: 1px;
              white-space: nowrap;
              @media screen and (max-width: 1000px){
                margin: 0px 10px;
              }
              @media screen and (max-width: 750px){
                margin: 0px 5px;
                font-size: 14px;
              }
              .nav-title{
                position: relative;
                // border: 3px solid #FFF;
                user-select: none;
                padding: 2px 4px;
                border-bottom: 2px solid #FFF;
                &:hover{
                  cursor: pointer;
                  color: $fp;
                  border-bottom: 2px solid $p;
                }
                &.active{
                  color: $fp;
                  border-bottom: 2px solid $p;
                  // &::after{
                  //   content: "";
                  //   position: absolute;
                  //   bottom: -5px;
                  //   left: -3px;
                  //   width: calc(100% + 6px);
                  //   height: 2px;
                  //   background-color: $fp;
                  // }
                  // border-bottom: 3px solid $fp;
                }
              }
              .nav-menu{
                position: absolute;
                bottom: -16px;
                left: -24px;
                transform: translateY(100%);
                background-color: #FFF;
                padding: 15px 0px 5px 0px;
                box-shadow: $z_depth_1;
                @media screen and (max-width: 750px){
                  bottom: -8px;
                }
                .nav-mask{
                  position: absolute;
                  top: -5px;
                  left: 0px;
                  width: 100%;
                  height: 10px;
                  background-color: #FFF;
                }
                .nav-link{
                  display: block;
                  text-decoration: none;
                  padding: 0px 50px 22px 30px;
                  // font-family: "fresno",sans-serif;
                  // letter-spacing: 5px;
                  color: $fp;
                  font-size: 20px;
                  font-weight: 600;
                  letter-spacing: 1px;
                  white-space:nowrap;
                  @media screen and (max-width: 750px){
                    font-size: 16px;
                  }
                  &:hover{
                    cursor: pointer;
                    color: $fr;
                  }
                }
              }
            }
            .nav-fill{
              flex: 1;
              display: flex;
              justify-content: flex-end;
              .login{
                padding: 4px 20px;
                font-size: 18px;
                font-weight: 500;
                border: 2px solid #b5afb6;
                color: #b5afb6;
                // box-shadow: $z_depth_1;
                &:hover{
                  cursor: pointer;
                  border-color: $fr;
                  color: $fr;
                }
              }
            }
          }
          #mobile-nav-container{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0px 20px;
            color: $p;
            .menu-button{
              font-family: "fresno",sans-serif;
              font-size: 19px;
              letter-spacing: 3px;
              display: flex;
              user-select: none;
              .menu-icon{
                margin-right: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                &.back{
                  .first{
                    width: 12px;
                    transform: translateX(-6px) translateY(2.5px) rotateZ(-45deg);
                  }
                  .last{
                    width: 12px;
                    transform: translateX(-6px) translateY(-2.5px) rotateZ(45deg);
                  }
                }
                div{
                  width: 20px;
                  height: 3px;
                  background-color: $p;
                  transition: all 0.1s ease;
                  &:not(:first-child){
                    margin-top: 3px;
                  }
                }
              }
              // .fade-enter, .fade-leave-to{
              //   opacity: 0;
              // }
              // .fade-enter-active, .fade-leave-active{
              //   transition: opacity 0.3s ease;
              // }
            }
            #futura-banner-logo{
              height: 30px;
              width: 205px;
              @media screen and (max-width: 750px){
                height: 20px;
                width: 137px;
              }
            }
          }
        }
        .slide-in-enter, .slide-in-leave-to{
          transform: translateX(-100%);
        }
        .slide-in-enter-active, .slide-in-leave-active{
          transition: all 0.5s ease;
        }
        #side-menu{
          position: fixed;
          top: 0px;
          left: 0px;
          width: 120vw;
          height: 100vh;
          background-color: $edp;
          z-index: 50;
          box-shadow: $z_depth_3;
          padding-top: 80px;
          .menu-group{
            margin-bottom: 30px;
            font-weight: 500;
            .title{
              padding: 10px 60px;
              color: $r;
              font-size: 22px;
            }
            .link{
              padding: 10px 60px;
              font-size: 26px;
              color: #FFF;
              &:hover{
                background-color: $dp;
                cursor: pointer;
              }
              &:active{
                background-color: $dp;
              }
            }
          }
        }
        #view-container{
          padding-top: 60px;
          height: calc(100% - 60px);
          @media screen and (max-width: 750px){
            padding-top: 40px;
          }
        }
        #footer-page{
          background-color: $b2;
          color: #FFF;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 80px 30px 20px 30px;
          font-weight: 500;
          @media screen and (max-width: 1200px){
            padding: 60px 30px 0px 30px;
          }
          @media screen and (max-width: 850px){
            padding: 40px 70px 0px 70px;
            flex-direction: column;
          }
          @media screen and (max-width: 540px){
            padding: 40px 50px 0px 50px;
          }
          .group{
            display: flex;
            @media screen and (max-width: 850px){
              flex-wrap: wrap;
            }
          }
          .module{
            margin-right: 80px;
            @media screen and (max-width: 1200px){
              margin-right: 60px;
            }
            @media screen and (max-width: 1050px){
              margin-right: 50px;
            }
            @media screen and (max-width: 850px){
              // margin-right: 0px;
              margin-bottom: 30px;
              // min-width: 200px;
            }
            @media screen and (max-width: 650px){
              min-width: 160px;
            }
            @media screen and (max-width: 540px){
              // margin-right: 0px;
              margin-bottom: 10px;
              // min-width: 200px;
            }
            &.power-module{
              #hh-credit{
                width: 170px;
                opacity: 0.4;
                @media screen and (max-width: 1200px){
                  width: 160px;
                }
                @media screen and (max-width: 1050px){
                  width: 150px;
                }
                @media screen and (max-width: 540px){
                  margin-bottom: 18px;
                }
                &:hover{
                  opacity: 1;
                  cursor: pointer;
                }
              }
            }
            .title{
              font-size: 18px;
              margin-bottom: 14px;
              font-weight: 600;
              color: #FFF;
              @media screen and (max-width: 1200px){
                font-size: 16px;
              }
              @media screen and (max-width: 1050px){
                margin-bottom: 18px;
                font-size: 14px;
              }
              @media screen and (max-width: 540px){
                margin-bottom: 18px;
                font-size: 12px;
              }
            }
            .link{
              font-size: 18px;
              color: #888;
              margin-bottom: 10px;
              @media screen and (max-width: 1200px){
                font-size: 16px;
              }
              @media screen and (max-width: 1050px){
                margin-bottom: 18px;
                font-size: 14px;
              }
              @media screen and (max-width: 540px){
                margin-bottom: 18px;
                font-size: 12px;
              }
              &:hover{
                color: #FFF;
                cursor: pointer;
              }
              a{
                text-decoration: none;
                color: #888;
                &:hover{
                  color: #FFF;
                }
              }
            }
          }
          .logo {
            height: 70px;
            @media screen and (max-width: 850px){
              display: none;
            }
            @media screen and (max-width: 1050px){
              height: 60px;
            }
            @media screen and (max-width: 540px){
              height: 50px;
              margin-bottom: 15px;
            }
          }
        }
        #terms-page{
          background-color: $b2;
          color: #777;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          padding: 20px 10px 20px 10px;
          font-weight: 500;
          @media screen and (max-width: 1250px){
            font-size: 12px;
          }
          @media screen and (max-width: 540px){
            font-size: 10px;
          }
          div{
            margin: 0px 8px;
            &:hover{
              cursor: pointer;
              color: #FFF;
            }
          }
          // @media screen and (max-width: 1550px){
          //   font-size: 14px;
          //   height: 70px;
          // }
          // @media screen and (max-width: 1050px){
          //   font-size: 12px;
          //   height: 60px;
          // }
          // @media screen and (max-width: 700px){
          //   font-size: 10px;
          //   height: 50px;
          // }
          // @media screen and (max-width: 540px){
          //   font-size: 8px;
          //   height: 40px;
          // }
        }
      }
    }
  }
</style>

<template>
  <div id="app">
    <div id="nav-bar">
      <div id="full-nav-container" v-if="!$store.getters.mobile">
        <img id="futura-banner-logo" src="@/assets/_logos/futura_horizontal.svg" @click="goTo('/')" />
        <div class="nav-item">
          <div class="nav-title" :class="{'active': nav_selected == 0}" @click="nav_selected = 0">
            Products
          </div>
          <div class="nav-menu" v-if="nav_selected == 0" v-click-outside="()=>{nav_selected = -1}">
            <div class="nav-mask"></div>
            <div @click="goTo('/Atticus')" class="nav-link">
              ATTICUS
            </div>
            <div @click="goTo('/Respondent')" class="nav-link">
              RESPONDENT
            </div>
            <div @click="goTo('/Scribe')" class="nav-link">
              SCRIBE
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-title" @click="goTo('/Story')">
            Our Story
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-title" @click="goTo('/Contact')">
            Contact
          </div>
        </div>
        <!-- <div class="nav-fill">
          <div class="login">
            Login
          </div>
        </div> -->
      </div>
      <div id="mobile-nav-container" v-else>
        <div class="menu-button" @click="menu_open = !menu_open">
          <div class="menu-icon" :class="{'back': menu_open}">
            <div class="first"></div>
            <div class="middle"></div>
            <div class="last"></div>
          </div>
          <div class="menu-text" v-if="!menu_open" key="menu">
            MENU
          </div>
          <div class="back-text" v-else key="back">
            BACK
          </div>
        </div>
        <img id="futura-banner-logo" src="@/assets/_logos/futura_horizontal.svg" @click="goTo('/')" />
      </div>
    </div>
    <transition name="slide-in">
      <div id="side-menu" v-if="menu_open">
        <div class="menu-group">
          <div class="title">
            About
          </div>
          <div class="link" @click="goTo('/')">
            Home
          </div>
          <div class="link" @click="goTo('/Story')">
            Our Story
          </div>
          <div class="link" @click="goTo('/Contact')">
            Contact
          </div>
        </div>
        <div class="menu-group">
          <div class="title">
            Products
          </div>
          <div class="link" @click="goTo('/Atticus')">
            ATTICUS
          </div>
          <div class="link" @click="goTo('/Respondent')">
            RESPONDENT
          </div>
          <div class="link" @click="goTo('/Scribe')">
            SCRIBE
          </div>
        </div>
      </div>
    </transition>
    <div id="view-container">
      <router-view/>
    </div>
    <div id="footer-page">
      <div class="module">
        <img class="logo" src="@/assets/futura_logo_grey.svg" />
      </div>
      <div class="group">
        <div class="product-module module">
          <div class="title">
            Products
          </div>
          <div class="link" @click="goTo('/Atticus')">
            ATTICUS
          </div>
          <div class="link" @click="goTo('/Respondent')">
            RESPONDENT
          </div>
          <div class="link" @click="goTo('/Scribe')">
            SCRIBE
          </div>
        </div>
        <div class="about-module module">
          <div class="title">
            About
          </div>
          <div class="link" @click="goTo('/Story')">
            Our Story
          </div>
          <div class="link" @click="goTo('/Contact')">
            Contact
          </div>
        </div>
        <div class="power-module module">
          <div class="title">
            Powered by
          </div>
          <a href="https://www.hollandhart.com/" target="_blank">
            <img id="hh-credit" src="./assets/_logos/WhiteHHLogoShort.png" />
          </a>
        </div>
        <div class="support-module module">
          <div class="title">
            Special thanks to
          </div>
          <div class="link">
            <a href="https://vuejs.org/" target="_blank">
              Vue.js
            </a>
          </div>
          <div class="link">
            <a href="https://fontawesome.com/" target="_blank">
              Font Awesome
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="terms-page">
      <div @click="downloadFile('https://jurisfutura.com/futura-landing/Juris_Futura_Terms_of_Use.pdf')">
        Terms + Conditions
      </div>/
      <div @click="downloadFile('https://jurisfutura.com/futura-landing/Juris_Futura_Privacy_Policy.pdf')">
        Privacy Policy
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    created(){
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    data(){
      return{
        nav_selected: -1,
        menu_open: false
      }
    },
    methods: {
      handleResize() {
        this.$store.commit('updateScreenSize', {
          width: window.innerWidth,
          height: window.innerHeight
        })
      },
      goTo(route){
        this.menu_open = false;
        this.nav_selected = -1;
        this.$router.push(route)
      }
    }
  }
</script>

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
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: $z_depth_1;
          background-color: #FFF;
          z-index: 100;
          #nav-container{
            width: 100%;
            height: 100%;
            max-width: 1000px;
            padding: 0px 20px;
            display: flex;
            align-items: center;
            #futura-banner-logo{
              height: calc(100% - 30px);
              margin-right: 30px;
            }
            .nav-item{
              position: relative;
              margin: 0px 20px;
              padding: 3px;
              font-size: 18px;
              font-weight: 500;
              color: $fp;
              letter-spacing: 1px;
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
                  font-weight: 500;
                  letter-spacing: 1px;
                  white-space:nowrap;
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
        }
        #view-container{
          padding-top: 60px;
          height: calc(100% - 60px);
        }
      }
    }
  }
</style>

<template>
  <div id="app">
    <div id="nav-bar">
      <div id="nav-container">
        <img id="futura-banner-logo" src="@/assets/_logos/futura_horizontal.svg" @click="goTo('/')" />
        <div class="nav-item">
          <div class="nav-title" :class="{'active': nav_selected == 0}" @click="nav_selected = 0">
            Products
          </div>
          <div class="nav-menu" v-if="nav_selected == 0" v-click-outside="()=>{nav_selected = -1}">
            <div class="nav-mask"></div>
            <div @click="goTo('/Scribe')" class="nav-link">
              SCRIBE
            </div>
            <div @click="goTo('/OAScribe')" class="nav-link">
              RESPONDANT
              <!-- Respondent -->
            </div>
            <div @click="goTo('/Atticus')" class="nav-link">
              ATTICUS
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-title" @click="goTo('/Story')">
            Our Story
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-title">
            Contact
          </div>
        </div>
        <div class="nav-fill">
          <div class="login">
            Login
          </div>
        </div>
      </div>
    </div>
    <div id="view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        nav_selected: -1,
      }
    },
    methods: {
      goTo(route){
        this.nav_selected = -1;
        this.$router.push(route)
      }
    }
  }
</script>

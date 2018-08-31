<style lang="scss">
  @import url("https://use.typekit.net/umi0nir.css");
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,800,900');
  @import "./styles/constants.scss";
  html{
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    color: $text;
    body{
      padding: 0px;
      margin: 0px;
      width: 100%;
      height: 100%;
      color: #b5afb6;
      #app{
        // width: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
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
              margin-right: 20px;
            }
            .nav-item{
              position: relative;
              margin: 0px 20px;
              padding: 3px;
              font-size: 18px;
              font-weight: 500;
              .nav-title{
                position: relative;
                // border: 3px solid #FFF;
                user-select: none;
                &:hover{
                  cursor: pointer;
                  color: $fp;
                }
                &.active{
                  color: $fp;
                  &::after{
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: -3px;
                    width: calc(100% + 6px);
                    height: 2px;
                    background-color: $fp;
                  }
                  // border-bottom: 3px solid $fp;
                }
              }
              .nav-menu{
                position: absolute;
                bottom: -16px;
                left: -24px;
                transform: translateY(100%);
                background-color: #FFF;
                padding: 10px 0px 0px 0px;
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
                  padding: 0px 30px 18px 30px;
                  // font-family: "fresno",sans-serif;
                  // letter-spacing: 5px;
                  color: $fp;
                  font-size: 20px;
                  font-weight: 500;
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
        <img id="futura-banner-logo" src="@/assets/_logos/futura_horizontal.svg" />
        <div class="nav-item">
          <div class="nav-title" :class="{'active': nav_selected == 0}" @click="nav_selected = 0">
            Products
          </div>
          <div class="nav-menu" v-if="nav_selected == 0" v-click-outside="()=>{nav_selected = -1}">
            <div class="nav-mask"></div>
            <div class="nav-link">
              Scribe
            </div>
            <div @click="goTo('/Chatticus')" class="nav-link">
              Chatticus
            </div>
            <div class="nav-link">
              ROAR
            </div>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-title">
            About
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-title">
            Jobs
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

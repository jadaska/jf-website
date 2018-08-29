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
        width: 100%;
        height: 100%;
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
              height: calc(100% - 10px);
              margin-right: 20px;
              margin-left: -8px;
            }
            .nav-item{
              margin: 0px 20px;
              padding: 3px;
              border: 3px solid #FFF;
              font-size: 18px;
              font-weight: 500;
              &:hover{
                cursor: pointer;
                color: $fp;
              }
              &.active{
                border-bottom: 3px solid $fp;
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
          Products
        </div>
        <div class="nav-item">
          About
        </div>
        <div class="nav-item">
          Jobs
        </div>
        <div class="nav-fill">
          <div class="login">
            Login
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

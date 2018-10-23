<style lang="scss" scoped>
  @import "./common.scss";
  .loading{
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 1px;
    overflow: hidden;
    // @keyframes cross{
    //   0% {
    //     left: -100%;
    //   }
    //   100% {
    //     left: 200%;
    //   }
    // }
    span{
      position: absolute;
      top: 0px;
      left: -40%;
      width: 40%;
      // animation: cross 4s infinite;
      height: 4px;
      &:nth-child(1){
        // animation-delay: 0s;
        background-color: $b;
      }
      &:nth-child(2){
        // animation-delay: 0.5s;
        background-color: $y;
      }
      &:nth-child(3){
        // animation-delay: 1s;
        background-color: $r;
      }
      &:nth-child(4){
        // animation-delay: 1.5s;
        background-color: $g;
      }
      // &:nth-child(5){
      //   animation-delay: 2s;
      //   background-color: $b;
      // }
      // &:nth-child(6){
      //   animation-delay: 2.5s;
      //   background-color: $y;
      // }
      // &:nth-child(7){
      //   animation-delay: 3s;
      //   background-color: $r;
      // }
      // &:nth-child(8){
      //   animation-delay: 3.5s;
      //   background-color: $g;
      // }
    }
  }
</style>

<template>
  <div :id="_uid" class="loading">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <!-- <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span> -->
  </div>
</template>

<script>
  import { TweenMax, TimelineLite } from "gsap";
  export default{
    created(){

    },
    mounted(){
      console.log("STARTING");
      console.log(this._uid);
      var nodes = document.getElementById(this._uid).childNodes;
      var t0 = new TimelineMax({ repeat: -1 }).to(nodes[0], 2, {left:"100%", ease: "linear"});
      var t1 = new TimelineMax({ repeat: -1 }).to(nodes[1], 2, {left:"100%", ease: "linear"}).delay(0.5);
      var t2 = new TimelineMax({ repeat: -1 }).to(nodes[2], 2, {left:"100%", ease: "linear"}).delay(1);
      var t3 = new TimelineMax({ repeat: -1 }).to(nodes[3], 2, {left:"100%", ease: "linear"}).delay(1.5);
      // var t4 = new TimelineMax({ repeat: -1 }).to(nodes[4], 2, {left:"100%"}, 0.2).delay(2);
      // var t5 = new TimelineMax({ repeat: -1 }).to(nodes[5], 2, {left:"100%"}, 0.2).delay(2.5);
      // var t6 = new TimelineMax({ repeat: -1 }).to(nodes[6], 2, {left:"100%"}, 0.2).delay(3);
      // var t7 = new TimelineMax({ repeat: -1 }).to(nodes[7], 2, {left:"100%"}, 0.2).delay(3.5);
    }
  }
</script>

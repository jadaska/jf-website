<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";

  #contact{
    width: 100%;
    min-height: calc(100vh - 60px);
    min-width: 100%;
    background-color: $p;
    display: flex;
    // align-items: flex-start;
    justify-content: center;
    .card-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      // padding: 30px;
      padding-top: 40px;
      padding-bottom: 80px;
      justify-content: center;
      @media screen and (max-width: 620px){
        // padding: 20px;
        // padding-bottom: 30px;
      }
      @media screen and (max-width: 550px){
        padding-top: 20px;
      }
    }
    .card{
      background-color: #FFF;
      box-shadow: $z_depth_2;
      width: 500px;
      padding: 50px;
      position: relative;
      margin: 20px;
      // border: 3px solid $lp;
      @media screen and (max-width: 620px){
        width: 100%;
        margin: 20px;
        padding: 40px;
      }
      @media screen and (max-width: 450px){
        margin: 10px;
        padding: 30px;
      }
      &.contact-card{
        font-size: 16px;
        @media screen and (max-width: 450px){
          font-size: 14px;
        }
        .contact{
          margin-top: 36px;
          .role{
            color: $r;
            font-weight: 500;
          }
          .name{
            color: $dp;
          }
          .email{
            display: inline-block;
            color: $dp;
            border-bottom: 1px solid rgba(0,0,0,0);
            &:hover{
              cursor: pointer;
              border-bottom: 1px solid $p;
            }
          }
          div{
            margin-top: 10px;
          }
        }
      }
      &.message-card{
        .question-row{
          margin-bottom: 40px;
          .user-input{
            margin-bottom: 10px;
          }
        }
        .checkbox-title{
          margin-bottom: 5px;
        }
        .checkbox-row{
          display: flex;
          margin-bottom: 20px;
          @media screen and (max-width: 450px){
            flex-direction: column;
          }
          .col{
            width: 50%;
            @media screen and (max-width: 450px){
              width: 100%;
            }
          }
        }
        .send-button{
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%) translateY(50%);
          background-color: $r;
          color: #FFF;
          padding: 12px 40px;
          box-shadow: $z_depth_2;
          user-select: none;
          font-weight: 600;
          &:hover{
            cursor: pointer;
            background-color: $dr;
          }
          &:active{
            box-shadow: $z_depth_0;
          }
        }
      }
      .card-title{
        font-size: 28px;
        margin-bottom: 25px;
        color: $p;
        font-weight: 600;
        @media screen and (max-width: 620px){
          font-size: 26px;
        }
        @media screen and (max-width: 450px){
          font-size: 22px;
        }
      }
      .email{
        font-size: 20px;
        color: $r;
        font-weight: 500;
        display: inline-block;
        @media screen and (max-width: 620px){
          font-size: 16px;
        }
        border-bottom: 2px solid rgba(0,0,0,0);
        &:hover{
          cursor: pointer;
          border-bottom: 2px solid $r;
        }
      }
    }
    .or{
      color: #FFF;
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>

<template>
  <div id="contact">
    <div class="card-container">
      <div class="contact-card card">
        <div class="card-title">
          Email Our Team
        </div>
        <div class="email" @click="openMail('info@jurisfutura.com')">
          info@jurisfutura.com
        </div>
        <!-- <div class="contact">
          <div class="role">Operations/Commercial</div>
          <div class="name">Brian Fitzgerald</div>
          <div class="email" @click="openMail('bwfitzgerald@jurisfutura.com')">bwfitzgerald@jurisfutura.com</div>
        </div>
        <div class="contact">
          <div class="role">Marketing</div>
          <div class="name">Dawn Tinto</div>
          <div class="email" @click="openMail('detinto@jurisfutura.com')">detinto@jurisfutura.com</div>
        </div>
        <div class="contact">
          <div class="role">Product Development</div>
          <div class="name">Jason Adaska</div>
          <div class="email" @click="openMail('jwadaska@jurisfutura.com')">jwadaska@jurisfutura.com</div>
        </div> -->
      </div>
      <div class="or">
        or
      </div>
      <div class="message-card card">
        <div class="card-title">
          Send Us a Message
        </div>
        <div class="question-row">
          <v-input v-model="name" name="Name"></v-input>
          <v-input v-model="email" name="Email"></v-input>
          <v-textarea v-model="message" name="Message"></v-textarea>
        </div>
        <div class="checkbox-title">
          Im interested in:
        </div>
        <div class="checkbox-row">
          <div class="col">
            <v-checkbox v-model="areas.scribe" name="Scribe"></v-checkbox>
            <v-checkbox v-model="areas.atticus" name="Atticus"></v-checkbox>
            <v-checkbox v-model="areas.respondent" name="Respondent"></v-checkbox>
          </div>
          <div class="col">
            <v-checkbox v-model="areas.jobs" name="Jobs"></v-checkbox>
            <v-checkbox v-model="areas.partnership" name="Partnership"></v-checkbox>
          </div>
        </div>
        <div class="send-button">
          Send
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name: null,
        email: null,
        message: null,
        areas: {
          scribe: false,
          atticus: false,
          respondent: false,
          jobs: false,
          partnership: false,
        }
      }
    },
    methods: {
      openMail(address){
        window.open('mailto:'+address);
      }
    }
  }
</script>

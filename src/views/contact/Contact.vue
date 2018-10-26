<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";

  #contact{
    width: 100%;
    min-height: calc(100vh - 60px);
    min-width: 100%;
    background-color: #f6f6f6;
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
      color: $lp;
      font-size: 20px;
      font-weight: 500;
    }
    .sending, .sent{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .card-title{
        margin-bottom: 0px;
        margin-top: 20px;
        color: $r;
        &.error{
          margin-bottom: 20px;
          margin-top: 0px;
        }
      }
      .error-text{
        color: $p;
      }
    }
  }
</style>

<style lang="scss">
  #rocket-flight{
    // background-color: #FFF;
    border-radius: 50%;
    // border: 1px solid #AAA;
    width: 150px;
    height: 150px;
    position: relative;
    #rocket-container{
      z-index: 10;
      position: absolute;
      top: calc(50% - 20px);
      left: calc(50% - 35px);
      width: 60px;
      height: 60px;
      // border: 1px solid $lr;
      #rocket{
        position: absolute;
        top: 0%;
        right: 0%;
        width: 70%;
      }
      #flame{
        position: absolute;
        top: 46%;
        right: 46%;
        width: 40%;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-name: burn;
        animation-iteration-count: infinite;
      }
      @keyframes burn {
        0%{
          transform: scale(1) translate(0%, 0%);
        }
        70%{
          transform: scale(1.2) translate(-6%, 6%);
        }
        100%{
          transform: scale(1) translate(0%, 0%);
        }
      }
    }
    #star-fade{
      z-index: 5;
      position: absolute;
      top: 0px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: inset 0 0 20px 15px #FFF;
    }
    #star-container{
      z-index: 0;
      // border: 1px solid $lb;
      position: absolute;
      top: 0px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      .star{
        position: absolute;
        width: 30px;
        height: 30px;
        animation-duration: 0.6s;
        animation-timing-function: linear;
        animation-name: shoot;
        animation-iteration-count: infinite;
      }
      #star-1{
        top: -20%;
        left: 45%;
        animation-delay: 0.25s;
      }
      #star-2{
        top: -18%;
        left: 65%;
        animation-delay: 0.7s;
      }
      #star-3{
        top: -10%;
        left: 80%;
        animation-delay: 0.4s;
      }
      #star-4{
        top: 2%;
        left: 92%;
        animation-delay: 0s;
      }
      #star-5{
        top: 15%;
        left: 98%;
        animation-delay: 0.3s;
      }
      #star-6{
        top: 35%;
        left: 100%;
        animation-delay: 0.3s;
      }
      @keyframes shoot {
        0%{
          transform: translate(0px,-0px);
        }
        100%{
          transform: translate(-150px, 150px);
        }
      }
    }
  }
</style>

<style lang="scss">
  #rocket-landed{
    position: relative;
    width: 160px;
    height: 160px;
    // border: 1px solid #FAA;
    #planet{
      z-index: 0;
      // border: 1px solid #AAA;
      width: 120px;
      height: 120px;
      position: absolute;
      bottom: 0%;
      left: calc(50% - 60px)
    }
    .star{
      z-index: 5;
      width: 16px;
      height: 16px;
      position: absolute;
      opacity: 0.6;
      animation-duration: 4s;
      animation-timing-function: ease-in-out;
      animation-name: shine;
      animation-iteration-count: infinite;
    }
    #star-1{
      top: 32%;
      left: 20%;
      animation-delay: 1.6s;
    }
    #star-2{
      top: 5%;
      left: 30%;
      animation-delay: 0s;
    }
    #star-3{
      top: 20%;
      left: 70%;
      animation-delay: 0.5s;
    }
    @keyframes shine {
      0%{
        opacity: 0.6;
        transform: scale(1);
      }
      50%{
        opacity: 1;
        transform: scale(1.3);
      }
      100%{
        opacity: 0.6;
        transform: scale(1);
      }
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
      <!-- <div class="or">
        or
      </div>
      <div class="message-card card">
        <div class="sending" v-if="sending">
          <div id="rocket-flight">
            <div id="rocket-container">
              <img id="rocket" src="./assets/rocket/rocket.svg" />
              <img id="flame" src="./assets/rocket/flame.svg" />
            </div>
            <div id="star-fade"></div>
            <div id="star-container">
              <img id="star-1" class="star" src="./assets/rocket/trail.svg" />
              <img id="star-2" class="star" src="./assets/rocket/trail.svg" />
              <img id="star-3" class="star" src="./assets/rocket/trail.svg" />
              <img id="star-4" class="star" src="./assets/rocket/trail.svg" />
              <img id="star-5" class="star" src="./assets/rocket/trail.svg" />
              <img id="star-6" class="star" src="./assets/rocket/trail.svg" />
            </div>
          </div>
          <div class="card-title">
            Sending
          </div>
        </div>
        <div v-else-if="sent">
          <div class="sent" v-if="success">
            <div id="rocket-landed">
              <img id="star-1" class="star" src="./assets/rocket/star.svg" />
              <img id="star-2" class="star" src="./assets/rocket/star.svg" />
              <img id="star-3" class="star" src="./assets/rocket/star.svg" />
              <img id="planet" src="./assets/rocket/planet.svg" />
            </div>
            <div class="card-title">
              Message Recieved!
            </div>
          </div>
          <div class="sent" v-else>
            <div class="card-title error">
              Oh no! Something went wrong.
            </div>
            <div class="error-text">
              Please send us an email at: info@jurisfutura.com
            </div>
          </div>
        </div>
        <div v-else>
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
          <div class="send-button" @click="send()">
            Send
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import Requests from "@/mixins/requests.js";
  export default {
    mixins: [ Requests ],
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
        },
        sending: false,
        sent: false,
        success: false,
      }
    },
    methods: {
      openMail(address){
        window.open('mailto:'+address);
      },
      send(){
        this.sending = true;
        var data_obj = {
          name: this.name,
          email: this.email,
          message: this.message,
          areas: {
            scribe: this.scribe,
            atticus: this.atticus,
            respondent: this.respondent,
            jobs: this.jobs,
            partnership: this.partnership,
          }
        }
        var message_obj = {
          to: [{"emailAddress":"info@jurisfutura.com"}],
          from: {"emailAddress":"info@jurisfutura.com"},
          cc: [],
          subject: "Message From JurisFutura.com",
          plainBody: JSON.stringify(data_obj)
        }
        this.post("https://atticus.hollandhart.com/email/send/plain", JSON.stringify(message_obj)).then(val=>{
          this.sent = true;
          this.sending = false;
          this.success = true;
        }).catch(val=>{
          this.sent = true;
          this.sending = false;
          this.success = false;
        })
      }
    }
  }
</script>

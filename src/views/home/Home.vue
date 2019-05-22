<style src="./home.scss" lang="scss" scoped></style>
<style src="./styles/frontSection.scss" lang="scss" scoped></style>
<style src="./styles/messageSection.scss" lang="scss" scoped></style>
<style src="./styles/productSection.scss" lang="scss" scoped></style>

<template>
  <div id="home-page">
    <!-- <mesh></mesh> -->
    <div id="front-section" class="page">
      <div id="splash-container">
        <img class="splash-image" src="../../assets/splash_illustration.svg" />
        <div id="punch-title">
          <div class="static">
            We Make <br />Legal Technology
          </div>
          <transition name="text" mode="out-in">
            <div v-for="(p, index) in punches" v-if="index == active_punch_index" :key="index" class="dynamic">
              {{p}}
            </div>
          </transition>
          <div id="future-ribbon" @click="scrollToMission()">
            The Future of Law is Here
          </div>
        </div>
      </div>
      <!-- <div id="punch-sub-title">
        The Future of Law is Here.
      </div> -->
      <!-- <img class="arrow-down" src="@/assets/arrow_down.svg" /> -->
    </div>
    <div id="message-section">
      <!-- <div id="message-nav">
        <div class="message-section" v-for="(msg, msg_index) in messages" @click="setMessage(msg_index)">
          <div class="tab" :class="{'active': msg_index == active_messages_index}"></div>
        </div>
      </div> -->
      <transition-group name="swipe" mode="in-out" v-on:leave="leaveMessage">
        <div class="message-module" v-for="(msg, msg_index) in messages" v-if="msg_index == active_messages_index" :key="msg_index" :class="[msg.color]">
          <transition name="swipe-out">
            <div class="slider-container" v-if="!in_message_description && !mobile">
              <div class="slider"></div>
              <div class="image-contrainer">
                <!-- <div class="fa" :class="msg.image_path"></div> -->
                <img :src="msg.image_path" />
              </div>
            </div>
          </transition>
          <div class="background" :class="{'full': in_message_description}">
            <div class="message-container" @click="in_message_description = !in_message_description; setMessage(msg_index)">
              <div class="nav next fa fa-caret-right" @click.stop="nextMessage(1)"></div>
              <div class="nav previous fa fa-caret-left" @click.stop="nextMessage(-1)"></div>
              <div class="module">
                <div class="title">
                  <span v-html="msg.title"></span>
                </div>
                <transition name="expand" @leave="leaveMessageDescription" @enter="enterMessageDescription">
                  <div class="description" v-if="in_message_description" v-html="msg.description"></div>
                </transition>
                <!-- <br /><br /> -->
                <div class="message-learn-more" v-if="!in_message_description">
                  <!-- <span class="fa fa-arrow-down"></span> -->
                  Show More
                </div>
                <div class="message-learn-more" v-if="in_message_description">
                  <!-- <span class="fa fa-arrow-up"></span> -->
                  Show Less
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <div id="product-section">
      <div class="product-card">
        <div class="product-name">
          Respondent
        </div>
        <div class="product-description">
          Rapid Office Action<br />
          Responses
        </div>
        <div class="learn-more">
          Learn more
        </div>
        <div class="product-logo">
          <img src="../../assets/respondent_logo.svg" />
        </div>
      </div>
      <div class="product-card">
        <div class="main-card"></div>
        <div class="solutions-header">
          Our Solutions
        </div>
        <div class="product-name main">
          Juvo
        </div>
        <div class="product-description">
          A platform for optimizing<br />
          legal workflows
        </div>
        <div class="learn-more">
          Learn more
        </div>
        <div class="product-logo">
          <img src="../../assets/juvo_logo.svg" />
        </div>
      </div>
      <div class="product-card">
        <div class="product-name">
          Scribe
        </div>
        <div class="product-description">
          Simple and Swift<br />
          Document Creation
        </div>
        <div class="learn-more">
          Learn more
        </div>
        <div class="product-logo">
          <img src="../../assets/scribe_logo.svg" />
        </div>
      </div>
      <!-- <div class="selection-area" v-if="!mobile">
        <div class="row">
          <div class="selection-title">
            Our Solutions
          </div>
        </div>
        <div class="row" v-for="(product, product_index) in products" @click="setProduct(product_index)">
          <transition name="float-select" @leave="leaveProduct" @enter="enterProduct">
            <div :id="product_index" class="select" v-if="active_product_index == product_index"></div>
          </transition>
          <div class="selection">
            <span class="bullet"></span>
            <span class="selection-text" v-html="product.description"></span>
          </div>
        </div>
      </div>
      <div class="product-area" v-if="!mobile">
        <transition name="drop-in" mode="out-in">
          <div class="product" v-for="(product, product_index) in products" :key="product_index" v-if="active_product_index == product_index">
            <div class="product-module" @click="goTo(product.link_path)">
              <img class="product-logo" :class="product.name.toLowerCase()" :src="product.image_path" />
              <div class="product-name">
                {{product.name}}
              </div>
              <div class="product-learn-more">
                Learn More
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="mobile-area" v-if="mobile">
        <div class="solutions">
          Our Solutions
        </div>
        <div class="product" v-for="(product, product_index) in products">
          <div class="product-module" @click="goTo(product.link_path)">
            <img class="product-logo" :class="product.name.toLowerCase()" :src="product.image_path" />
            <div class="product-name">
              {{product.name}}
            </div>
            <div class="product-description" v-html="product.description"></div>
            <div class="product-learn-more">
              Learn More
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <contact-footer></contact-footer>
  </div>
</template>

<script src="./home.js"></script>

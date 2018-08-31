<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .fade-enter-active, .fade-leave-active {
    transition-duration: 3s;
    transition-property: opacity;
    transition-property: height, opacity;
    transition-timing-function: ease;
    overflow: hidden;
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    transform: translate(30%, 0);
    #section-nav {
      position: absolute;
    }
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    transform: translate(-30%, 0);
  }
  .slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
    overflow: hidden;
    transition: height 0.6s ease, opacity 0.5s ease, transform 0.6s ease
  }
</style>

<template>
  <div id="chatticus" class="product-container">
    <!-- @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter" -->
    <div id="section-nav">
      <div class="section" v-for="(section, section_index) in sections" @click="scrollToSection(section)">
        <div class="box" :class="{'active': section_index == active_section}"></div>
      </div>
    </div>
    <!-- @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter" -->
    <transition :name="transition_name" mode="out-in">
      <router-view :save-scroll="saved_scroll"></router-view>
    </transition>
    <start-today></start-today>
    <contact-footer></contact-footer>
  </div>
</template>

<script>
  import contactFooter from "@/components/footer.vue"
  import startToday from "./components/StartFooter.vue"

  const DEFAULT_TRANSITION = 'fade';

  export default {
    components: { contactFooter, startToday },
    created() {
      this.$router.beforeEach((to, from, next) => {
        if(from.meta.save_scroll){
          this.saved_scroll = document.getElementById("chatticus").scrollTop
        }
        let transition_name = to.meta.transition_name || from.meta.transition_name;
        if (transition_name === 'slide') {
          const toDepth = to.path.split('/').length;
          const fromDepth = from.path.split('/').length;
          transition_name = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }
        this.transition_name = transition_name || DEFAULT_TRANSITION;
        next();
      });
    },
    mounted(){
      this.chatticus_elm = document.getElementById("chatticus");
      this.chatticus_elm.addEventListener('scroll', (e)=>{
        this.scrollDownEvent();
      });
      this.sections = document.getElementsByClassName("page-section");
    },
    data() {
      return {
        transition_name: DEFAULT_TRANSITION,
        prev_height: 0,
        saved_scroll: 0,
        chatticus_elm: null,
        sections: [],
        active_section: 0,
      };
    },
    methods: {
      beforeLeave(element) {
        this.prev_height = getComputedStyle(element).height;
      },
      enter(element) {
        var height = getComputedStyle(element).height;
        element.style.height = this.prev_height;
        setTimeout(() => {
          element.style.height = height;
        });
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },



      scrollToSection(section){
        // console.log("---------");
        // console.log(this.chatticus_elm.scrollTop);
        // console.log(this.chatticus_elm.clientHeight);
        // console.log(this.chatticus_elm.scrollHeight);
        // console.log(section.scrollHeight)
        var section_margin = section.currentStyle || window.getComputedStyle(section);
        var section_margin_top = parseInt(section_margin.marginTop.replace("px", ""));
        TweenLite.to(this.chatticus_elm, 1, {scrollTop: section.offsetTop - section.scrollTop + section.clientTop - section_margin_top - 60, ease: Sine.easeInOut})
      },
      scrollDownEvent(){
        for(var s in this.sections){
          if(this.chatticus_elm.scrollTop < this.sections[s].offsetTop){
            this.active_section = s;
            break;
          }
        }
      },
    },
  }
</script>

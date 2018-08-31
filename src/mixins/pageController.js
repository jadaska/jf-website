const DEFAULT_TRANSITION = 'fade';

export default {
  created() {
    this.$router.beforeEach((to, from, next) => {
      if(from.meta.save_scroll){
        this.saved_scroll = document.getElementById("app").scrollTop
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
  data() {
    return {
      transition_name: DEFAULT_TRANSITION,
      prev_height: 0,
      saved_scroll: 0,
    };
  },
  methods: {
    ///////////////////////////// Hide Footers ///////////////////////////////
    beforeLeave(element) {
      var footer = document.getElementById("get-started-banner");
      var product_col = document.getElementsByClassName("product-col")[0];
      var new_height = product_col.clientHeight + this.app_elm.clientHeight - footer.getBoundingClientRect().top
      TweenLite.to(product_col, 0.1, {css: {height: new_height+"px"}, ease: Sine.easeInOut})
    },
    enter(element) {
      var footer = document.getElementById("get-started-banner");
      var product_col = document.getElementsByClassName("product-col")[0];
      var height = product_col.clientHeight;
      var new_height = product_col.clientHeight + this.app_elm.clientHeight - footer.getBoundingClientRect().top
      product_col.style.height = new_height+"px";
      setTimeout(() => {
        TweenLite.to(product_col, 0.1, {css: {height: height+"px"}, ease: Sine.easeInOut})
      });
    },
  }
}

export default {
  mounted(){
    this.app_elm = document.getElementById("app");
    this.app_elm.addEventListener('scroll', (e)=>{
      this.scrollDownEvent();
    });
    this.sections = document.getElementsByClassName("page-section");
  },
  data(){
    return {
      app_elm: null,
      sections: [],
      active_section: 0,
    }
  },
  methods: {
    scrollToSection(section){
      var section_margin = section.currentStyle || window.getComputedStyle(section);
      var section_margin_top = parseInt(section_margin.marginTop.replace("px", ""));
      TweenLite.to(this.app_elm, 1, {scrollTop: section.offsetTop - section.scrollTop + section.clientTop - section_margin_top - 60, ease: Sine.easeInOut})
    },
    scrollDownEvent(){
      for(var s in this.sections){
        if(this.app_elm.scrollTop < this.sections[s].offsetTop){
          this.active_section = s;
          break;
        }
      }
    },
  }
}

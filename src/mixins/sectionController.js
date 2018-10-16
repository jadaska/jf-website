export default {
  mounted(){
    window.addEventListener('scroll', (e)=>{
      this.scrollDownEvent();
    });
    this.sections = document.getElementsByClassName("page-section");
  },
  data(){
    return {
      sections: [],
      active_section: -1,
    }
  },
  methods: {
    scrollToSection(section){
      var section_margin = section.currentStyle || window.getComputedStyle(section);
      var section_margin_top = parseInt(section_margin.marginTop.replace("px", ""));
      TweenLite.to(window, 1, {scrollTo: {y:section.offsetTop - section.scrollTop + section.clientTop - section_margin_top - 60}, ease: Sine.easeInOut})
    },
    scrollDownEvent(){
      this.active_section = -1
      for(var s in this.sections){
        if(window.scrollY > this.sections[s].offsetTop - 300){
          this.active_section = s;
          // break;
        }
      }
    },
  }
}

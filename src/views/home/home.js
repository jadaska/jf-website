import { TweenLite, TimelineLite } from "gsap";
import Mesh from "./components/Mesh.vue";
import contactFooter from "@/components/footer.vue";

export default{
  components: { Mesh, contactFooter },
  props: [ "appElm", "sections", "saveScroll" ],
  created(){
    // Start punch animations
    this.startHomeAnimation();
    this.startMessageAnimation();
    this.startProductAnimation();
  },
  mounted: function(){
    // if(this.appElm){
    //   if(this.saveScroll){
    //     this.appElm.scrollTop = this.saveScroll;
    //   }else{
    //     this.appElm.scrollTop = 0;
    //   }
    // }
    var message_elm = document.getElementById("message-section");
    if(message_elm){
      message_elm.addEventListener('touchstart', this.handleTouchStart, false);
      message_elm.addEventListener('touchmove', this.handleTouchMove, false);
    }
  },
  data(){
    return {
      active_punch_index: 0,
      punch_loop: null,
      punch_delay: 2500,
      active_product_index: 0,
      punches: [
        "Powerful.",
        "Fast.",
        "Real.",
        "Beautiful.",
        "Easy.",
        "For You.",
      ],
      active_messages_index: 0,
      previous_messages_index: 0,
      message_loop: null,
      message_delay: 4500,
      in_message_description: false,
      messages: [
        {
          title: "Designed for Practitioners<br> by Legal Professionals",
          description: "Powered by US law firm Holland & Hart, our team works daily with legal practitioners to understand their needs, and creates technology solutions to support their substantive legal work and administrative workflows.<br><br>Through real-time feedback and direct access, we can help drive efficiencies, cost-savings, and increased productivity to positively impact practitioners’ lives and firms’ bottom lines.<br><br>",
          //"Powered by US law firm Holland & Hart, our team of technology developers work daily with attorneys and practitioners to understand their needs, so we can invent powerful new tools to support their substantive legal work and administrative workflows.",
          image_path: "./Test4.svg",
          color: "red",
        },{
          title: "Focus Your Time<br>Where It Matters Most",
          description: "We understand the pressures for legal practitioners to maximize efficiency without a compromise on quality, and that valuable time is often lost on administrative tasks.<br><br>Our solutions help practitioners focus their time and effort where it matters most, by solving tangible, everyday problems and removing some of the distractions they experience.<br><br>",
          // "We understand the pressures for legal practitioners to maximize efficiency without a compromise on work quality, and that too much time is spent on non-billable tasks.  Our solutions help practitioners focus on what matters and perform at their highest and best use, through removing some of the pain points and non-billable distractions they experience."
          image_path: "./Test.svg",
          color: "blue",
        },{
          title: "Enjoy A Frictionless<br>Technology Experience",
          description: "The simplicity of our legal automation technologies aim to minimize the need for practitioners to switch between technology applications to get their work done.<br><br>Our solutions insert new capabilities into practitioners’ existing workflows, learn users’ behavior and preferences, and automate tasks that do not need to be completed by a legal professional.<br><br>",
          // "Some legal technology solutions attempt to solve problems involving the highest functionalities or the highest stakes. We believe real value starts with the little things that will make an astronomical difference to practitioners’ day-to-day lives and their law firm’s bottom line.",
          image_path: "./Test3.svg",
          color: "yellow",
        }
      ],
      xDown: null,
      yDown: null,
      last_swipe_direction: null,
      product_loop: null,
      product_delay: 3000,
      product_callback: null,
      animate_product_select: true,
      products: [
        {
          name: "Atticus",
          description: "A platform for optimizing<br>legal practitioners’ workflow",
          image_path: "./futura_atticus.svg",
          link_path: "/Atticus"
        },{
          name: "Respondent",
          description: "Rapid Office Action<br>Responses",
          image_path: "./respondent.svg",
          link_path: "/Respondent"
        },{
          name: "Scribe",
          description: "Simple and Swift<br>Document Creation",
          image_path: "./scribe.svg",
          link_path: "/Scribe"
        }
      ]
    }
  },
  computed: {
    active_punch(){
      return this.punches[this.active_punch_index];
    },
    mobile(){
      return this.$store.getters.mobile
    }
  },
  methods: {
    scrollToMission(){
      var elm = document.getElementById("message-section");
      if(elm){
        this.scrollToSection(elm);
      }
    },
    scrollToSection(section){
      var section_margin = section.currentStyle || window.getComputedStyle(section);
      TweenLite.to(window, 1, {scrollTo: {y:section.offsetTop - section.scrollTop + section.clientTop - 60}, ease: Sine.easeInOut})
    },
    startHomeAnimation(){
      this.punch_loop = setInterval(()=>{
        if(this.active_punch_index >= this.punches.length-1){
          this.active_punch_index = 0;
        }else{
          this.active_punch_index++;
        }
      }, this.punch_delay);
    },
    startMessageAnimation(){
      this.message_loop = setInterval(()=>{
        this.previous_messages_index = this.active_messages_index;
        if(this.active_messages_index >= this.messages.length-1){
          this.active_messages_index = 0;
        }else{
          this.active_messages_index++;
        }
      }, this.message_delay);
    },
    startProductAnimation(){
      this.product_loop = setInterval(()=>{
        if(this.active_product_index >= this.products.length-1){
          this.active_product_index = 0;
        }else{
          this.active_product_index++;
        }
      }, this.product_delay);
    },
    leaveMessage(el, done){
      el.style.zIndex = "2";
      var swipe_out = new TimelineLite();
      var slider = el.querySelector('.slider')
      if(el && slider){
        swipe_out.add( TweenLite.to(slider, 0.5, {width: "100%", ease: Sine.easeInOut}), 0);
        swipe_out.add( TweenLite.to(el, 0.5, {x: "100%", ease: Sine.easeInOut}), 0.5);
        swipe_out.eventCallback("onComplete", function(){
          done();
        });
      }else{
        var x = "100%";
        if(this.last_swipe_direction == "left"){
          x = "-100%";
        }
        swipe_out.add( TweenLite.to(el, 0.5, {x: x, ease: Sine.easeInOut}), 0);
        swipe_out.eventCallback("onComplete", function(){
          done();
        });
      }
    },
    enterMessageDescription(el, done){
      var swipe_out = new TimelineLite();
      swipe_out.add( TweenLite.from(el, 0.5, {height: 0, ease: Sine.easeInOut}), 0);
      swipe_out.add( TweenLite.from(el, 0.5, {opacity: 0, ease: Sine.easeInOut}), 0.4);
      swipe_out.eventCallback("onComplete", function(){
        done();
      });
    },
    leaveMessageDescription(el, done){
      var swipe_out = new TimelineLite();
      swipe_out.add( TweenLite.to(el, 0.5, {opacity: 0, ease: Sine.easeInOut}), 0);
      swipe_out.add( TweenLite.to(el, 0.5, {height: 0, ease: Sine.easeInOut}), 0.4);
      swipe_out.eventCallback("onComplete", function(){
        done();
      });
    },
    leaveProduct(el, done){
      if(this.animate_product_select){
        if(el.id >= this.products.length-1){
          var dy = -100 * (this.products.length - 1);
          TweenLite.to(el, 0.5, {y: dy+"%", ease: Sine.easeInOut, onComplete: this.completeProductSwitch, onCompleteParams:[done]})
        }else{
          TweenLite.to(el, 0.5, {y: "100%", ease: Sine.easeInOut, onComplete: this.completeProductSwitch, onCompleteParams:[done]})
        }
      }else{
        done();
      }
    },
    enterProduct(el, done){
      if(this.animate_product_select){
        el.style.opacity = "0";
        this.product_callback = ()=>{
          el.style.opacity = "1";
          done();
        }
      }else{
        done();
      }
    },
    completeProductSwitch(done){
      if(this.product_callback){
        this.product_callback();
      }
      done();
    },
    setMessage(index){
      console.log("Called")
      clearInterval(this.message_loop);
      this.active_messages_index = index;
    },
    nextMessage(inc){
      clearInterval(this.message_loop);
      this.active_messages_index += inc;
      if(this.active_messages_index < 0){
        this.active_messages_index = this.messages.length - 1;
      }else if(this.active_messages_index > this.messages.length - 1){
        this.active_messages_index = 0;
      }
      if(inc > 0){
        this.last_swipe_direction = "left";
      }else{
        this.last_swipe_direction = "right";
      }
    },
    setProduct(index){
      clearInterval(this.product_loop);
      this.active_product_index = index;
      this.animate_product_select = false;
      document.getElementById(index).style.opacity = "1";
    },
    goTo(route){
      this.$router.push(route)
    },

    ///////////////////////////// Swiping //////////////////////////////////////

    getTouches(evt){
      return evt.touches || evt.originalEvent.touches;
    },
    handleTouchStart(evt){
      this.xDown = this.getTouches(evt)[0].clientX;
      this.yDown = this.getTouches(evt)[0].clientY;
    },
    handleTouchMove(evt){
      if( ! this.xDown || ! this.yDown ){
        return;
      }
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;
      if( Math.abs( xDiff ) > Math.abs( yDiff ) ){
        if( xDiff > 0 ){
          /* left swipe */
          this.nextMessage(-1);
          this.last_swipe_direction = "left";
        }else{
          /* right swipe */
          this.nextMessage(1);
          this.last_swipe_direction = "right";
        }
      }else{
        if( yDiff > 0 ){
          /* up swipe */
          this.last_swipe_direction = "up";
        }else{
          /* down swipe */
          this.last_swipe_direction = "down";
        }
      }
      this.xDown = null;
      this.yDown = null;
    }
  }
}

export default{
  props: [ "noFilter" ],
  data(){
    return{
      autofill_selected: -1,
      show_autofill: false
    }
  },
  computed: {
    show_visible_autofills: function(){
      return this.show_autofill && this.visible_autofills.length > 0;
    },
    visible_autofills: function(){
      if(this.options){
        if(this.noFilter){
          return this.options;
        }else{
          return this.options.filter(opt => {
            if(opt){
              if(this.active_value){
                if(this.getOption(opt).toLowerCase() == this.active_value.toLowerCase()){
                  return false;
                }else if(this.getOption(opt).toLowerCase().indexOf(this.active_value.toLowerCase()) > -1){
                  return true;
                }
              }else{
                return true;
              }
            }
            return false;
          });
        }
      }else{
        return [];
      }
    }
  },
  methods: {
    getOption(opt){
      if(typeof opt == "string"){
        return opt;
      }else{
        return opt.display;
      }
    },
    showAutofill(){
      this.show_autofill = true;
      this.$nextTick(()=>{
        this.setAutofillHeight();
        if(document.getElementById("servant")){
          document.getElementById("servant").addEventListener('scroll', this.setAutofillHeight)
        }
      })
    },
    setAutofillHeight(){
      if(this.show_visible_autofills){
        var autofill = document.getElementById('autofill:'+this._uid);
        var position = autofill.getBoundingClientRect();
        autofill.style.maxHeight = (window.innerHeight - 60 - position.y) + "px";
      }
    },
    hideAutofill(){
      this.show_autofill = false;
      this.autofill_selected = -1;
      if(document.getElementById("servant")){
        document.getElementById("servant").removeEventListener('scroll', this.setAutofillHeight);
      }
    },
    fillValue(opt){
      console.log(opt);
      if(typeof opt == "string"){
        this.active_value = opt;
      }else{
        this.active_value = opt.value;
      }
      // this.hideAutofill();
    },
    autofill(e){
      if(this.autofill_selected > -1 && this.autofill_selected < this.visible_autofills.length){
        e.preventDefault();
        this.fillValue(this.visible_autofills[this.autofill_selected]);
        this.autofill_selected = -1;
      }
    },
    scrollAutofill(inc){
      if(this.show_visible_autofills){
        if(this.autofill_selected == -1){
          if(inc > 0){
            this.autofill_selected = 0;
          }
        }else{
          if(inc > 0){
            if(this.autofill_selected == this.visible_autofills.length-1){
              this.autofill_selected = 0;
            }else{
              this.autofill_selected += inc;
            }
          }else if(inc < 0){
            if(this.autofill_selected == 0){
              this.autofill_selected = this.visible_autofills.length-1;
            }else{
              this.autofill_selected += inc;
            }
          }
        }
        // scroll into view
        var autos = document.getElementById('autofill:'+this._uid).querySelectorAll('.autofill');
        if(autos && autos.length > 0){
          autos[this.autofill_selected].scrollIntoView({behavior: "instant", block: "nearest", inline: "nearest"});
        }
      }
    }
  }
}

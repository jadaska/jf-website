import loading from "./Loading.vue"

export default{
  components: { loading },
  props: ["value", "name", "options", "list", "validations", "error", "tooltip", "placeholder", "scope", "locked", "loading"],
  inject: ['$validator'],
  data(){
    return{
      focus: false
    }
  },
  computed: {
    active_value: {
      get(){
        if(this.locked && (this.value == "" || !this.value)){
          return "empty";
        }else{
          return this.value;
        }
      },
      set(val){
        this.$emit("update:value", val);
        this.$emit("input", val);
      }
    },
    active_validations: function(){
      if(this.validations){
        return this.validations;
      }else{
        return "";
      }
    },
    active_error: function(){
      if(this.error){
        return this.error;
      }else if(this.errors.first(this.name, this.scope)){
        return this.errors.first(this.name, this.scope);
      }
    },
    show_placeholder: function(){
      return this.focus == true && (!this.active_value || this.active_value =='');
    }
  }
}

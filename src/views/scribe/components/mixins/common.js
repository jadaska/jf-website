export default{
  props: [ "appElm" ],
  mounted: function(){
    if(this.appElm){
      this.appElm.scrollTop = 0;
    }
  }
}

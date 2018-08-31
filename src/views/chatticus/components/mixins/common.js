export default{
  data(){
    return{
      chatticus_elm: null,
    }
  },
  mounted: function(){
    console.log("CALLED");
    this.chatticus_elm = document.getElementById("chatticus");
    this.chatticus_elm.scrollTop = 0;
  }
}

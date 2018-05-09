<template>
  <div id="example" v-bind:style="[myColor]">
    <button id="btn1" v-bind:class = "info.backgroundColor"></button>
  </div>
</template>
<script>
  export default {
    el : "#example",
    data : {
      myColor : { backgroundColor : 'purple' },
      s1 : false,
      s2 : false
    },
    computed : {
      info : () => {
        if(this.s1 != false){
          return { backgroundColor:'red'}
        }else{
          return { backgroundColor:'blue'}
        }
      }
    }
  }
</script>
<style>

</style>

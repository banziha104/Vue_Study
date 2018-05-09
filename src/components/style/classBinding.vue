<template>
  <div id="example" v-bind:style="[myColor]">
    <button id="btn1" v-bind:class = "{set1:s1, set2:s2}"></button>
  </div>
</template>
<script>
  export default {
    el : "#example",
    data : {
      myColor : { backgroundColor : 'purple' },
      s1 : false,
      s2 : false
    }
  }
</script>
<style>

</style>

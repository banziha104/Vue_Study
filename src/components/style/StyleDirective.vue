<template>
  <div id="example" v-bind:style="[myColor]">

  </div>
</template>
<script>
  export default {
    el : "#example",
    data : {
      myColor : { backgroundColor : 'purple' }
    }
  }
</script>
<style>

</style>

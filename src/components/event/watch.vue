<template>

</template>
<script>
  import {Observable, Publish} from 'rxjs'
  export default {
    el : "#example",
    data : {x:0,y:0,sum:0},
    watch : {
      x : () =>{
        console.log("## x 변경");
      }
    }
  }
</script>

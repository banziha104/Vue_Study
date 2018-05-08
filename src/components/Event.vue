<template>
  <div id ="example">
    <div id = "outer" @onclick.stop ="deposit">

    </div>
  </div>
</template>
<script>
  export default {
    el : "#example",
    data : {
      amount : 0,
      balance : 0,
    },
    methods : {
      deposit : () => {
        console.log("예금")
      },
      withdraw : () =>{
        console.log("인출")
      }
    }
  }
</script>

# 스타일

- data로 넘기기

```html
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
```

- v-bind:class 를 이용해 클래스 바인딩

```html

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

```

- 메서드 계산 속성으로 스타일 적용

```html

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

```

# Vuex

> 생태 관리 라이브러리, redux와 유사

- store를 중심으로 작동, 변이를 통해서만 변경가능
- 변이는 상태 변화가 목표
- 상태 변화와 관련이 없는 작업은 액션으로 정의해 변이쪽으로 커밋

```javascript

<template>
  <div id="app">
    Parent Counter : {{ this.$store.state.counter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>
</template>
<script>
  import Child from "./Child.vue";

  export default {
    methods : {
      addCounter(){
        this.$store.state.counter++
      },
      subCounter(){
        this.$store.state.counter--
      }
    },
    components : {
      'child' : Child
    }
  }
</script>


```

### 상태와 변이

- 상태 : 어플리케이션의 데이터
- 변이 : 상태를 변경하는 함수를 보유하고 있는 객체

```javascript
// 변이 적용전
export default {
    methods : {
      addCounter(){
        this.$store.getters.getCounter++
      },

```

```javascript

  export default {
    methods : {
      addCounter(){
        this.$store.commit('addCounter',10) // payload로 넘어
      },
```
### Getter

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    counter : 0
  },
  getters : {
    getCounter : (state) => {
      return state.counter
    }
  }
})

```

- mapGetters : vuex에 내장된 함수로, 맵핑으로 적용

```javascript

// mapGetters
computed : {
      parentCounter(){
        return this.$store.state.counter;
      }
    },

```

```javascript
// mapGetters 적용후
computed : {
      ...mapGetters([
        'getCounter'
      ])
    },
```

### Actions

> 비동기 처리 로직을 작성

```javascript
// 액션을 만듬
 actions : {
    addCounter : (context) => {
      return context.commit('addCounter')
    },
    getSeverData : (context) => {
      return axios.get("www.naver.com").then((res) => {})
    }
  }
```

```javascript
// 액션 사용
  export default {
    methods : {
      addCounter(){
        this.$store.commit('addCounter',10)
        this.$store.dispatch('addCounter')
      },
```

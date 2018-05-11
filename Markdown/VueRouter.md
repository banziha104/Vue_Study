# Nested Router

* 라우터로 화면 이동시 여러개의 컴포넌트를 동시에 렌더링 할 수 있다.
* 렌더링되는 컴포넌트구조는 큰 상위컴포넌트가 하위컴포 넌트를 포함하는 Parent - Child 형태와 같다

```javascript
// 뷰 라우터 생성
const router =  new VueRouter({
    routes : [
      { path: '/' , components : Home},
      { path: '/home' , components : Home},
      { path: '/about' , components : About},
      { path: '/comtacts' , components : Contacts},
    ]
  })
```

```html
// 라우트 이벤트 발생 -> router-link
<li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/contacts">Contacts</router-link>
            </li>
```

```html
// 라우트 된 뷰가 나타남 -> router-view
  <div class="container">
    <router-view></router-view>
  </div>
```

```javascript
//main에 등록
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
new Vue({
  el: '#app',
  render: h => h(App)
})

```


# 주의점

> Vue의 Template에는 최상위 태그 1개만 있어야 렌더가 가능

```javascript
var Foo ={
    teamplate :`
    <div>Foo<div>
    <router-view></router-view>
    `
    //에러발생
}
var Foo ={
     teamplate :`
     <div>
     <router-view></router-view>
     <div>`
     //에러발생
 }
```

<br />

---

# Named Views

* 라우터로 특정 URL 이동시, 해당 URL에 해당하는 여러개의 View를 동시에 렌더링 함
* 각 컴포넌트에 해당하는 name 속성과 router-view 지정 필요

```html
<div id="app">
    <router-view name = "nestedHeader"></router-view>
    <router-view></router-view>
</div>
```

```javascript
{
    path : '/home',
    components:{
        nestedHeader : AppHeader,
        default : Body
    }
}
```

> NestView와 Named Views의 차이

* Nested : 특정 URL에서 1개의 컴포넌트에 여러 개의 하위컴포넌트를 가짐
* Named : 특정 URL 에서 여러 개의 컴포넌트를 쪼개진 뷰단위로 렌더링 하는 것을 Named View

![nestedVsNamed](https://github.com/banziha104/Vue.js/blob/master/Markdown/img/na.jpeg)

- 동적 라우트 : 일정한 패턴의 URI 경로의 일부에 필요한 파라미터 값이 있는 경우 유용



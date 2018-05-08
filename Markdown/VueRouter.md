# Nested Router

* 라우터로 화면 이동시 여러개의 컴포넌트를 동시에 렌더링 할 수 있다.
* 렌더링되는 컴포넌트구조는 큰 상위컴포넌트가 하위컴포 넌트를 포함하는 Parent - Child 형태와 같다

```javascript
var Login = {
    template: `
    <div>
      Login Section
      <router-view>
        <form action="/" method="post">
          <div>
              <label for="account">E-mail : </label>
              <input type="email" id="account">
          </div>
          <div>
              <label for="password">Password : </label>
              <input type="password" id="password">
          </div>
        </form>
      </router-view>
    </div>
  `,
};
var LoginForm = {
    template: `
    <form action="/" method="post">
      <div>
          <label for="account">E-mail : </label>
          <input type="email" id="account">
      </div>
      <div>
          <label for="password">Password : </label>
          <input type="password" id="password">
      </div>
    </form>
  `,
};
var List = {
    template: `
    <div>
      List Section
      <router-view></router-view>
    </div>
  `,
};
var ListItems = {
    template: `
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  `,
};

var routes = [
    {
        path: '/login',
        component: Login,
        children: [
            { path: '', component: LoginForm }
        ]
    },
    {
        path: '/list',
        component: List,
        children: [
            { path: '', component: ListItems }
        ]
    }
];

var router = new VueRouter({
    routes
});

var app = new Vue({
    router
}).$mount('#app');
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

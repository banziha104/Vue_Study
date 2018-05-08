# Vue Component

<br />

> 화면에 비춰지는 뷰의 단위를 쪼개어 재활용이 가능한 형태로 관리하는 것이 컴포넌트

```html
<html>
  <head>
    <title>Vue Sample</title>
  </head>
  <body>
    <div id="app">
      <button>Parent Component</button>
      <my-component></my-component>
      <my-local-component></my-local-component>
    </div>

    <div id="app2">
      <my-component></my-component>
      <my-local-component></my-local-component>
    </div>

    <script src="https://unpkg.com/vue@2.3.3"></script>
    <script>
      // Global Component
      Vue.component('my-component', { //컴포넌트 이름
        template: '<div>A global component!</div>' // 적용할 요소
      });
      // Local Component
      var cmp = { 
        template: '<div>A local component!</div>'
      };
      new Vue({             //인스턴스 생성
        el: '#app',
        components: {
          // 태그명 : 컴포넌트의 내용
          'my-local-component': cmp
        }
      })
      new Vue({
        el: '#app2',
        components: {
          // 태그명 : 컴포넌트의 내용
          'my-local-component': cmp
        }
      })
    </script>
  </body>
</html>
```

---

<br />

# Global 컴포넌트 

```javascript
Vue.component('my-component', { //컴포넌트 이름
        template: '<div>A global component!</div>' // html 요소
    });

```


---

<br />

# Local 컴포넌트

```javascript
var cmp = {
    // 컴포넌트를 만듬
};

new Vue({
    components : {
        'my-cmp' : cmp //컴포넌트를 등록
    }
})

```

# Local vs Global

* global : 인스턴스 전체에서 사용가능함.
* local : 해당 인스턴스에서만 사용가능함.


---

<br />

# 부모와 자식 컴포넌트 관계

> 부모 -> 자식 : props down
> 자식 -> 부모 :event up

---

<br />


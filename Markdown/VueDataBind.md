# Data Binding

> DOM 기반 HTML Template 에  Vue 데이터를 바인딩 하는 방법은 아래와 같이 크게 3가지

* Interploation (값 대입)
* Binding Expressions (값 연결)
* Directives (디렉티브 사용)

<br />

---

# 예제

* Interpolation 

> 기본직인 바인딩 체계 Mustche {{}} 를 따름.

```html
<span>Message : {{ msg }}</span>
<span>This will never change : {{ * msg }}</span> <!--에스크립은 변하지 않게 선언, 예전방 -->
<span v-once>{{ msg }}</span>                     <!--최근의 사용방법-->
<div id="item-{{ id }}"></div>
```

* Binding Expressions 

> {{}}를 이용한 데이터 바인딩을 할 때 자바스크립트 표현식을 사용할 수 있다.

```html
<div>{{ number + 1}}</div> <!--가장 지향하는 방법-->
<div>{{ message.split(''}.reverse().join('')}</div>
<div>{{ if (ok){ return message}}</div> <!--여러 연산의 경우에는 허용하지않음-->
```

* Directives

> Vue에서 제공하는 특별한 Attributes이며 v-의 접두사를 가짐

- v-text, v-html : 값을 나타내기 위해 사용
- v-bind : 요소 객체의 속성들을 바인딩
- v-model : Vue 객체의 data 속성을 바인딩함, 양방향으로 데이터가 바뀌면 재 랜더링
- v-if,v-else,v-else-if : 조건 렌더링 , 조건에 맞지 않으면 렌더링하지않음.
- v-show : 조건 렌더링 , 조건에 맞지 않으면 화면에 보여주지 않음. 
- v-for : 반복렌더링
- v-pre : 컴파일을 수행하지않음 {{}} 가 그대로 출력
- v-once : Vue 인스턴스의 데이터를 변경하더라도 다시 렌더링을 수행하지 않음.
- v-clock : 화면에 깜빡임을 방지
- v-on : 이벤트를 감지, @onclick 으로 축약해서 사용가능

```html
<p v-if="login">Hello</p>
<p v-on:click="doSomething"></p>
```

* class Binding

> CSS 스타일링을 위해서 class를 아래 방법으로 추가할 수 있

```html
<div class="static" v-bind:class="{{ 'class-a' : isA , 'class-b' : isB}}"></div> <!--클래스로 받아옮-->
<script>
    data : {
        isA: true,
        isB: false
    };
</script>
```

* 계산속성

> computed에 등록해 놓으면, 속성처럼 사용할 수 있다.

- data 안은 모두 문자열로 됌
- this 사용 주의

```html
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed : {
    sum : ()=>{ var n = Number(this.num)}
  }
}
```



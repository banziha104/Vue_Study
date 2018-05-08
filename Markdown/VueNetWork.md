# 부모와 자식 컴포넌트 관계

#### Props

* 모든 컴포넌트는 각 컴포넌트 자체의 스코프를 가짐
* 상위에서 하위로 전달하려면 props 속성을 사용함.

```javascript
Vue.components('child-componet',{
   props : ['passedData'], // 상위컴포넌트에서 받아옮
   template : '<p>{{passedData}}</p>'
});

var app = new Vue({
    el: "#app",
    data : {
        message : 'Hello Vue! from Parent Component',
    }
});
```

```html

<div id="app">
    <child-componet v-bind: passed-data="message"></child-componet> <!--자바스크립트에서 카멜기법을 
    썻으면 html에서는 케밥 기법으로 접근함-->
</div>

```

---

<br />

# Child 컴포넌트 간 통신(Event Bus)

Non Parent - Child 컴포넌트간에 통신하기 위함

> 새로운 인스턴스를 생성해서 소통하는 방법

```javascript

export const eventBus = new Vue();
new Vue({

})
```

<br />

---

# 이벤트 발생

```javascript
/*발생자*/

import { eventBus } from '../../main';
eventBus.$emit('refresh',10);

/*수신자*/

import { eventBus} from '../../main';

created(){
    eventBus.$on('refresh', data =>{
       console.log(data); 
    });
}
```
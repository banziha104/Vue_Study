# Vue Instance

<br />

> Vue 생성자로 인스턴스 생성, 화면에서 사용할 옵션 (데이터, 속, 메서드 등등)을 포함하여 화면단위를 생성하는 요소

- el : Vue 인스턴스에 연결할 HTML DOM 요소를 지정
- computed : 계산 속성
- data : 모델속
- methods : 메소드의 집합으로, 디렉티브, {{}}, 직접 호출등이 가능
- watch : 관찰속성

```html
<script>
  export default {
    el : "#example",
    data : {x:0,y:0,sum:0},
    watch : {
      x : () =>{ //x 속성이 변경될떄마다 호출
        console.log("## x 변경");
      }
    }
  }
</script>
```


<br />

```javascript
var vm = new Vue({
    template : template, 
    el: el,               
    method : method,
    created : {
        
    }
}); 
```

# Vue Instance 라이프 사이클 

Vue 객체가 생성될 때 아래의 초기화 작업을 수행

* 데이터 관찰
* 템플릿 컴파일
* DOM에 객체 연결
* 데이터 변경시 DOM 업데이트

- beforeCreate : 인스턴스 생성, 관찰 및 이벤트 감시자 설정 전에 호출
- create : 관찰, 계산형, 메서드, 감시자 설정이 완료된 후
- beforMount : 마운트가 시작되기전
- mounted : el에 vue 인스턴스의 데이터가 마운트된 후에 호출
- beforeUpdate : 가상 DOM이 렌더링, 패치되기 전에 데이터가 변경될 떄 호출됌. 추가적인 변경을 수행가능, 다시 렌더링하지는 않음
- updated : 데이터 변경으로 DOM이 다시 렌더링, DOM이 업데이트 된 상태
- beforeDestroy : 인스턴스가 제거되기 전
- destroyed : 인스턴스가 제거된후

<br />

> 초기화 작업 이외에도 개발자가 의도하는 커스텀 로직을 추가할 수 있음


```javascript
var vm = new Vue({
    dta : {
        a: 1
    },
    created : function() {
      //...
    }
})
```


![mvvm](https://github.com/banziha104/Vue.js/blob/master/Markdown/img/component-lifecycle.png)



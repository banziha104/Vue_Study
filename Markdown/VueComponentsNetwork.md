# 컴포넌트 조합

> props를 이용해 부모에서 자식으로 데이터를 넘김, 자식은 부모로 이벤트를 넘김

- data 속성에 함수로 리턴 -> 각 객체 별로 적용할 수 있음
- props : 부모->자식 속성전달
- 컴포넌트 작성 시 속성명을 카멜 표기법으로사행있다면, 전달할땐 케밥 표기법을 이용
- me

```html
<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<script>
  Vue.component('list-component',{
    template : '#listTemplate',
    props : {
      message : { type : String, default : '안녕하세요'},
      count : { type : Number , require : true},
      countires : {
        type : Array,
        default : () => {
          return ['대한민국']
        }
      }
    }
  })
  var vm = new Vue({
    el : '#app',
    data : {"message" : "안녕", "count" : 30, countires: ['한국','대한민국']}
  })
</script>
</body>
</html>
```

- event 발행 : 자식은 부모에게 this.$emit('이벤트이름', '전달할 내용') 을 이용해 이벤트 발행이 가능하고, 부모는 v-on을 이용해 이벤트를 수신


- 이벤트 버스 객체 : 비어있는 Vue 인스턴스를 이용해 사용

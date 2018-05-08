# Vue

<li> MVVM 패턴의 ViewModel에 해당하는 View 단 라이브러리
<li> 데이터 바인딩과 화면 단위를 컴포넌트 형태로 제공하며, 관련 API를 지원

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue Sample</title>
</head>
<body>
    <div id="app">
        {{ message }}
    </div>
    <script src="https://unpkg.com/vue@2.4.4/dist/vue.js"></script>
    <script>
    new Vue({
        el : '#app',
        data : {
            message : 'Hello Vue.js'
        }
    })
    </script>
</body>
</html>
```

---

<br />

# MVVM 패턴

Backend 로직과 Client의 마크업 & 데이터 표현단을 분리하기 위한 구조로 전통적인 MVC 패턴의 방식에서 기안

![mvvm](https://github.com/banziha104/Vue.js/blob/master/Markdown/img/mvvm.png)



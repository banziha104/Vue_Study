# Vue 이벤트

- 이벤트 핸들링 메서드 : 핸들링은 메서드로 처리하는게 현실적

```html

<script>
  export default {
    el : "#example",
    data : {
      amount : 0,
      balance : 0,
    },
    methods : {
      deposit : () => {
        console.log("예금")
      },
      withdraw : () =>{
        console.log("인출")
      }
    }
  }
</script>

```

- 이벤트 객체
  - target : 이벤트가 발생한 html 요소
  - currentTarget : 이벤트 리스너가 이벤트를 방생시키는 html 요소
  - path : document,window 객체까지의 경로
  - bubbles : 버블링을 일으키는지
  - cancelable : 기본 이벤트 방지가 가능한지
  - defaultPrevented : 기본 이벤트가 방지되었는지
  - eventPhase : 이벤트 흐름단계를 나타냄(포착 -> 이벤트발생 -> 버블링)

- 이벤트 주요 메서드
  - preventDefault() : 기본 이벤트의 자동 실행을 중지
  - stopProgagation() : 이벤트 전파를 막음


- 대표적인 기본 이벤트 종류
  - a : href 특성의 경로로 페이지 이동
  - 우클릭 : 내장 컨택스트 메뉴가 나타남
  - form : 요소 내부에 submint 버튼을 클릭했을떄 action 특성에 저장된 경로로 method 특성에 지정된 방식으로 전송
  - input : 키보드를 누르면 입력한 문자가 텍스트 박스에 나타남

- Vue 에서 이벤트 수식어
  - .stop : 이벤트 전파를 중단
  - .capture : 캡쳐링 단계에서만 이벤트 발생
  - .self : 레이즈 단계에서만 이벤트 발생
  - .once : 한번만 이벤트 발생
  - keyCode : 키보드와 관련
  - .left .right .middle : 마우스 이벤트와 관련
  -

```html

<div id ="example">
    <div id = "outer" @onclick.stop ="deposit">

    </div>
  </div>

```

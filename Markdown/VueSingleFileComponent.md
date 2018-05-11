# Single File Components with JSX(ES6)

> 앱의 복잡도가 증가할 때 .vue 라는 파일 단위 안에 Html,js,css를 관리할 수 있는 방법

> .vue 파일을 이용하려면 webpack의 vue-loader 또는 browserify 이용

1. npm install -global vue-cli
2. vue init webpack-simple <project-name>
3. npm install
4. npm run dev

- <style scoped> 를 이용해 범위 css 사용가능
- slot : 부모컴포넌트에서 자식 컴포넌트로 HTML 마크업을 전달함
- named slot : 슬롯에 이름을 전달해줌

```html
<slot name="header"></slot>
```

- 범위 슬롯 : 자식에서 부모로 올려보내는 슬롯
- 동적 컴포넌트 : 여러 컴포넌트를 표현하기 위해 사용

```html
<keep-alive include="about,home">
  <component :is="currentView"></component>
</keep-alive>
```

- 재귀 컴포넌트 : 다시 자기 자신을 가르키는 컴포넌트




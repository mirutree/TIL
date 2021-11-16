---
### 🍪 Vue.js 시작하기 
출처 - (인프런 강의) 장기효님의 Vue.js 시작하기 - Age of Vue.js   
https://github.com/mirutree/TIL/tree/main/Vue.js/Vue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0
### 🍰 Vue.js 중급 강좌 
출처 - (인프런 강의) 장기효님의 Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex   
https://github.com/mirutree/TIL/tree/main/Vue.js/Vue.js%20%EC%A4%91%EA%B8%89%20%EA%B0%95%EC%A2%8C   

---
### 🥝 *vue 라이브러리*
### Apexcharts (그래프)
> 깃헙 리포지토리 : https://github.com/apexcharts/vue3-apexcharts    
> 홈페이지 : https://apexcharts.com/   
```javascript
<template>
<div>
  <apexchart 
    width="500" 
    type="bar" 
    :options="options" 
    :series="series">
  </apexchart>
</div>
</template>
```
`<apexchart>` 컴포넌트의 `Props`
|Prop|Description|Type|Default|
|---|--------|---|---|
|type|차트유형|String|‘line’|
|series|차트에 표시하려는 데이터|Array|undefined|
|width|차트의 너비|String or Number|‘100%’|
|height|차트의 높이|String or Number|‘auto’|
|options|차트의 구성요소들|Object|{}|

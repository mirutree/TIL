### Thymeleaf
Thymeleaf의 기본문법 - html 태그 안에 th문법 추가
#### th:value
 - element의 value값 지정
 ```html
 ex) <input type="text" name="name" th:value="${info.name}"> 
 ```
### th:text
 - 서버에서 받은 값을 태그안에 텍스트로 넣는다
 ```html
 ex) <span th:text="${info.contents}"></span>
 ```
### th:utext
 - text와 비슷하지만 태그를 반영하여 넣는다
---
### FreeMarker

프리마커 문법 참고
https://huskdoll.tistory.com/164

macro에 대한 좋은 설명 글. 나중에 스스로 정리해보자
https://haviyj.tistory.com/27   

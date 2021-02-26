
##### encodeURIComponent(String)
문자열을 인코딩하여 URI로 데이터를 전달한다.   
   
##### String.indexOf(searchvalue, position)
찾을값은 필수값이지만 위치값은 옵션이다. 대소문자를 구분한다. 문자열에 찾는 값이 없으면 -1을 반환한다.   
```javascript
var string = "가나다라마바사";
var findStr1 = "가";
var findStr2 = "나";
var findStr3 = "아";

document.writeln(string.indexOf(findStr1)); // '가'의 위치는 0
document.writeln(string.indexOf(findStr2)); // '나'의 위치는 1
document.writeln(string.indexOf(findStr3)); // '아'는 없으므로 -1 
```
##### trim()
문자열 좌우 공백 제거. 웬만한 브라우저 다 지원되는 기능임. 다만 IE8이전도 지원해야 할 때 씀
```javascript
var str = "       안녕하세요?      "; 
var trimStr = str.trim(); // 안녕하세요?
```

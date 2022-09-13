#### Truthy값 Falsy값
boolean문액일때 명확히 true나 false로 정의되지 않아도 true나 false로 평가되는 값이다.   
false로 평가되는 falsy(거짓같은)값 예시   
 - 0, -0, 0n, "", '', ``, null, undefined, NaN 등
true로 평가
 - {}, [], "0", "false", Infinity 등
   
##### encodeURIComponent(String)
문자열을 인코딩하여 URI로 데이터를 전달한다.   

##### console.log에서 백틱을 이용해서 동적으로 로그 찍기
```javascript
const string = 'hello';
const number = 12345;
console.log(`value: ${string}, type: ${typeof string}`); // value: hello, type: string
console.log(`value: ${number}, type: ${typeof number}`); // value: 12345, type: number
```
   
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
var trimStr = str.trim(); 
document.writeln(trimStr); // 안녕하세요?
```
##### element.id
요소의 식별자
```javascript
var idStr = elt.id; // 아이디를 가져오는 형식
elt.id = idStr; // 아이디를 부여하는 형식
```
##### Array.filter()
테스트를 통과하는 모든 요소를 새로운 배열로 반환한다
```javascript
var words = ['ab가나', 'bcde', '다라마바', '아자카타abc', 'efghijklmn', '마바아자def'];
var result = words.filter(word => word.indexOf('b') > -1);

console.log(result); // 결과 : b가 포함된 ["ab가나", "bcde", "아자카타abc"] 가 콘솔에 찍힌다
```

#### Array.indexOf()
배열에서 해당요소가 존재하면 요소의 index를, 없으면 -1을 반환한다.
제이쿼리의 $.inArray()와 비슷.
```javascript
  const array1 = [1,2,3,4,5];

  // JS
  console.log(array1.indexOf(1)); // 0
  console.log(array1.indexOf(6)); // -1
  
  // JQuery
  console.log($.inArray(2, array1)); // 1
  console.log($.inArray(8, array1)); // -1
```

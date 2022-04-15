###  PostgreSQL
 - **COALESCE** (오라클의 NVL)
    - COALESCE(A, B); A의 값이 null이면 B를 반환
    ```sql
    ex) SELECT COALESCE(max(table.seq), 0) + 1 FROM table;
    ```
 - **유형변경1** 
    - ::varchar 문자 유형으로
    - ::integer 숫자 유형으로

 - **유형변경2**
   - to_date(text, 포맷) : 문자열을 날짜유형으로 변경
   - to_char(current_timestamp, 'HH12:MI:SS') : 날짜혹은 숫자를 문자열로 변경
   - to_number(text, 포맷) : 숫자를 문자열로 변경
   ```sql
    ex) 
    to_char(now(), 'DayHH12:MI:SS') --> Thursday 02:04:02
    to_number(REPLACE('010-1234-5678', '-', ''), '999,999,999,999') ---> 1,012,345,678
   ```
 - **문자열 자르기**
   - right(문자열, 숫자), left(문자열, 숫자) : 문자열의 오른쪽(왼쪽)부터 인수로 받는 숫자만큼 자른 문자열 반환
   ```sql
   ex) rigth('가나다라', 1) --> '라'
       left('가나다라', 1)  --> '가'
   ```
 - **문자열 치환**
   - REPLACE() : 문자열 중 A를 B로 대체한다
   - REGEXP_REPLACE() : 정규식패턴과 일치하는 문자열을 새 텍스트로 대체]
   ```sql
   REPLACE(text, 'A', 'B')
   REGEXP_REPLACE(source, pattern, replacement)
   ```
 - **문자열 결합**
   - concat('문자열1','문자열2' ...) : 문자열을 합친 결과를 반환한다.
   ```sql
   SELECT concat('ABCD', 'EFG'); 	--> ABCDEFG
   SELECT concat('ABC', 'D', 'EF', 'G'); --> ABCDEFG
   SELECT concat('ABCD', NULL, 'EFG'); --> ABCDEFG
   ```
   
 - **범위조회**
    ```sql
    BETWEEN A AND B     : A와 B 사이에 있는 값을 조회
    NOT BETWEEN A AND B : A와 B 사이값이 아닌 값 조회
    ```
 - **CASE WHEN ~ ELSE ~ END** 조건에 따라 다른 값
    ```sql
    CASE 
      WHEN [조건1] THEN [결과1]
      WHEN [조건2] THEN [결과2]
      ELSE [else결과] <-- else 생략가능. else인 경우 null반환	
    END
    ```
 - **미래와 과거의 날짜 계산**
   - ::timestamp와 ::interval을 활용한 여러 날짜 계산
    ```sql
     -- 문자열'20220415'를 시간타입으로 변환하여 +1일을 한 값
     SELECT ('20220415'::timestamp +'1 day' ) AS tomorrow; --> 2022-04-16 00:00:00.000 
     
     -- 오늘날짜 +2달이후 일자를 'YYYY/MM/DD'의 포맷형태로 반환
     SELECT TO_CHAR(NOW() + '2 month', 'YYYY/MM/DD') AS after2M; --> (오늘이 22년 4월 15일이라면) 2022/06/15
     
     -- 오늘날짜 -2주이전 일자를 'yyyy년 mm월 dd일'의 포맷형태로 반환
     SELECT TO_CHAR(now() -'14 day'::interval, 'yyyy년 mm월 dd일') AS before2W; --> (오늘이 22년 4월 15일이라면) 2022년 04월 01일
    ```

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
  

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

 - **특정 날짜에 태어난 사람이 몇 살인지 계산하기**
   - AGE()와 extract()을 활용해서 만 나이 계산하기
   - AGE(timestamp, timestamp) : 첫번째 인수에서 두번째 인수를 빼고 결과를 반환
   ```sql
   
   ['95년 10월 13일생'인 사람이 태어난지 얼마나 되었는지 계산]
   
   -- 태어난지 얼마나 되었는지 밀리초까지 계산
   select age(now(), '1995-10-13 00:00:00'::timestamp); --> ex)26 years 6 mons 2 days 17:11:18.819161
   
   -- 태어난지 얼마나 되었는지 날짜 계산
   select age(current_date, '1995-10-13'::date);        --> ex)26 years 6 mons 2 days
   ```
   - EXTRACT([field] FROM [source]) : '날짜/시간 데이터'에서 '년도/월/일'를 반환한다
     - **field?** 반환할 데이터의 특정 요소
     - ex) CENTURY(세기), YEAR(연도), QUARTER(분기), MONTH(월), WEEK(주), DOY(연중일), DAY(일), DOW(일요일(0)~토요일(6)), HOUR(시간), MINUTE(분), SECOND(초)
     - **source?** 실제 timestamp값
   ```sql
   select extract(CENTURY from '1999-12-31'::date);  --> 20(세기)
   select extract(QUARTER from '220101'::timestamp); --> 1(분기)
   select extract(MONTH from '220815'::date);        --> 8(월)
   select extract(DOW from '220415'::date);          --> 5(금요일)
   ```
   - 만 나이 계산
   ```sql
   SELECT extract(year from age('19951013'::date)) AS returnAge; --> 26(만 26세)
   ```







###  PostgreSQL
 - **COALESCE** (오라클의 NVL)
    - COALESCE(A, B); A의 값이 null이면 B를 반환
    ```sql
    ex) SELECT COALESCE(max(table.seq), 0) + 1 FROM table;
    ```

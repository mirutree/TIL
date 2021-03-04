### 윈도우 기준 IntelliJ 단축키

프로젝트에서 생성할 곳 선택 -> `Alt + insert` 디렉토리,패키지,클래스 등을 생성할 목록 보기
   
**코드 즉시 보기**   
- 인자값 즉시 보기 : `Ctrl + P`   
- 코드 구현부 즉시 보기 :  `Shift + Ctrl + I`   
- Doc 즉시 보기 : `Ctrl + Q`   
   
**라이브 템플릿 (자주 사용하는 코드를 축약해서 사용)**    
File > Settings > Live Templates에 가면 더 많은 축약어를 확인할 수 있다.       
- System.out.println(); : `sout`    
- public static void main(String[] args){} : `main` 혹은 `psvm`   
   
**실행환경 실행(RUN)**      
- RUN :  `Ctrl + Shift + F10`   
- 이전 실행환경에서 RUN : `Shift + F10` <-실행 기준은 상단에 셀렉트 할수 있는 곳이 있음!
[제목 없음](https://user-images.githubusercontent.com/63778557/109759022-c24c0080-7c2f-11eb-832e-a0f287e735a4.png)      
    
**라인 수정하기**
- 라인복제 : 포커스(커서)를 라인 어떤곳이든 두고 `crtl + D` (바로 밑줄에 라인이 복제됨)       
- 라인삭제 : `Strl + Y`     
- 라인 옮기기     
   - 제한없이 라인 이동 : `Shift + Alt + ⇅`       
   - 구문 안에서만 이동 : `Shift + Ctrl + ⇅`    
- 라인 안에서 Element 단위로 옮기기 : `Alt + Shift + Ctrl + ⇄`     
   
**포커스(커서)**   
- 단어 단위로 포커스(커서) 이동 : `Ctrl + ⇄`   
- 단어 단위 선택(블록) : `Shift + Ctrl  +  ⇄`
- 라인 가장 처음과 끝으로 포커스(커서) 이동 : `Fn + ⇄`  (Home, End키와 같은 기능)   
- 라인 한줄 블록 씌우기
   - (`Fn + ←` 로 좌측으로 이동 후) `Fn + Shift + →` (또는 `Shift + End`)   
   - (`Fn + →` 로 우측으로 이동 후) `Fn + Shift + ←` (또는 `Shift + Home`)   
- 여러 줄을 한꺼번에 위 아래로 포커스(커서) 이동 : `Fn + ⇅` (또는 방향키 대신 PageUp PageDown)   

**포커스 특수키**
- 포커스(블록) 범위 한 단계씩 늘리기 : `Ctrl + W `
- 포커스(블록) 범위 한 단계씩 줄이기: `Shift + Ctrl + W`
- 이전 포커스(커서) 위치로 되돌리기 / 되돌린 포커스(커서)를 원래 위치로 돌아가기 : `Ctrl + Alt + ⇄`
- 멀티 포커스(커서 늘리기): `Ctrl + Ctrl + ⇅` ( 두번째 컨트롤은 누른 상태로 방향키)
- 오류 라인으로 자동 포커스(커서) 이동 : `F2`


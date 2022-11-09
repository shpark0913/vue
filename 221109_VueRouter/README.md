# Vue

## Routing

- 네트워크에서 **경로를 선택**하는 프로세스

- 웹 서비스에서의 라우팅
  
  - 유저가 방문한 URL에 대해 적절한 결과를 응답하는 것

- 예시
  
  - /articles/index/ 에 접근하면 articles의 index에 대한 결과를 보내줌

---

## Routing in SSR

- Server가 모든 라우팅을 통제

- URL로 요청이 들어오면 응답으로 완성된 HTML 제공
  
  - Django로 보낸 요청의 응답 HTML은 완성본인 상태

- 결론적으로, Routing(URL)에 대한 결정권을 서버가 가짐

---

## Routing in SPA / CSR

- 서버는 하나의 HTML(index.html) 만을 제공

- 이후에 모든 동작은 하나의 HTML 문서 위에서 JavaScript 코드를 활용
  
  - DOM을 그리는데 필요한 추가적인 데이터가 있다면
    
    axios와 같은 AJAX 요청을 보낼 수 있는 도구를 사용하여 데이터를 가져오고 처리

- 즉, **하나의 URL만 가질 수 있음**
  
  - 페이지가 하나 → URL도 하나

- Why routing?
  
  - 동작에 따라 URL이 반드시 바뀌지 않아도 괜찮지만, 유저의 사용성 관점에서는 필요!
  - Routing이 없다면
    - 유저가 URL을 통한 페이지의 변화를 감지할 수 없음
    - 페이지가 무엇을 렌더링 중인지에 대한 상태를 알 수 없음
      - 새로고침 시 처음 페이지로 돌아감
      - 링크를 공유할 시 처음 페이지만 공유 가능
    - 브라우저의 뒤로 가기 기능을 사용할 수 없음

---

# Vue Router

- Vue의 공식 라우터

- SPA 상에서 라우팅을 쉽게 개발할 수 있는 기능을 제공

- 라우트(routes)에 컴포넌트를 매핑한 후, 어떤 URL에서 렌더링 할지 알려줌

- 즉, SPA를 MPA처럼 URL을 이동하면서 사용 가능
  
  - 참고) MPA (Multiple Page Application)
    - 여러 개의 페이지로 구성된 애플리케이션
    - SSR 방식으로 렌더링

- SPA의 단점 중 하나인 “URL이 변경되지 않는다.”를 해결

---

### History mode

- 브라우저의 History API를 활용한 방식
  
  - 새로고침 없이 URL 이동 기록을 남길 수 있음

- 우리에게 익숙한 URL 구조로 사용 가능
  
  - 예시) http://localhost:8080/index

- 참고) History mode를 사용하지 않으면
  
  ```
      Default 값인 hash mode로 설정됨 (# 을 통해 URL을 구분하는 방식)
  ```
  
  - 예시) [http://localhost:8080#index](http://localhost:8080#index)

---

## Router-view

- 주어진 URL에 대해 일치하는 component를 렌더링하는 component

- 실제 component가 DOM에 부착되어 보이는 자리를 의미

- router-link를 클릭하면 routes에 매핑된 component를 렌더링

- Django에서의 block tag와 비슷
  
  - App.vue는 base.html의 역할
  - router-view는 block tag로 감싼 부분

- src/router/index.js
  
  - 라우터에 관련된 정보 및 설정이 작성되는 곳
  - Django에서의 urls.py에 해당
  - routes에 URL과 component를 매핑

- src/Views
  
  - router-view에 들어갈 component 작성
  
  - 기존에 component를 작성하던 곳은 components 뿐이었지만 이제 두 폴더로 나뉘어짐
  
  - 각 폴더 안의 vue 파일들이 기능적으로 다른 것은 아님
  
  - 이제 폴더별 component 배치는 다음과 같이 진행 (규약은 아님)
    
    - views/
      
      - routes에 매핑되는 component,
        
        즉, <router-view>의 위치에 렌더링 되는 component를 모아두는 폴더
      
      - 다른 component와 구분하기 위해 View로 끝나도록 만드는 것을 권장
      
      - ex) App component 내부의 AboutView & HomeView component
    
    - components/
      
      - routes에 매핑된 component의 하위 component를 모아두는 폴더
      - ex) HomeView component 내부의 HelloWorld component

- 주소를 이동하는 2가지 방법
  
  1. 선언적 방식 네비게이션
     
     - router-link의 ‘to’ 속성으로 주소 전달
       - routes에 등록된 주소와 매핑된 컴포넌트로 이동
     - **Named Routes**
       - 이름을 가지는 routes
         - Django에서 path 함수의 name 인자의 활용과 같은 방식
     - 동적인 값을 사용하기 때문에 v-bind를 사용해야 정상적으로 작동
  
  2. 프로그래밍 방식 네비게이션
     
     - 동작 원리는 선언적과 동일
     - Vue 인스턴스 내부에서 라우터 인스턴스에 `$router` 로 접근할 수 있음
     - 다른 URL로 이동하려면 `this.$router.push`를 사용
       - history stack에 이동할 URL을 넣는(push) 방식
       - history stack에 기록이 남기에 뒤로 가기 버튼 사용 가능

- Dynamic Route Matching
  
  - - ex) Django에서의 variable routing
  - `$route.params`로 변수에 접근 가능

# Vue



---

## State Management

- 상태(State)란? 
  
  - 현재에 대한 정보(data)

- Web Application에서의 상태는 현재 App이 가지고 있는 Data로 표현 가능!
  
  - 하나의 App은 여러 개의 component의 조합
  
  - 각 component는 독립적이기에 각각의 상태(data)를 가짐
  
  - 하나의 App 구성을 위해 여러 개의 component가 같은 상태(data)를 유지해야!
    
    - <mark>상태 관리(State Management) 필요</mark>

- Centralized Store
  
  - 중앙 저장소(store)에 데이터를 모아서 상태 관리
  
  - 각 component는 중앙 저장소의 데이터를 사용 (계층에 상관 X)
  
  - store의 데이터가 변경되면 각각의 component는 이에 반응해 새로 변경된 데이터 반영
  
  - 규모가 크거나 컴포넌트 중첩이 깊은 프로젝트의 관리가 매우 편리

- Vuex
  
  - " state management pattern + Library " for vue.js
  
  - 중앙 저장소를 통해 상태 관리를 할 수 있도록 하는 라이브러리
  
  - 데이터가 예측 가능한 방식으로만 변경될 수 있도록 하는 규칙 설정
  
  - Vue의 반응성을 효율적으로 사용하는 상태 관리 기능 제공



---

## Vuex 시작하기

<img src="file:///C:/Users/multicampus/AppData/Roaming/marktext/images/2022-11-08-10-14-39-image.png" title="" alt="" width="430">

- src / store / index.js 생성됨

![](C:\Users\multicampus\AppData\Roaming\marktext\images\2022-11-08-10-15-33-image.png)

1. State
   
   - vue 인스턴스의 data에 해당
   
   - <mark>중앙에서 관리하는 모든 상태 정보</mark>
   
   - 개별 component는 state에서 데이터를 가져와 사용
     
     - 개별 component가 관리하던 data를
       
       중앙 저장소 (Vuex Store의 state)에서 관리하게 됨
   
   - state의 데이터가 변화하면 해당 데이터 사용하는 component도 자동으로 렌더링
   
   - \$<mark>store.state</mark> 로 state 데이터에 접근 

2. Mutations
   
   - 실제로 state를 변경하는 유일한 방법
   
   - vue 인스턴스의 methods에 해당
     
     - handler 함수는 반드시 동기적
       
       - 비동기 로직으로 state 변경하는 경우, 변화의 시기를 특정할 수 없으므로
       
       - handler 함수 : mutation, action에서 호출되는 함수
   
   - <mark>첫 번째 인자로 state</mark>를 받으며, <mark>component 혹은 Actions에서 commit() 메서드로 호출됨</mark>
   
   - commit(A, B)
     
     - A : 호출하고자 하는 mutations 함수
     
     - B : 넘겨주는 데이터(payload)

            

3. Actions
   
   - mutations와 비슷하지만 비동기 작업 포함 가능
   
   - state를 직접 변경 X, commit() 메서드로 mutations 호출해서 state 변경
   
   - <mark>context 객체를 인자</mark>로 받으며, 이를 통해 store.js의 모든 요소, 메서드에 접근 가능
     
     - state를 직접 변경 가능, but 하지 말아야!
   
   - <mark>component에서 dispatch() 메서드에 의해 호출됨</mark>       
     
     - dispatch(A, B)
       
       - A : 호출하고자 하는 actions 함수
       
       - B : 넘겨주는 데이터(payload)

4. Getters
   
   - vue 인스턴스의 computed에 해당
   
   - <mark>state를 활용하여 계산된 값을 얻고자 할 때 사용</mark>
   
   - getters의 결과는 캐시(cache)되며, 종속된 값이 변경된 경우에만 재계산
   
   - getters에서 계산된 값은 state에 영향을 미치지 X
   
   - <mark>첫 번째 인자로 state, 두 번째 인자로 getter</mark>



---

#### Q) 모든 데이터를 Vuex에서 관리해야 할까?

###### A) 아니다! 개발 환경에 따라 적절하게 사용해야 한다!

###### Vuex에서도 여전히 pass props, emit event 사용하여 상태 관리 가능



---

## 정리

- state
  
  - 중앙에서 관리하는 모든 상태 정보

- mutations
  
  - state를 변경하기 위한 methods

- actions
  
  - 비동기 작업이 포함될 수 있는(외부 API와의 소통 등) methods
  
  - state 변경 제외 모든 로직 진행

- getters
  
  - state를 활용해 계산한 변수 값

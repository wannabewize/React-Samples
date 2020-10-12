# Redux

Redux 익히기

## DataChange

Redux 기초 개념을 위한 데이터와 데이터 변경

- value_reference_type : 밸류 타입과 레퍼런스 타입
- immutability : 데이터 불변성. 데이터를 수정하지 않고 새로 변경된 데이터로 치환하기
- state_action : 데이터(State)와 액션(Action)으로 데이터 불변성을 지키면서 수정하기.
- state_action2 : 액션을 타입과 데이터(amount)로 확장. 데이터 불변성과 데이터 수정


## redux-store

redux 모듈을 이용해서 리듀서(Reducer)와 스테이트(State)로 스토어(Store) 생성하기 예제

dispatch와 액션을 이용해서 앱 데이터(state)를 수정하고, 데이터에 접근하기(getState)

## react-redux1

react-redux를 이용해서 React와 Redux 사용하기.

- 앱 데이터(state)를 각 컴포넌트에서 접근한다. 
- mapStateToProps를 통해서 앱 데이터(state)를 컴포넌트의 프로퍼티로 매핑한다.
- index.js에서 타이머를 이용해서 앱 데이터가 변경되고 컴포넌트에 반영되는 것을 확인한다.


## react-redux2

react-redux에서 컴포넌트에서 앱 데이터(state)를 변경한다.

- mapDispatchToProps를 통해서 앱 데이터(state)를 변경하는 액션을 이용하는 함수를 컴포넌트의 프로퍼티로 매핑한다.



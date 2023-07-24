

import React from "react";
// import './App.css';
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";

function App() {
 
  const number = 5;
  return (
    <div>
      <MyHeader />
      <Counter />    
      <MyFooter />
    </div>
  );
}

export default App;
// 컴포넌트화를 시키려면 앞과 뒤를 닫아줘야한다 ex) React.Fragment
// jsx에서 css로 짤려면 <div class>가 아닌 <div className="App"> 짜야한다
// jsx의 {name}과 같은 중괄호는 숫자나 문자만 사용할 수 있다.
// 조건부 렌더링은 워낙 많이 쓰니 꼭 참고 할 것 {number}는~
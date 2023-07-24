import React, {useState} from 'react';
// 현재 상태를 알려주는 React의 method



// 전체적으로 봤을때 Counter는 클릭해서 상태가 변화될때마다 return 받아 새로 render를 돌리고 있는 상태이다

const Counter = () => {

    // 0에서 출발 - useState(0) 0이 됨
    // 1씩 증가하고
    // 1씩 감소하는 
    // counter의 상태


    const [count, setCount] = useState(0);
    // 0번째 index - count는 상수로써 값이기 때문에 return해서 화면에 띄운다
    // 1번째 index - setCount는 count를 변화시키는 상태변화 함수
    // useState를 호출하면서 넘겨준 0은 count라는 상태를 만드는데 초기값으로 사용된다


    // 1씩 증가시키는 함수
    const onIncrease = () =>{
        setCount(count + 1);
    };

    const onDecrease = () =>{
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};
// html에서는 ''이렇게 썼지만 jsx, react는 {}를 사용해서 작성한다
// click을 수행하면 Onincrese가 호출되고 Setcount는 count + 1이라는 상태를 불러온다. 이렇게 클릭을 할때마다 setcount는 +1 되는 count로 상태가 업데이트 된다 -(Decrease)도 동일하다



export default Counter;
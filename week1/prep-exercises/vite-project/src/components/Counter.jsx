import { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  const countFunction = (amount) => { setCount(count +amount < 0 ? 0 : (count + amount))}
  const feedback = count > 10 ? "It's higher than 10" : "Keep counting...";
  return (
    <div>
      <Count count={count}></Count>
      <Button countFunction={()=> {countFunction(1)}} countText={"Add 1"}></Button>
      <Button countFunction={()=> {countFunction(-1)}} countText={"Decrement 1"}></Button>
        <p>{feedback}</p>
    </div>
  );
}

export default Counter;
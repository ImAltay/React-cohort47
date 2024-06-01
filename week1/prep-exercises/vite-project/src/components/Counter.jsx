import { useState } from 'react';
import Count from './Count';
import Button from './Button';
import Value from './Value';

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const countFunction = (amount) => { const newCount = count + amount;
    if (newCount < 0) {
      setCount(0);
    } else if (newCount > 9) {
      setCount(10);
    } else {
      setCount(newCount);
    }}
  const feedback = count > 9 ? "Giant glass is full" : "Giant glass is not full"; 

  return (
    <div className='container'>
      <Count count={count}></Count> 
      <div>
      <Button countFunction={()=> {countFunction(value)}} countText={`+ ${value} `}></Button>
      <Button countFunction={()=> {countFunction(-value)}} countText={`- ${value} `}></Button>
      <Value value={value} setValue={setValue}></Value>
      <p>{feedback}</p></div>
    </div>
  );
}

export default Counter;
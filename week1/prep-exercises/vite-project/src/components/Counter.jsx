import { useState } from 'react';
import Count from './Count';
import Button from './Button';
import Value from './Value';

function Counter() {
  const [count, setCount] = useState(0);
  

  const countFunction = (amount) => { setCount(count +amount < 0 ? 0 : (count + amount))}
  const feedback = count > 10 ? "It's higher than 10" : "Keep counting...";
  //
  const [value, setValue] = useState(1);

  return (
    <div>
      <Count count={count}></Count>
      
      
      <Button countFunction={()=> {countFunction(value)}} countText={`+ ${value} `}></Button>
      <Button countFunction={()=> {countFunction(-value)}} countText={`- ${value} `}></Button>
      <Value value={value} setValue={setValue}></Value>
        
    
      
        <p>{feedback}</p>
    </div>
  );
}

export default Counter;
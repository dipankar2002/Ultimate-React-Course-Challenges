import { useState } from 'react'

function App() {
  
  return (
    <div style={{textAlign: "center"}}>
      <Counter />
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input type="range" min="1" max="10" value={range} onChange={(e)=>{setRange(parseInt(e.target.value))}}/>
        <label htmlFor="">{range}</label><br />
        <button onClick={()=>{setCount((c)=>c-=range)}}>-</button>
        <input type="number" value={count} onChange={(e)=>{setCount(parseInt(e.target.value))}}/>
        <button onClick={()=>{setCount((c)=>c+=range)}}>+</button><br />
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count!==0?<button onClick={()=>{setCount(0);setRange(1)}}>Reset</button>:null}
    </div>
  );
}
export default App

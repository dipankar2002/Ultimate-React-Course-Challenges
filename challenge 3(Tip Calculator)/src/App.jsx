
import { Children, useState } from 'react'

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tip = bill * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <>
      <BillCompo bill={bill} setBill={setBill}/>
      <TipCompo tip={tip1} setTip={setTip1}>
        How did you like the service?
      </TipCompo>
      <TipCompo tip={tip2} setTip={setTip2}>
        How did your friend like the service?
      </TipCompo>

      {bill ? <div> <h3>You pay ${bill+tip} (${bill}+${tip} tip)</h3><button onClick={handleReset}>Reset</button> </div>:null}
    </>
  )
}

function BillCompo({bill, setBill}) {
  return <>
    <div>
      <label>How much was the bill?</label>
      <input type="number" value={bill} min={0}  onChange={(e)=>setBill(Number(e.target.value))}/>
    </div>
  </>
}

function TipCompo({children, tip, setTip}) {
  return <div>
    <label>{children}</label>
    <select 
      value={tip} 
      onChange={(e)=>{setTip(Number(e.target.value))}}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
  </div>
}

export default App

import React, { useState } from 'react';

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
    setBill("")
    setTip1(0)
    setTip2(0)
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={tip1} onSelect={setTip1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={tip2} onSelect={setTip2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={e => onSetBill(Number(e.target.value))}
      />
      ;
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={e => onSelect(Number(e.target.value))}>
        <option value="">--Please choose an option--</option>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazng! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>{`You pay $${bill + tip} ($${bill} + $${tip} tip)`}</h3>
    </div>
  );
}

function Reset({onReset}) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;

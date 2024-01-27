import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <DateChanger />
    </div>
  );
}
function DateChanger() {
  const [steps, setSteps] = useState(1);
  const [addition, setAddition] = useState(0);

  let today = new Date();
  today.setDate(today.getDate() + addition);

  function handleAddDays() {
    setAddition((s) => s + steps);
  }

  function handleDecDays() {
    setAddition((s) => s - steps);
  }

  return (
    <>
      <div>
        <input
          type="range"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        {steps}
      </div>
      <div>
        <input type="button" value={"+"} onClick={handleAddDays}></input>
        <input
          type="text"
          value={addition}
          onChange={(e) => setAddition(Number(e.target.value))}
        />
        <input type="button" value={"-"} onClick={handleDecDays}></input>
      </div>
      <div>
        <p>
          {addition} days from today is {today.toDateString()}
        </p>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;
  const addValue = () => {
    // console.log("click add", counter);
    //counter = counter + 1;
    setCounter(counter + 1);
  };

  const removevalue = () => {
    // console.log("click remove", counter);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> Chai aur react</h1>
      <h2>Counter valu: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter} </button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;

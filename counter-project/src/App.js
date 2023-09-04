import './App.css';
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 5
  function addValue() {
    if (counter >= 20) {
      setCounter(counter = 20)
      alert("maximum value is 20")
    } else {
      counter = counter + 1
      setCounter(counter)
      // console.log(counter)
    }
  }
  function removeValue() {
    if (counter <= 0) {
      // counter = 0;
      alert("not less than 0 value")
      setCounter(counter = 0)
    } else {
      counter = counter - 1
      setCounter(counter)
    }

  }


  return (
    <>
      <h1>New React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value </button> <br></br>
      <br></br>
      <button onClick={removeValue}>Remove Value </button>
    </>
  );
}

export default App;

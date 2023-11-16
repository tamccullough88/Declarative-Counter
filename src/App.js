import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(currentValue => {
      return currentValue + 1
    })
  }

  const decrement = () => {
    if (counter === 0) return
    setCounter(currentValue => {
      return currentValue - 1
    })
  }

  window.setCounter = setCounter
  return (
    <div>
      <h3>counter: {counter}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

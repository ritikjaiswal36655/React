import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(preCount=>preCount+1)
  } 
  const decrease = () => {
    if (count === 0) {
      setCount(0)
    } else {
      setCount(count=>count-1)
    }
    
  }
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment} >Increase</button>
      <button onClick={decrease} >decrease</button>
    </>
  )
}

export default App

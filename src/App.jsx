import { useState } from 'react'
import './App.css'

function App() {
  let today = new Date().toLocaleTimeString();

  const [count, setCount] = useState(today);

  const UpdateTime= ()=>{
    today = new Date().toLocaleTimeString();
    setCount(today);
  };

  setInterval(UpdateTime, 1000)

  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default App

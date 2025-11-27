import {useState} from 'react'; 

const App = (): any => { 
  const [count, setCount] = useState(0); 

  function handlePlus(): any { 
    setCount(prev => prev + 1); 
  }
  function handleMinus(): any { 
    setCount(prev => prev - 1)
  }
  function restartCounter(): any{ 
    setCount(0)
  }
  return ( 
    <>
      <button onClick ={handlePlus}>+</button>
      <button onClick ={handleMinus}>-</button>
      <button onClick ={restartCounter}>Restart</button>
      <h1>{count}</h1>
    </>
  )
}
export default App
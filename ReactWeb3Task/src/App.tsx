//TASK №4 
import {useState} from 'react'; 

const App = (): any => { 
  const [celsia, setCelsia] = useState<number>(); 
  const [fara, setFara] = useState<number>(); 

  function handleConvertCelsia(e: any) { 
    const value = parseFloat(e.target.value); 
    setCelsia(value); 
    setFara((value*9/5)+32)
  }
  function handleConvertFara(e: any): any { 
    const value = parseFloat(e.target.value); 
    setFara(value);
    setCelsia((value - 32) * 5/9); 

  }


  return(<>
      <input value = {celsia} 
        onChange={handleConvertCelsia}
        placeholder='введите температуру в целия градусах'
      />
      <input
        value = {fara}
        onChange ={ handleConvertFara}
        placeholder='введите температуру в фаренгейтах'
      />
      <h1>{celsia}={fara}</h1>
  </>)
}
export default App
//TASK - 2
import {useState} from 'react'; 

const App = (): any => { 
  const [todos, setTodos] = useState<any[]>([]); 
  const [input, setInput] = useState<any>('');
  function handleAdd(): any { 
    setTodos([...todos, input])
    setInput('')
  }
  function handleInput(event: any): any{ 
    setInput(event.target.value)
  }
  function handleDelete(index: any): any { 
    setTodos(todos.filter((todo, i) => i !== index ))
  }
  return(
    <>
    <input 
    value={input}
    placeholder='Введите задачу'
    onChange = {handleInput}
    />
      <button onClick={handleAdd}>Add</button>
      <ul>
      {todos.map((todo: string, index: number) => ( 
        <li key={index}>{todo}
          <button onClick ={() =>handleDelete(index)} >Delete</button>
        </li>
        
      ))}
      </ul>
    </>
  )
}
export default App
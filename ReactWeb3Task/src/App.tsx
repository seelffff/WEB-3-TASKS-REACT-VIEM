//TASK 6

import {useState} from 'react'; 

const App = (): any => { 
    const [color, setColor] = useState({
        red: 128,
        green: 128,
        blue: 128,
    })

    function handlePolzynok(e: any): any {
        const {name, value} = e.target
        setColor(prev => ({ 
            ...prev,
            [name]: parseInt(value)
        }))
    }
    const backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`
    return (<>
        <div style={{padding: '30px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
            <h2>RGB</h2>

        <div style ={{
            width: '200px',
            height: '200px',
            backgroundColor: backgroundColor,
            margin: '20px auto', 
            border: '10px solid black', 
            borderRadius: '15px', 

        }}/>

        <div style={{maxWidth: '300px', margin: '0 auto'}}>
        <div style ={{marginBottom: '15px'}}/>
            <label style ={{display: 'block', marginBottom: '5px'}}>
                Красный (R): {color.red}
            </label>
            <input
            type="range"
            name="red"
            min="0"
            max="255"
            value={color.red}
            onChange={handlePolzynok}
            style={{ width: '100%' }}
            />

            <div style ={{marginBottom: '15px'}}/>
            <label style ={{display: 'block', marginBottom: '5px'}}>
                Зеленый (G): {color.green}
            </label>
            <input
            type="range"
            name="green"
            min="0"
            max="255"
            value={color.green}
            onChange={handlePolzynok}
            style={{ width: '100%' }}
            />

            <div style ={{marginBottom: '15px'}}/>
            <label style ={{display: 'block', marginBottom: '5px'}}>
                Синий (B): {color.blue}
            </label>
            <input
            type="range"
            name="blue"
            min="0"
            max="255"
            value={color.blue}
            onChange={handlePolzynok}
            style={{ width: '100%' }}
            />
        </div>
        </div>
    </>)
}
export default App;
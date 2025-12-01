import {useState, useEffect, useRef} from 'react'; 

const App = (): any => { 
    const [start, setStart] = useState<boolean>(false);
    const [sec, setSec] = useState<number>(0);
    const interval = useRef<number | any>(null);

    function handleStart(): void { 
        setStart(true); 
    }
    function handleStop(): void { 
        setStart(false);
    }

    function handleRestart(): void{ 
        setSec(0); 
        setStart(true); 

    }

    useEffect(() => { 
        if(start){ 
            interval.current = setInterval(() => {
                setSec(prev => prev + 1);
            } , 1000);
        }
        return () => { 
            clearInterval(interval.current)
        }
    },[start])
    return (<>
        <button onClick ={ handleStart}>Start</button>
        <button onClick ={handleStop}>Stop</button>
        <button onClick ={handleRestart}>Restart</button>
        <h1>{sec}</h1>
    </>)
}
export default App
//TASK №3
import {useState} from 'react'; 

const App = () => { 
  const [vault, setVault] = useState('')

  function handleVault(event: React.ChangeEvent<HTMLSelectElement>) { 
    setVault(event.target.value)
  }

  return (<>
    <select value={vault} onChange={handleVault}>
      <option value="">choose the vault</option>
      <option value="USD">USD</option>
      <option value="BTC">BTC</option>
      <option value="EUR">EUR</option>
      <option value="ETH">ETH</option>
    </select>
    
    <p>Selected: {vault}</p>
    
    {vault === 'BTC' && (
      <div>
        <img src='https://walloftraders.com/blog/wp-content/uploads/2021/04/bitcoin-2.jpg' alt='bitcoin' style={{width: '100px'}}/>
        <p>BTC image loaded</p>
      </div>
    )}
    
    {vault === 'USD' && (
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSli8omg_HHCyfkfzaTtVyNzGO990Rn09OJbg&s' alt='dollar' style={{width: '100px'}}/>
        <p>USD image loaded</p>
      </div>
    )}
    {vault === 'ETH' && (
      <div>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmegHWSwmRyhBUzZSGv9OUvF7oiIjWO10oYg&s' alt = 'eth'/>
        <p>selected - {vault}</p>
      </div>
    )}
    {vault === 'EUR' && (
      <div>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHd48k0ni_gytILs7ih5ZAqISP6b8I2PIfWQ&s' alt = "usd" />
        <p>{vault}</p>
      </div>

    )}
  </>)
}

export default App
import { useState} from 'react'; 

const App = (): any => { 
  const[connect, setConnect] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<any[]>([]);

  async function handleConnect (): Promise <any> { 
      if(!(window as any).ethereum){ 
        alert('метамаск не установлен');
        return;
      }
      
      try{ 
        const accounts = await (window as any).ethereum.request({
             method: 'eth_requestAccounts'
           });
        setAccounts(accounts);
        setConnect(true); 
        console.log('Connected accounts:', accounts);

      }catch(error){
        console.error(error);
        alert('сломалось')
      }
  }
  
  return(
    <>
      {!connect ? (
        <button onClick={handleConnect}>CONNECT WALLET</button>
      ) : (
       <div>
         <h1>DONE!</h1>
         <p>ACCOUNTS: {accounts.join(', ')}</p>
       </div>
      )}
    </>
  )
}
export default App
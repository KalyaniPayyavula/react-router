import { useState } from 'react';
import DataPage from './Pages/DataPage'
import LoginPage from './Pages/LoginPage';

function App() {
  
  const [login, setLogin] = useState(false)

  let loginHandler = () =>{
    setLogin(!login)
  }
  return ( 
    login ? <DataPage/> : <LoginPage onClick={loginHandler}/>
  );
}

export default App;

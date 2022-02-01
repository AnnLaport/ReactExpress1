import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import EntradaLogin from './components/EntradaLogin'
import React, {useState} from 'react';

function App() {

  const[usuario, setUsuario]= useState('')
  const[password, setPassword]= useState('')

  const handleEnviar = (e)=>{
    e.preventDefault()
    console.log(usuario)
  }

  return (
    <div className="container">
      <h1>Keep the calm</h1> 
        <div className="App" id="card">
            <form className='form'>
              <div id="entrada"> 
                  <EntradaLogin type="text" id="usuario" onChange={(e)=>setUsuario(e.target.value)} value={usuario} />
              </div>
              <div id="entrada">
                  <EntradaLogin type="password" id="password" />
              </div>
              <button type="submit" onClick={handleEnviar}>Enviar</button>
            </form>
        </div>
    </div>
    
  );
}

export default App;

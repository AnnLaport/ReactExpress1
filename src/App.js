import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import axios from 'axios';
import EntradaLogin from './components/EntradaLogin'
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Home from "./components/Home"

function App() {

  const[usuario, setUsuario]= useState('')
  const[password, setPassword]= useState('')

  const handleEnviar = async (e)=>{
    e.preventDefault()
    console.log(usuario)
    console.log(password)

    const request= await axios.get('http://localhost:5000/reactexpress');
    console.log(request.data);
  }

  return (
    <div className="container">
      <h1>Keep the calm</h1> 
        <div className="App" id="card">
            <form className='form'>
              <div id="entrada"> 
                  <EntradaLogin tipo="text" identifier="usuario" onChange={(e)=>setUsuario(e.target.value)} value={usuario} />
              </div>
              <div id="entrada">
                  <EntradaLogin tipo="password" identifier="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
              </div>
              <button type="submit" onClick={handleEnviar}>Enviar</button>
            </form>
            <Link to="./home">Ir a página principal</Link>
        </div>
    </div>
    
  );
}

export default App;

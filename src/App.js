import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import NovoConteudo from './NovoConteudo';
import NovoConteudoDois from './NovoConteudo';




function App() {
  const [str,setStr] = useState('Oi Mundo');
  

  function handleClick(){
    setStr('Ola mundo que foi carregado')

   
   
  }
  return (
    <div className="App">
      <h1>{str}</h1>
      <NovoConteudo></NovoConteudo>
      <NovoConteudo valor="texto adicional"></NovoConteudo>
      <NovoConteudoDois valor="Texto adicional TRES"></NovoConteudoDois>
      <button onClick={()=>handleClick()}>
        Clique para mudar
      </button>

    </div>
  );
}
/*import React from 'react';

function App() {
  return (
   <div className="App">
     <h1>Olá Mundo!!!</h1>

   </div>
  );
}
*/

export default App;

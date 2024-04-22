import logo from './logo.svg';
import './App.css';
import fotoinicio from './assets/forca0.png'
import palavras from './palavras'
import { useState } from 'react';

function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const [palavra, setPalavra] = useState('');
  const [palavraAdivinhada, setPalavraAdivinhada] = useState([]);
  
  const iniciarJogo = () => {
    setJogoIniciado(true);
    const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavraSorteada);
    

    // Criar a palavra a ser adivinhada com underlines
    const palavraComUnderlines = [];
    for (let i = 0; i < palavraSorteada.length; i++) {
      palavraComUnderlines.push('_  ');
    }
    setPalavraAdivinhada(palavraComUnderlines);
    console.log(palavraSorteada)
  };

  function verificarLetra(letra) {
    console.log(palavra)
    const palavraRascunho = []
    console.log(letra)
    for (let i = 0; i < palavraAdivinhada.length; i++) {
      if(letra == palavra[i]) {
        palavraRascunho.push(letra) 
        console.log(palavraRascunho)
        console.log(palavra[i])
      } else {
        palavraRascunho[i] = '_  '
        console.log(palavraRascunho)
      }
    }

    setPalavraAdivinhada(palavraRascunho)
  }

  return (
    <div className="App">
      <div className='topo'>
        <div className='imagem-forca'>
          <img src={fotoinicio} className='foto-forca' alt='imagem da forca' />
        </div>

        <div className='topo-lado-direito'>
          <button className='escolher' disabled={jogoIniciado} onClick={iniciarJogo}>ESCOLHER PALAVRA</button>
          {jogoIniciado && (
            <div className='palavra-adivinhada'>{palavraAdivinhada}</div>
          )}
        </div>
      </div>

      <div className='letras'>
      {alfabeto.map((letra, index) => (
          <button onClick={() => verificarLetra(letra)} className={jogoIniciado ? 'botao-letra-on' : 'botao-letra-off'} key={index} disabled={!jogoIniciado}>{letra}</button>
        ))}
      </div>

      <div className='fundo'>
        <h1>Já sei a palavra!</h1>
        <input placeholder='Digite a palavra' className='digite-palavra' disabled={!jogoIniciado}></input>
        <button className='botao-chutar' disabled={!jogoIniciado}>Chutar</button>
      </div>
    </div>
  );
}



  export default App;

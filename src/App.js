import logo from './logo.svg';
import './App.css';
import fotoinicio from './assets/forca0.png'

function App() {
  const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  return (
    <div className="App">
      <div className='topo'>
        <div className='imagem-forca'>
          <img src={fotoinicio} className='foto-forca' alt='imagem da forca' />
        </div>

        <button className='escolher'>ESCOLHER PALAVRA</button>
      </div>

      <div className='letras'>
      {alfabeto.map((letra, index) => (
          <button className='botao-letra' key={index}>{letra}</button>
        ))}
      </div>

      <div className='fundo'>
        <h1>Já sei a palavra!</h1>
        <input placeholder='Digite a palavra' className='digite-palavra'></input>
        <button className='botao-chutar'>Chutar</button>
      </div>
    </div>
  );
}



  export default App;

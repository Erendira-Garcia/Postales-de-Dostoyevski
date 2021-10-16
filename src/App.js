import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const[cita, setCita] = useState(''); //useState devuelve un arrar con valores
  const[libro, setLibro] = useState('');
  const[imagen, setImagen] = useState('');

  const onChangeCita = function(frase1){ 
    setCita(frase1.target.value);
  }

  const onChangeLibro = function(frase2){
    setLibro(frase2.target.value);
  }

  const onChangeImagen = function(foto){
    setImagen(foto.target.value);
  }

  const onClickExportar = function(descargar){
    html2canvas(document.querySelector("#postal")).then(canvas => {
    var img = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'postal.png';
    link.href = img;
    link.click();
  });
  }

  return (
    <div className="App">
      <h1>Genere una postal de Dostoyeski</h1>
      <p>Seleccione una foto de Dostoyevski</p> <br />
      <select onChange={onChangeImagen}>
        <option value="dosto1">Dostoyevski color</option>        
        <option value="dosto2">Dostoyevski negro</option>
        <option value="dosto3">Dostoyevski sepia</option>
      </select> <br/>

      <p>Escriba la cita y el libro para completar la postal</p> <br />
      <input onChange={onChangeCita} type="text" placeholder="Anote la cita de Dostoyevski"/> <br/> 
      <input onChange={onChangeLibro} type="text" placeholder="Agregue el título del libro"/> <br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div className = "postal" id="postal">
        <span>{cita}</span> <br />
        <span>{libro}</span>
        <img src={"/img/" + imagen + ".jpg"}/>
      </div>
     
    </div>
  );
}

export default App;

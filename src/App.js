import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState(["Programowanie w c#", "Angular dla początkujących", "Kurs Django"]);
  function zapiszKurs(){
    const imieNazwisko = document.getElementById("imieNazwisko").value;
    const numer = document.getElementById("numerKursu").value;
    console.log(imieNazwisko)
    console.log(item[numer-1]);
  }
  return (
    <div className="App">
      <h1> Liczba kursów: {item.length} </h1>
      <ol>
        {item.map(
          (itemItem,index) => (
            <li key={index}>{itemItem}</li>
          )
        )}
      </ol>
      <label htmlFor='imieNazwisko'>Imie i nazwisko:</label>
      <input id = "imieNazwisko"></input>
      <label htmlFor='numerKursu'>Numer kursu:</label>
      <input id = "numerKursu" type='number'></input>
      <button onClick={zapiszKurs}>
        Zapisz na kurs
      </button>
    </div>
  );
}

export default App;

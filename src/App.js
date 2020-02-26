
import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';


// ---------------------------------------------------------------
// ------------ Dwa sposoby na tworzenie nowych bytów ------------
// I sposob:
class App extends React.PureComponent {
  constructor(props) {              // <--- jest funkcja w klasie, czyli metoda, w tym przypadku met. inicjujaca
    super(props);                   // <--- pobiera metody z klasy nadrzednej, z ktorej dziedziczy,
  }                                 //      uruchamia konstuktor klasy nadrzednej (przeciaza go)
  render() {                        // <--- renderuje, konwertuje caly kod na kod JSX, w Reackt.PureComponent ma metode render i ja przeciazamy
    return (                        // <--- nawiasy okragle!, wywoluje metode/klase,
      // ``` tutaj znajduje sie kod zapisany w jsx i jest on renderowany ```
      <FirstComponent />
      < div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div >
    )
  }
}


// ---------------------------------------------------------
// II sposob:
// function App() {
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

//   );
// }




// -----------------------------------
export default App;

// jesli wiecej niz 1 to:
// export { funckja1, funkcja2, itd itd}    <--- exportujemy obiekt
// importujemy do pliku index.js :)

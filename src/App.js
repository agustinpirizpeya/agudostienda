import NavBar from './modules/global/NavBar/NavBar';
import './app.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import React from "react";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='main'>
      <header>
        <NavBar/>
          <ItemListContainer text={"Hola"}/>
          <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;

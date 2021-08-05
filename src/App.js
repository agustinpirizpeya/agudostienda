import NavBar from './modules/global/NavBar/NavBar';
import './app.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import React from "react";

function App() {
  return (
    <div className='main'>
      <header>
        <NavBar/>
          <ItemListContainer text={"Hola"}/>
      </header>
    </div>
  );
}

export default App;

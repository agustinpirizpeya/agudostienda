import NavBar from "./modules/global/NavBar/NavBar";
import "./app.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <header>
          <NavBar />
        </header>
      </div>
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <ItemListContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

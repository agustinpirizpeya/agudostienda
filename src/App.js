import NavBar from "./modules/global/NavBar/NavBar";
import "./app.css";
import { useState, React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContext } from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  /* const cart = [
    {
      id: 1,
      name: "Hola1",
      price: 10
    },
    {
      id: 2,
      name: "Hola2",
      price: 20
    },
    {
      id: 3,
      name: "Hola3",
      price: 30
    }
  ] */

  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    console.log("Agrego Item");
    if (!isInCart) {
      setCartItems(...cartItems, item);
    }
  };

  const clear = () => {
    console.log("limpio carrito");
  };

  const removeItem = () => {
    console.log("Borro item carrito");
  };

  const isInCart = (idItem) => {
    return cartItems.map((item) => item.id === idItem);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, clear, removeItem, isInCart }}
    >
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
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;

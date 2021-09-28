import NavBar from "./modules/global/NavBar/NavBar";
import "./app.css";
import { useState, React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContext } from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { isEmptyObject } from "./utils/object";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const cartDraft = [...cartItems];
    if (!isEmptyObject(item)) {
      if (!isInCart(item.id)) {
        cartDraft.push(item);
        setCartItems(cartDraft);
      } else {
        const newList = cartDraft.map((itemDraft) => {
          if (itemDraft.id === item.id) {
            const updatedItem = {
              ...itemDraft,
              quantity: itemDraft.quantity + item.quantity,
              price: itemDraft.price + item.price,
            };
            return updatedItem;
          }
          return itemDraft;
        });

        setCartItems(newList);
      }
    }
  };

  const clear = () => {
    setCartItems([]);
  };

  const removeItem = () => {};

  const isInCart = (idItem) => {
    if (cartItems.length > 0) {
      const index = cartItems.findIndex((x) => x.id === idItem);
      return index > -1;
    }
    return false;
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

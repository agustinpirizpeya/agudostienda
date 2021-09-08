import "./itemListContainer.css";
import Item from "../Item/Item";
import { collection, getDocs } from 'firebase/firestore';
import { getData } from '../../firebase';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // useEffect no puede asincronico

    // 2 PIDO LOS DATOS (truco: usar async/await)
    const getBooks = async () => {
      // 3 obtener colleccion
      const bookCollection = collection(getData(), 'products');

      // 4 obtener Snapshot (foto de la lista en ese momento)
      const bookSnapshot = await getDocs(bookCollection);

      // 5 obtener datos en forma de json con data()
      const bookList = bookSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // 6 setear el estado con la lista
      setLoading(false);
      setProducts(bookList);
    };
    // segunda parte del truco ejecutar la funcion asincronica
    getBooks();

    // array vacio, se ejecuta cuando se monta <app />
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const getItemListToRender = () => {

    if (id) {
      return (
        <div className="itemListContainer">
          <div className="itemList">
            {products
              .filter((itemFilter) => itemFilter.category === id)
              .map((productItem) => (
                <Item productItem={productItem}></Item>
              ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="itemListContainer">
          <div className="itemList">
            {products.map((productItem) => (
              <Item productItem={productItem}></Item>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="itemListContainer">
      <div className="itemList">{getItemListToRender()}</div>
    </div>
  );
}

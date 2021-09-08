import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getData } from "../../firebase";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({});
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

      const result = bookList.filter(bookId => bookId.id === id);

      // 6 setear el estado con la lista
      setLoading(false);
      setItemDetail(result[0]);
    };
    // segunda parte del truco ejecutar la funcion asincronica
    getBooks();

    // array vacio, se ejecuta cuando se monta <app />
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="itemDetailContainer">
      <ItemDetail itemDetail={itemDetail}></ItemDetail>
    </div>
  );
}

import "./itemListContainer.css";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItemList = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      if (data) {
        setLoading(false);
        setProducts(data.results);
      }
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getItemList();
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
              .filter((itemFilter) => itemFilter.species === id)
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

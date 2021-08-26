import './itemList.css'
import Item from '../Item/Item'
import {useEffect, useState} from "react";

export default function ItemList() {

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

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className='itemList'>
            {products.map((productItem) => (
                <Item productItem={productItem}></Item>
            ))}
        </div>
    );
}

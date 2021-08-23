import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItemDetail = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      if (data) {
        setLoading(false);
        setItemDetail(data);
      }
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getItemDetail();
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

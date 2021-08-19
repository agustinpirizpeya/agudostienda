import './itemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from "react";

export default function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState([]);

    
        /* const productsData = [
            {
                id: "1",
                title: "Campera Invierno",
                price: "1500",
                pictureUrl: "https://s.fenicio.app/f2/baseuy/productos/img-0583color_2000-2000_1593088291_6ce.jpg",
                detail: "Hola este es un detalle de la campera de invierno"
            }]; */


        const getItemDetail = async () =>{
            try{

            const response = await fetch(
                "https://rickandmortyapi.com/api/character",
                {
                  method: "GET"
                }
              );
                const data = await response.json();
                setItemDetail(data.results);
                debugger;
            }
            catch(error){
                console.log("Error");
            }
        }

        useEffect(() => {
            getItemDetail();
        }, []);


    return (
        <div className='itemDetailContainer'>
            {itemDetail.map((itemDetail) => (
                <ItemDetail itemDetail={itemDetail}></ItemDetail>
            ))}
        </div>
    );
}
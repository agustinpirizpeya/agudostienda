import './itemList.css'
import Item from '../Item/Item'
import {useEffect, useState} from "react";

export default function ItemList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsData = [
            {
                id: "1",
                title: "Campera Invierno",
                price: "1500",
                pictureUrl: "https://s.fenicio.app/f2/baseuy/productos/img-0583color_2000-2000_1593088291_6ce.jpg"
            },
            {
                id: "2",
                title: "Pantalon Deportivowewewewe",
                price: "2000",
                pictureUrl: "https://s.fenicio.app/f2/baseuy/productos/img-0447c_2000-2000_1597081835_b6a.jpg"
            },
            {
                id: "3",
                title: "Camisa 2021",
                price: "3000",
                pictureUrl: "https://s.fenicio.app/f2/baseuy/productos/img-0274_2000-2000_1587393843_418.jpg"
            },
            {
                id: "4",
                title: "Camisa 2021",
                price: "3000",
                pictureUrl: "https://s.fenicio.app/f2/baseuy/productos/img-0274_2000-2000_1587393843_418.jpg"
            },
            {
                id: "4",
                title: "Camisa 2021",
                price: "3000",
                pictureUrl: "https://s.fenicio.app/f2/baseuy/productos/img-0274_2000-2000_1587393843_418.jpg"
            },
            {
                id: "4",
                title: "Camisa 2021",
                price: "3000",
                pictureUrl: "https://s.fenicio.app/f2/baseuy/productos/img-0274_2000-2000_1587393843_418.jpg"
            }];
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(productsData), 2000);
        }).then((dataResolve) => {
            setProducts(dataResolve);
        }).catch((error) => {
            console.log("error", error);
        });
    }, []);

    return (
        <div className='itemList'>
            {products.map((productItem) => (
                <Item productItem={productItem}></Item>
            ))}
        </div>
    );
}

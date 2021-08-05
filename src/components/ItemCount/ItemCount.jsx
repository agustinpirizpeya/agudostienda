import React, { useState, useEffect } from 'react';
import Button from "../Button/Button";
import './ItemCount.css'
import subtractIcon from "../../assets/icons/subtract-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";

export default function ItemCount( { stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);
    const [stockItem, setStockItem] = useState(stock);

    useEffect(() => {
    }, [count]);

    const addMoreItems = () => {
        if (stockItem > 1 ) {
            setStockItem(stockItem-1);
            setCount(count+1);
        }
    }
    const removeItems = () => {
        if (stockItem < 5 ) {
            setStockItem(stockItem+1);
            setCount(count-1);
        }
    }

    return (
            <div className='itemCountContainer'>
                <div className='itemCountContent'>
                    <h4>{"Camisa negra"}</h4>
                    <div className='countContent'>
                        <div className='counterContainer'>
                            <img className='cartIcon' src={subtractIcon} onClick={removeItems}/>
                            <div className='labelContainer'>
                                <label> {count} </label>
                            </div>
                            <img className='cartIcon' src={addIcon} onClick={addMoreItems}/>
                        </div>
                    </div>
                    <Button text={"Agregar al carrito"}></Button>
                </div>
            </div>
    );
}
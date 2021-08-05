import './labelWithCounter.css'
import addIcon from '../../assets/icons/add-icon.svg'
import subtractIcon from '../../assets/icons/subtract-icon.svg'
import {useEffect, useState} from "react";

export default function LabelWithCounter(props) {


    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(5);

    useEffect(() => {
    }, [count]);

    const addMoreItems = () => {
        console.log("Agrege otro item");
        console.log(stock);
        if (stock > 1 ) {
            setStock(stock-1);
            setCount(count+1);
        }
    }
    const removeItems = () => {
        console.log("Quite un item");
        console.log(stock);
        if (stock < 5 ) {
            setStock(stock+1);
            setCount(count-1);
        }
    }
    return (
        <div className='counterContainer'>
                <img className='cartIcon' src={subtractIcon} onClick={removeItems}/>
            <div className='labelContainer'>
                <label> {count} </label>
            </div>
                <img className='cartIcon' src={addIcon} onClick={addMoreItems}/>
        </div>
    );
}
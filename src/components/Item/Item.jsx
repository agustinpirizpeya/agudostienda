import { Link } from 'react-router-dom';
import './item.css'

export default function Item(props) {
    return(
        <div className='itemContainer'>
            <div className='imgContainer'>
                <img src={props.productItem.pictureUrl}></img>
            </div>
            <div className='itemInfoContainer'>
                <div className='itemTitle'>
                    <h4>{props.productItem.title}</h4>
                </div>
                <h3>{props.productItem.price}</h3>
                <Link to={`/item/${props.productItem.id}`}> Detalle
                </Link>
            </div>
        </div>
    );
}

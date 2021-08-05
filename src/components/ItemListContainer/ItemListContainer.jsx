import ItemCount from "../ItemCount/ItemCount";
import './itemListContainer.css'

export default function ItemListContainer(props) {
    return(
        <>
            <h1>{props.text}</h1>
            <div className='itemCount'>
                <ItemCount/>
            </div>
        </>
    );
}

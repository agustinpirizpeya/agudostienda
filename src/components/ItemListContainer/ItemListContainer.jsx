import './itemListContainer.css'
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer(props) {
    return(
        <div className='itemListContainer'>
            <ItemList></ItemList>
        </div>
    );
}

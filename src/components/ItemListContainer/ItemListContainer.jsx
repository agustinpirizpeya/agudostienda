import ItemCount from "../ItemCount/ItemCount";
import './itemListContainer.css'
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer(props) {
    return(
        <div className='itemListContainer'>
            <ItemList></ItemList>
            <div className='itemCount'>
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>
    );
}

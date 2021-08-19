import './itemDetail.css'

export default function ItemDetail(props) {
    return(
        <div className='detailContainer'>
            <div className='imgDetailContainer'>
                <img src={props.itemDetail.image}></img>
            </div>
            <div className='itemDetailInfoContainer'>
                <div className='itemDetailTitle'>
                    <h4>{props.itemDetail.name}</h4>
                </div>
                <h4>{props.itemDetail.species}</h4>
                <h3>{props.itemDetail.created}</h3>
            </div>

        </div>
    );
}

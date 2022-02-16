
import './ItemDetail.css';
import Button from './Button';
import Counter from './counter.js';
import Item from './Item';



export default function ItemDetail({detailedProduct}){
    return(
        <div>
            {
            detailedProduct.map(
                function(items){
                    return(
                        <div className='item-detail' key={Item.id}>
                            <img className="itemPicture" src={Item.pictureUrl} alt={`imagen de ${Item.title}`}/>
                            <p className="itemName">{Item.title}</p>
                            <p className="itemPrice">${Item.price}</p>
                            <Counter />
                            <Button />
                    </div>
                    )
                }
            )
            }
        </div>
    )
}
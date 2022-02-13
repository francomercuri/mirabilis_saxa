
import './ItemDetail.css';
import Button from './Button';
import Counter from './counter.js';
import Item from './Item'



export default function ItemDetail({products}){
    return(
        <div>
            {
            products.map( function (product) {
                return (
                    <div className='itemList' key={product.id}>
                        <Item item={product} />
                        <Counter initial={0} stock={12} />
                        <Button />
                    </div>
                );
            })}
        </div>
    )
}
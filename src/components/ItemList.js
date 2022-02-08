import './ItemList.css';
import Button from './Button';
import Counter from './counter.js';
import Item from './Item'

export default function ItemList({products}){
    return(
        <div>
            {
            products.map( function (product) {
                return (
                    <div key={product.id}>
                        <Item item={product} />
                        <Counter initial={0} stock={12} />
                        <Button />
                    </div>
                );
            })}
        </div>
    )
}
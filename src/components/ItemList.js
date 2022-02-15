import './ItemList.css';
import Item from './Item';
import Counter from './counter';
import Button from './Button';

export default function ItemList({products}){
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
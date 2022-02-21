import './ItemList.css';
import Item from './Item';
import Counter from './counter';
import { useState, useEffect } from 'react';

export default function ItemList({products}){
    const [addedProduct, setAddedProduct] = useState();

    

    return(
        <div>
            {
            products.map( function (product) {
                return (
                    <div className='itemList' key={product.id}>
                        <Item item={product} />
                        <Counter initial={0} stock={12} />
                    </div>
                );
            })}
        </div>
    )
}

import react, {useState} from 'react';

import './ItemListContainer.css';
import Button from './Button'
import Counter from './counter.js'


function addToCart(a, b){
    return (a + b)
    
}


export default function ItemListContainer({greeting, initial, onAdd}){
    const [count,setCount] = useState(0)
    return(
            <div>
                <h3>{greeting}</h3>
                <Counter setCount={setCount} initial={count} stock={12} count={count} />
                <Button onAdd= { addToCart(0, count) } />
            </div>
        );
    }
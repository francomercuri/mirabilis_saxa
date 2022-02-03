
import react, {useState} from 'react';

import './ItemListContainer.css';
import Button from './Button'
import Counter from './counter.js'





export default function ItemListContainer({greeting, initial, onAdd}){
    
    return(
            <div>
                <h3>{greeting}</h3>
                <Counter  initial={0} stock={12} />
                <Button />
            </div>
        );
    }
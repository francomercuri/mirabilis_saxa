
import react, {useState, useEffect} from 'react';

import './ItemListContainer.css';

import {getProducts} from './api/api';
import ItemList from './ItemList';




export default function ItemListContainer({greeting, initial, onAdd}){
    
    const [ products, setProducts ] = useState([]);

    useEffect( () => {
            getProducts().then(function(products){
                setProducts( products );
            })
    },[]);

    return(
            <div>
                <h3>{greeting}</h3>
                {products.length >0 ? <ItemList products={products} /> : <p>Cargando...</p>}
                
            </div>
        );
    }
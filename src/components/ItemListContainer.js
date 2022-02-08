
import react, {useState, useEffect} from 'react';

import './ItemListContainer.css';

import {getProducts} from './api/api';
import ItemList from './ItemList';




export default function ItemListContainer({greeting}){
    
    const [ products, setProducts ] = useState([]);

    useEffect( () => {
            getProducts().then(function(products){
                setProducts( products );
            })
    },[]);

    return(
            <div className='itemListContainer'>
                {products.length >0 ? <ItemList products={products} /> : <p className='loading'>Cargando...</p>}
                
            </div>
        );
    }
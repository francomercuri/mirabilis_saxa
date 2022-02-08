
import react, {useState, useEffect} from 'react';

import './ItemListContainer.css';

import {getProducts} from './api/api';
import ItemList from './ItemList';
import Loading from './Loading';




export default function ItemListContainer({greeting}){
    
    const [ products, setProducts ] = useState([]);

    useEffect( () => {
            getProducts().then(function(products){
                setProducts( products );
            })
    },[]);

    return(
            <div className='itemListContainer'>
                {products.length >0 ? <ItemList products={products} /> : <Loading /> }
                
            </div>
        );
    }
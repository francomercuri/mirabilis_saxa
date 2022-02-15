
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import './ItemListContainer.css';

import {getProducts} from './api/api';
import ItemList from './ItemList';
import Loading from './Loading';





export default function ItemListContainer({greetings}){
    
    const [ products, setProducts ] = useState([]);
    const { catID } = useParams();

    useEffect( () => {
            getProducts().then((products)=>{
                catID ? setProducts(products.filter(product => product.category === catID))
                : setProducts(products)
            })
    },[catID]);

    return(
            <div className='itemListContainer'>
                {greetings}
                {products.length >0 ? <ItemList products={products} /> : <Loading /> }
                
            </div>
        );
    }
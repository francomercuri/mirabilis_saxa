
import {useEffect, useState} from 'react';
import {getProducts} from './api/api';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import { useParams } from 'react-router-dom';



export default function ItemDetailContainer (){

    const [ items, setItems ] = useState([]); 
    const { itemID } = useParams();
    
        useEffect(()=>{
            getProducts.then((items)=>{
                const item = items.find((i)=>i.id === Number(itemID));
                setItems( item );
            })
        },[itemID]);

    return(
        <div className='item-detail-container'>
        {items.length >0 ? <ItemDetail products={items} /> : <Loading /> }
        </div>
    )
    }

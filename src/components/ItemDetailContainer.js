
import {useEffect} from 'react';
import {getProducts} from './api/api';
import 'ItemDetailContainer.css';


export default function ObtenerProducto (){

    const [ items, setItems ] = useState([]); 
    
        useEffect(()=>{
            getProducts.then((items)=>{
                const productos = item.find((i)=>{i.id === 1});
                setItems( items );
            })
        })
    }

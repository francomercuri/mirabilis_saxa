
import {useEffect, useState} from 'react';
import {getProducts} from './api/api';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import { useParams } from 'react-router-dom';



export default function ItemDetailContainer (){

    const [ items, setItems ] = useState([]); 
    const { itemID } = useParams();
    
    useEffect(() => {
        getProducts().then(function (products) {
          itemID
            ? setItems(
                products.find(
                  (selectedItem) => selectedItem.id === parseInt(itemID)
                )
              )
            : setItems(products);
        });
        console.log(items);
      }, [itemID]);
    
      return (
        <div className="item-detail-container">
          <ItemDetail detailedProduct={items} /> 
        </div>
      );
    }

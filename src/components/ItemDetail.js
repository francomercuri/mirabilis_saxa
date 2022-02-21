
import './ItemDetail.css';
import Counter from './counter.js';
import Item from './Item';
import { useState } from 'react';
import { Link } from 'react-router-dom'



export default function ItemDetail({ detailedProduct }) {

  const [buyButton, setBuyButton] = useState (false);

  function onAdd (quantity){
    console.log(quantity);
    setBuyButton(true);
  }

    return (
      <div>
        <div className="item-detail" key={detailedProduct.id}>
          <img
            className="itemPicture"
            src={`./.${detailedProduct.pictureUrl}`}
            alt={`imagen de ${detailedProduct.title}`}
          />
          <h3 className="itemName">{detailedProduct.title}</h3>
          <h4 className="itemPrice">{detailedProduct.price}</h4>
          {//condicion para mostrar botón
          buyButton 
          ? ( <Link to='/cart'> Ver carrito </Link> )
          : ( <Counter stock={ detailedProduct.stock } initial = {0} onAdd={onAdd} />)
          }
        </div>
      </div>
    );
  };
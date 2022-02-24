
import './ItemDetail.css';
import Counter from './counter.js';
import Item from './Item';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'



export default function ItemDetail({ detailedProduct }) {

  const [buyButton, setBuyButton] = useState (false);

  const { addToCart } = useContext(CartContext);

  function onAdd (quantity){
    setBuyButton(true);
    addToCart(detailedProduct, quantity);
  };

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
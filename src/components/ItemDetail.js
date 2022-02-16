
import './ItemDetail.css';
import Button from './Button';
import Counter from './counter.js';
import Item from './Item';



export default function ItemDetail({ detailedProduct }) {
    return (
      <div>
        <div className="item-detail" key={detailedProduct.id}>
          <img
            className="itemPicture"
            src={`./.${detailedProduct.pictureUrl}`}
            alt={`imagen de ${detailedProduct.title}`}
          />
          <p className="itemName">{detailedProduct.title}</p>
          <p className="itemPrice">{detailedProduct.price}</p>
          <Counter initial={0} stock={12}/>
          <Button />
        </div>
      </div>
    );
  }
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item ({ item }) {
    return(
                <Link to={`/product/${item.id}`}>
                  <div className="itemContainer" key={item.id}>
                        <img className="itemPicture" src = {item.pictureUrl} alt = 'imagen del producto' />
                        <p className="itemName">{item.title}</p>
                        <p className="itemPrice" >${item.price}</p>
                    </div>
                </Link>
    )}
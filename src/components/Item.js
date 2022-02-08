import './Item.css';

export default function Item ({ item }) {
    return(
                  <div className="itemContainer" key={item.id}>
                        <img className="itemPicture" src = {item.pictureUrl} alt = 'imagen del producto' />
                        <p className="itemName">{item.title}</p>
                        <p className="itemPrice" >${item.price}</p>
                    </div>
    )}

import './ItemListContainer.css';
import ItemCount from './ItemCount';
import Button from './Button'


export default function ItemListContainer({greeting}){
    return(
        <div>
            <h3>{greeting}</h3>
            <ItemCount  stock={12} />
            <Button />
        </div>
    );
}
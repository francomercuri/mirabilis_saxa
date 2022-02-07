import './CartWidget.css';




export default function CartWidget ({quantity}){
    return (
        <div>
        <i className="fas fa-shopping-cart"><span>{quantity}</span></i>
        </div>
    )
}
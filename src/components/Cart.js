import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart () {

const { cart, clearCart } = useContext(CartContext);


return(
    <>
        {
            cart.length === 0 
            ? (
                <div>
                <h3>Tus productos seleccionados aparecerán aquí</h3>
                <Link to = '/'>Inicio</Link>
                </div>
            )
            :(
                <div>
                    {cart.map((cartProduct)=>{
                        <div key={cartProduct.id}>
                            <h3>{cartProduct.title}</h3>
                            <img src={cartProduct.pictureUrl} alt={cartProduct.title} />
                            <button onClick={clearCart}>Vaciar carrito</button>
                        </div>
                    }

                    )

                    }
                </div>
            )
        }
    </>
)

}
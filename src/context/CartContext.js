import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart = ([]);
    };

    const addToCart = (item, quantity) => {

        if (isOnCart(item.id)){
            alert('Este producto ya está en tu carrito')
        }else{
        setCart ([ ...cart, { ...item, quantity } ]);
        }
    } 

    const isOnCart = (id) => {
        const respuesta = cart.some((el)=>el.id === id)
        return respuesta;
    }

    return (
            <CartContext.Provider value = {{ cart, addToCart }}>
                {children}
            </CartContext.Provider>
    );
};

export default CartContextProvider;
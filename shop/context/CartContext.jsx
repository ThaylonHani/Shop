import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {

    const [itemsCartContext, setItemsCartContext] = useState([]);

    function handleBuyProducts(products) {
        setItemsCartContext(products)
    }

    return (
        <CartContext.Provider value = {{itemsCartContext, handleBuyProducts}}>
            {children}
        </CartContext.Provider>
    )
}

import React, { createContext, useEffect, useRef, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [numOfProd, setNumOfProd] = useState(0)

    useEffect(()=>{
        let numOfProd = 0
        cart.forEach(prod => {
            numOfProd += prod.quantity
        })
        setNumOfProd(numOfProd)
    }, [cart])

    const removeItem = (id)=>{
        const removeProd = cart.filter(prod => prod.id !== id)
        setCart(removeProd)
    }

    const isInCart = (id)=>{
        return cart.some(prod => prod.id === id)
    }

    const addItem = (prodToAdd)=>{
        if(!isInCart(prodToAdd.id)) {
            setCart([...cart, prodToAdd])
        }
    }

    const totalPrice = ()=>{
        let total = 0
        cart.forEach(prod =>{
            total += prod.quantity * prod.price
        })
        return total
    }

    return(
        <CartContext.Provider value={{
            cart,
            numOfProd,
            addItem,
            removeItem,
            isInCart,
            totalPrice,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
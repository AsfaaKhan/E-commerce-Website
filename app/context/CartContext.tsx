"use client"

import { Product } from "@/types/product";
import { createContext, useContext, useState, ReactNode } from "react";


interface CartItem extends Product {
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCart] = useState<Product[]>([]);
    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);
            if (existingProduct) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const increaseQuantity = (id: string) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
        )
    }

    const decreaseQuantity = (id: string) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.id === id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            )
        )
    }

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be within a CartProvider")
    }
    return context
}
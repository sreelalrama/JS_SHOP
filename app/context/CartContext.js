// app/context/CartContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                // Update quantity if item already exists
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Add new item to cart
                const finalPrice = product.discount
                    ? product.price * (1 - product.discount / 100)
                    : product.price;

                return [...prevItems, {
                    ...product,
                    quantity,
                    finalPrice
                }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    // Update item quantity
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    // Clear entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate cart totals
    const getCartTotals = () => {
        const subtotal = cartItems.reduce(
            (total, item) => total + (item.finalPrice * item.quantity),
            0
        );
        const totalItems = cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
        const totalSavings = cartItems.reduce(
            (total, item) => {
                if (item.discount) {
                    return total + ((item.price - item.finalPrice) * item.quantity);
                }
                return total;
            },
            0
        );

        return {
            subtotal,
            totalItems,
            totalSavings,
            shipping: subtotal > 50 ? 0 : 5.99, // Free shipping over $50
            tax: subtotal * 0.08, // 8% tax
            total: subtotal + (subtotal > 50 ? 0 : 5.99) + (subtotal * 0.08)
        };
    };

    const value = {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotals
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
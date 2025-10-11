// app/components/home/Header.js
'use client';

import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';

export default function Header() {
    const { cartItems, setIsCartOpen } = useCart();
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setTotalItems(total);
    }, [cartItems]);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                        JS Shop
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Cart Button */}
                        <Link
                            href="/cart"
                            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
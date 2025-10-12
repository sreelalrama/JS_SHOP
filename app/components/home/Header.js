// app/components/home/Header.js
'use client';

import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';

export default function Header() {
    const { cartItems } = useCart();
    const { user, logout } = useAuth();
    const [totalItems, setTotalItems] = useState(0);
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setTotalItems(total);
    }, [cartItems]);

    const handleLogout = () => {
        logout();
        setShowUserMenu(false);
    };

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

                        {/* User Menu */}
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                        {user.firstName?.[0]}{user.lastName?.[0]}
                                    </div>
                                    <span className="text-gray-700 font-medium hidden md:block">
                                        {user.firstName}
                                    </span>
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {showUserMenu && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-10"
                                            onClick={() => setShowUserMenu(false)}
                                        ></div>
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                                            <div className="px-4 py-2 border-b border-gray-200">
                                                <p className="text-sm font-semibold text-gray-800">
                                                    {user.firstName} {user.lastName}
                                                </p>
                                                <p className="text-xs text-gray-500">{user.email}</p>
                                            </div>
                                            <Link
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setShowUserMenu(false)}
                                            >
                                                My Profile
                                            </Link>
                                            <Link
                                                href="/orders"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setShowUserMenu(false)}
                                            >
                                                My Orders
                                            </Link>
                                            <Link
                                                href="/wishlist"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setShowUserMenu(false)}
                                            >
                                                Wishlist
                                            </Link>
                                            <div className="border-t border-gray-200 my-2"></div>
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
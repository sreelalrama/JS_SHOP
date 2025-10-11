// app/cart/page.js
'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotals } = useCart();
    const totals = getCartTotals();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="text-9xl mb-4">??</div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Your cart is empty
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Looks like you haven't added anything to your cart yet.
                    </p>
                    <Link
                        href="/products"
                        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
                <p className="text-gray-600">
                    {totals.totalItems} {totals.totalItems === 1 ? 'item' : 'items'} in your cart
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Cart Items</h2>
                            <button
                                onClick={clearCart}
                                className="text-red-600 hover:text-red-700 text-sm font-medium"
                            >
                                Clear Cart
                            </button>
                        </div>

                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                                >
                                    <div className="flex gap-4">
                                        {/* Product Image */}
                                        <div className="relative w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-3xl">
                                                    ??
                                                </div>
                                            )}
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div>
                                                    <Link
                                                        href={`/products/${item.id}`}
                                                        className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <p className="text-sm text-gray-500 capitalize">
                                                        {item.category}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:text-red-700"
                                                    title="Remove from cart"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-3">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center border border-gray-300 rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-4 py-1 border-x border-gray-300">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                        disabled={item.quantity >= (item.stock || 99)}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                {/* Price */}
                                                <div className="text-right">
                                                    <div className="text-lg font-semibold text-gray-800">
                                                        ${(item.finalPrice * item.quantity).toFixed(2)}
                                                    </div>
                                                    {item.discount && (
                                                        <div className="text-sm text-gray-500 line-through">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Continue Shopping Link */}
                    <Link
                        href="/products"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Continue Shopping
                    </Link>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Order Summary
                        </h2>

                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${totals.subtotal.toFixed(2)}</span>
                            </div>

                            {totals.totalSavings > 0 && (
                                <div className="flex justify-between text-green-600">
                                    <span>Savings</span>
                                    <span>-${totals.totalSavings.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>
                                    {totals.shipping === 0 ? (
                                        <span className="text-green-600">FREE</span>
                                    ) : (
                                        `${totals.shipping.toFixed(2)}`
                                    )}
                                </span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>${totals.tax.toFixed(2)}</span>
                            </div>

                            {totals.subtotal < 50 && (
                                <div className="bg-yellow-50 p-3 rounded-lg text-sm text-yellow-800">
                                    Add ${(50 - totals.subtotal).toFixed(2)} more for free shipping!
                                </div>
                            )}
                        </div>

                        <div className="border-t pt-4 mb-6">
                            <div className="flex justify-between text-xl font-semibold">
                                <span>Total</span>
                                <span className="text-blue-600">${totals.total.toFixed(2)}</span>
                            </div>
                        </div>

                        <Link
                            href="/checkout"
                            className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Proceed to Checkout
                        </Link>

                        {/* Security Notice */}
                        <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Secure Checkout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
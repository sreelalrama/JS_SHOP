
// app/order-success/page.js
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function OrderSuccessPage() {
    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        // Generate a random order number
        const randomOrderNumber = 'ORD' + Math.random().toString(36).substring(2, 15).toUpperCase();
        setOrderNumber(randomOrderNumber);
    }, []);

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
                {/* Success Icon */}
                <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
                        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                {/* Success Message */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Order Placed Successfully!
                </h1>

                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your order has been received and is being processed.
                </p>

                {/* Order Details */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <div className="space-y-3">
                        <div>
                            <p className="text-sm text-gray-500">Order Number</p>
                            <p className="text-lg font-semibold text-gray-800">{orderNumber}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Estimated Delivery</p>
                            <p className="text-lg font-semibold text-gray-800">
                                {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>
                    </div>
                </div>

                {/* What's Next */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        What's Next?
                    </h2>
                    <ul className="text-left space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">?</span>
                            You'll receive an order confirmation email shortly
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">?</span>
                            We'll notify you when your order ships
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">?</span>
                            Track your order status in your account dashboard
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">?</span>
                            Contact our support team if you have any questions
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/products"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Continue Shopping
                    </Link>

                    <Link
                        href="/"
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
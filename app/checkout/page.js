// app/checkout/page.js
'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
    const { cartItems, getCartTotals, clearCart } = useCart();
    const router = useRouter();
    const totals = getCartTotals();

    const [formData, setFormData] = useState({
        // Personal Info
        email: '',
        firstName: '',
        lastName: '',
        phone: '',

        // Shipping Address
        address: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',

        // Payment Method
        paymentMethod: 'card',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',

        // Options
        sameAsBilling: true,
        saveInfo: false,
        newsletter: false
    });

    const [errors, setErrors] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="text-9xl mb-4">??</div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Your cart is empty
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Add items to your cart before checking out.
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

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';

        // Name validation
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';

        // Phone validation
        if (!formData.phone) newErrors.phone = 'Phone number is required';

        // Address validation
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';

        // Payment validation
        if (formData.paymentMethod === 'card') {
            if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
            if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
            if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
            if (!formData.cvv) newErrors.cvv = 'CVV is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            // Clear cart
            clearCart();

            // Redirect to success page
            router.push('/order-success');
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Checkout Form */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact Information */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Contact Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Shipping Address
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Street Address *
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="123 Main Street"
                                        />
                                        {errors.address && (
                                            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Apartment, suite, etc. (optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="apartment"
                                            value={formData.apartment}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Apt 4B"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                City *
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            />
                                            {errors.city && (
                                                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                State *
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.state ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            />
                                            {errors.state && (
                                                <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                ZIP Code *
                                            </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.zipCode ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            />
                                            {errors.zipCode && (
                                                <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="saveInfo"
                                            name="saveInfo"
                                            checked={formData.saveInfo}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-600">
                                            Save this information for next time
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Payment Method
                                </h2>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="card"
                                                checked={formData.paymentMethod === 'card'}
                                                onChange={handleInputChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="ml-2">Credit/Debit Card</span>
                                        </label>

                                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="paypal"
                                                checked={formData.paymentMethod === 'paypal'}
                                                onChange={handleInputChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="ml-2">PayPal</span>
                                        </label>
                                    </div>

                                    {formData.paymentMethod === 'card' && (
                                        <div className="space-y-4 mt-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Card Number *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cardNumber"
                                                    value={formData.cardNumber}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="1234 5678 9012 3456"
                                                />
                                                {errors.cardNumber && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Cardholder Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cardName"
                                                    value={formData.cardName}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.cardName ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="John Doe"
                                                />
                                                {errors.cardName && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Expiry Date *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="expiryDate"
                                                        value={formData.expiryDate}
                                                        onChange={handleInputChange}
                                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                                                            }`}
                                                        placeholder="MM/YY"
                                                    />
                                                    {errors.expiryDate && (
                                                        <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
                                                    )}
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        CVV *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="cvv"
                                                        value={formData.cvv}
                                                        onChange={handleInputChange}
                                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.cvv ? 'border-red-500' : 'border-gray-300'
                                                            }`}
                                                        placeholder="123"
                                                    />
                                                    {errors.cvv && (
                                                        <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="sameAsBilling"
                                            name="sameAsBilling"
                                            checked={formData.sameAsBilling}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="sameAsBilling" className="ml-2 text-sm text-gray-600">
                                            Billing address same as shipping
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Order Summary
                                </h2>

                                {/* Cart Items */}
                                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-3 pb-3 border-b last:border-0">
                                            <div className="relative w-16 h-16 bg-gray-200 rounded overflow-hidden">
                                                {item.image ? (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-2xl">
                                                        ??
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-800 line-clamp-1">
                                                    {item.name}
                                                </h4>
                                                <p className="text-xs text-gray-500">
                                                    Qty: {item.quantity}
                                                </p>
                                                <p className="text-sm font-semibold text-gray-800">
                                                    ${(item.finalPrice * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Totals */}
                                <div className="space-y-2 border-t pt-4">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${totals.subtotal.toFixed(2)}</span>
                                    </div>

                                    {totals.totalSavings > 0 && (
                                        <div className="flex justify-between text-sm text-green-600">
                                            <span>Savings</span>
                                            <span>-${totals.totalSavings.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Shipping</span>
                                        <span>
                                            {totals.shipping === 0 ? (
                                                <span className="text-green-600">FREE</span>
                                            ) : (
                                                `$${totals.shipping.toFixed(2)}`
                                            )}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Tax</span>
                                        <span>${totals.tax.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                                        <span>Total</span>
                                        <span className="text-blue-600">${totals.total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className={`w-full mt-6 px-6 py-3 rounded-lg font-semibold transition-colors ${isProcessing
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    {isProcessing ? 'Processing...' : `Pay $${totals.total.toFixed(2)}`}
                                </button>

                                {/* Security Notice */}
                                <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Secure Checkout - SSL Encrypted
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
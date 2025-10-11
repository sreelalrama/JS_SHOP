//'use client';

//import { useState } from 'react';
//import Image from 'next/image';
//import Link from 'next/link';

//export default function ProductDetails({ product }) {
//    const [quantity, setQuantity] = useState(1);
//    const [selectedImage, setSelectedImage] = useState(0);

//    const images = product.images || [product.image];

//    const handleQuantityChange = (change) => {
//        const newQuantity = quantity + change;
//        if (newQuantity >= 1 && newQuantity <= (product.stock || 99)) {
//            setQuantity(newQuantity);
//        }
//    };

//    const finalPrice = product.discount
//        ? (product.price * (1 - product.discount / 100)).toFixed(2)
//        : product.price;

//    return (
//        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
//                {/* Image Gallery */}
//                <div>
//                    {/* Main Image */}
//                    <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
//                        {images[selectedImage] ? (
//                            <Image
//                                src={images[selectedImage]}
//                                alt={product.name}
//                                fill
//                                className="object-cover"
//                            />
//                        ) : (
//                            <div className="flex items-center justify-center h-full text-9xl">
//                                ??
//                            </div>
//                        )}

//                        {product.discount && (
//                            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
//                                -{product.discount}%
//                            </div>
//                        )}
//                    </div>

//                    {/* Thumbnail Gallery */}
//                    {images.length > 1 && (
//                        <div className="grid grid-cols-4 gap-2">
//                            {images.map((img, index) => (
//                                <button
//                                    key={index}
//                                    onClick={() => setSelectedImage(index)}
//                                    className={`relative h-20 bg-gray-200 rounded-lg overflow-hidden border-2 ${selectedImage === index
//                                            ? 'border-blue-600'
//                                            : 'border-transparent'
//                                        }`}
//                                >
//                                    {img ? (
//                                        <Image
//                                            src={img}
//                                            alt={`${product.name} ${index + 1}`}
//                                            fill
//                                            className="object-cover"
//                                        />
//                                    ) : (
//                                        <div className="flex items-center justify-center h-full text-2xl">
//                                            ??
//                                        </div>
//                                    )}
//                                </button>
//                            ))}
//                        </div>
//                    )}
//                </div>

//                {/* Product Information */}
//                <div>
//                    {/* Breadcrumb */}
//                    <div className="text-sm text-gray-500 mb-4">
//                        <Link href="/" className="hover:text-blue-600">Home</Link>
//                        {' / '}
//                        <Link href="/products" className="hover:text-blue-600">Products</Link>
//                        {' / '}
//                        <Link href={`/categories/${product.category}`} className="hover:text-blue-600">
//                            {product.category}
//                        </Link>
//                        {' / '}
//                        <span className="text-gray-700">{product.name}</span>
//                    </div>

//                    {/* Product Name */}
//                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
//                        {product.name}
//                    </h1>

//                    {/* Rating and Reviews */}
//                    <div className="flex items-center gap-4 mb-6">
//                        <div className="flex text-yellow-400 text-xl">
//                            {[...Array(5)].map((_, i) => (
//                                <span key={i}>
//                                    {i < Math.floor(product.rating || 0) ? '?' : '?'}
//                                </span>
//                            ))}
//                        </div>
//                        <span className="text-gray-600">
//                            {product.rating || 0} ({product.reviews || 0} reviews)
//                        </span>
//                    </div>

//                    {/* Price */}
//                    <div className="mb-6">
//                        {product.discount ? (
//                            <div className="flex items-center gap-4">
//                                <span className="text-4xl font-bold text-blue-600">
//                                    ${finalPrice}
//                                </span>
//                                <span className="text-2xl text-gray-400 line-through">
//                                    ${product.price}
//                                </span>
//                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
//                                    Save ${(product.price - finalPrice).toFixed(2)}
//                                </span>
//                            </div>
//                        ) : (
//                            <span className="text-4xl font-bold text-blue-600">
//                                ${product.price}
//                            </span>
//                        )}
//                    </div>

//                    {/* Stock Status */}
//                    <div className="mb-6">
//                        {product.stock > 0 ? (
//                            <div className="flex items-center gap-2 text-green-600">
//                                <span className="text-xl">?</span>
//                                <span className="font-semibold">In Stock ({product.stock} available)</span>
//                            </div>
//                        ) : (
//                            <div className="flex items-center gap-2 text-red-600">
//                                <span className="text-xl">?</span>
//                                <span className="font-semibold">Out of Stock</span>
//                            </div>
//                        )}
//                    </div>

//                    {/* Description */}
//                    <div className="mb-6">
//                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                            Description
//                        </h3>
//                        <p className="text-gray-600 leading-relaxed">
//                            {product.description}
//                        </p>
//                    </div>

//                    {/* Features */}
//                    {product.features && product.features.length > 0 && (
//                        <div className="mb-6">
//                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                                Key Features
//                            </h3>
//                            <ul className="space-y-2">
//                                {product.features.map((feature, index) => (
//                                    <li key={index} className="flex items-start gap-2">
//                                        <span className="text-blue-600 mt-1">?</span>
//                                        <span className="text-gray-600">{feature}</span>
//                                    </li>
//                                ))}
//                            </ul>
//                        </div>
//                    )}

//                    {/* Quantity Selector */}
//                    <div className="mb-6">
//                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
//                            Quantity
//                        </label>
//                        <div className="flex items-center gap-4">
//                            <div className="flex items-center border border-gray-300 rounded-lg">
//                                <button
//                                    onClick={() => handleQuantityChange(-1)}
//                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
//                                    disabled={quantity <= 1}
//                                >
//                                    -
//                                </button>
//                                <span className="px-6 py-2 border-x border-gray-300 font-semibold">
//                                    {quantity}
//                                </span>
//                                <button
//                                    onClick={() => handleQuantityChange(1)}
//                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
//                                    disabled={quantity >= (product.stock || 99)}
//                                >
//                                    +
//                                </button>
//                            </div>
//                            <span className="text-gray-600">
//                                Total: <span className="font-bold text-blue-600">
//                                    ${(finalPrice * quantity).toFixed(2)}
//                                </span>
//                            </span>
//                        </div>
//                    </div>

//                    {/* Action Buttons */}
//                    <div className="flex gap-4 mb-6">
//                        <button
//                            disabled={!product.stock}
//                            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
//                        >
//                            Add to Cart
//                        </button>
//                        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
//                            ??
//                        </button>
//                    </div>

//                    {/* Additional Info */}
//                    <div className="border-t border-gray-200 pt-6 space-y-3">
//                        <div className="flex items-center gap-2 text-gray-600">
//                            <span className="font-semibold">SKU:</span>
//                            <span>{product.sku || product.id}</span>
//                        </div>
//                        <div className="flex items-center gap-2 text-gray-600">
//                            <span className="font-semibold">Category:</span>
//                            <Link href={`/categories/${product.category}`} className="text-blue-600 hover:underline">
//                                {product.category}
//                            </Link>
//                        </div>
//                        {product.tags && (
//                            <div className="flex items-center gap-2 text-gray-600">
//                                <span className="font-semibold">Tags:</span>
//                                <div className="flex gap-2">
//                                    {product.tags.map((tag, index) => (
//                                        <span
//                                            key={index}
//                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
//                                        >
//                                            {tag}
//                                        </span>
//                                    ))}
//                                </div>
//                            </div>
//                        )}
//                    </div>
//                </div>
//            </div>
//        </div>
//    );
//}

// app/components/products/ProductDetails.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function ProductDetails({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isAdding, setIsAdding] = useState(false);
    const { addToCart } = useCart();

    const images = product.images || [product.image];

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= (product.stock || 99)) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart(product, quantity);

        setTimeout(() => {
            setIsAdding(false);
            setQuantity(1); // Reset quantity after adding
        }, 1500);
    };

    const finalPrice = product.discount
        ? (product.price * (1 - product.discount / 100)).toFixed(2)
        : product.price;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Image Gallery */}
                <div>
                    {/* Main Image */}
                    <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
                        {images[selectedImage] ? (
                            <Image
                                src={images[selectedImage]}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-9xl">
                                ??
                            </div>
                        )}

                        {product.discount && (
                            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                                -{product.discount}%
                            </div>
                        )}
                    </div>

                    {/* Thumbnail Gallery */}
                    {images.length > 1 && (
                        <div className="grid grid-cols-4 gap-2">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative h-20 bg-gray-200 rounded-lg overflow-hidden border-2 ${selectedImage === index
                                            ? 'border-blue-600'
                                            : 'border-transparent'
                                        }`}
                                >
                                    {img ? (
                                        <Image
                                            src={img}
                                            alt={`${product.name} ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-2xl">
                                            ??
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Information */}
                <div>
                    {/* Breadcrumb */}
                    <div className="text-sm text-gray-500 mb-4">
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                        {' / '}
                        <Link href="/products" className="hover:text-blue-600">Products</Link>
                        {' / '}
                        <Link href={`/categories/${product.category}`} className="hover:text-blue-600">
                            {product.category}
                        </Link>
                        {' / '}
                        <span className="text-gray-700">{product.name}</span>
                    </div>

                    {/* Product Name */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {product.name}
                    </h1>

                    {/* Rating and Reviews */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex text-yellow-400 text-xl">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                    {i < Math.floor(product.rating || 0) ? '?' : '?'}
                                </span>
                            ))}
                        </div>
                        <span className="text-gray-600">
                            {product.rating || 0} ({product.reviews || 0} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        {product.discount ? (
                            <div className="flex items-center gap-4">
                                <span className="text-4xl font-bold text-blue-600">
                                    ${finalPrice}
                                </span>
                                <span className="text-2xl text-gray-400 line-through">
                                    ${product.price}
                                </span>
                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                                    Save ${(product.price - finalPrice).toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <span className="text-4xl font-bold text-blue-600">
                                ${product.price}
                            </span>
                        )}
                    </div>

                    {/* Stock Status */}
                    <div className="mb-6">
                        {product.stock > 0 ? (
                            <div className="flex items-center gap-2 text-green-600">
                                <span className="text-xl">?</span>
                                <span className="font-semibold">In Stock ({product.stock} available)</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-red-600">
                                <span className="text-xl">?</span>
                                <span className="font-semibold">Out of Stock</span>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Description
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Key Features
                            </h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">?</span>
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="mb-6">
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                            Quantity
                        </label>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                                    disabled={quantity <= 1}
                                >
                                    -
                                </button>
                                <span className="px-6 py-2 border-x border-gray-300 font-semibold">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                                    disabled={quantity >= (product.stock || 99)}
                                >
                                    +
                                </button>
                            </div>
                            <span className="text-gray-600">
                                Total: <span className="font-bold text-blue-600">
                                    ${(finalPrice * quantity).toFixed(2)}
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={handleAddToCart}
                            disabled={!product.stock || isAdding}
                            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed ${isAdding
                                    ? 'bg-green-500 text-white'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            {isAdding ? '? Added to Cart!' : 'Add to Cart'}
                        </button>
                        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            ?
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="border-t border-gray-200 pt-6 space-y-3">
                        <div className="flex items-center gap-2 text-gray-600">
                            <span className="font-semibold">SKU:</span>
                            <span>{product.sku || product.id}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <span className="font-semibold">Category:</span>
                            <Link href={`/categories/${product.category}`} className="text-blue-600 hover:underline">
                                {product.category}
                            </Link>
                        </div>
                        {product.tags && (
                            <div className="flex items-center gap-2 text-gray-600">
                                <span className="font-semibold">Tags:</span>
                                <div className="flex gap-2">
                                    {product.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
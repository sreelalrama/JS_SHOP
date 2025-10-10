// JavaScript source code
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Product Image */}
            <Link href={`/products/${product.id}`}>
                <div className="relative h-64 bg-gray-200 overflow-hidden group">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-6xl">
                            ??
                        </div>
                    )}

                    {/* Discount Badge */}
                    {product.discount && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            -{product.discount}%
                        </div>
                    )}

                    {/* New Badge */}
                    {product.isNew && (
                        <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                        </div>
                    )}
                </div>
            </Link>

            {/* Product Info */}
            <div className="p-4">
                {/* Category */}
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {product.category}
                </p>

                {/* Product Name */}
                <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1 hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>
                                {i < Math.floor(product.rating || 0) ? '?' : '?'}
                            </span>
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                        ({product.reviews || 0})
                    </span>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                    <div>
                        {product.discount ? (
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-blue-600">
                                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                                </span>
                                <span className="text-sm text-gray-400 line-through">
                                    ${product.price}
                                </span>
                            </div>
                        ) : (
                            <span className="text-2xl font-bold text-blue-600">
                                ${product.price}
                            </span>
                        )}
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
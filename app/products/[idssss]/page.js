import ProductDetails from '@/components/Products/ProductDetails';
import ProductCard from '@/components/Products/ProductCard';
import { notFound } from 'next/navigation';

// Sample products data - same as products page
const products = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        description: 'High-quality wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals who demand the best audio experience.',
        price: 299.99,
        discount: 15,
        category: 'electronics',
        image: null,
        images: [null, null, null],
        rating: 4.5,
        reviews: 128,
        stock: 45,
        isNew: true,
        sku: 'WH-2024-001',
        features: [
            'Active Noise Cancellation (ANC) technology',
            '30-hour battery life with fast charging',
            'Bluetooth 5.0 with multi-device pairing',
            'Premium sound quality with deep bass',
            'Comfortable over-ear design with memory foam',
            'Built-in microphone for calls'
        ],
        tags: ['audio', 'wireless', 'premium', 'bluetooth']
    },
    {
        id: 2,
        name: 'Smart Watch Pro',
        description: 'Feature-rich smartwatch with comprehensive health tracking, built-in GPS, and water resistance up to 50 meters.',
        price: 399.99,
        category: 'electronics',
        image: null,
        images: [null, null],
        rating: 4.8,
        reviews: 256,
        stock: 32,
        isNew: true,
        sku: 'SW-2024-002',
        features: [
            'Heart rate and sleep monitoring',
            'Built-in GPS for accurate tracking',
            'Water resistant up to 50 meters',
            '7-day battery life',
            'Multiple sport modes',
            'Smart notifications'
        ],
        tags: ['wearable', 'fitness', 'smart', 'health']
    },
    {
        id: 3,
        name: 'Designer Leather Jacket',
        description: 'Premium genuine leather jacket with timeless classic design and exceptional craftsmanship.',
        price: 249.99,
        discount: 20,
        category: 'fashion',
        image: null,
        images: [null, null, null, null],
        rating: 4.3,
        reviews: 89,
        stock: 18,
        sku: 'LJ-2024-003',
        features: [
            '100% genuine leather',
            'Classic timeless design',
            'Multiple interior and exterior pockets',
            'Comfortable tailored fit',
            'YKK zippers',
            'Available in multiple sizes'
        ],
        tags: ['leather', 'jacket', 'premium', 'fashion']
    }
];

export default function ProductDetailPage({ params }) {
    // Find the product by ID
    const product = products.find(p => p.id === parseInt(params.id));

    // If product not found, show 404
    if (!product) {
        notFound();
    }

    // Get related products (same category, excluding current product)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Product Details Component */}
            <ProductDetails product={product} />

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Related Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <ProductCard key={relatedProduct.id} product={relatedProduct} />
                        ))}
                    </div>
                </div>
            )}

            {/* Customer Reviews Section */}
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Customer Reviews
                </h2>

                {/* Review Summary */}
                <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-200">
                    <div className="text-center">
                        <div className="text-5xl font-bold text-gray-800 mb-2">
                            {product.rating}
                        </div>
                        <div className="flex text-yellow-400 text-2xl mb-2">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                    {i < Math.floor(product.rating) ? '?' : '?'}
                                </span>
                            ))}
                        </div>
                        <div className="text-gray-600">
                            Based on {product.reviews} reviews
                        </div>
                    </div>

                    <div className="flex-1">
                        <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Write a Review
                        </button>
                    </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                JD
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800">John Doe</div>
                                <div className="text-sm text-gray-500">Verified Purchase</div>
                            </div>
                            <div className="ml-auto flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>?</span>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600">
                            Excellent product! Exceeded my expectations. The quality is outstanding and definitely worth the price.
                        </p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                                SM
                            </div>
                            <div>
                                <div className="font-semibold text-gray-800">Sarah Miller</div>
                                <div className="text-sm text-gray-500">Verified Purchase</div>
                            </div>
                            <div className="ml-auto flex text-yellow-400">
                                {[...Array(4)].map((_, i) => (
                                    <span key={i}>?</span>
                                ))}
                                <span className="text-gray-300">?</span>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            Very good product. Delivery was fast and packaging was secure. Would recommend!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
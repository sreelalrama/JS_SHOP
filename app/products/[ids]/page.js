import ProductDetails from '../../components/Products/ProductDetails';
import ProductCard from '../../components/Products/ProductCard';
import { notFound } from 'next/navigation';

// Sample products data - same as products page
const products = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        description: 'High-quality wireless headphones with active noise cancellation and 30-hour battery life.',
        price: 299.99,
        discount: 15,
        category: 'electronics',
        image: null,
        rating: 4.5,
        reviews: 128,
        stock: 45,
        isNew: true,
        features: [
            'Active Noise Cancellation',
            '30-hour battery life',
            'Bluetooth 5.0',
            'Premium sound quality'
        ],
        tags: ['audio', 'wireless', 'premium']
    },
    {
        id: 2,
        name: 'Smart Watch Pro',
        description: 'Feature-rich smartwatch with health tracking, GPS, and water resistance.',
        price: 399.99,
        category: 'electronics',
        image: null,
        rating: 4.8,
        reviews: 256,
        stock: 32,
        isNew: true,
        features: [
            'Heart rate monitoring',
            'GPS tracking',
            'Water resistant',
            '7-day battery life'
        ],
        tags: ['wearable', 'fitness', 'smart']
    },
    {
        id: 3,
        name: 'Designer Leather Jacket',
        description: 'Genuine leather jacket with classic design and premium finish.',
        price: 249.99,
        discount: 20,
        category: 'fashion',
        image: null,
        rating: 4.3,
        reviews: 89,
        stock: 18,
        features: [
            'Genuine leather',
            'Classic design',
            'Multiple pockets',
            'Comfortable fit'
        ],
        tags: ['leather', 'jacket', 'premium']
    },
    {
        id: 4,
        name: 'Running Shoes Ultra',
        description: 'Professional running shoes with advanced cushioning and breathable design.',
        price: 129.99,
        category: 'fashion',
        image: null,
        rating: 4.6,
        reviews: 342,
        stock: 67,
        features: [
            'Advanced cushioning',
            'Breathable mesh',
            'Lightweight design',
            'Durable sole'
        ],
        tags: ['shoes', 'running', 'sports']
    },
    {
        id: 5,
        name: 'Coffee Maker Deluxe',
        description: 'Programmable coffee maker with thermal carafe and auto-shutoff.',
        price: 89.99,
        discount: 10,
        category: 'home',
        image: null,
        rating: 4.4,
        reviews: 178,
        stock: 25,
        features: [
            'Programmable timer',
            'Thermal carafe',
            'Auto shutoff',
            'Easy to clean'
        ],
        tags: ['kitchen', 'coffee', 'appliance']
    },
    {
        id: 6,
        name: 'Garden Tool Set',
        description: 'Complete gardening tool set with ergonomic handles and storage bag.',
        price: 59.99,
        category: 'home',
        image: null,
        rating: 4.2,
        reviews: 94,
        stock: 41,
        features: [
            'Ergonomic handles',
            'Durable materials',
            'Storage bag included',
            '10-piece set'
        ],
        tags: ['garden', 'tools', 'outdoor']
    },
    {
        id: 7,
        name: '4K Ultra HD Camera',
        description: 'Professional mirrorless camera with 4K video and advanced autofocus.',
        price: 1299.99,
        discount: 25,
        category: 'electronics',
        image: null,
        rating: 4.9,
        reviews: 412,
        stock: 12,
        isNew: true,
        features: [
            '4K video recording',
            'Advanced autofocus',
            'Weather sealed',
            'High ISO performance'
        ],
        tags: ['camera', 'photography', 'professional']
    },
    {
        id: 8,
        name: 'Yoga Mat Premium',
        description: 'Extra thick yoga mat with non-slip surface and carrying strap.',
        price: 39.99,
        category: 'fashion',
        image: null,
        rating: 4.7,
        reviews: 523,
        stock: 89,
        features: [
            'Extra thick padding',
            'Non-slip surface',
            'Eco-friendly material',
            'Carrying strap included'
        ],
        tags: ['yoga', 'fitness', 'exercise']
    },
    {
        id: 9,
        name: 'Blender Pro 3000',
        description: 'High-power blender with multiple speed settings and stainless steel blades.',
        price: 149.99,
        category: 'home',
        image: null,
        rating: 4.5,
        reviews: 267,
        stock: 34,
        features: [
            'High-power motor',
            'Multiple speed settings',
            'Stainless steel blades',
            'BPA-free pitcher'
        ],
        tags: ['kitchen', 'blender', 'appliance']
    },
    {
        id: 10,
        name: 'Wireless Earbuds',
        description: 'True wireless earbuds with touch controls and charging case.',
        price: 79.99,
        discount: 30,
        category: 'electronics',
        image: null,
        rating: 4.4,
        reviews: 891,
        stock: 156,
        features: [
            'True wireless',
            'Touch controls',
            '24-hour battery with case',
            'Water resistant'
        ],
        tags: ['audio', 'wireless', 'earbuds']
    },
    {
        id: 11,
        name: 'Office Chair Ergonomic',
        description: 'Ergonomic office chair with lumbar support and adjustable height.',
        price: 199.99,
        category: 'home',
        image: null,
        rating: 4.6,
        reviews: 145,
        stock: 28,
        features: [
            'Lumbar support',
            'Adjustable height',
            'Breathable mesh',
            '360-degree swivel'
        ],
        tags: ['furniture', 'office', 'ergonomic']
    },
    {
        id: 12,
        name: 'Casual T-Shirt Pack',
        description: 'Pack of 3 premium cotton t-shirts in various colors.',
        price: 49.99,
        category: 'fashion',
        image: null,
        rating: 4.3,
        reviews: 678,
        stock: 234,
        features: [
            '100% cotton',
            'Pack of 3',
            'Multiple colors',
            'Pre-shrunk'
        ],
        tags: ['clothing', 'casual', 'basics']
    }
];

export default function ProductDetailPage({ params }) {
    // Find the product by ID
    params.id = 1;
    console.log("########params.id:" + params.id);
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
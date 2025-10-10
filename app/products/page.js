// JavaScript source code
import ProductList from '../components/Products/ProductList';

// Sample products data - In a real app, this would come from a database or API
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

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Our Products
                </h1>
                <p className="text-gray-600">
                    Discover our wide range of quality products at great prices
                </p>
            </div>

            {/* Product List Component */}
            <ProductList initialProducts={products} />
        </div>
    );
}

//export default function ProductsPage() {
//    console.log('ProductsPage called~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//    return <div>Products Page</div>;
//}
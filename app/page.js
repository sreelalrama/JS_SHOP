import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-12">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold mb-4">
                        Welcome to JS Shop
                    </h1>
                    <p className="text-xl mb-6 text-blue-100">
                        Discover amazing products at unbeatable prices. Shop now and enjoy exclusive deals!
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/products"
                            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="/categories"
                            className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Browse Categories
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Featured Categories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Electronics', 'Fashion', 'Home & Garden'].map((category) => (
                        <div
                            key={category}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-4xl">📦</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {category}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Explore our collection of {category.toLowerCase()} products
                            </p>
                            <Link
                                href={`/categories/${category.toLowerCase()}`}
                                className="text-blue-600 font-semibold hover:text-blue-700"
                            >
                                View More →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Why Choose JS Shop?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { icon: '🚚', title: 'Fast Delivery', desc: 'Quick shipping worldwide' },
                        { icon: '💳', title: 'Secure Payment', desc: 'Safe & secure checkout' },
                        { icon: '🔄', title: 'Easy Returns', desc: '30-day return policy' },
                        { icon: '💬', title: '24/7 Support', desc: 'Always here to help' }
                    ].map((feature, index) => (
                        <div key={index} className="text-center p-6">
                            <div className="text-5xl mb-3">{feature.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-gray-100 rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Stay Updated
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Subscribe to our newsletter and be the first to know about new products and exclusive offers!
                </p>
                <form className="max-w-md mx-auto flex gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    );
}
// JavaScript source code
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
                <div className="text-9xl mb-4">??</div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Product Not Found
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Sorry, we couldn't find the product you're looking for.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link
                        href="/products"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        View All Products
                    </Link>
                    <Link
                        href="/"
                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
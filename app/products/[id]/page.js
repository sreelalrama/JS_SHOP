import ProductDetails from '../../components/Products/ProductDetails';
import ProductCard from '../../components/Products/ProductCard';
import { notFound } from 'next/navigation';
import { products } from '../../data/products';

export default function ProductDetailPage({ params }) {
    // Find the product by ID
    console.log("#params.id:" + params.id);
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
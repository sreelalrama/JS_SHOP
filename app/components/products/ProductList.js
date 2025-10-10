'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ initialProducts }) {
    const [products] = useState(initialProducts);
    const [sortBy, setSortBy] = useState('default');
    const [filterCategory, setFilterCategory] = useState('all');

    // Get unique categories
    const categories = ['all', ...new Set(products.map(p => p.category))];

    // Filter and sort products
    const getFilteredAndSortedProducts = () => {
        let filtered = products;

        // Filter by category
        if (filterCategory !== 'all') {
            filtered = filtered.filter(p => p.category === filterCategory);
        }

        // Sort products
        let sorted = [...filtered];
        switch (sortBy) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'rating':
                sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            default:
                break;
        }

        return sorted;
    };

    const displayedProducts = getFilteredAndSortedProducts();

    return (
        <div>
            {/* Filter and Sort Controls */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    {/* Category Filter */}
                    <div className="flex items-center gap-3">
                        <label className="text-sm font-semibold text-gray-700">
                            Category:
                        </label>
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-3">
                        <label className="text-sm font-semibold text-gray-700">
                            Sort by:
                        </label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="default">Default</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name: A to Z</option>
                            <option value="rating">Rating: High to Low</option>
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="text-sm text-gray-600">
                        Showing {displayedProducts.length} of {products.length} products
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            {displayedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">No products found</p>
                    <button
                        onClick={() => {
                            setFilterCategory('all');
                            setSortBy('default');
                        }}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
}
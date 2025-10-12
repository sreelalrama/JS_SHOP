
/**
 * Product Service
 * This service layer abstracts data fetching logic.
 * You can easily swap between local data, API calls, or different backends.
 */

// Import local data (can be replaced with API calls)
import { products } from '../data/products';

class ProductService {
    /**
     * Get all products
     * @returns {Promise<Array>} Array of products
     */
    async getAllProducts() {
        // Currently using local data
        // Replace with: return fetch('/api/products').then(res => res.json())
        return Promise.resolve(products);
    }

    /**
     * Get product by ID
     * @param {number|string} id - Product ID
     * @returns {Promise<Object|null>} Product object or null
     */
    async getProductById(id) {
        // Currently using local data
        const product = products.find(p => p.id === parseInt(id));
        return Promise.resolve(product || null);

        // API version would be:
        // return fetch(`/api/products/${id}`).then(res => res.json())
    }

    /**
     * Get products by category
     * @param {string} category - Category name
     * @returns {Promise<Array>} Array of products
     */
    async getProductsByCategory(category) {
        const filtered = products.filter(p => p.category === category);
        return Promise.resolve(filtered);

        // API version:
        // return fetch(`/api/products?category=${category}`).then(res => res.json())
    }

    /**
     * Get all unique categories
     * @returns {Promise<Array>} Array of category names
     */
    async getCategories() {
        const categories = [...new Set(products.map(p => p.category))];
        return Promise.resolve(categories);

        // API version:
        // return fetch('/api/categories').then(res => res.json())
    }

    /**
     * Search products
     * @param {string} query - Search query
     * @returns {Promise<Array>} Array of matching products
     */
    async searchProducts(query) {
        const lowercaseQuery = query.toLowerCase();
        const results = products.filter(p =>
            p.name.toLowerCase().includes(lowercaseQuery) ||
            p.description.toLowerCase().includes(lowercaseQuery) ||
            p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
        );
        return Promise.resolve(results);

        // API version:
        // return fetch(`/api/products/search?q=${query}`).then(res => res.json())
    }

    /**
     * Get featured products
     * @param {number} limit - Number of products to return
     * @returns {Promise<Array>} Array of featured products
     */
    async getFeaturedProducts(limit = 4) {
        const featured = products
            .filter(p => p.isNew || p.discount)
            .slice(0, limit);
        return Promise.resolve(featured);

        // API version:
        // return fetch(`/api/products/featured?limit=${limit}`).then(res => res.json())
    }

    /**
     * Get related products
     * @param {number} productId - Current product ID
     * @param {number} limit - Number of products to return
     * @returns {Promise<Array>} Array of related products
     */
    async getRelatedProducts(productId, limit = 4) {
        const product = products.find(p => p.id === parseInt(productId));
        if (!product) return Promise.resolve([]);

        const related = products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, limit);
        return Promise.resolve(related);

        // API version:
        // return fetch(`/api/products/${productId}/related?limit=${limit}`).then(res => res.json())
    }
}

// Export a singleton instance
export const productService = new ProductService();

// You can also export the class if you need multiple instances
export default ProductService;
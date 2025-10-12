// app/hooks/useProducts.js
'use client';

import { useState, useEffect } from 'react';
import { productService } from '../services';

/**
 * Custom hook for fetching products on the client side
 * Useful for client components that need to fetch data dynamically
 */
export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await productService.getAllProducts();
                setProducts(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
}

/**
 * Hook for fetching a single product
 */
export function useProduct(id) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await productService.getProductById(id);
                setProduct(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return { product, loading, error };
}

/**
 * Hook for searching products
 */
export function useProductSearch(query) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query || query.length < 2) {
            setResults([]);
            return;
        }

        const searchProducts = async () => {
            try {
                setLoading(true);
                const data = await productService.searchProducts(query);
                setResults(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        // Debounce search
        const timeoutId = setTimeout(searchProducts, 300);
        return () => clearTimeout(timeoutId);
    }, [query]);

    return { results, loading, error };
}

/**
 * Hook for fetching products by category
 */
export function useProductsByCategory(category) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!category) return;

        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await productService.getProductsByCategory(category);
                setProducts(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    return { products, loading, error };
}

/**
 * Example Usage in a Client Component:
 * 
 * 'use client';
 * import { useProducts } from '@/hooks/useProducts';
 * 
 * export default function ProductsClient() {
 *     const { products, loading, error } = useProducts();
 * 
 *     if (loading) return <div>Loading...</div>;
 *     if (error) return <div>Error: {error}</div>;
 * 
 *     return (
 *         <div>
 *             {products.map(product => (
 *                 <div key={product.id}>{product.name}</div>
 *             ))}
 *         </div>
 *     );
 * }
 */
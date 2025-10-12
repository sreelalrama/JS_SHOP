// JavaScript source code
import ProductList from '../components/Products/ProductList';
//import { products } from '../data/products';
import { productService } from '../services/productService';

export default async function ProductsPage() {
    const products = await productService.getAllProducts();

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


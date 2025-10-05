// JavaScript source code
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-[72px] left-0 right-0 bg-gray-50 border-b border-gray-200 z-40">
            <div className="container mx-auto px-4">
                <ul className="flex items-center gap-8 py-3">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/products"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/categories"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
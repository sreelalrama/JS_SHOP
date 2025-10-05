// JavaScript source code
export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-800">
                        JS Shop
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
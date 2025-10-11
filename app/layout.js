// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/home/Header";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "JS Shop - Your Online Store",
    description: "Quality products at affordable prices",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
            >
                <CartProvider>
                    <Header />
                    <Navbar />

                    {/* Main content with top padding to account for fixed header + navbar */}
                    <main className="flex-1 pt-[124px]">
                        {children}
                    </main>

                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
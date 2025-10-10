// JavaScript source code
'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-600">
                    We'd love to hear from you. Send us a message!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Send us a Message
                    </h2>

                    {submitted && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                            <p className="font-semibold">? Message sent successfully!</p>
                            <p className="text-sm">We'll get back to you soon.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="How can we help?"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                placeholder="Tell us what's on your mind..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div>
                    {/* Contact Details */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Contact Information
                        </h2>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">??</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                                    <p className="text-gray-600">
                                        123 Shop Street<br />
                                        Commerce City, CC 12345<br />
                                        United States
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">??</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                                    <p className="text-gray-600">
                                        +1 (555) 123-4567<br />
                                        Mon-Fri: 9:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">??</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                                    <p className="text-gray-600">
                                        support@jsshop.com<br />
                                        info@jsshop.com
                                    </p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">??</div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Follow Us</h3>
                                    <div className="flex gap-3 mt-2">
                                        <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                            f
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                            t
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                                            i
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-blue-50 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Business Hours
                        </h2>
                        <div className="space-y-2 text-gray-700">
                            <div className="flex justify-between">
                                <span className="font-semibold">Monday - Friday:</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Saturday:</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Sunday:</span>
                                <span className="text-red-600">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            How long does shipping take?
                        </h3>
                        <p className="text-gray-600">
                            Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 day delivery.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            What is your return policy?
                        </h3>
                        <p className="text-gray-600">
                            We offer a 30-day return policy on most items. Products must be in original condition with tags attached.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Do you ship internationally?
                        </h3>
                        <p className="text-gray-600">
                            Yes! We ship to most countries worldwide. International shipping times vary by location.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

//export const metadata = {
//    title: 'Contact Us - JS Shop',
//    description: 'Get in touch with JS Shop. We\'re here to help!',
//};
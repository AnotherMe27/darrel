import React from 'react';

const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="mb-6">Feel free to reach out for any inquiries or collaborations.</p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <div className="mt-8">
                <h2 className="text-xl font-bold">Contact Information</h2>
                <p>Email: <a href="mailto:placeholder@example.com" className="text-blue-500">placeholder@example.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></p>
                <p>Follow me on social media:</p>
                <ul className="list-disc pl-5">
                    <li><a href="https://twitter.com/placeholder" className="text-blue-500">Twitter</a></li>
                    <li><a href="https://linkedin.com/in/placeholder" className="text-blue-500">LinkedIn</a></li>
                    <li><a href="https://instagram.com/placeholder" className="text-blue-500">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;
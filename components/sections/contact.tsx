import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
                <p className="text-center mb-8">Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
                <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows={4}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
                </form>
                <div className="mt-8 text-center">
                    <p className="text-sm">Or reach me at:</p>
                    <p className="text-sm">Email: <a href="mailto:placeholder@example.com" className="text-blue-600">placeholder@example.com</a></p>
                    <p className="text-sm">Phone: <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React, { useState } from 'react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="flex items-center p-2 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="Toggle menu"
            >
                <span className="block w-6 h-0.5 bg-gray-500 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-500 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-500"></span>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 bg-white rounded-md shadow-lg">
                    <nav className="flex flex-col">
                        <a href="/" className="px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                        <a href="/about" className="px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
                        <a href="/projects" className="px-4 py-2 text-gray-700 hover:bg-gray-100">Projects</a>
                        <a href="/gallery" className="px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery</a>
                        <a href="/achievements" className="px-4 py-2 text-gray-700 hover:bg-gray-100">Achievements</a>
                        <a href="/contact" className="px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
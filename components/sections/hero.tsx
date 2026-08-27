import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold">Sonia Ganda</h1>
                <p className="mt-4 text-xl">Your professional tagline goes here.</p>
                <div className="mt-6">
                    <a href="#about" className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition">Learn More</a>
                    <a href="#contact" className="ml-4 px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
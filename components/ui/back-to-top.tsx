import React from 'react';

const BackToTop: React.FC = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-opacity duration-300 hover:opacity-80"
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
};

export default BackToTop;
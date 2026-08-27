import React, { useState } from 'react';

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          &times;
        </button>
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={handleNext}>
          &#10095;
        </button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="max-w-full max-h-screen" />
      </div>
    </div>
  );
};

export default Lightbox;
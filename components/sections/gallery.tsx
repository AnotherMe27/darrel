'use client';

import React from 'react';
import { galleryData } from '../../data/gallery';
import Lightbox from '../ui/lightbox';

const Gallery: React.FC<{ images?: typeof galleryData }> = ({ images = galleryData }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState<string | null>(null);

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className="gallery">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((item, index) => (
          <div key={index} className="relative cursor-pointer" onClick={() => openLightbox(item.src)}>
            <img src={item.src} alt={item.alt} className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
              {item.alt}
            </div>
          </div>
        ))}
      </div>
      {isOpen && currentImage && (
        <Lightbox images={[currentImage]} isOpen onClose={closeLightbox} />
      )}
    </section>
  );
};

export default Gallery;
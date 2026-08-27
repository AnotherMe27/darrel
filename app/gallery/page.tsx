import React from 'react';
import GallerySection from '../../components/sections/gallery';
import { galleryData } from '../../data/gallery';

const GalleryPage = () => {
    return (
        <main>
            <GallerySection images={galleryData} />
        </main>
    );
};

export default GalleryPage;
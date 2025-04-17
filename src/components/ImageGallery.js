import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

import zd1 from '../res/img/zd1.jpg';
import zd2 from '../res/img/zd2.jpg';
import zd3 from '../res/img/zd3.jpg';
import zd4 from '../res/img/zd4.jpg';
import zd5 from '../res/img/zd5.jpg';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: zd1, alt: 'Gallery Image 1' },
    { src: zd2, alt: 'Gallery Image 2' },
    { src: zd3, alt: 'Gallery Image 3' },
    { src: zd4, alt: 'Gallery Image 4' },
    { src: zd5, alt: 'Gallery Image 5' },
  ];

  const changeImageAutomatically = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  useEffect(() => {
    const interval = setInterval(changeImageAutomatically, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <div className="gallery-image-container">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-image ${index === currentIndex ? 'active' : ''}`}
            >
              {index === currentIndex && (
                <img src={image.src} alt={image.alt} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-controls">
        <div className="gallery-dots">
          {galleryImages.map((_, index) => (
            <span
              key={index}
              className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
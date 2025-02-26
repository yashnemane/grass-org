import React, { useState } from "react";
import "../styles/components/Gallery.css";
import { galleryData, categories } from '../utils/GalleryConstants.js';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const filteredGallery = selectedCategory === "All"
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const imagesOnly = filteredGallery.filter(item => item.type === "image");

  const handleItemClick = (item) => {
    if (item.type === "image") {
      setSelectedMedia(item);
      const index = imagesOnly.findIndex(image => image.id === item.id);
      setPhotoIndex(index);
      setLoading(true);
      setIsLightboxOpen(true);
    } else if (item.type === "video") {
      setActiveVideoId(activeVideoId === item.id ? null : item.id);
    }
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>

      <div className="category-filters">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.filter(cat => cat !== "All").map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            className={`gallery-item ${item.type === "video" && activeVideoId === item.id ? "video-active" : ""}`}
            onClick={() => handleItemClick(item)}
          >
            {item.type === "image" ? (
              <div className="image-container">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="gallery-image" 
                  onLoad={handleImageLoad}
                />
                <div className="image-overlay">
                  <span className="view-text">View</span>
                </div>
              </div>
            ) : (
              <div className="gallery-video">
                <iframe
                  src={`${item.src}${activeVideoId === item.id ? "?autoplay=1" : ""}`}
                  title={item.alt}
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
                {activeVideoId !== item.id && (
                  <div className="video-overlay">
                    <span className="play-text">Play</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {isLightboxOpen && (
        <Lightbox
          mainSrc={imagesOnly[photoIndex].src}
          nextSrc={imagesOnly[(photoIndex + 1) % imagesOnly.length].src}
          prevSrc={imagesOnly[(photoIndex + imagesOnly.length - 1) % imagesOnly.length].src}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imagesOnly.length - 1) % imagesOnly.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imagesOnly.length)}
          imageLoadErrorMessage="Failed to load image"
          onImageLoad={handleImageLoad}
        />
      )}

      {loading && <div className="loading-indicator">Loading...</div>}
    </div>
  );
};

export default Gallery;

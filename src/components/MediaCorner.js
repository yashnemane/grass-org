import React, { useState } from "react";
import "../styles/components/MediaCorner.css";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import farmWorkshop from "../assets/images/farming-workshop.jpg"
import organicFarming from "../assets/images/organic-farming.jpg"
import farmerTrainer from "../assets/images/farmer-training.jpeg"

const mediaData = {
  images: [
    { src: farmWorkshop, alt: "Farming Workshop" },
    { src: organicFarming, alt: "Organic Farming Event" },
    { src: farmerTrainer, alt: "Farmer Training Session" },
  ],
  videos: [
    { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Sustainable Farming" },
    { url: "https://www.youtube.com/embed/tgbNymZ7vqY", title: "Agriculture Growth" },
  ],
  news: [
    { title: "New Techniques in Farming", link: "https://example.com/news1" },
    { title: "Government Support for Farmers", link: "https://example.com/news2" },
  ],
};

const MediaCorner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleDownload = (src) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="media-corner">
      <h2>Media Corner</h2>

      <div className="media-grid">
        <div className="media-section">
          <h3>Gallery</h3>
          <div className="image-gallery">
            {mediaData.images.map((img, index) => (
              <div key={index} className="image-item" onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
                <img src={img.src} alt={img.alt} />
                <div className="overlay">
                  <FaDownload onClick={() => handleDownload(img.src)} />
                  <FaShareAlt onClick={() => handleShare(img.src)} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="media-section">
          <h3>Videos</h3>
          <div className="video-gallery">
            {mediaData.videos.map((video, index) => (
              <iframe key={index} src={video.url} title={video.title} allowFullScreen />
            ))}
          </div>
        </div>

        <div className="media-section">
          <h3>News</h3>
          <ul className="news-list">
            {mediaData.news.map((news, index) => (
              <li key={index}>
                <a href={news.link} target="_blank" rel="noopener noreferrer">{news.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={mediaData.images[photoIndex].src}
          nextSrc={mediaData.images[(photoIndex + 1) % mediaData.images.length].src}
          prevSrc={mediaData.images[(photoIndex + mediaData.images.length - 1) % mediaData.images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + mediaData.images.length - 1) % mediaData.images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % mediaData.images.length)}
        />
      )}
    </div>
  );
};

export default MediaCorner;

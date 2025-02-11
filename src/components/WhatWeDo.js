import React, { useState } from "react";
import { whatWeDoData } from "../utils/WhatWeDoConstants.js";
import "../styles/components/WhatWeDo.css";

const WhatWeDo = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Function to close modal
  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <div className="what-we-do">
      <h2>What We Do</h2>
      <div className="activities-grid">
        {whatWeDoData.map((activity, index) => (
          <div
            key={index}
            className="activity-card"
            onClick={() => setSelectedActivity(activity)} // Open modal on click
          >
            <img src={activity.icon} alt={activity.title} className="activity-icon" />
            <h3>{activity.title}</h3>
            <p>{activity.shortDescription}</p>
            <button onClick={(e) => { e.stopPropagation(); setSelectedActivity(activity); }}>
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedActivity && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <h3>{selectedActivity.title}</h3>
            <p>{selectedActivity.longDescription}</p>
            <img
              src={selectedActivity.image}
              alt={selectedActivity.title}
              className="modal-image"
            />
            <div className="cta-buttons">
              <button>Donate</button>
              <button>Learn More</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatWeDo;
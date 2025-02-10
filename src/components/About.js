import React from "react";
import { NGO_DETAILS } from "../utils/Constants.js";
import "../styles/components/About.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero">
        <h1>About {NGO_DETAILS.name}</h1>
        <p className="quote">"{NGO_DETAILS.quote}"</p>
      </section>

      <section className="history">
        <h2>Our Journey</h2>
        <p>
          Established in <strong>{NGO_DETAILS.founded}</strong> and based in{" "}
          <strong>{NGO_DETAILS.location}</strong>, {NGO_DETAILS.name} has been
          dedicated to transforming agricultural practices for over two decades.
        </p>
        <p>{NGO_DETAILS.mission}</p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {NGO_DETAILS.team.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-img" />
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Join Our Mission</h2>
        <p>Be a part of our journey to revolutionize farming techniques.</p>
        <a href="/donate" className="cta-button">Donate Now</a>
      </section>
    </div>
  );
};

export default AboutUs;
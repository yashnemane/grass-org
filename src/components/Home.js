import React from 'react';
import '../styles/components/Home.css';
import homePageImage from "../assets/images/home-page.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="hero"
      style={{
        backgroundImage: `url(${homePageImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "black",
      }}>
        <div className="hero-content">
          <h1>Advancing Agricultural Education</h1>
          <p>Empowering communities through sustainable agricultural practices and education</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🌱</div>
          <h3>Agricultural Research</h3>
          <p>Innovative research in sustainable farming practices</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Education</h3>
          <p>Comprehensive agricultural education programs</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h3>Social Services</h3>
          <p>Community development and support initiatives</p>
        </div>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>1000+</h3>
            <p>Farmers Trained</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Research Projects</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Communities Served</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
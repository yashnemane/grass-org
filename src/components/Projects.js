import React from "react";
import "../styles/components/Projects.css";
import projectsData from "../utils/ProjectsConstants";

const Projects = () => {
    return (
      <section className="projects-section">
        <h2 className="section-title">Our Projects</h2>
        <div className="projects-slider">
          <div className="projects-container">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Year:</strong> {project.year}</p>
                <p><strong>Impact:</strong> {project.impact}</p>
                <a href={project.link} className="read-more">Read More</a>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className="projects-cta">
            <h3>Want to Support Our Initiatives?</h3>
            <a href="/get-involved" className="cta-button">Get Involved</a>
        </div>
      </section>
    );
  };

export default Projects;
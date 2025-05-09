import React from 'react';
import './ProjectCard.css';
import { FaWhatsapp } from 'react-icons/fa';

const ProjectCard = ({ image, title, description, direction }) => {
  return (
    <div className={`project-card ${direction}`}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-buttons">
         
          <a
            className="enquire-btn"
            href="https://wa.me/919766484046?text=I'm%20interested%20in%20your%20project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Enquire Now
          </a>
        </div>
        <div className="sale-text">Sale</div> {/* Sale text */}
      </div>
    </div>
  );
};

export default ProjectCard;

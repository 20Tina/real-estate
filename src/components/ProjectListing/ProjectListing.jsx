import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterBar from './FilterBar';

import './ProjectListing.css'; // CSS for styling
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectListing = ({ projects }) => {
  const [filters, setFilters] = useState({ location: '', bhk: '', type: '' });

  const dummyProjects = [
    {
      id: 1,
      name: 'Skyline Apartments',
      description: 'Modern 2BHK apartments',
      location: 'Mumbai',
      bhk: '2BHK',
      type: 'Residential',
      images: [
        'https://images.unsplash.com/photo-1501183638710-841dd1904471',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      ],
       video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      name: 'Green Villa Estate',
      description: 'Spacious Villas with Garden',
      location: 'Pune',
      bhk: '3BHK',
      type: 'Villa',
      images: [
       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Luxury villa
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811', // Garden view
  'https://images.unsplash.com/photo-1613490493907-d67b0b9c630b'  // Pool area
      ],
    },
    {
      id: 3,
      name: 'Metro Biz Hub',
      description: 'Offices in Prime Location',
      location: 'Bangalore',
      bhk: 'Studio',
      type: 'Commercial',
      images: [
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4', // Office setup
  'https://images.unsplash.com/photo-1581090700227-1e8e46910315', // Conference room
  'https://images.unsplash.com/photo-1581093448790-6e8c4a6d26f1'  // Reception area
      ],
    },
  ];

  const dataToUse = projects && projects.length ? projects : dummyProjects;

  const handleEnquire = (projectId) => {
    console.log('Enquire for project ID:', projectId);
  };

  const filteredProjects = dataToUse.filter(p => {
    return (!filters.location || p.location === filters.location)
      && (!filters.bhk || p.bhk === filters.bhk)
      && (!filters.type || p.type === filters.type);
  });

  return (
    <>
      <div className="project-listing">
        <FilterBar filters={filters} setFilters={setFilters} />

        {filteredProjects.length === 0 ? (
          <p className="no-projects">No projects match your filters.</p>
        ) : (
          <div className="project-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
               <div className="carousel-container">
  <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
    {project.images.map((imgUrl, index) => (
      <div key={index}>
        <img src={imgUrl} alt={`Project ${index}`} className="carousel-media" />
      </div>
    ))}
    {project.video && (
      <div>
        <video controls className="carousel-media">
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}
  </Slider>
</div>
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p><strong>Location:</strong> {project.location}</p>
                  <p><strong>{project.bhk}</strong> | <strong>{project.type}</strong></p>
                </div>
                <div className="project-actions">
                  <Link to={`/project/${project.id}`}>View Details</Link>
                  <button onClick={() => handleEnquire(project.id)}>Enquire Now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
  
    </>
  );
};

export default ProjectListing;

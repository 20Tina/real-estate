import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

const dummyProjects = [
  {
    id: 1,
    name: 'Skyline Apartments',
    description: 'Modern 2BHK apartments',
    location: 'Mumbai',
    bhk: '2BHK',
    type: 'Residential',
    features: ['Gym', 'Swimming Pool', 'Garden'],
    images: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    name: 'Green Villa Estate',
    description: 'Spacious Villas with Garden',
    location: 'Pune',
    bhk: '3BHK',
    type: 'Villa',
    features: ['Private Garden', 'Smart Security', 'Parking Space'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      'https://images.unsplash.com/photo-1613490493907-d67b0b9c630b',
    ],
  },
  {
    id: 3,
    name: 'Metro Biz Hub',
    description: 'Offices in Prime Location',
    location: 'Bangalore',
    bhk: 'Studio',
    type: 'Commercial',
    features: ['Business Lounge', 'High-Speed Internet', 'Reception'],
    images: [
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
      'https://images.unsplash.com/photo-1581090700227-1e8e46910315',
      'https://images.unsplash.com/photo-1581093448790-6e8c4a6d26f1',
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = dummyProjects.find((proj) => proj.id === parseInt(id));

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p><strong>Location:</strong> {project.location}</p>
      <p><strong>BHK:</strong> {project.bhk}</p>
      <p><strong>Type:</strong> {project.type}</p>
      <h4>Features:</h4>
      <ul>
        {project.features.map((feat, i) => <li key={i}>{feat}</li>)}
      </ul>
      <div className="media-gallery">
        {project.images.map((img, idx) => (
          <img key={idx} src={img} alt={`img-${idx}`} className="media-img" />
        ))}
        {project.video && (
          <video controls className="media-video">
            <source src={project.video} type="video/mp4" />
            Your browser does not support video.
          </video>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;

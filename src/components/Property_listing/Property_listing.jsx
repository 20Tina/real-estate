import React, { useState } from 'react';
import './Property_listing.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: 'Bungalow, 306 C2',
    location: 'California Mount Villas 34 West',
    price: '$625,000,000',
    beds: 6,
    baths: 5,
    area: '1350 Sqft',
    images: [
      'https://th.bing.com/th/id/OIP.HyPO0GQqnsGoMcauAHz_MQHaE7?w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
      'https://cdn.pixabay.com/photo/2016/08/16/03/39/home-1597079_960_720.jpg',
      'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
      'https://media.istockphoto.com/id/1390021683/photo/luxury-villa-exterior.jpg'
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 2,
    title: 'Contemporary, 300 D4',
    location: 'California Mount Villas 46 West',
    price: '$600,000,000',
    beds: 6,
    baths: 4,
    area: '1250 Sqft',
    images: [
      'https://th.bing.com/th/id/OIP.qljk19JWLbjLTNXWKAgyxwHaEa?w=323&h=192&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
      'https://i.pinimg.com/originals/1c/ad/6c/1cad6cc5870969b11091015dd83904de.jpg',
      'https://images.unsplash.com/photo-1560185127-6ed189bf5e23',
      'https://media.istockphoto.com/id/1354737813/photo/contemporary-house.jpg'
    ],
    video: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    id: 3,
    title: 'Apartments, 204 D4',
    location: 'California Mount Villas 52 West',
    price: '$750,000,000',
    beds: 7,
    baths: 6,
    area: '1450 Sqft',
    images: [
      'https://th.bing.com/th/id/OIP.HG193Ox8HdZU_086QiI2IAHaEo?w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
      'https://cdn.pixabay.com/photo/2015/01/28/23/35/house-615748_960_720.jpg',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.unsplash.com/photo-1600607687126-798f1b31f4e8'
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 4,
    title: 'Modern Apartment, 401 A1',
    location: 'California Mount Villas 60 West',
    price: '$800,000,000',
    beds: 8,
    baths: 7,
    area: '1650 Sqft',
    images: [
      'https://cdn.pixabay.com/photo/2016/08/16/03/39/home-1597079_960_720.jpg',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.unsplash.com/photo-1560184897-d78b1d6261c2',
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg'
    ],
    video: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    id: 5,
    title: 'Elegant Studio, 110 B2',
    location: 'California Mount Villas 70 West',
    price: '$850,000,000',
    beds: 5,
    baths: 3,
    area: '1200 Sqft',
    images: [
      'https://i.pinimg.com/originals/1c/ad/6c/1cad6cc5870969b11091015dd83904de.jpg',
      'https://images.unsplash.com/photo-1599423300746-b62533397364',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg'
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 6,
    title: 'Luxury Villa, 999 Z9',
    location: 'California Mount Villas 99 West',
    price: '$900,000,000',
    beds: 10,
    baths: 8,
    area: '1850 Sqft',
    images: [
      'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?cs=srgb&dl=pexels-pixabay-209296.jpg&fm=jpg',
      'https://images.unsplash.com/photo-1599423300746-b62533397364',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg'
    ],
    video: 'https://www.w3schools.com/html/movie.mp4'
  }
];

const animationVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Property_listing = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase()) ||
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="services-wrapper">
      <section className="services-banner-overlay">
        <h1 className="banner-title">Property Listings</h1>
      </section>

      <section className="featured-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="property-grid">
          {filteredProperties.length === 0 ? (
            <p className="no-results">No properties found.</p>
          ) : (
            filteredProperties.map((property, index) => (
              <motion.article
                className="property-card"
                key={property.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}
                onClick={() => navigate(`/PropertyDetail/${property.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="property-image">
                  <img src={property.images[0]} alt={property.title} loading="lazy" />
                  <span className="badge">For Sale!</span>
                </div>
                <div className="property-details">
                  <h2>{property.title}</h2>
                  <p>{property.location}</p>
                  <h4>{property.price}</h4>
                  <div className="property-meta">
                    <span>🛏 {property.beds}</span>
                    <span>🛁 {property.baths}</span>
                    <span>📐 {property.area}</span>
                  </div>
                  <button
                    className="details-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/PropertyDetail/${property.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </section>
    </section>
  );
};

export default Property_listing;

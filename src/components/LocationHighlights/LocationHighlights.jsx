import React from 'react';
import './LocationHighlights.css';
import { motion } from 'framer-motion';
import LocationMap from './LocationMap';

const amenities = [
  { icon: '🏫', title: 'Oberoi International School', distance: '2.5 km' },
  { icon: '🏥', title: 'Kokilaben Dhirubhai Ambani Hospital', distance: '3 km' },
  { icon: '🛍️', title: 'Infinity Mall', distance: '1.2 km' },
  { icon: '🚇', title: 'Versova Metro Station', distance: '1 km' },
  { icon: '🏢', title: 'Mindspace Business Park', distance: '4 km' },
  { icon: '🌳', title: 'Versova Beach & Park', distance: '1.8 km' },
];

const LocationHighlights = () => {
  return (
    <motion.section 
      id="location-highlights"
      className="location-highlights"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      >
        Location Highlights
      </motion.h2>
      
      <motion.p 
        className="location-subtext"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Live at the heart of convenience with schools, hospitals, shopping malls, metros, and parks all nearby.
      </motion.p>

      <motion.div 
        className="location-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div className="map-container">
          <LocationMap />
        </motion.div>

        <motion.div 
          className="amenities-list"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {amenities.map((item, idx) => (
            <motion.div 
              key={idx}
              className="amenity-card"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <div>
                <div className="amenity-title">{item.title}</div>
                <div className="amenity-distance">{item.distance} away</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default LocationHighlights;

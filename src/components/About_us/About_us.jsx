import React from "react";
import './About_us.css';
import { motion } from 'framer-motion';
import real1 from '../../assets/images/real1.webp';

const About_us = () => {
  return (
    <section>
      {/* Banner remains unchanged */}
      <section className="services-banner-overlay">
        <h1 className="banner-title">About Us</h1>
      </section>

      <div className="about-us-content">
        {/* Introduction Section */}
        <motion.div 
          className="about-intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Discover Your Ideal Home</h2>
          <p>Find the perfect place to live, work, and grow with our expert real estate services designed just for you.</p>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="features"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            {[{
              icon: "🎥",
              title: "VIRTUAL TOURS",
              text: "Experience properties online with immersive 360° virtual tours."
            }, {
              icon: "💻",
              title: "ONLINE CONSULTATIONS",
              text: "Book expert consultations at your convenience — anytime, anywhere."
            }, {
              icon: "🏡",
              title: "SMART PROPERTY SEARCH",
              text: "Find your dream home quickly with intelligent filters and search tools."
            }].map((item, index) => (
              <div className="feature-box" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* About Columns */}
        <motion.div 
          className="about-columns"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-text">
            <h3>Our Story</h3>
            <p>At Estate Rise, we are more than just real estate experts — we are partners in your journey to find the perfect home.</p>
            <p>Our mission is to make your real estate experience smooth, exciting, and memorable, every step of the way.</p>
            <h3>Our Vision and Values</h3>
            <ul>
              <li>Building trust and delivering excellence</li>
              <li>Creating value for our clients and communities</li>
              <li>Integrity, innovation, and client-first focus</li>
            </ul>
            <h3>Excellence in Real Estate</h3>
            <p>With a passion for real estate and years of expertise, we strive to exceed expectations at every step.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>

          <div className="about-media">
            <img src={real1} alt="House" className="about-img" />
            <div className="certification-card">
              <div className="cert-badge">🎓</div>
              <p>CIPS Certification By National Association of Realtor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About_us;

import React from 'react';
import './Contact_us.css';

const Contact_us = () => {
  return (
    <section className="services-wrapper">
      {/* Top Banner Section */}
      <section className="services-banner-overlay">
        <h1 className="banner-title">Contact Us </h1>
      </section>
      <div className="book-meeting-wrapper">
      <div className="contact-cards">
        <div className="contact-card">
          <div className="icon">&#128222;</div>
          <div>
            <h4>Call Us Directly At</h4>
            <p className="phone">+123 456 7890</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon">&#128172;</div>
          <div>
            <h4>Chat With Our Agent</h4>
            <button className="chat-btn">Chat Now</button>
          </div>
        </div>
      </div>

      <div className="form-card">
        <h2>Book A Meeting</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Nibh posuere sed sed bibendum. Risus cursus sapien arcu in dignissim.</p>

        <form>
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" />
            <select>
              <option>Choose Services</option>
              <option>Buy</option>
              <option>Sell</option>
              <option>Rent</option>
            </select>
          </div>
          <textarea placeholder="Write Here..."></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  
    <div className="contact-wrapper">
      {/* Map Section */}
      <section className="map-section">
        <h2 className="map-title">Find Us On Maps</h2>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.74131257444!2d-0.13463963325397835!3d51.509865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbf109e6c71%3A0xf6a7c6b1eec79b5a!2sLondon!5e0!3m2!1sen!2suk!4v1714055821789!5m2!1sen!2suk"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
    </section>

    
  );
};

export default Contact_us;

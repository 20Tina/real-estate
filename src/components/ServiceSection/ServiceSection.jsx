import React from 'react';
import './ServiceSection.css';

const ServicesSection = () => {
  return (
    <section className="services-wrapper">
      {/* Top Banner Section */}
      <section className="services-banner-overlay">
  <h1 className="banner-title">Services</h1>
</section>


      {/* Cards Section */}
      <div className="services-section">
        <div className="services-container">
          {/* Card 1 */}
          <div className="service-card">
            <div className="icon-box">
              <span role="img" aria-label="Offer">🏠</span>
            </div>
            <h3>Offer Property</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Nibh posuere sed sed bibendum. Risus cursus sapien arcu in dignissim.</p>
            <a href="/" className="learn-more">Learn More →</a>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="service-card highlighted">
            <div className="icon-box white-icon">
              <span>$</span>
            </div>
            <h3 style={{color:'#B5FCCD'}}>Sale Property</h3>
            <p style={{color:'#B5FCCD'}}>Lorem ipsum dolor sit amet consectetur. Nibh posuere sed sed bibendum. Risus cursus sapien arcu in dignissim.</p>
            <a href="/" className="learn-more light" style={{color:'#B5FCCD'}}>Learn More →</a>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="icon-box">
              <span role="img" aria-label="Rent">🏡</span>
            </div>
            <h3>Rent Property</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Nibh posuere sed sed bibendum. Risus cursus sapien arcu in dignissim.</p>
            <a href="/" className="learn-more">Learn More →</a>
          </div>
        </div>
      </div>
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
          <div className="icon">&#7AC6D2;</div>
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
    </section>
    
  );
};

export default ServicesSection;

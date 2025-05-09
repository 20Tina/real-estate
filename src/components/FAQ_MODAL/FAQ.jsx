import React, { useState } from 'react';
import './FAQ.css';
//import real3 from '../../assets/images/real3.jpg'; // Ensure the path is correct
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What Types Of Properties Do You Offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sem etiam tortor in pharetra ac. Nunc in nunc morbi morbi pulvinar luctus. Netus in non dolor ornare quam.",
    },
    {
      question: "Can You Assist With Property Financing?",
      answer:
        "Yes, we partner with major financial institutions to provide property financing options tailored to your needs.",
    },
    {
      question: "How Do I List My Property With Your Agency?",
      answer:
        "Simply reach out through our contact form and our agent will guide you through the listing process.",
    },
    {
      question: "How Can I Schedule A Property Viewing?",
      answer:
        "You can schedule a property viewing via our online booking system or by calling our customer support.",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
      <section className="services-wrapper">
      {/* Top Banner Section */}
      <section className="services-banner-overlay">
        <h1 className="banner-title">FAQs</h1>
      </section>
    
      {/* FAQ Section */}
      <section className="faq-section-faq3">
        <div className="faq-container-faq3" data-aos="fade-up">
          <h2 className="faq-title-faq3">Frequently Asked Questions</h2>
          <p className="faq-subtitle-faq3">
          Find answers to common questions about buying, selling, and renting properties with us. We're here to guide you every step of the way.
    </p>
          <div className="faq-box-faq3">
            {faqData.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                key={index}
              >
                <div className="faq-question-faq3" onClick={() => toggleFAQ(index)}>
                  <strong>{faq.question}</strong>
                  <span className="faq-toggle-icon">{activeIndex === index ? '−' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        </section>
       
       <div className="hero">
      <div className="hero-content">
        <h1>Your Trusted Real Estate Partner</h1>
        <p>
        Whether you're buying, selling, or investing, we provide expert guidance and unmatched service. 
        Discover your dream property with confidence and ease — we're here to support you every step of the way.
        </p>
        <button className="cta-button">Contact Now</button>
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
          <div className="icon">&#128172;</div>
          <div>
            <h4>Chat With Our Agent</h4>
            <button className="chat-btn">Chat Now</button>
          </div>
        </div>
      </div>

      <div className="form-card">
        <h2>Book A Meeting</h2>
        <p>  Schedule a personalized consultation with our experts. Let’s discuss how we can help you achieve your real estate goals — at your convenience.</p>

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

export default FAQ;

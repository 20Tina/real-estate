import React, { useState, useEffect, useRef } from 'react';
import './FAQSection.css';
// import real3 from '../../assets/images/real3.jpg'; // Ensure the path is correct
import faq from '../../assets/images/faq.png';
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null); // Reference to the FAQ section

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Intersection Observer to add a class when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Add class when the section is in view
          } else {
            entry.target.classList.remove('in-view'); // Remove when it's out of view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqData = [
    {
      question: "How do I list my property with your company?",
      answer: "Simply contact our team or fill out the online form, and we will guide you through the entire listing process."
    },
    {
      question: "What documents are required to sell a property?",
      answer: "You typically need the property title deed, ID proof, property tax receipts, and sale agreement. Our agents will assist you with the complete checklist."
    },
    {
      question: "How do you help in finding tenants for rental properties?",
      answer: "We market your property across multiple platforms, screen potential tenants, and assist you in finalizing rental agreements."
    },
    {
      question: "What fees or commissions do you charge?",
      answer: "Our commission structure varies depending on the type of property and transaction. Please contact us for a customized quote."
    },
  ];

  return (
    <section className="faq-section-faq2" ref={sectionRef}>
      <h2 className="faq-title-faq2">Frequently Asked Questions</h2>
      <div className="faq-layout-faq2">
        <img src={faq} alt="FAQ Background" className="faq-image-faq2" />

        <div className="faq-box-faq2">
          <p className="faq-subtitle-faq2">
            Find answers to common questions about our services, process, and how we can help you with your real estate needs.
          </p>

          <div className="faq-list-faq2">
            {faqData.map((faq, index) => (
              <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <strong>{faq.question}</strong>
                  <span className="faq-toggle-icon">{activeIndex === index ? '−' : '+'}</span>
                </div>
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

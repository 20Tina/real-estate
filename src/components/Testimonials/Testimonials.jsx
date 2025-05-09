import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import real1 from '../../assets/images/real1.webp';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Comma from '../../assets/images/Comma.png';
const testimonials = [
  {
    title: "Excellent Service",
    feedback: "Lorem ipsum dolor sit amet consectetur. Sem etiam tortor in pharetra ac.",
    name: "Charles Hicks",
    role: "Buyer",
    image: real1,
  },
  {
    title: "Very Professional",
    feedback: "Their support throughout the process made everything easier.",
    name: "Anita Joshi",
    role: "Seller",
    image: real1,
  },
  {
    title: "Highly Recommend",
    feedback: "I got my dream house faster than expected.",
    name: "Ravi Mehta",
    role: "Buyer",
    image: real1,
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true, // ← makes the slider go from right to left
  };

  return (
    <section className="testimonial-section">
  <div className="testimonial-container">
    <div className="testimonial-left">
      <h2>Committed To Client Satisfaction</h2>
      <p>We are dedicated to providing exceptional service, ensuring every client’s needs are met with care and professionalism.</p>

      <button className="learn-more-btn">Learn More</button>
    </div>
    <img src={Comma} alt="comma" />

    
    <div className="testimonial-right">
      <Slider {...settings}  className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <h4>{t.title}</h4>
            <div className="stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} color="#fbbf24" />)}
            </div>
            <p>{t.feedback}</p>
            <div className="user-info">
              <img src={t.image} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

  
  );
};

export default Testimonials;

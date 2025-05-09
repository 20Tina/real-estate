import React, { useEffect, useState } from 'react';
import './WhyChooseUs.css';

const highlights = [
  { icon: '🏗️', label: 'Years of Experience', count: 12 },
  { icon: '🏢', label: 'Projects Completed', count: 340 },
  { icon: '😊', label: 'Happy Clients', count: 280 },
  { icon: '🏆', label: 'Awards Won', count: 15 },
];

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [end]);

  return <h3>{count}+</h3>;
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p className="subtext">Trusted by thousands for delivering quality and innovation</p>
      <div className="highlight-grid">
        {highlights.map((item, i) => (
          <div key={i} className="highlight-card reveal">
            <div className="icon">{item.icon}</div>
            <Counter end={item.count} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

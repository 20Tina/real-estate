import React from 'react';
import './RecentSales.css';

import sale1 from '../../assets/images/sale1.jpg';
import sale2 from '../../assets/images/sale2.jpg';
import sale3 from '../../assets/images/sale3.jpg';
import sale4 from '../../assets/images/sale4.jpg';

const salesData = [
  { image: sale1, title: 'Townhouse, 319 P4', date: '12-02-2023' },
  { image: sale2, title: 'Craftsman, 307 D19', date: '04-12-2022' },
  { image: sale3, title: 'Contemporary, 308 A1', date: '15-04-2023' },
  { image: sale4, title: 'Bungalow, 309 D4', date: '25-01-2023' },
];

const RecentSales = () => {
  return (
    <section className="recent-sales-section">
      <div className="container">
        <h2>Our Recent Sales</h2>
        <p className="sales-subtext">
          Explore a few of our recently closed deals — helping families and businesses find their perfect space with ease and trust.
        </p>

        <div className="sales-grid">
          {salesData.map((sale, index) => (
            <div className="sales-card" key={index}>
              <img src={sale.image} alt={sale.title} className="sales-img" />
              <div className="sales-overlay">
                <p className="sales-title">{sale.title}</p>
                <div className="sales-meta">
                  <span>Sold On</span>
                  <span>{sale.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="learn-more-wrapper2">
        <button className="learn-more-btn2">Learn More</button>
      </div>
    </section>
  );
};

export default RecentSales;

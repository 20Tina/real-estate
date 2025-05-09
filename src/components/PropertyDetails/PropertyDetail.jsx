import React, { useEffect } from 'react';
import './PropertyDetail.css';
import real1 from '../../assets/images/real1.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import livingroom from '../../assets/images/livingroom.jpg';
import living3 from '../../assets/images/living3.jpg';
import living4 from '../../assets/images/living4.jpg';
import living5 from '../../assets/images/living5.jpg';
import living6 from '../../assets/images/living6.jpg';
import { useNavigate } from 'react-router-dom';
import virtual_tour from '../../assets/videos/virtual_tour.mp4';


const PropertyDetail = () => {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate('/property_listing');
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const properties = [
    {
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=landscape-sky-clouds-259588.jpg&fm=jpg",
      title: "Bungalow, 306 C2",
      location: "California Mount Villas 34 West",
      price: 625000000,
      beds: 6,
      baths: 5,
      area: 1350,
    },
    {
      image: "https://tse1.mm.bing.net/th?id=OIP.DyvteSY4ECzINTuIdJC_iAHaE7&w=5695&h=3790&rs=1&pid=ImgDetMain",
      title: "Contemporary, 300 D4",
      location: "California Mount Villas 46 West",
      price: 600000000,
      beds: 6,
      baths: 4,
      area: 1250,
    },
    {
      image: "https://d1k0mxjwfbpkpb.cloudfront.net/resources/126820/large/TheShireatArcadiaClubhouse.jpg",
      title: "Appartments, 204 D4",
      location: "California Mount Villas 52 West",
      price: 750000000,
      beds: 7,
      baths: 6,
      area: 1450,
    },
  ];

  return (
    <section className="services-wrapper">
      {/* Top Banner Section */}
      <section className="services-banner-overlay">
        <h1 className="banner-title">Property Details</h1>
      </section>

      <section className="property-detail-wrapper">
        {/* Hero Section */}
        <div className="property-hero">
          {/* Left Side: Main Image + Thumbnails */}
          <div className="hero-left">
            <img src={livingroom} alt="Main Property" className="main-image" />
            <div className="thumbnails">
              <img src={living3} alt="Thumbnail" />
              <img src={living4} alt="Thumbnail" />
              <img src={living5} alt="Thumbnail" />
              <img src={living6} alt="Thumbnail" />
            </div>
          </div>

          {/* Right Side: Property Info */}
          <div className="hero-right">
            <h2>Upstate Villa, 306 D4</h2>
            <h4 className="location">California Mount Villas 34 West</h4>
            <p className="description">
              This beautiful villa offers luxurious living with spacious interiors, a modern design, and breathtaking mountain views.
              Perfect for families seeking comfort and style in a serene location.
            </p>

            <div className="info-icons">
              <span>🛏 6</span>
              <span>🛁 4</span>
              <span>📏 1250 Sqft</span>
            </div>

            <h3 className="price">625,000,000</h3>

            <div className="virtual-tour-box">
  <video controls className="virtual-tour-video">
    <source src={virtual_tour} type="video/mp4" />
    Your browser does not support the video tag.
  </video> 
  <div>
    <h5>Virtual Tour</h5>
    <p>Take a 360-degree virtual tour of the villa and experience the elegance and comfort it has to offer from the comfort of your home.</p>
  </div>
</div>

            <button className="call-button">📞 Call</button>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview-wrapper">
          <div className="overview-content">
            <h3>Overview</h3>
            <div className="info-box">
              <div className="info-grid">
                <div><strong>Type:</strong> House</div>
                <div><strong>Area:</strong> 12500 SqFt</div>
                <div><strong>Price:</strong> $635,000,000</div>
                <div><strong>Bedrooms:</strong> 6</div>
                <div><strong>Location:</strong> California Mount Villas 34 West</div>
                <div><strong>Washrooms:</strong> 5</div>
              </div>
            </div>

            <div className="description-section">
              <h4>Description</h4>
              <p>
                Designed with attention to detail, this property features elegant living spaces, a gourmet kitchen, spa-inspired bathrooms, 
                and outdoor areas perfect for entertaining guests or enjoying peaceful family moments.
              </p>
            </div>

            <div className="amenities-section">
              <h4>Amenities</h4>
              <div className="amenities-grid">
                <span>Garage</span>
                <span>Furnished</span>
                <span>Air Conditioning</span>
                <span>Centrally Heated</span>
                <span>Front Lawn</span>
                <span>Parking Space</span>
                <span>Waste Disposal</span>
                <span>Double Glazed Windows</span>
              </div>
            </div>
          </div>

          <div className="posted-by-box">
            <h3>Posted By</h3>
            <div className="agency-card">
              <img src={real1} alt="Agency Logo" />
              <div>
                <h4>ESTATE RISE</h4>
                <p>Posted On <strong>04/09/2022</strong></p>
                <a href="/">View Agency Profile</a>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Properties */}
        <div className="feature-properties-section">
          <h2>Feature Properties</h2>
          <div className="property-card-list">
            {properties.map((property, index) => (
              <div className="property-card" data-aos="fade-up" key={index}>
                <div className="image-wrapper">
                  <img src={property.image} alt={property.title} />
                  <span className="badge">For Sale!</span>
                </div>
                <div className="card-content">
                  <h3>{property.title}</h3>
                  <p>{property.location}</p>
                  <h4>${property.price.toLocaleString()}</h4>
                  <div className="icons">
                    <span>🛏 {property.beds}</span>
                    <span>🛁 {property.baths}</span>
                    <span>📐 {property.area} Sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-button-property">
            <button onClick={handleLearnMoreClick}>Learn More</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PropertyDetail;

// import React from 'react';
// import ImageCarousel from '../components/crousel/ImageCarousel';
// import ProjectCard from '../components/ProjectCards/ProjectCard';
//  import real1 from '../assets/images/real1.webp';
//  import real2 from '../assets/images/real2.avif';
//  import real3 from '../assets/images/real3.jpg';
//  import WhatsAppButton from '../components/Whatsapp/WhatsAppButton';
// //import ProjectListing from '../components/ProjectListing/ProjectListing';
// // //import Footer from '../components/Footer/Footer'; // adjust path as needed
// import FAQSection from '../components/FAQSection/FAQSection';
// import WhyChooseUs from '../components/Why_choose_us/WhyChooseUs';
//  import LocationHighlights from '../components/LocationHighlights/LocationHighlights';
// im

// const Home = () => {
    
//   return (
//     <div>
//       <header style={{ 
//         backgroundColor: '#1e1e1e', 
//         color: '#fff', 
//         padding: '2rem 1rem', 
//         textAlign: 'center' 
//       }}>
//         <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome to Our Real Estate</h1>
//         <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Your dream property is just a click away!</p>
//       </header>

//       <main style={{ maxWidth: '1000px', margin: '2rem auto' }}>
//         <ImageCarousel />
//       </main>
//       <h2 style={{textAlign: 'center'}}>Upcoming Projects </h2>
//       <div className="projects-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//       <ProjectCard image={real1} title="Skyline Residency" description="2 & 3 BHK Luxury Homes" />
//       <ProjectCard image={real2} title="Green Villa Estate" description="Spacious Villas with Garden" />
//       <ProjectCard image={real3} title="Metro Biz Hub" description="Commercial Offices in Prime Location" />
//       {/* <ProjectListing /> */}
//       {/* 👇 Add brochure form here */}
//       <div style={{width:'100%'}}>
//       <LocationHighlights />
//       </div>
//      <FAQSection />
//       <WhatsAppButton />
//       <WhyChooseUs />
     
     
//     </div>
    
//     </div>
     
    
//   );
// };

// export default Home;

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProjectCard from '../components/ProjectCards/ProjectCard';
import real1 from '../assets/images/real1.webp';
import real2 from '../assets/images/real2.avif';
import real3 from '../assets/images/real3.jpg';

import WhatsAppButton from '../components/Whatsapp/WhatsAppButton';
import FAQSection from '../components/FAQSection/FAQSection';
import WhyChooseUs from '../components/Why_choose_us/WhyChooseUs';
import LocationHighlights from '../components/LocationHighlights/LocationHighlights';
import FilterBar from '../components/ProjectListing/FilterBar';
import RecentSales from '../components/RecentSales/RecentSales';
import heroImg from '../assets/images/real1.webp';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import about from '../assets/images/about.avif';
import DownloadBrochure from '../components/DownloadBrochure/DownloadBrochure'
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  const [filters, setFilters] = useState({ location: '', category: '', budget: '' });
 
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg,rgb(70, 98, 210) 0%,rgb(116, 169, 216) 100%)',
          color: 'whitesmoke',
          padding: '4rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <motion.div style={{ flex: '1 1 45%', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.2' }}>
            YOUR <br /> TRUSTED <br />
            <span style={{ color: '#B5FCCD' }}>REAL ESTATE</span> <br /> PARTNER
          </h1>
          <p style={{ marginTop: '1rem', color: '#E0E0E0', fontSize: '1.1rem' }}>
          "We help you find your dream home with trusted guidance, expert advice, and unparalleled service."
          </p>
          <button
  onClick={() => window.location.href = 'mailto:vala.dsouza911@gmail.com'}
  style={{ backgroundColor: '#B5FCCD', color: '#000', padding: '0.8rem 1.5rem', marginTop: '1.5rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
>
  Contact Now
</button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 45%', display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '2rem' }}
        >
          <div style={{ backgroundColor: '#3D90D7', width: '300px', height: '350px', borderRadius: '12px', position: 'absolute', top: '30px', right: '30px', zIndex: 0 }}></div>
          <img src={heroImg} alt="Team" style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '12px', position: 'relative', zIndex: 1 }} />
        </motion.div>
      </motion.section>

      <section style={{ background: 'linear-gradient(135deg,rgb(119, 138, 215) 0%,rgb(116, 169, 216) 100%)', padding: '2rem 1rem' }}>
        <FilterBar filters={filters} setFilters={setFilters} />
      </section>
      
      {/* Book Now Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          // background: 'linear-gradient(135deg, #B3E5EC 0%, #D9F6FA 100%)',
          background:' #F8F6E3',
          padding: '3rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
        }}
      >
       
      </motion.section>

      <motion.section
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  style={{
    // background: 'linear-gradient(135deg, #B3E5EC 0%, #D9F6FA 100%)',
    background:'#F8F6E3',
    padding: '3rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'auto'
  }}
>
  <div
    style={{
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      maxWidth: '100vw',
      width: '100%'
    }}
  >
    {[
      {
        title: 'Offer Property',
        bg: '#fff',
        icon: '🏠',
        description: 'Easily list your property with us and connect with genuine buyers in no time.'
      },
      {
        title: 'Sale Property',
        bg: 'rgba(82, 136, 230, 0.8)', 
        color: '#3A59D1', // color for text
        icon: '💲',
        description: 'Get the best value for your property with our expert selling strategies.'
      },
      {
        title: 'Rent Property',
        bg: '#fff',
        icon: '🏡',
        description: 'Find reliable tenants quickly with our hassle-free rental services.'
      }
    ].map((card, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        style={{
          backgroundColor: card.bg,
          width: '30vh',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          minHeight: '200px',
          textAlign: 'center',
          color: '#212121', // default text color (blackish)
          border: '1px solid #B5FCCD', // Optional: Border to make it stand out
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Soft shadow for depth
        }}
      >
        <div style={{ fontSize: '2rem' }}>{card.icon}</div>
        <h3 style={{ fontWeight: 'bold' }}>{card.title}</h3>
        <p style={{ lineHeight: '1.4', color: card.title === 'Sale Property' ? '#B5FCCD' : '#212121' }}>
          {card.description}
        </p>
        <a
          href="/"
          style={{
            fontWeight: 'bold',
            color: card.title === 'Sale Property' ? '#B5FCCD' : '#134074',
            textDecoration: 'none'
          }}
        >
          Learn More <span style={{ marginLeft: '4px' }}>→</span>
        </a>
      </motion.div>
    ))}
  </div>
</motion.section>



<motion.div 
  initial={{ opacity: 0, x: -100 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  viewport={{ once: true, amount: 0.3 }} 
  transition={{ duration: 0.8 }} 
  style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
  //  background: 'linear-gradient(135deg, #E1F7FD 0%, #F4FBFF 100%)',
   background:'#F8F6E3'
    
  }}
>
  {/* Upcoming Projects Heading */}
  <h2 
    style={{ 
       
      marginBottom: '2rem', 
      fontSize: '2.5rem', 
      textAlign: 'center',
      fontFamily:'initial'
    }}
  >
    Upcoming Projects
  </h2>

  {/* Project Cards */}
  <div 
    style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      gap: '2rem', 
      width: '100%' 
    }}
  >
    <ProjectCard 
      image={real1} 
      title="Skyline Residency" 
      description="2 & 3 BHK Luxury Homes" 
      direction="left" 
    />
    <ProjectCard 
      image={real2} 
      title="Green Villa Estate" 
      description="Spacious Villas with Garden" 
      direction="right" 
    />
    <ProjectCard 
      image={real3} 
      title="Metro Biz Hub" 
      description="Commercial Offices in Prime Location" 
      direction="bottom" 
    />
  </div>
  <DownloadBrochure />
  {/* Location Highlights */}
  <div style={{ width: '100%', marginTop: '3rem' }}>
    <LocationHighlights />
  </div>
</motion.div>
<FAQSection />

      <motion.section 
        className="about-us-section" 
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.8 }}
        style={{ background: 'linear-gradient(to right, #7AC6D2, #4A90E2)' }}
      >
          <div className="about-us-grid">
            <div className="about-left">
              <img src={real1} alt="House" className="main-img" />
              <div className="video-cert-wrapper">
  <div className="video-card" style={{ position: 'relative' }}>
    {/* Video Placeholder Image */}
    <img
      src={about}  // Replace with your image
      alt="House"
      className="main-img"
      style={{
        width: '100%',
        height: '101%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
    
    {/* Video Embed */}
    <iframe
      src="https://www.youtube.com/embed/IU8aH-yB2eA?si=LVNwG1iqW8djtM4N" 
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    ></iframe>
    
    {/* Play Icon */}
    <div className="play-icon" style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '2rem',
      color: '#fff',
      zIndex: 2,
    }}>
      ▶
    </div>
  </div>

  {/* Certification Card */}
  <div className="cert-card">
    <div className="cert-icon">🎓</div>
    <p style={{color:'#B5FCCD'}}>CIPS Certification By National Association of Realtor</p>
  </div>
  
</div>
</div>
          <div className="about-right">
            <h2>About Us</h2>
            <h4><span className="check-icon">✔</span> OUR VISION AND VALUES</h4>
            <p>We are committed to building trust, delivering excellence, and creating value for our clients and communities</p>
            <p>Our values of integrity, innovation, and client-first focus drive every decision we make.</p>
            <h4><span className="check-icon">✔</span> EXCELLENCE IN REAL ESTATE</h4>
            <p>With a passion for real estate and years of expertise, we strive to exceed expectations at every step.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </motion.section>
<br />
<br />
<br />
<br />
<br />


     <Testimonials />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

   
    
      <WhyChooseUs />
      <WhatsAppButton />
      <RecentSales />
    </div>
  );
};  

export default Home;


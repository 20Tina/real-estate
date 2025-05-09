import './App.css';
import './styles/global.css';
import Home from './pages/Home';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import AboutUs from './components/AboutUs/AboutUs';
import ProjectListing from './components/ProjectListing/ProjectListing';
import React from 'react';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnquiryForm from './components/EnquiryForm/EnquiryForm';
import ServicesSection from './components/ServiceSection/ServiceSection';
import ProjectDetails from './components/ProjectListing/ProjectDetails';
import PropertyDetail from './components/PropertyDetails/PropertyDetail';
import FAQ from './components/FAQ_MODAL/FAQ';
import Contact_us from './components/Contact_us/Contact_us';
import Property_listing from './components/Property_listing/Property_listing';
import About_us from './components/About_us/About_us';

function App() {
  return (
    <Router>
      <Navbar />
      <EnquiryForm />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/Projectlisting" element={<ProjectListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project/" element={<ProjectDetails />} />
        <Route path="/ServicesSection" element={<ServicesSection />} />
        <Route path="/PropertyDetail" element={<PropertyDetail />} />
        <Route path="/Property_listing/" element={<Property_listing />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contact_us" element={<Contact_us />} />
        <Route path="/About_us" element={<About_us />} />
        {/* Add more pages later here */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

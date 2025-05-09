// import React from 'react';
// import './Navbar.css';
// //import { FaWhatsapp, FaBars } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">🏢 RealtyBuild</div>
//       <ul className="navbar-links">
//         <li><a href="/">Home</a></li>
//         <li><a href="Property_listing">Projects</a></li>
//         <li><a href="#EquiryForm">Enquire</a></li>
//         <li><a href="/Contact_us">Contact</a></li>
//          <li><a href="/ServicesSection">Projects</a></li>
//         {/* <Link to="">About Us</Link> */}
//         <li><a href="/PropertyDetail">PropertyDetail</a></li>
//         <li><a href="/about">About Us</a></li>
//         <li><a href="/login">login</a></li>
//         <li><a href="/register">Register </a></li>
//          <li><a href="/FAQ">FAQ </a></li>
//       </ul>
//       {/* <div className="navbar-whatsapp">
//         <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
//           <FaWhatsapp size={24} color="#25D366" />
//         </a>
//       </div> */}
//       {/* <div className="navbar-toggle"><FaBars /></div> */}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaAngleDown, FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Left Nav */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="Property_listing">Property Listings</a></li>
         <li><a href="About_us">About Us</a></li> 

        <li className="dropdown" ref={dropdownRef}>
        <button
  className={`dropdown-toggle ${isDropdownOpen ? "open" : ""}`}
  onClick={() => setIsDropdownOpen((prev) => !prev)}
>
  Pages <FaAngleDown className="dropdown-icon" />
</button>

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/PropertyDetail">Property Detail</a></li>
              {/* <li><a href="#">Blogs</a></li> */}
              <li><a href="/ServicesSection">Services</a></li>
             {/* ?\ <li><a href="#">Testimonials</a></li> */}
              <li><a href="/FAQ#">FAQs</a></li>
              {/* <li><a href="#">Archive</a></li> */}
              {/* <li><a href="#">Team</a></li> */}
              <li><a href="/Contact_us">Contact Us</a></li>
              {/* <li><a href="#">Coming Soon</a></li> */}
              {/* <li><a href="#">404</a></li> */}
            </ul>
          )}
        </li>
      </ul>

      {/* Center Logo */}
      <div className="nav-logo">
  <img src="path/to/your/logo.png" alt="Estate Rise Logo" className="logo" />
</div>

      {/* Right Icons */}
      {/* <div className="nav-icons">
        <FaSearch className="icon" />
        <FaBars className="icon" />
      </div> */}
    </nav>
  );
};

export default Navbar;
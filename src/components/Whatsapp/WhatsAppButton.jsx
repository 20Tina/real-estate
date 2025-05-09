import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css';

const WhatsAppButton = () => {
  const phone = '919112449782'; // replace with your phone number

  return (
    <a
      href={`https://wa.me/${phone}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;

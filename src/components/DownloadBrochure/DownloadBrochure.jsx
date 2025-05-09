// src/components/BrochureDownloadModal.jsx
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import './DownloadBrochure.css'; // Create this CSS file for styles

const BrochureDownloadModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Reset form and close modal
    setFormData({ name: '', email: '', phone: '' });
    setShowModal(false);

    // Trigger brochure download
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'brochure.pdf';
    link.click();
  };

  return (
    <div className="download-section">
      <button className="download-btn" onClick={() => setShowModal(true)}>
        <FaDownload style={{ marginRight: '8px' }} />
        Download Brochure
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Get Your Brochure</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <button type="submit">Download PDF</button>
            </form>
            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrochureDownloadModal;

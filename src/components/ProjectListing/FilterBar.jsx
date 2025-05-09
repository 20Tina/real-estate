import React, { useState } from 'react';
import './FilterBar.css'; // Custom CSS file

const FilterBar = ({ filters, setFilters }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    // Validation: check if all required fields are selected
    if (!filters.location || !filters.bhk || !filters.budget) {
      setErrorMessage('Please select all filters before submitting!');
      return;
    }

    setSuccessMessage('Your form has been submitted successfully!');
    setErrorMessage(''); // Clear any previous error messages

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="filter-bar">
      <select name="location" value={filters.location} onChange={handleChange}>
        <option value="">Select Location</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <select name="bhk" value={filters.bhk} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Vacant Land">Vacant Land</option>
        <option value="Residential Properties">Residential Properties</option>
        <option value="Budget">Budget</option>
      </select>

      <select name="budget" value={filters.budget} onChange={handleChange}>
        <option value="">Select Budget</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <div style={{ width: '60%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <button
          onClick={handleFormSubmit}
          style={{
            backgroundColor: '#B5FCCD',
            color: '#000',
            padding: '1rem',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
            alignSelf: 'center',
          }}
        >
          Book Now
        </button>

        {successMessage && (
          <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>{successMessage}</p>
        )}

        {errorMessage && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default FilterBar;

// // src/components/EnquiryForm/EnquiryForm.jsx
// import React from 'react';
// import { Formik, Field, Form } from 'formik';

// import { submitEnquiry } from '../utils/api';

// // Inside Formik's onSubmit
// submitEnquiry(values)
//   .then(response => {
//     // Redirect to Thank You page
//   })
//   .catch(error => {
//     console.error('Error submitting enquiry:', error);
//   });


// const EnquiryForm = () => {
//   return (
//     <Formik
//       initialValues={{ name: '', phone: '', email: '', message: '' }}
//       onSubmit={(values) => {
//         // Handle submission, e.g., send to API
//         console.log(values);
//       }}
//     >
//       <Form>
//         <div>
//           <label>Name:</label>
//           <Field type="text" name="name" required />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <Field type="text" name="phone" required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <Field type="email" name="email" required />
//         </div>
//         <div>
//           <label>Message:</label>
//           <Field as="textarea" name="message" required />
//         </div>
//         <button type="submit">Submit Enquiry</button>
//       </Form>
//     </Formik>
//   );
// };

// export default EnquiryForm;
import React, { useState } from 'react';
import { Button, Modal, Box, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
const EnquiryForm = () => {
  // State for controlling modal
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyInterest: '',
  });

  // Open modal
  const handleOpen = () => setOpen(true);

  // Close modal
  const handleClose = () => setOpen(false);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // API endpoint URL
    const apiUrl = 'https://your-api-endpoint.com/enquiries'; // Replace with your actual API endpoint
  
    // POST request with form data
    axios.post(apiUrl, formData)
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
        // Optionally, close the modal after successful submission
        handleClose();
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
  };

  return (
    <div>
      {/* Floating Button */}
      <Button 
        variant="contained" 
        color="primary" 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '74px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          zIndex: 1000
        }}
        onClick={handleOpen}
      >
        💬
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          <h2>Enquire Now</h2>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              margin="normal"
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
            />

            {/* Phone */}
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              margin="normal"
            />

            {/* Property Interest */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Property Interest</InputLabel>
              <Select
                name="propertyInterest"
                value={formData.propertyInterest}
                onChange={handleChange}
                required
              >
                <MenuItem value="Skyline Residency">Skyline Residency</MenuItem>
                <MenuItem value="Green Villa Estate">Green Villa Estate</MenuItem>
                <MenuItem value="Metro Biz Hub">Metro Biz Hub</MenuItem>
                <MenuItem value="Skyline Residency">Luxury Villa, 999 Z9</MenuItem>
                <MenuItem value="Skyline Residency">Elegant Studio, 110 B2</MenuItem>
                <MenuItem value="Skyline Residency">Skyline Residency</MenuItem>
                <MenuItem value="Skyline Residency">Skyline Residency</MenuItem>
              </Select>
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EnquiryForm;

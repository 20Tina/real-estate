import React from 'react';
import { Box, Grid, Typography, Link, Container } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(90deg, #3A59D1 0%, rgb(131, 120, 247) 50%, #6C63FF 100%)',
        color: '#fff',
        py: 6,
        px: 2,
      }}
    >
      {/* <--- Add a Container to control width! */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Real Estate Co.
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Helping you find your dream home, office space, and more.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="hover" color="#bbb">Home</Link>
              <Link href="/Projectlisting" underline="hover" color="#bbb">Projects</Link>
              <Link href="/Contact_us" underline="hover" color="#bbb">Contact</Link>
              <Link href="/ServicesSection" underline="hover" color="#bbb">Service</Link>
              <Link href="/FAQ#" underline="hover" color="#bbb">Faq</Link>
            
     
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="#bbb"><Facebook /></Link>
              <Link href="#" color="#bbb"><Instagram /></Link>
              <Link href="#" color="#bbb"><Twitter /></Link>
              <Link href="#" color="#bbb"><LinkedIn /></Link>
            </Box>
            <Typography variant="body2" sx={{ mt: 2, color: '#bbb' }}>
              Email: info@realestateco.com<br />
              Phone: +91 98765 43210
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ mt: 4, color: '#777' }}>
          © {new Date().getFullYear()} Real Estate Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

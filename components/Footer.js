'use client';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#D3D3D3', // Soft Gray text
      textAlign: 'center',
      padding: '20px 0',
      borderTop: '3px solid #FFA500' // Orange accent
    }}>
      <p style={{margin: '5px 0'}} suppressHydrationWarning={true}>
        © {year} Villafranco&apos;s Enterprise LLC. All rights reserved.
      </p>
      <p style={{margin: '5px 0'}}>Billy the Painter - Your Trusted Professional for Painting & Lead Abatement.</p>
    </footer>
  );
};

export default Footer;
'use client';
import Link from 'next/link';
import SvgPlaceholder from '@/components/SvgPlaceholder';

export default function HomePage() {
  return (
    <div className="container">
      <section style={{ textAlign: 'center', padding: '30px 0', backgroundColor: '#e7f0f7', borderRadius: '8px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.8em', color: '#001f3f', margin: '0 0 15px 0' }}>Welcome to Billy the Painter!</h1>
        <p style={{ fontSize: '1.3em', color: '#334e68', maxWidth: '700px', margin: '0 auto 25px auto' }}>
          Your trusted partner under <strong>Villafranco&apos;s Enterprise LLC</strong> for professional painting and certified lead abatement services. We bring color and safety to your spaces!
        </p>
        <Link href="/contact" className="button">
          Get a Free Quote Today!
        </Link>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ textAlign: 'center', borderBottom: '2px solid #FFA500', paddingBottom: '10px', marginBottom: '30px' }}>Our Core Services</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          {serviceItems.map(service => (
            <div key={service.title} style={serviceCardStyle}>
              <div style={{fontSize: '2.5em', marginBottom: '10px', color: '#FFA500'}}>{service.icon}</div>
              <h3 style={{ color: '#001f3f', fontSize: '1.4em' }}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ borderBottom: '2px solid #FFA500', paddingBottom: '10px', marginBottom: '30px' }}>Featured Work Showcase</h2>
        <SvgPlaceholder height={350} text="Interactive Slider of Completed Projects" bgColor="#D3D3D3" />
        <p style={{marginTop: '15px', fontSize: '1.1em'}}>See the quality and transformations we deliver.</p>
        <Link href="/gallery" className="button" style={{marginTop: '10px'}}>View Full Gallery</Link>
      </section>
      
      <section style={{ textAlign: 'center', padding: '30px 0', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2 style={{color: '#001f3f'}}>Ready to Transform Your Space?</h2>
        <p style={{fontSize: '1.1em', margin: '15px auto', maxWidth: '600px'}}>
          Contact Billy the Painter for a friendly consultation and a no-obligation quote. Let&apos;s make your vision a reality!
        </p>
        <Link href="/contact" className="button" style={{ fontSize: '1.2em', padding: '15px 30px' }}>
          Contact Us Now
        </Link>
      </section>
    </div>
  );
}

const serviceItems = [
  { icon: '🏠', title: 'Interior & Exterior Painting', description: 'Transforming spaces with precision and care, inside and out for residential and commercial properties.' },
  { icon: '🛡️', title: 'Certified Lead Abatement', description: 'EPA-certified solutions for a safe and healthy environment, handling lead paint with expertise.' },
  { icon: '✨', title: 'Quality Craftsmanship', description: 'Dedicated to delivering top-notch results that last, using quality materials and techniques.' },
];

const serviceCardStyle = {
  flex: '1 1 280px',
  maxWidth: '350px',
  padding: '25px',
  border: '1px solid #D3D3D3',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};
// Add hover effect with CSS if possible, or JS for inline styles:
// onMouseOver: e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.12)'; },
// onMouseOut: e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.08)'; }
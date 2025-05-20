'use client';
import SvgPlaceholder from '../../components/SvgPlaceholder';
import Link from 'next/link';

const servicesList = [
  {
    id: 1, name: 'Interior Painting', iconText: '🏠🎨',
    description: 'Full interior painting for homes and businesses. Walls, ceilings, trim, doors, cabinets, and custom projects. We ensure clean lines and an impeccable finish.'
  },
  {
    id: 2, name: 'Exterior Painting', iconText: '🏢🖌️',
    description: 'Enhance curb appeal and protect your property with our expert exterior painting. Siding, trim, stucco, brick, decks, fences, and more. Weather-resistant and durable.'
  },
  {
    id: 3, name: 'Certified Lead Abatement (EPA)', iconText: '🛡️Pb',
    description: 'As an EPA Lead-Safe Certified Firm, we provide safe and compliant lead paint testing, encapsulation, and removal services for older properties. Your safety is paramount.'
  },
  {
    id: 4, name: 'Residential Painting', iconText: '🏡✨',
    description: 'Personalized painting solutions for homeowners. From single accent walls to complete home makeovers, we treat your home with respect and care.'
  },
  {
    id: 5, name: 'Commercial Painting', iconText: '💼🌟',
    description: 'Reliable painting services for property managers, contractors, offices, retail spaces, and other commercial clients. We work efficiently to minimize disruption to your business.'
  },
  {
    id: 6, name: 'Color Consultation & Surface Prep', iconText: '🎨🛠️',
    description: 'Expert advice on color selection to match your style. Thorough surface preparation (cleaning, sanding, priming) is key to a lasting, quality paint job, and we don\'t cut corners.'
  }
];

export default function ServicesPage() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Professional Services</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2em', color: '#555' }}>
        Billy the Painter, under Villafranco&apos;s Enterprise LLC, offers a comprehensive suite of painting and lead-safe solutions. 
        We are dedicated to quality, safety, and exceeding your expectations.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {servicesList.map(service => (
          <div key={service.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '25px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 3px 6px rgba(0,0,0,0.07)',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.2s ease-in-out',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <SvgPlaceholder width={70} height={70} text={service.iconText} bgColor="#FFA500" textColor="#fff" />
            </div>
            <h3 style={{ color: '#001f3f', marginTop: '0', textAlign: 'center', fontSize: '1.5em' }}>{service.name}</h3>
            <p style={{ flexGrow: 1, color: '#444', fontSize: '1.05em' }}>{service.description}</p>
            <Link href="/contact" className="button" style={{alignSelf: 'center', marginTop: '15px'}}>Get a Quote for This Service</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
'use client';
import SvgPlaceholder from '../../components/SvgPlaceholder';

const galleryItems = [
  { id: 1, type: 'Residential Interior', beforeText: 'Living Room - Before (Dated Wallpaper)', afterText: 'Living Room - After (Fresh & Modern)', projectDesc: 'Complete wallpaper removal, wall repair, and painting for a bright, updated living space.' },
  { id: 2, type: 'Residential Exterior', beforeText: 'House Exterior - Before (Faded Paint)', afterText: 'House Exterior - After (Vibrant & Protected)', projectDesc: 'Full exterior repaint including siding, trim, and shutters, significantly boosting curb appeal.' },
  { id: 3, type: 'Commercial Office Space', beforeText: 'Office - Before (Dull & Uninspiring)', afterText: 'Office - After (Bright & Professional)', projectDesc: 'Transformed an old office into a modern, inviting workspace with new colors and clean lines.' },
  { id: 4, type: 'Lead Abatement Project', beforeText: 'Window Sills (Lead Paint Detected)', afterText: 'Window Sills (Lead Safe & Restored)', projectDesc: 'Safe lead paint removal and repainting of historic window sills, adhering to all EPA guidelines.' },
  { id: 5, type: 'Kitchen Cabinet Painting', beforeText: 'Kitchen Cabinets - Before (Dark Wood)', afterText: 'Kitchen Cabinets - After (Light & Airy)', projectDesc: 'Professional cabinet refinishing gave this kitchen a cost-effective, stunning makeover.' },
  { id: 6, type: 'Deck Staining & Sealing', beforeText: 'Weathered Deck - Before', afterText: 'Restored Deck - After', projectDesc: 'Cleaned, stained, and sealed a large wooden deck, protecting it from the elements and enhancing its beauty.' },
];

export default function GalleryPage() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Work: Before & After</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2em', color: '#555' }}>
        Witness the transformative power of professional painting and restoration. 
        (Actual project images will replace these placeholders.)
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}> {/* Changed to single column for B/A pairs */}
        {galleryItems.map(item => (
          <div key={item.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#001f3f', textAlign: 'center', marginTop: 0, marginBottom: '20px', fontSize: '1.6em' }}>{item.type}</h3>
            <div className="gallery-image-pair" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginBottom: '15px' }}>
              <div style={{flex: 1, textAlign: 'center'}}>
                <h4 style={{color: '#555'}}>Before</h4>
                <SvgPlaceholder height={250} text={item.beforeText} bgColor="#f0f0f0" />
              </div>
              <div style={{flex: 1, textAlign: 'center'}}>
                <h4 style={{color: '#555'}}>After</h4>
                <SvgPlaceholder height={250} text={item.afterText} bgColor="#e6ffe6" />
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '1.05em', color: '#444', marginTop: '15px', padding: '0 10px' }}>
              <strong>Project Highlight:</strong> {item.projectDesc}
            </p>
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .gallery-item-images {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
}
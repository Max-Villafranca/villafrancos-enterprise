'use client';
import SvgPlaceholder from '@/components/SvgPlaceholder';

export default function ContactPage() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Get in Touch with Billy</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2em', color: '#555' }}>
        Ready to discuss your project? We&apos;re here to help! Contact Billy the Painter (Villafranco&apos;s Enterprise LLC) for a free, no-obligation quote.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 450px', minWidth: '300px', padding: '25px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#001f3f', marginTop: 0, borderBottom: '2px solid #FFA500', paddingBottom: '10px' }}>Request Your Free Quote</h2>
          <form onSubmit={(e) => {e.preventDefault(); alert('Form submitted (demo only)! We will contact you soon.');}} style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '20px' }}>
            <div>
              <label htmlFor="name" style={labelStyle}>Full Name:</label>
              <input type="text" id="name" name="name" required style={inputStyle} placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>Email Address:</label>
              <input type="email" id="email" name="email" required style={inputStyle} placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="phone" style={labelStyle}>Phone Number (Optional):</label>
              <input type="tel" id="phone" name="phone" style={inputStyle} placeholder="(555) 123-4567" />
            </div>
            <div>
              <label htmlFor="service" style={labelStyle}>Service of Interest:</label>
              <select id="service" name="service" required style={inputStyle}>
                <option value="">-- Please Select a Service --</option>
                <option value="interior_painting">Interior Painting</option>
                <option value="exterior_painting">Exterior Painting</option>
                <option value="lead_abatement">Certified Lead Abatement</option>
                <option value="commercial_painting">Commercial Painting</option>
                <option value="residential_painting">Residential Painting</option>
                <option value="color_consultation">Color Consultation</option>
                <option value="other">Other (Please specify below)</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>Project Details & Questions:</label>
              <textarea id="message" name="message" rows="5" required style={{...inputStyle, height: '120px'}} placeholder="Tell us about your project, e.g., number of rooms, type of property, specific needs..."></textarea>
            </div>
            <button type="submit" className="button" style={{padding: '12px 20px', fontSize: '1.1em', alignSelf: 'flex-start'}}>Send Your Request</button>
            <p style={{fontSize: '0.9em', color: '#777', marginTop: '10px'}}>
              Note: This form is for demonstration on a static site. In a live site, this would send your details to us.
            </p>
          </form>
        </div>

        <div style={{ flex: '1 1 350px', minWidth: '300px', padding: '25px' }}>
          <h2 style={{ color: '#001f3f', marginTop: 0, borderBottom: '2px solid #FFA500', paddingBottom: '10px' }}>Direct Contact Information</h2>
          <div style={{marginTop: '20px'}}>
            <div style={contactDetailEntryStyle}>
              <strong style={contactDetailLabelStyle}>Business:</strong>
              <p>Billy the Painter<br />(Villafranco&apos;s Enterprise LLC)</p>
            </div>
            <div style={contactDetailEntryStyle}>
              <strong style={contactDetailLabelStyle}>Phone:</strong>
              <p><a href="tel:+15551234567">(555) 123-4567</a> (Call or Text!)</p>
            </div>
            <div style={contactDetailEntryStyle}>
              <strong style={contactDetailLabelStyle}>Email:</strong>
              <p><a href="mailto:billy@examplepainter.com">billy@examplepainter.com</a></p>
            </div>
            <div style={contactDetailEntryStyle}>
              <strong style={contactDetailLabelStyle}>Service Area:</strong>
              <p>Proudly serving [Your City/Main Town], and surrounding communities including [Nearby Town 1], [Nearby Town 2], and [County Name]. Contact us to confirm service in your specific location.</p>
            </div>
            <div style={contactDetailEntryStyle}>
              <strong style={contactDetailLabelStyle}>Business Hours:</strong>
              <p>Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 3:00 PM (By appointment)<br/>Sunday: Closed</p>
            </div>
            {/* Optional Map Placeholder
            <h3 style={{color: '#001f3f', marginTop: '30px'}}>Our General Service Region:</h3>
            <SvgPlaceholder height={200} text="Service Area Map Placeholder" bgColor="#e0e0e0" />
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: 'bold',
  color: '#334e68', // Darker, softer blue
  fontSize: '1.0em'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  fontSize: '1em',
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const contactDetailEntryStyle = {
  marginBottom: '20px',
  lineHeight: '1.7'
};

const contactDetailLabelStyle = {
  color: '#001f3f', // Navy Blue
  display: 'block',
  marginBottom: '3px',
  fontSize: '1.1em'
};
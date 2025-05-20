'use client';
import SvgPlaceholder from '../../components/SvgPlaceholder';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About Billy the Painter</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555', marginBottom: '40px' }}>
        Friendly, Professional, and Dedicated to Your Satisfaction.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', marginBottom: '40px' }}>
        <div style={{ maxWidth: '250px', width: '100%', padding: '20px', border: '2px dashed #FFA500', borderRadius: '8px', backgroundColor: '#fff8e1' }}>
          <Image
            src="/billy_cartoon.png" 
            alt="Cartoon Billy Placeholder"
            width={220} 
            height={220}
          />
          <p style={{textAlign: 'center', marginTop: '10px', fontStyle: 'italic', color: '#001f3f'}}>Our Approachable Mascot!</p>
        </div>

        <div style={{ maxWidth: '750px', textAlign: 'left', lineHeight: '1.8' }}>
          <h2 style={{ color: '#001f3f' }}>Meet Billy - Your Expert Painter</h2>
          <p>
            Hello! I&apos;m Billy, the heart and hands behind <strong>Billy the Painter</strong>, proudly operating under our registered business name, <strong>Villafranco&apos;s Enterprise LLC</strong>. My passion for painting goes beyond just applying color to walls; it&apos;s about bringing visions to life, enhancing the beauty of spaces, and ensuring every client is delighted with the outcome.
          </p>
          <p>
            With years of experience in the construction, residential, and commercial sectors, I&apos;ve built a reputation for reliability, meticulous attention to detail, and a genuinely friendly service. We believe that a fresh coat of paint can do wonders, and We&apos;re here to make that transformation seamless and enjoyable for you.
          </p>

          <h3 style={{ color: '#001f3f', marginTop: '30px' }}>Our Credentials & Commitment</h3>
          <p>
            At Villafranco&apos;s Enterprise LLC, we take our responsibilities seriously. We are:
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>EPA Lead-Safe Certified:</strong> We are certified to handle lead abatement projects safely and effectively, protecting your health and property.</li>
            <li><strong>Experienced & Versatile:</strong> Proficient in a wide array of interior and exterior painting techniques for both residential homes and commercial properties.</li>
            <li><strong>Quality Focused:</strong> We use high-quality materials and proven methods to ensure a durable and beautiful finish every time.</li>
            <li><strong>Customer-Centric:</strong> Your satisfaction is our top priority. We listen to your needs, provide clear communication, and strive to exceed your expectations.</li>
          </ul>
          <p>
            We understand that inviting a contractor into your property requires trust. We aim to build that trust from our first conversation to the final walkthrough, ensuring a professional and respectful experience throughout your project.
          </p>
          <p>
            Looking for a reliable painter who brings expertise and a positive attitude to every job? You&apos;ve found him!
            <br />
            <Link href="/contact" className="button" style={{marginTop: '15px'}}>Let&apos;s Discuss Your Project</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
// app/page.js
'use client'
import Link from 'next/link'
import SvgPlaceholder from '../components/SvgPlaceholder'

const serviceItems = [
    {
        icon: '🏠',
        title: 'Interior & Exterior Painting',
        description:
            'Transforming spaces with precision and care, inside and out for residential and commercial properties.',
    },
    {
        icon: '🛡️',
        title: 'Certified Lead Abatement',
        description: 'EPA-certified solutions for a safe and healthy environment, handling lead paint with expertise.',
    },
    {
        icon: '✨',
        title: 'Quality Craftsmanship',
        description: 'Dedicated to delivering top-notch results that last, using quality materials and techniques.',
    },
]

const serviceCardBaseStyle = {
    flex: '1 1 280px',
    maxWidth: '350px',
    padding: '25px',
    border: '1px solid #D3D3D3',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
}

export default function HomePage() {
    return (
        <div className='container' style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <section
                className='hero-section'
                style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    backgroundColor: '#e7f0f7',
                    borderRadius: '12px',
                    marginBottom: '40px',
                    boxShadow: '0 4px 12px rgba(0,31,63,0.1)',
                }}
            >
                <h1
                    style={{
                        fontSize: 'clamp(2.2em, 5vw, 3em)',
                        color: '#001f3f',
                        margin: '0 0 15px 0',
                        fontWeight: 700,
                        fontFamily: 'var(--font-heading, Arial, sans-serif)',
                    }}
                >
                    Welcome to Billy the Painter!
                </h1>
                <p
                    style={{
                        fontSize: 'clamp(1.1em, 3vw, 1.3em)',
                        color: '#334e68',
                        maxWidth: '700px',
                        margin: '0 auto 25px auto',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-body, Arial, sans-serif)',
                    }}
                >
                    Your trusted partner under <strong>villafranco&apos;s Enterprise LLC</strong> for professional
                    painting and certified lead abatement services. We bring color and safety to your spaces!
                </p>
                <Link
                    href='/contact'
                    className='button button-primary'
                    style={{ fontSize: '1.1em', padding: '12px 28px' }}
                >
                    Get a Free Quote Today!
                </Link>
            </section>

            <section className='services-section' style={{ marginBottom: '50px' }}>
                <h2
                    className='section-heading'
                    style={{
                        textAlign: 'center',
                        color: '#001f3f',
                        borderBottom: '3px solid #FFA500',
                        paddingBottom: '12px',
                        marginBottom: '35px',
                        fontSize: 'clamp(1.8em, 4vw, 2.3em)',
                        fontFamily: 'var(--font-heading, Arial, sans-serif)',
                    }}
                >
                    Our Core Services
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '25px' }}>
                    {serviceItems.map(service => (
                        <div key={service.title} className='service-card' style={serviceCardBaseStyle}>
                            {' '}
                            {/* Added service-card class */}
                            <div style={{ fontSize: '3em', marginBottom: '15px', color: '#FFA500' }}>
                                {service.icon}
                            </div>
                            <h3
                                style={{
                                    color: '#001f3f',
                                    fontSize: '1.5em',
                                    marginBottom: '10px',
                                    fontFamily: 'var(--font-heading, Arial, sans-serif)',
                                }}
                            >
                                {service.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '0.95em',
                                    color: '#4A4A4A',
                                    lineHeight: 1.6,
                                    fontFamily: 'var(--font-body, Arial, sans-serif)',
                                }}
                            >
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className='showcase-section'
                style={{
                    marginBottom: '50px',
                    textAlign: 'center',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                }}
            >
                <h2
                    className='section-heading'
                    style={{
                        color: '#001f3f',
                        borderBottom: '3px solid #FFA500',
                        paddingBottom: '12px',
                        marginBottom: '30px',
                        fontSize: 'clamp(1.8em, 4vw, 2.3em)',
                        display: 'inline-block',
                        fontFamily: 'var(--font-heading, Arial, sans-serif)',
                    }}
                >
                    Featured Work Showcase
                </h2>
                <div style={{ maxWidth: '700px', margin: '0 auto 25px auto' }}>
                    <SvgPlaceholder
                        width={600}
                        height={350}
                        text='Interactive Slider of Completed Projects'
                        bgColor='#D3D3D3'
                        textColor='#001f3f'
                    />
                </div>
                <p
                    style={{
                        marginTop: '15px',
                        fontSize: '1.1em',
                        color: '#334e68',
                        fontFamily: 'var(--font-body, Arial, sans-serif)',
                    }}
                >
                    See the quality and transformations we deliver.
                </p>
                <Link
                    href='/gallery'
                    className='button'
                    style={{ marginTop: '15px', backgroundColor: '#FFA500', color: 'white' }}
                >
                    View Full Gallery
                </Link>
            </section>

            <section
                className='cta-section'
                style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    backgroundColor: '#001f3f',
                    borderRadius: '12px',
                    color: 'white',
                }}
            >
                <h2
                    style={{
                        fontSize: 'clamp(1.8em, 4vw, 2.3em)',
                        margin: '0 0 15px 0',
                        fontFamily: 'var(--font-heading, Arial, sans-serif)',
                    }}
                >
                    Ready to Transform Your Space?
                </h2>
                <p
                    style={{
                        fontSize: '1.15em',
                        margin: '0 auto 25px auto',
                        maxWidth: '650px',
                        lineHeight: 1.6,
                        color: '#e7f0f7',
                        fontFamily: 'var(--font-body, Arial, sans-serif)',
                    }}
                >
                    Contact Billy the Painter for a friendly consultation and a no-obligation quote. Le&apos;s make your
                    vision a reality!
                </p>
                <Link
                    href='/contact'
                    className='button'
                    style={{ fontSize: '1.2em', padding: '15px 35px', backgroundColor: '#FFA500', color: 'white' }}
                >
                    Contact Us Now
                </Link>
            </section>
        </div>
    )
}

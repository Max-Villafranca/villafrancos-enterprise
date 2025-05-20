import SvgPlaceholder from '../../components/SvgPlaceholder'

export const metadata = {
    title: 'Contact Billy the Painter - Villafranco’s Enterprise LLC',
    description:
        'Get in touch with Billy the Painter for professional painting and lead abatement services. Call or email us today for a free quote!',
}

export default function ContactPage() {
    const serviceAreaInfo =
        'Serving Cleveland and surrounding areas. Contact us to confirm service in your specific location.'
    const emailAddress = 'villafrancosenterprisellc@gmail.com' // Corrected email
    const phoneNumber = '2167444737'

    return (
        <div className='container section-padding' style={{ paddingTop: '40px', paddingBottom: '50px' }}>
            <h1
                className='section-title'
                style={{
                    color: 'var(--navy-blue)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2em, 5vw, 2.8em)',
                    textAlign: 'center',
                    marginBottom: '15px',
                }}
            >
                Contact Us
            </h1>
            <p
                style={{
                    textAlign: 'center',
                    maxWidth: '650px',
                    margin: '0 auto 40px auto',
                    fontSize: '1.15em',
                    color: 'var(--medium-text)',
                    lineHeight: 1.7,
                }}
            >
                We&apos;re ready to help with your next painting or lead abatement project! Reach out to Billy the
                Painter for a friendly consultation and a free, no-obligation quote.
            </p>

            <div
                className='contact-options-grid'
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    marginBottom: '40px',
                }}
            >
                <div
                    className='contact-card'
                    style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: 'var(--border-radius-lg)',
                        boxShadow: 'var(--shadow-md)',
                        textAlign: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: '3em',
                            color: 'var(--highlight-orange)',
                            display: 'block',
                            marginBottom: '15px',
                        }}
                        role='img'
                        aria-label='phone'
                    >
                        📞
                    </span>
                    <h3
                        style={{
                            color: 'var(--navy-blue)',
                            fontFamily: 'var(--font-heading)',
                            margin: '0 0 10px 0',
                            fontSize: '1.6em',
                        }}
                    >
                        Call Us Directly
                    </h3>
                    <p style={{ fontSize: '1.1em', color: 'var(--dark-text)', marginBottom: '15px' }}>
                        For immediate inquiries or to schedule a consultation:
                    </p>
                    <a
                        href={`tel:${phoneNumber}`}
                        className='button'
                        style={{ backgroundColor: 'var(--navy-blue)', fontSize: '1.2em', padding: '12px 25px' }}
                    >
                        (216) 744-4737
                    </a>
                </div>

                <div
                    className='contact-card'
                    style={{
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: 'var(--border-radius-lg)',
                        boxShadow: 'var(--shadow-md)',
                        textAlign: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: '3em',
                            color: 'var(--highlight-orange)',
                            display: 'block',
                            marginBottom: '15px',
                        }}
                        role='img'
                        aria-label='email'
                    >
                        📧
                    </span>
                    <h3
                        style={{
                            color: 'var(--navy-blue)',
                            fontFamily: 'var(--font-heading)',
                            margin: '0 0 10px 0',
                            fontSize: '1.6em',
                        }}
                    >
                        Send Us an Email
                    </h3>
                    <p style={{ fontSize: '1.1em', color: 'var(--dark-text)', marginBottom: '15px' }}>
                        For detailed project descriptions or questions:
                    </p>
                    <a
                        href={`mailto:${emailAddress}`}
                        className='button'
                        style={{ backgroundColor: 'var(--navy-blue)', fontSize: '1.2em', padding: '12px 25px' }}
                    >
                        Email Us
                    </a>
                    <p style={{ marginTop: '10px', fontSize: '0.95em' }}>
                        <small>{emailAddress}</small>
                    </p>
                </div>
            </div>

            <div
                className='service-area-info'
                style={{
                    textAlign: 'center',
                    padding: '25px',
                    backgroundColor: 'var(--soft-blue-bg)',
                    borderRadius: 'var(--border-radius-lg)',
                    marginTop: '30px',
                    boxShadow: 'var(--shadow-sm)',
                }}
            >
                <h3
                    style={{
                        color: 'var(--navy-blue)',
                        fontFamily: 'var(--font-heading)',
                        margin: '0 0 10px 0',
                        fontSize: '1.5em',
                    }}
                >
                    Our Service Area
                </h3>
                <p style={{ fontSize: '1.1em', color: 'var(--medium-text)', margin: 0 }}>{serviceAreaInfo}</p>
                <p style={{ marginTop: '15px', fontSize: '0.9em', color: 'var(--dark-text)' }}>
                    Billy the Painter operates under <strong>villafranco&apos;s Enterprise LLC</strong>.
                </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h3
                    style={{
                        color: 'var(--navy-blue)',
                        fontFamily: 'var(--font-heading)',
                        margin: '0 0 15px 0',
                        fontSize: '1.5em',
                    }}
                >
                    Find Our General Location (Office/Base)
                </h3>
                <div
                    style={{
                        border: '2px dashed var(--highlight-orange)',
                        padding: '10px',
                        borderRadius: 'var(--border-radius-md)',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}
                >
                    <SvgPlaceholder
                        height={300}
                        text='Map Placeholder (e.g., Cleveland Area)'
                        bgColor='#e0e0e0'
                        textColor='var(--navy-blue)'
                    />
                </div>
            </div>
        </div>
    )
}

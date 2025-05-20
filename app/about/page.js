import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    // This is now valid because the file is a Server Component by default
    title: 'About Billy the Painter - Villafranco’s Enterprise LLC',
    description: 'Learn about Billy the Painter, our experience, and commitment to quality painting and lead safety.',
}

export default function AboutPage() {
    return (
        <div className='container section-padding' style={{ paddingTop: '40px', paddingBottom: '50px' }}>
            <h1
                className='section-title'
                style={{
                    color: 'var(--navy-blue)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2em, 5vw, 2.8em)',
                    textAlign: 'center',
                    marginBottom: '30px',
                }}
            >
                Meet Billy the Painter
            </h1>

            <div
                className='about-intro'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    md: { flexDirection: 'row' },
                    alignItems: 'center',
                    gap: '30px',
                    marginBottom: '40px',
                    backgroundColor: 'var(--soft-blue-bg)',
                    padding: '30px',
                    borderRadius: 'var(--border-radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                }}
            >
                <div className='profile-image-container' style={{ flexShrink: 0, textAlign: 'center' }}>
                    <Image
                        src='/billy_cartoon.png' // Path relative to public folder
                        alt='Billy the Painter - Friendly and Professional'
                        width={220} // Adjust size as needed
                        height={220}
                        style={{
                            borderRadius: '50%',
                            border: '4px solid var(--highlight-orange)',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        }}
                    />
                </div>
                <div style={{ flexGrow: 1, textAlign: 'left', '@media (maxWwidth: 768px)': { textAlign: 'center' } }}>
                    <p
                        style={{
                            fontSize: '1.2em',
                            lineHeight: 1.7,
                            color: 'var(--dark-text)',
                            fontFamily: 'var(--font-body)',
                        }}
                    >
                        Hi, I&apos;m Billy! For me, painting is more than just applying color to walls – it&apos;s about
                        bringing visions to life, creating joyful spaces, and building lasting relationships with my
                        clients. With years of dedicated experience, I founded <strong>Billy the Painter</strong>,
                        operating under
                        <strong>villafranco&apos;s Enterprise LLC</strong>, to offer top-quality painting services
                        infused with a personal, approachable touch.
                    </p>
                </div>
            </div>

            <div className='about-details' style={{ padding: '0 15px' }}>
                <h2
                    style={{
                        color: 'var(--navy-blue)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.6em, 4vw, 2.2em)',
                        textAlign: 'center',
                        marginBottom: '30px',
                        borderBottom: '2px solid var(--highlight-orange)',
                        paddingBottom: '10px',
                        display: 'inline-block',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        position: 'relative',
                    }}
                >
                    Our Commitment & Values
                </h2>
                <p
                    style={{
                        textAlign: 'center',
                        maxWidth: '750px',
                        margin: '-10px auto 30px auto',
                        fontSize: '1.1em',
                        color: 'var(--medium-text)',
                    }}
                >
                    We believe in doing things right the first time. This means meticulous preparation, using premium
                    materials, and an unwavering attention to detail from start to finish. Our goal is simple: to exceed
                    your expectations and leave you with a beautifully transformed space you&apos;ll love for years to
                    come.
                </p>
                <ul
                    className='values-list'
                    style={{
                        listStyle: 'none',
                        paddingLeft: 0,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '25px',
                        marginBottom: '30px',
                    }}
                >
                    {[
                        {
                            icon: '🎨',
                            title: 'Quality Craftsmanship',
                            desc: 'Using the best techniques and materials for a flawless, durable finish.',
                        },
                        {
                            icon: '🛡️',
                            title: 'EPA Lead-Safe Certified',
                            desc: 'Your safety is paramount. We adhere to strict EPA guidelines for lead-based paint.',
                        },
                        {
                            icon: '🤝',
                            title: 'Customer Focused',
                            desc: 'We listen, collaborate, and tailor our services to your specific needs and vision.',
                        },
                        {
                            icon: '⏱️',
                            title: 'Reliable & Punctual',
                            desc: 'We respect your time and ensure projects are completed efficiently.',
                        },
                        {
                            icon: '🔍',
                            title: 'Attention to Detail',
                            desc: 'From prep work to the final stroke, precision is key to our work.',
                        },
                        {
                            icon: '😊',
                            title: 'Friendly Service',
                            desc: 'An approachable and positive experience from your first call to project completion.',
                        },
                    ].map(item => (
                        <li
                            key={item.title}
                            style={{
                                backgroundColor: '#fff',
                                padding: '20px',
                                borderRadius: 'var(--border-radius-md)',
                                boxShadow: 'var(--shadow-sm)',
                                textAlign: 'center',
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '2.5em',
                                    display: 'block',
                                    marginBottom: '10px',
                                    color: 'var(--highlight-orange)',
                                }}
                            >
                                {item.icon}
                            </span>
                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--navy-blue)',
                                    fontSize: '1.3em',
                                    margin: '0 0 8px 0',
                                }}
                            >
                                {item.title}
                            </h3>
                            <p style={{ fontSize: '0.95em', color: 'var(--medium-text)', margin: 0, lineHeight: 1.5 }}>
                                {item.desc}
                            </p>
                        </li>
                    ))}
                </ul>

                <div
                    className='llc-notice'
                    style={{
                        textAlign: 'center',
                        padding: '20px',
                        backgroundColor: 'var(--navy-blue)',
                        color: 'white',
                        borderRadius: 'var(--border-radius-lg)',
                        marginTop: '30px',
                    }}
                >
                    <h3
                        style={{
                            fontFamily: 'var(--font-heading)',
                            margin: '0 0 10px 0',
                            fontSize: '1.4em',
                            color: 'var(--highlight-orange)',
                        }}
                    >
                        villafranco&apos;s Enterprise LLC
                    </h3>
                    <p style={{ margin: 0, fontSize: '1.05em', lineHeight: 1.6 }}>
                        Billy the Painter proudly operates as a dedicated service under villafranco&apos;s Enterprise
                        LLC. This ensures full compliance, proper insurance, and a robust professional backing for all
                        projects we undertake. You receive the warm, friendly service of Billy the Painter combined with
                        the security and established professionalism of an LLC.
                    </p>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link
                    href='/contact'
                    className='button button-primary'
                    style={{ fontSize: '1.2em', padding: '15px 30px' }}
                >
                    Ready to Start? Get Your Free Quote!
                </Link>
            </div>
        </div>
    )
}

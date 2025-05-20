import Link from 'next/link'

export default function Footer() {
    const emailAddress = 'villafrancosenterprisellc@gmail.com' // Corrected email
    const phoneNumber = '2167444737'
    const formattedPhoneNumber = '(216) 744-4737'

    return (
        <footer
            className='main-footer'
            style={{
                backgroundColor: '#222',
                color: '#ccc',
                textAlign: 'center',
                padding: '30px 15px',
                marginTop: 'auto',
            }}
        >
            <div className='container'>
                <div style={{ marginBottom: '20px' }}>
                    <h3
                        style={{
                            color: 'var(--highlight-orange)',
                            margin: '0 0 10px 0',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.4em',
                        }}
                    >
                        Get in Touch
                    </h3>
                    <p style={{ margin: '5px 0', fontSize: '1.1em' }}>
                        <a href={`tel:${phoneNumber}`} style={{ color: 'white', textDecoration: 'none' }}>
                            <span role='img' aria-label='phone'>
                                📞
                            </span>{' '}
                            {formattedPhoneNumber}
                        </a>
                    </p>
                    <p style={{ margin: '5px 0', fontSize: '1.1em' }}>
                        <a href={`mailto:${emailAddress}`} style={{ color: 'white', textDecoration: 'none' }}>
                            <span role='img' aria-label='email'>
                                📧
                            </span>{' '}
                            {emailAddress}
                        </a>
                    </p>
                </div>
                <p style={{ fontSize: '0.9em', color: '#aaa' }}>
                    © {new Date().getFullYear()} Billy the Painter - Villafranco's Enterprise LLC. All rights reserved.
                </p>
                <p style={{ fontSize: '0.85em', color: '#aaa' }}>
                    Professional Painting & EPA Certified Lead Abatement Services.
                </p>
                <p style={{ marginTop: '15px' }}>
                    <Link
                        href='/contact'
                        className='button'
                        style={{ backgroundColor: 'var(--highlight-orange)', padding: '10px 20px', fontSize: '1em' }}
                    >
                        Contact Us Page
                    </Link>
                </p>
            </div>
        </footer>
    )
}

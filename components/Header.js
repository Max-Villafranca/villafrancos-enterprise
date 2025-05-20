import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const emailAddress = 'villafrancosenterprisellc@gmail.com'
    const phoneNumber = '2167444737'
    const formattedPhoneNumber = '(216) 744-4737'

    return (
        <header
            className='main-header'
            style={{
                backgroundColor: '#001f3f',
                color: 'white',
                padding: '10px 0',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}
        >
            <div
                className='container'
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px',
                }}
            >
                <Link
                    href='/'
                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}
                >
                    <Image
                        src='/billy_cartoon.png'
                        alt='Billy the Painter Logo'
                        width={55}
                        height={55}
                        style={{ marginRight: '12px', borderRadius: '50%' }}
                    />
                    <div>
                        <h1
                            style={{
                                margin: '0',
                                fontSize: 'clamp(1.5em, 4vw, 1.7em)',
                                fontFamily: 'var(--font-heading)',
                            }}
                        >
                            Billy the Painter
                        </h1>
                        <p
                            style={{
                                margin: '0',
                                fontSize: '0.75em',
                                fontFamily: 'var(--font-body)',
                                color: '#e0e0e0',
                            }}
                        >
                            villafranco&apos;s Enterprise LLC
                        </p>
                    </div>
                </Link>
                <div
                    className='header-contact-nav-group'
                    style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
                >
                    <div className='header-contact-info' style={{ textAlign: 'right', fontSize: '0.9em' }}>
                        <a
                            href={`tel:${phoneNumber}`}
                            style={{
                                color: 'var(--highlight-orange)',
                                textDecoration: 'none',
                                fontWeight: '600',
                                display: 'block',
                            }}
                        >
                            Call: {formattedPhoneNumber}
                        </a>
                        <a
                            href={`mailto:${emailAddress}`}
                            style={{ color: '#f0f0f0', textDecoration: 'none', fontSize: '0.9em' }}
                        >
                            {emailAddress}
                        </a>
                    </div>
                    <nav className='main-nav'>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
                            <li>
                                <Link href='/' className='nav-link'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/about' className='nav-link'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href='/services' className='nav-link'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact' className='nav-link'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

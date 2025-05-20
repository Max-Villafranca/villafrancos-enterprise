import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
    title: 'Billy the Painter - Villafranco’s Enterprise LLC',
    description:
        'Professional painting services and certified lead abatement by Billy the Painter, Villafranco’s Enterprise LLC.',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    margin: 0,
                    fontFamily: 'Arial, sans-serif' /* Basic fallback */,
                }}
            >
                <Header />
                <main style={{ flex: '1 0 auto', width: '100%' }}>
                    {' '}
                    {/* Ensures main content takes available space */}
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}


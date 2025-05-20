import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
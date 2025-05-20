'use client';
import Link from 'next/link';

const Header = () => (
  <header style={{
    backgroundColor: '#001f3f', // Navy Blue
    padding: '1rem 0',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }}>
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      flexWrap: 'wrap', // Allow wrapping for smaller screens
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
        {/* Simplified SVG Logo */}
        <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
          <rect width="100" height="100" rx="10" fill="#D3D3D3"/> {/* Soft Gray background */}
          {/* Ladder part */}
          <rect x="60" y="15" width="8" height="70" fill="#001f3f" />
          <rect x="75" y="15" width="8" height="70" fill="#001f3f" />
          <rect x="60" y="25" width="23" height="8" fill="#001f3f" />
          <rect x="60" y="45" width="23" height="8" fill="#001f3f" />
          <rect x="60" y="65" width="23" height="8" fill="#001f3f" />
          {/* Billy character outline */}
          <circle cx="35" cy="40" r="15" fill="#FFA500"/> {/* Face - Orange pop */}
          <rect x="25" y="55" width="20" height="30" rx="5" fill="#001f3f"/> {/* Body - Navy Blue */}
          <text x="35" y="45" fontSize="15" fill="#001f3f" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">B</text> {/* Initial */}
        </svg>
        <span style={{ fontSize: '1.8em', fontWeight: 'bold', fontFamily: "'Comic Sans MS', 'Brush Script MT', cursive" }}>Billy the Painter</span>
      </Link>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap' }}>
          {[{name: 'Home', path: '/'}, {name: 'About', path: '/about'}, {name: 'Services', path: '/services'}, {name: 'Gallery', path: '/gallery'}, {name: 'Contact', path: '/contact'}].map((item) => (
            <li key={item.name} style={{ marginLeft: '15px', marginTop: '5px', marginBottom: '5px' }}>
              <Link href={item.path} style={{ color: '#D3D3D3', textDecoration: 'none', fontSize: '1.1em', padding: '5px 10px', borderRadius: '4px', transition: 'background-color 0.3s' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#FFA500'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <style jsx>{`
      @media (max-width: 700px) {
        header div {
          flex-direction: column;
          align-items: center;
        }
        nav ul {
          margin-top: 15px;
          justify-content: center;
        }
        nav ul li {
          margin-left: 10px;
          margin-right: 10px;
        }
        header span { /* Target Billy the Painter text */
          font-size: 1.5em;
        }
      }
    `}</style>
  </header>
);

export default Header;
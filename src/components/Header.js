import React, { useState, useEffect } from 'react';
import '../styles/components/Header.css';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/images/grass-logo.svg';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const dropdownItems = {
    'About Us': ['Our Story', 'Team', 'Mission & Vision', 'Partners'],
    'What we do': ['Agricultural Education', 'Social Services', 'Research', 'Sustainable Farming'],
    'Media Corner': ['News', 'Blog', 'Press Releases', 'Events']
  };

  return (
    <header className={`header ${visible ? '' : 'hidden'} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Gajanan Research Logo" className="logo-image" />
          </a>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className={`nav-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
          <nav className="nav-menu">
            <ul className="nav-items">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              
              <li className="nav-item dropdown">
                <a href="/about" className="nav-link dropdown-toggle">
                  About Us <ChevronDown size={16} className="dropdown-icon" />
                </a>
                <div className="dropdown-menu">
                  {dropdownItems['About Us'].map((item, idx) => (
                    <a key={idx} href={`/about/${item.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              </li>
              
              <li className="nav-item dropdown">
                <a href="/whatwedo" className="nav-link dropdown-toggle">
                  What we do <ChevronDown size={16} className="dropdown-icon" />
                </a>
                <div className="dropdown-menu">
                  {dropdownItems['What we do'].map((item, idx) => (
                    <a key={idx} href={`/whatwedo/${item.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              </li>
              
              <li className="nav-item">
                <a href="/projects" className="nav-link">Projects</a>
              </li>
              
              <li className="nav-item dropdown">
                <a href="/mediacorner" className="nav-link dropdown-toggle">
                  Media Corner <ChevronDown size={16} className="dropdown-icon" />
                </a>
                <div className="dropdown-menu">
                  {dropdownItems['Media Corner'].map((item, idx) => (
                    <a key={idx} href={`/mediacorner/${item.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              </li>
              
              <li className="nav-item">
                <a href="/gallery" className="nav-link">Gallery</a>
              </li>
              
              <li className="nav-item">
                <a href="/contact" className="nav-link">Contact Us</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="/donate" className="donate-button">Donate Now</a>
            <div className="phone-number">
              <Phone size={16} className="phone-icon" />
              <span>+91-XXXXXXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

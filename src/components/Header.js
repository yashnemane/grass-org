import React, { useState, useEffect } from 'react';
import '../styles/components/Header.css';
import { Phone } from 'lucide-react';
import Logo from '../assets/images/grass-logo.svg';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

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

  return (
    <header className={`header ${visible ? '' : 'hidden'}`}>
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Grass Logo" className="logo-image" />
        </div>
        
        <nav className="nav-menu">
          <ul className="nav-items">
            <li><a href="/" className="nav-link">Home</a></li>
            <li className="dropdown">
              <a href="/about" className="nav-link">About Us</a>
            </li>
            <li className="dropdown">
              <a href="/what-we-do" className="nav-link">What we do</a>
            </li>
            <li><a href="/projects" className="nav-link">Projects</a></li>
            <li className="dropdown">
              <a href="/media" className="nav-link">Media Corner</a>
            </li>
            <li><a href="/gallery" className="nav-link">Gallery</a></li>
            <li><a href="/contact" className="nav-link">Contact Us</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="/donate" className="donate-button">Donate</a>
          <div className="phone-number">
            <Phone size={16} className="phone-icon" />
            <span>+91-XXXXXXXXXX</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../res/img/logo.png';
import logotypy from '../res/img/logotypy.png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    setActiveLink(window.location.pathname);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="main-navbar">
        {/* Logo section */}
        <div className="navbar-left">
          <a href="/" onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }} className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        {/* Navigation links section */}
        <nav className="navbar">
          <div className="navbar-container">
            {/* Hamburger menu button */}
            <div className="menu-icon" onClick={toggleMenu}>
              <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
              <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Navigation links */}
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <a
                  href="/"
                  className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}
                >
                  STRONA GŁÓWNA
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about"
                  className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}
                >
                  O NAS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/services"
                  className={`nav-link ${activeLink === '/services' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }}
                >
                  GALERIA
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/portfolio"
                  className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/portfolio'); }}
                >
                  NASZA OFERTA
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/contact"
                  className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }}
                >
                  KONTAKT
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Search input section */}
        <div className="navbar-right">
          <img src={logotypy} alt="logotypy" className="logotypy" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

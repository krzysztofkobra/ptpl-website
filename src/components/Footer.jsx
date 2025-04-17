import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Dane kontaktowe</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">
                  Maleniska 17A<br />
                  37-500 Jarosław
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">☎️</span>
                <span className="contact-text">
                  telefon: +48 16 622 09 20
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📠</span>
                <span className="contact-text">
                  faks: +48 16 622 09 21
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">
                  tel. kom.: +48 608 365 629
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">
                  email: <a href="mailto:potpol@onet.pl" className="footer-link">potpol@onet.pl</a>
                </span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Godziny otwarcia</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon">🕒</span>
                <span className="contact-text">
                  Poniedziałek - Piątek: 8:00 - 16:00
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">🕒</span>
                <span className="contact-text">
                  Sobota: 9:00 - 13:00
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">🕒</span>
                <span className="contact-text">
                  Niedziela: Zamknięte
                </span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Szybkie linki</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon">▶️</span>
                <span className="contact-text">
                  <a href="/" className="footer-link">Strona główna</a>
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">▶️</span>
                <span className="contact-text">
                  <a href="/about" className="footer-link">O nas</a>
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">▶️</span>
                <span className="contact-text">
                  <a href="/services" className="footer-link">Galeria</a>
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">▶️</span>
                <span className="contact-text">
                  <a href="/portfolio" className="footer-link">Nasza oferta</a>
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">▶️</span>
                <span className="contact-text">
                  <a href="/contact" className="footer-link">Kontakt</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} POTPOL. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
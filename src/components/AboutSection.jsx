import React from 'react';
import './AboutSection.css';
import aboutImage from '../res/img/zd4.jpg';

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-header">
        <h2 className="about-title">O nas</h2>
        <p className="about-subtitle">
          Specjalizujemy się w kompleksowych rozwiązaniach budowlanych od ponad 20 lat
        </p>
      </div>

      <div className="about-content">
        <div className="about-image-container">
          <img src={aboutImage} alt="POTPOL budowa" className="about-image" />
        </div>

        <div className="about-text">
          <p className="about-description">
            Firma <span className="about-highlight">POTPOL</span> powstała w 2001 roku i od tego czasu nieustannie 
            rozwija swoją działalność w branży budowlanej. Specjalizujemy się w budownictwie 
            przemysłowym, mieszkaniowym oraz inżynieryjnym. Nasze wieloletnie doświadczenie pozwala 
            nam na realizację projektów o różnorodnym charakterze i skali.
          </p>
          
          <p className="about-description">
            Zatrudniamy wykwalifikowanych specjalistów oraz korzystamy z najnowocześniejszych 
            technologii, co gwarantuje najwyższą jakość wykonywanych przez nas usług. Każdy projekt 
            traktujemy indywidualnie, dostosowując nasze rozwiązania do potrzeb i oczekiwań klientów.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Doświadczony zespół fachowców</span>
            </div>
            <div className="about-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Najwyższa jakość wykonania</span>
            </div>
            <div className="about-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Terminowa realizacja projektów</span>
            </div>
            <div className="about-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Kompleksowa obsługa inwestycji</span>
            </div>
          </div>

          <div className="about-cta">
            <button className="about-button">Poznaj nas bliżej</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
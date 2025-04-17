import React from 'react';
import './FeaturedComponent.css';

import sample1 from '../res/img/zd1.jpg';
import sample2 from '../res/img/zd2.jpg';
import sample3 from '../res/img/zd3.jpg';

const FeaturedComponent = () => {
  const featuredItems = [
    {
      id: 1,
      image: sample1,
      alt: 'Featured Item 1',
      title: 'Usługa 1',
      description: 'Krótki opis pierwszej usługi lub produktu dostępnego w naszej ofercie.'
    },
    {
      id: 2,
      image: sample2,
      alt: 'Featured Item 2',
      title: 'Usługa 2',
      description: 'Krótki opis drugiej usługi lub produktu dostępnego w naszej ofercie.'
    },
    {
      id: 3,
      image: sample3,
      alt: 'Featured Item 3',
      title: 'Usługa 3',
      description: 'Krótki opis trzeciej usługi lub produktu dostępnego w naszej ofercie.'
    }
  ];
  
  const handleLearnMore = (id) => {
    console.log(`Learn more about item ${id}`);
  };

  return (
    <div className="featured-container">
      <h2 className="featured-title">Nasza Oferta</h2>
      <div className="featured-items">
        {featuredItems.map((item) => (
          <div key={item.id} className="featured-item">
            <div className="featured-image-container">
              <img
                src={item.image}
                alt={item.alt}
                className="featured-image"
              />
            </div>
            <h3>{item.title}</h3>
            <p className="featured-desc">{item.description}</p>
            <button 
              className="featured-button"
              onClick={() => handleLearnMore(item.id)}
            >
              Dowiedz się więcej
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedComponent;
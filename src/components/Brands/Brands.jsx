import React from 'react';
import sprite from '../../assets/sprite.svg';

function Brands() {
  const brandsArray = [
    'volkswagen',
    'nissan',
    'lexus',
    'land_rover',
    'mclaren',
    'bentley',
    'rolls_royce',
    'ferrari',
    'audi',
    'bmw',
    'mercedes',
    'lamborghini',
    'porsche',
    'jaguar',
  ];
  return (
    <ul>
      {brandsArray.map(brand => (
        <li key={brand}>
          <svg width={100} height={50}>
            <use href={`${sprite}#${brand}`} />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export default Brands;

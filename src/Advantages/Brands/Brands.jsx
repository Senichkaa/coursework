import React from 'react';
import sprite from '../../assets/sprite.svg';
import { BrandsUl, BrandsWrapper } from './Brands.styled';

function Brands() {
  const brandsArray = [
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
  ];
  return (
    <BrandsWrapper>
      <BrandsUl>
        {brandsArray.map(brand => (
          <li key={brand} width={100}>
            <svg width={105} height={80}>
              <use href={`${sprite}#${brand}`} />
            </svg>
          </li>
        ))}
      </BrandsUl>
    </BrandsWrapper>
  );
}

export default Brands;

import React from 'react';
import CarItem from './CarItem.jsx/CarItem';

function CarList({ cars }) {
  return (
    <ul>
      {cars.map(car => (car.id ? <CarItem key={car.id} car={car} /> : null))}
    </ul>
  );
}

export default CarList;

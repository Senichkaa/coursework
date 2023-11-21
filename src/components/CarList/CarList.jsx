import React from 'react';
import CarItem from './CarItem.jsx/CarItem';
import { CardsList } from './CarList.styled';

function CarList({ cars }) {
  return (
    <CardsList>
      {cars.map(car => (car.id ? <CarItem key={car.id} car={car} /> : null))}
    </CardsList>
  );
}

export default CarList;

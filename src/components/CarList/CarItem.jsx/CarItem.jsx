import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import {
  Item,
  CardTextWrapper,
  ImageWrapper,
  CardTitle,
  CardImage,
  CardTitleSpan,
  CardDescriptionText,
  FeatureTitle,
  PriceText,
  LearnMoreButton,
} from './CarItemStyled';

function CarItem({ car }) {
  const { id, img, brand, model, year, description, price } = car;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Item key={id}>
      <ImageWrapper>
        <CardImage src={img} alt={`${brand} ${model} ${year}`} />
      </ImageWrapper>
      <CardTextWrapper>
        <CardTitle>
          {brand}&nbsp;{model} <CardTitleSpan>,</CardTitleSpan> {year}
        </CardTitle>
        <CardDescriptionText>{description}</CardDescriptionText>
        <PriceText>
          <FeatureTitle>Price: </FeatureTitle>
          {price}
        </PriceText>
      </CardTextWrapper>
      <LearnMoreButton type="button" onClick={modalOpen}>
        Learn More
      </LearnMoreButton>
      {isModalOpen && <Modal onClose={modalClose} car={car} />}
    </Item>
  );
}

export default CarItem;

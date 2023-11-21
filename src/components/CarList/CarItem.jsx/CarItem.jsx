import React from 'react';
import {
  Item,
  CardTextWrapper,
  CardTitle,
  CardImage,
  CardTitleSpan,
  CardDescriptionText,
  CardFeaturesText,
  FeatureTitle,
  FeatureText,
  PriceText,
} from './CarItemStyled';

function CarItem({ car }) {
  const { id, img, brand, model, year, features, description, price } = car;

  return (
    <Item key={id}>
      <CardImage src={img} alt={`${brand} ${model} ${year}`} />
      <CardTextWrapper>
        <CardTitle>
          {brand}&nbsp;{model} <CardTitleSpan>,</CardTitleSpan> {year}
        </CardTitle>
        <CardDescriptionText>{description}</CardDescriptionText>
        <CardFeaturesText>
          <FeatureTitle>Features: </FeatureTitle>
          {features.map((feature, index) => (
            <FeatureText key={index}>{feature} </FeatureText>
          ))}
        </CardFeaturesText>
        <PriceText>
          <FeatureTitle>Price: </FeatureTitle>
          {price}
        </PriceText>
      </CardTextWrapper>
    </Item>
  );
}

export default CarItem;

import React from 'react';
import icons from '../../../assets/icons.svg';
import {
  ServiceUl,
  ServiceLi,
  ServiceIcon,
  ServiceTextWrapper,
  ServiceTitle,
  ServiceText,
} from '../OurService/OurService.styled';

function OurService() {
  return (
    <ServiceUl>
      <ServiceLi>
        <ServiceIcon>
          <svg width={26} height={26}>
            <use href={`${icons}#icon-search`} />
          </svg>
        </ServiceIcon>
        <ServiceTextWrapper>
          <ServiceTitle>Focus your gaze</ServiceTitle>
          <ServiceText>
            A wide range of premium products appears before you. Focus only on
            choosing your future car.
          </ServiceText>
        </ServiceTextWrapper>
      </ServiceLi>
      <ServiceLi>
        <ServiceIcon>
          <svg width={26} height={26}>
            <use href={`${icons}#icon-coin`} />
          </svg>
        </ServiceIcon>
        <ServiceTextWrapper>
          <ServiceTitle>Make your payment</ServiceTitle>
          <ServiceText>
            Everything has its own price, however, it is worth it.
          </ServiceText>
        </ServiceTextWrapper>
      </ServiceLi>
      <ServiceLi>
        <ServiceIcon>
          <svg width={26} height={26}>
            <use href={`${icons}#icon-clipboard`} />
          </svg>
        </ServiceIcon>
        <ServiceTextWrapper>
          <ServiceTitle>Take the decisive step</ServiceTitle>
          <ServiceText>
            Make an appointment with us in a few clicks and wait for a call. We
            are always ready for you.
          </ServiceText>
        </ServiceTextWrapper>
      </ServiceLi>
      <ServiceLi>
        <ServiceIcon>
          <svg width={26} height={26}>
            <use href={`${icons}#icon-smile`} />
          </svg>
        </ServiceIcon>
        <ServiceTextWrapper>
          <ServiceTitle>Meet your expectations</ServiceTitle>
          <ServiceText>
            Immerse yourself in the luxurious world in your own brand new car
            with a smile on your face
          </ServiceText>
        </ServiceTextWrapper>
      </ServiceLi>
    </ServiceUl>
  );
}

export default OurService;

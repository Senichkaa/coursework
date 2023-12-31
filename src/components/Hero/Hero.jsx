import React from 'react';
import { Container } from 'common/Container.styled';
import { useNavigate } from 'react-router-dom';
import {
  HeroSection,
  HeroTextWrapper,
  HeroTitle,
  HeroSpan,
  HeroText,
  HeroSecondText,
  HeroButton,
} from './Hero.styled';

function Hero() {
  const navigate = useNavigate();

  const navigateHandle = () => {
    navigate('/catalog');
  };
  return (
    <HeroSection>
      <Container>
        <HeroTextWrapper>
          <HeroTitle>
            Choose, create, purchase and ride your{' '}
            <HeroSpan>luxurious</HeroSpan> vehicle
          </HeroTitle>
          <HeroText>
            &nbsp; &nbsp; Now, it's your turn to show people who are{' '}
            <HeroSpan>you.</HeroSpan> Only you can show everyone what you are
            worth, be sure that you are worth the best.
          </HeroText>
          <HeroSecondText>
            &nbsp; &nbsp; You can choose a luxury car according to your taste,
            needs and preferences. A wide selection of cars and configurations,
            the owner of which you can become,{' '}
            <HeroSpan>because you are worth it.</HeroSpan>
          </HeroSecondText>
          &nbsp;{' '}
          <HeroButton type="button" onClick={navigateHandle}>
            Select a car
          </HeroButton>
        </HeroTextWrapper>
      </Container>
    </HeroSection>
  );
}

export default Hero;

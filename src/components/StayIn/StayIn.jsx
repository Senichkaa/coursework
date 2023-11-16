import React from 'react';
import { Container } from 'common/Container.styled';
import bmw from '../../assets/bmw-f90.png';

import {
  StayInSection,
  StayWrapper,
  StayInTitle,
  StayInText,
  StayInCar,
} from './StayIn.styled';

function StayIn() {
  return (
    <StayInSection>
      <Container>
        <StayWrapper>
          <StayInTitle>Make conclusions.</StayInTitle>
          <StayInText>
            Keep in touch. Let's go to new discoveries with us.
          </StayInText>
        </StayWrapper>
        <StayInCar>
          <img src={bmw} alt="bmw m5 f90" width={800} />
        </StayInCar>
      </Container>
    </StayInSection>
  );
}

export default StayIn;

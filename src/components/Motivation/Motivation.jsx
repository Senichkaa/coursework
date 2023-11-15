import React from 'react';
import { Container } from 'common/Container.styled';
import rolls from '../../assets/rolls.png';

import {
  ElementsWrapper,
  MotivationSection,
  MotivationTextWrapper,
  MotivationTitle,
  TextSpan,
  MotivationText,
} from '../Motivation/Motivation.styled';

function Motivation() {
  return (
    <MotivationSection>
      <Container>
        <ElementsWrapper>
          <div>
            <img width={580} height={300} src={rolls} alt="rolls-royce" />
          </div>
          <MotivationTextWrapper>
            <MotivationTitle>
              Be <TextSpan>yourself.</TextSpan> <br /> Open the path of
              opportunity and reach for luxury
            </MotivationTitle>
            <MotivationText>
              &nbsp; <TextSpan>Sophistication</TextSpan> is the behavior of
              stately people. You deserve everything you dream of. <br />
              Strive for it, think about it, live it, and{' '}
              <TextSpan>achieve</TextSpan> your dreams.
            </MotivationText>
          </MotivationTextWrapper>
        </ElementsWrapper>
      </Container>
    </MotivationSection>
  );
}

export default Motivation;

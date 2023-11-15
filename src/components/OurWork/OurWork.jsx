import React from 'react';
import { Container } from 'common/Container.styled';
import {
  WorkTextWrapper,
  WorkTitle,
  TextSpan,
  WorkText,
} from '../OurWork/OurWork.styled';

function OurWork() {
  return (
    <section>
      <Container>
        <WorkTextWrapper>
          <WorkTitle>
            Our goal is <TextSpan>high-quality</TextSpan> service
          </WorkTitle>
          <WorkText>
            Only with proper maintenance do you realize that you've come to the
            right place. Each client is a part of our company and a motivation
            to become the best in our industry.
          </WorkText>
        </WorkTextWrapper>
      </Container>
    </section>
  );
}

export default OurWork;

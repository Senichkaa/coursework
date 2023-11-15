import React from 'react';
import { Container } from 'common/Container.styled';
import {
  WorkSection,
  WorkTextWrapper,
  WorkTitle,
  TextSpan,
  WorkText,
} from '../OurWork/OurWork.styled';

import WorksList from './WorksList/WorksList';

function OurWork() {
  return (
    <WorkSection>
      <Container>
        <WorkTextWrapper>
          <WorkTitle>
            Our goal is <TextSpan>high-quality</TextSpan> service
          </WorkTitle>
          <WorkText>
            Only with proper maintenance you realize that you've come to the
            right place. <br /> Each client is a part of our company and a
            motivation to become the best in our industry.
          </WorkText>
        </WorkTextWrapper>
        <WorksList />
      </Container>
    </WorkSection>
  );
}

export default OurWork;

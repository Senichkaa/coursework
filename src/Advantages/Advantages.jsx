import React from 'react';
import { Container } from 'common/Container.styled';
import Brands from './Brands/Brands';
import { AdvantagesSection } from './Advantages.styled';

function Advantages() {
  return (
    <AdvantagesSection>
      <Container>
        <Brands />
        <div>
          <h2>We're strive to be better for you</h2>
          <p>
            &nbsp; Buying luxury is fashionable. With our service, you can do
            this in just a few clicks. <br&nbsp; We break the patterns of difficult
            acquisition of luxury items.
          </p>
        </div>
      </Container>
    </AdvantagesSection>
  );
}

export default Advantages;

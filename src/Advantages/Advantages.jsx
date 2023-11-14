import React from 'react';
import { Container } from 'common/Container.styled';
import Brands from './Brands/Brands';
import { AdvantagesSection } from './Advantages.styled';

function Advantages() {
  return (
    <AdvantagesSection>
      <Container>
        <Brands />
      </Container>
    </AdvantagesSection>
  );
}

export default Advantages;

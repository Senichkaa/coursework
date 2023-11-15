import React from 'react';
import { Container } from 'common/Container.styled';
import Brands from './Brands/Brands';
import OurService from './OurService/OurService';
import {
  AdvantagesSection,
  AdvantagesDivWrapper,
  AdvantagesTitle,
  AdvantagesArticle,
  AdvantageBackRect,
} from './Advantages.styled';
import porsche from '../../assets/Porsche911.png';

function Advantages() {
  return (
    <AdvantagesSection>
      <Container>
        <Brands />
        <AdvantagesDivWrapper>
          <AdvantagesTitle>We're strive to be better for you</AdvantagesTitle>
          <AdvantagesArticle>
            Buying luxury is fashionable. With our service, you can do this in
            just a few clicks, without any challenges. <br />
            We break the patterns of difficult acquisition of luxury items.
          </AdvantagesArticle>
        </AdvantagesDivWrapper>
        <AdvantageBackRect>
          <OurService />
          <img
            style={{ marginRight: -35 }}
            width={650}
            height={300}
            src={porsche}
            alt="Porsche"
          />
        </AdvantageBackRect>
      </Container>
    </AdvantagesSection>
  );
}

export default Advantages;

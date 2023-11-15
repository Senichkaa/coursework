import styled from 'styled-components';
import variables from 'common/Variables';
import HeroImage from '../../assets/g-wagon.png';

export const HeroSection = styled.section`
  background-image: url(${HeroImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: calc(50% - 400px);
  margin: 50px 0px 0px 0px;
  height: 500px;
`;

export const HeroTextWrapper = styled.div`
  width: 650px;
  margin-left: auto;
  padding: 10px 15px;
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${variables.linkColor};
  padding-bottom: 15px;
  letter-spacing: 0.7px;
`;

export const HeroSpan = styled.span`
  color: ${variables.logoPrimary};
`;

export const HeroText = styled.p`
  font-size: 24px;
  color: ${variables.linkColor};
  padding-bottom: 15px;
  line-height: 1.15;
  letter-spacing: 0.85px;
`;

export const HeroSecondText = styled.p`
  font-size: 24px;
  position: relative;
  color: ${variables.linkColor};
  padding-bottom: 15px;
  line-height: 1.15;
  letter-spacing: 0.85px;

  &::after {
    content: '';
    position: absolute;
    right: 1px;
    bottom: -1px;
    width: 618px;
    height: 2px;
    background-color: ${variables.linkColor};
  }
`;

export const HeroButton = styled.button`
  margin-top: 15px;
  padding: 18px 30px;
  border-radius: 8px;
  background-color: ${variables.logoSecondary};
  color: ${variables.linkColor};
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: #45490b;
  }
`;

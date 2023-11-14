import styled from 'styled-components';
import variables from 'common/Variables';
import HeroImage from '../../assets/hero_bgc_gclass.png';

export const HeroSection = styled.section`
  background-image: url(${HeroImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: calc(50% - 600px);
  margin: 100px 0px;
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
`;

export const HeroSpan = styled.span`
  color: ${variables.logoPrimary};
`;

export const HeroText = styled.p`
  font-size: 24px;
  color: ${variables.linkColor};
  padding-bottom: 15px;
`;

export const HeroSecondText = styled.p`
  font-size: 24px;
  position: relative;
  color: ${variables.linkColor};
  padding-bottom: 15px;

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

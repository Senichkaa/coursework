import styled from 'styled-components';
import variables from 'common/Variables';

export const StayInSection = styled.section`
  margin-top: 100px;
  position: relative;
`;

export const StayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StayInTitle = styled.h3`
  font-size: 34px;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 0.65px;
  color: ${variables.logoPrimary};
  padding-bottom: 15px;
`;

export const StayInText = styled.p`
  font-size: 24px;
  letter-spacing: 0.55px;
  line-height: 1.35;
  color: ${variables.linkColor};
  padding-bottom: 20px;
`;

export const StayInCar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from 'styled-components';
import variables from 'common/Variables';

export const WorkSection = styled.section`
  padding-bottom: 70px;
`;

export const WorkTextWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WorkTitle = styled.h2`
  font-size: 34px;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 0.65px;
  color: ${variables.logoPrimary};
  padding-bottom: 15px;
`;

export const TextSpan = styled.span`
  color: ${variables.logoPrimary};
`;

export const WorkText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.55px;
  line-height: 1.35;
  color: ${variables.linkColor};
  padding-bottom: 60px;
`;

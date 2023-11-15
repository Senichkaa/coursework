import styled from 'styled-components';
import variables from 'common/Variables';

export const MotivationSection = styled.section`
  padding: 35px 0 70px 0;
  display: flex;
`;

export const MotivationTextWrapper = styled.div`
  width: 600px;
  padding-right: 20px;
  margin-left: auto;
`;

export const MotivationTitle = styled.h3`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.95px;
  padding-bottom: 25px;
`;

export const TextSpan = styled.span`
  color: ${variables.logoPrimary};
`;

export const MotivationText = styled.p`
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.65px;
  font-weight: 500;
`;

export const ElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

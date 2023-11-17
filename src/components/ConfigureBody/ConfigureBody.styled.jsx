import styled from 'styled-components';
import variables from 'common/Variables';

export const ConfigureSection = styled.section`
  padding: 180px 0 0 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

export const ConfigureTitle = styled.h3`
  font-size: 30px;
  color: ${variables.logoPrimary};
  letter-spacing: 0.95px;
  line-height: 1.25;
  margin-bottom: 15px;
`;

export const ConfigureText = styled.p`
  font-size: 22px;
  letter-spacing: 0.75px;
  line-height: 1.3;
`;

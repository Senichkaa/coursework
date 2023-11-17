import styled from 'styled-components';
import variables from 'common/Variables';

export const AdvantagesSection = styled.section`
  /* background-color: ${variables.headerBgc}; */
  padding-top: 100px;
`;
export const AdvantagesDivWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AdvantagesTitle = styled.h2`
  font-size: 36px;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 0.65px;
  color: ${variables.logoPrimary};
  padding-bottom: 15px;
`;

export const AdvantagesArticle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.55px;
  line-height: 1.2;
  color: ${variables.linkColor};
  margin-bottom: 100px;
`;

export const AdvantageBackRect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 790px;
  height: 550px;
  padding: 0 40px;
  margin-left: auto;
  border-radius: 12px;
  border: 2px solid ${variables.serviceTitle};
  background-color: ${variables.advantageRectBg};
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

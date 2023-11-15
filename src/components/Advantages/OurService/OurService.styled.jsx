import styled from 'styled-components';
import variables from 'common/Variables';

export const ServiceUl = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 35px;
  left: -400px;
`;

export const ServiceLi = styled.li`
  display: flex;
  padding: 15px 0 15px 15px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${variables.headerBorderColor};
  gap: 3px;
  background-color: ${variables.headerBgc};
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const ServiceIcon = styled.div`
  width: 40px;
  height: 60px;

  border-radius: 14px;
  border: 1px solid ${variables.headerBorderColor};
  background-color: #b7b5b5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const ServiceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.99px;
  padding-bottom: 5px;
  color: ${variables.linkColor};
`;
export const ServiceText = styled.p`
  width: 420px;
  font-size: 18px;
  padding-right: 10px;
  color: ${variables.serviceTitle};
`;

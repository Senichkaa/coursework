import styled from 'styled-components';
import variables from 'common/Variables';

export const WorkIcon = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid ${variables.headerBorderColor};
  background-color: #b7b5b5;
  margin: 0 0 20px 0;
  box-shadow: 0px 0px 20px 1px #222121;
`;

export const WorksListUl = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const WorkLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 390px;
`;

export const WorkText = styled.p`
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 0.45px;
  color: ${variables.serviceTitle};
`;

export const WorkTitle = styled.h3`
  font-size: 24px;
  padding-bottom: 10px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.75px;
  color: ${variables.linkColor};
`;

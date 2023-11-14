import variables from 'common/Variables';
import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 70px 20px 35px;
  background-color: ${variables.headerBgc};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom: 1px solid ${variables.headerBorderColor};
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Image = styled.img`
  width: 360px;
`;

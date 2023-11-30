import styled from 'styled-components';
import variables from 'common/Variables';

export const LoadingText = styled.p`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.95px;
`;

export const CartSection = styled.section`
  margin-top: 50px;
`;

export const EmptyCartText = styled.p`
  font-size: 22px;
  text-align: center;
  letter-spacing: 1.1px;
  margin-bottom: 20px;
`;

export const CartTextSpan = styled.span`
  color: ${variables.logoPrimary};
`;

export const CartListHeader = styled.h2`
  letter-spacing: 1.1px;
  padding-left: 25px;
  margin-bottom: 25px;
`;

export const Summary = styled.p`
  font-size: 18px;
  letter-spacing: 0.9px;
  margin: 35px 0 0 auto;
  width: 300px;
  text-align: center;
`;

export const AcceptButton = styled.button`
  display: flex;
  margin: 10px 40px 0 auto;
  padding: 14px 30px;
  border-radius: 8px;
  background-color: #575c0e;
  color: #d3d3d3;
  transition: background-color 250ms ease-out;
  &:hover {
    background-color: #45490b;
  }
`;

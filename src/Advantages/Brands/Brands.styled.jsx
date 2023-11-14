import styled from 'styled-components';
import { keyframes } from 'styled-components';

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const BrandsUl = styled.ul`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  white-space: nowrap;
  animation: ${marquee} 25s linear infinite;
`;

export const BrandsWrapper = styled.div`
  overflow: hidden;
`;

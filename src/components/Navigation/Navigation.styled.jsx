import styled, { keyframes } from 'styled-components';

import { NavLink } from 'react-router-dom';
import variables from 'common/Variables';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const NavigationNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const NavigationLink = styled(NavLink)`
  position: relative;
  font-size: 22px;
  color: ${variables.linkColor};
  transition: color 250ms ease-out;

  &.active {
    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      bottom: -5px;
      background-color: ${variables.logoSecondary};
      transition: background-color 250ms ease-out;
    }
  }

  &:hover {
    color: ${variables.logoPrimary};

    &::after {
      background-color: #45490b;
      transition: background-color 250ms ease-out;
    }
  }
`;

export const UserDiv = styled.div`
  cursor: pointer;
  position: relative;
  font-size: 22px;
  color: ${variables.logoSecondary};
  transition: color 250ms ease-out;
`;

export const HoverOptions = styled.div`
  position: absolute;
  top: 65px;
  right: -55px;
  color: ${variables.serviceTitle};
  background-color: #515151ac;
  border: 1px solid #ccc;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
  z-index: 100;
  height: 60px;
  width: 190px;
  border-radius: 8px;
  margin-top: 5px;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;

  &.hide {
    animation: ${fadeOut} 0.3s ease-in-out backwards;
  }
`;

export const InsideMenuDiv = styled.div`
  display: flex;
  color: ${variables.linkColor};
  background-color: ${variables.headerBorderColor};
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;

  transition: color 250ms ease-out, background-color 250ms ease-out;
  &:hover {
    background-color: ${variables.advantageRectBg};
    color: ${variables.logoPrimary};
  }
`;

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import variables from 'common/Variables';

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

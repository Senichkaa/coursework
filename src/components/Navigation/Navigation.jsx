import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavigationNav,
  NavigationLink,
  HoverOptions,
  UserDiv,
  InsideMenuDiv,
} from './Navigation.styled';
import { FiUser } from 'react-icons/fi';

function Navigation() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleUserDivClick = () => {
    setIsHovered(!isHovered);
  };

  const handleOptionClick = option => {
    setIsHovered(false);
    if (option === 'Log In') {
      navigate('/login');
    } else if (option === 'Register') {
      navigate('/register');
    }
  };

  return (
    <NavigationNav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/catalog">Catalog</NavigationLink>
      <NavigationLink to="/configure">Configure</NavigationLink>
      <NavigationLink to="/cart">Cart</NavigationLink>
      <UserDiv onClick={handleUserDivClick}>
        <FiUser />
        {isHovered && (
          <HoverOptions className={isHovered ? '' : 'hide'}>
            <InsideMenuDiv onClick={() => handleOptionClick('Log In')}>
              Log In
            </InsideMenuDiv>
            <InsideMenuDiv onClick={() => handleOptionClick('Register')}>
              Register
            </InsideMenuDiv>
          </HoverOptions>
        )}
      </UserDiv>
    </NavigationNav>
  );
}

export default Navigation;

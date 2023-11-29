import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/authSlice/authThunk';
import {
  NavigationNav,
  NavigationLink,
  HoverOptions,
  UserDiv,
  InsideMenuDiv,
  WelcomeSpan,
  UserWelcome,
} from './Navigation.styled';
import { FiUser } from 'react-icons/fi';

function Navigation() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const handleUserDivClick = () => {
    setIsHovered(!isHovered);
  };

  const handleOptionClick = option => {
    setIsHovered(false);
    if (option === 'Log In') {
      navigate('api/auth/login');
    } else if (option === 'Register') {
      navigate('api/auth/register');
    } else if (option === 'Logout') {
      navigate('api/auth/logout');
      dispatch(logout())
        .unwrap()
        .then(() => {
          navigate('/catalog');
        })
        .catch(error => {
          console.error('Logout failed:', error);
        });
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
            {isLoggedIn ? (
              <>
                <UserWelcome>
                  Welcome,
                  <br /> <WelcomeSpan>{name}</WelcomeSpan>
                </UserWelcome>
                <InsideMenuDiv onClick={() => handleOptionClick('Logout')}>
                  Logout
                </InsideMenuDiv>
              </>
            ) : (
              <>
                <InsideMenuDiv onClick={() => handleOptionClick('Log In')}>
                  Log In
                </InsideMenuDiv>
                <InsideMenuDiv onClick={() => handleOptionClick('Register')}>
                  Register
                </InsideMenuDiv>
              </>
            )}
          </HoverOptions>
        )}
      </UserDiv>
    </NavigationNav>
  );
}

export default Navigation;

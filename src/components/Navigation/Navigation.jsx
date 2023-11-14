import React from 'react';
import { NavigationNav, NavigationLink } from './Navigation.styled';

function Navigation() {
  return (
    <NavigationNav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/catalog">Catalog</NavigationLink>
      <NavigationLink to="/configure">Configure</NavigationLink>
      <NavigationLink to="/cart">Cart</NavigationLink>
    </NavigationNav>
  );
}

export default Navigation;

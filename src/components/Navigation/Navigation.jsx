import { NavigationNav, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationNav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/catalog">Catalog</NavigationLink>
      <NavigationLink to="/configure">Configure</NavigationLink>
      <NavigationLink to="/cart">Cart</NavigationLink>
    </NavigationNav>
  );
};

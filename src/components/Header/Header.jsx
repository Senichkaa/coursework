import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/lmu-trnsprt.png';
import { Head, Image } from './Header.styled';

import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <Head>
      <NavLink to="/">
        <Image  src={logo} alt="logo" />
      </NavLink>
      <Navigation />
    </Head>
  );
};

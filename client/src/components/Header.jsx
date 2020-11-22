import React from 'react';

import Logo from '../assets/images/qualicorp-logo.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt='logo' />
      <h6>TESTE - DESENVOLVEDOR FULLSTACK</h6>
      <hr />
    </header>
  );
};

export default Header;

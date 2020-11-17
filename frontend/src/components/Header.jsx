import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <div class='nav-wrapper blue darken-3'>
          <Link className='title' to='/'>
            TESTE FULLSTACK CRUD MERN
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

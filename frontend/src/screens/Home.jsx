import React from 'react';

import api from '../services/api';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';

import '../styles/Home.scss';

const Home = () => {
  const createUser = (body) => {
    console.log(body);
    api.post('users', body);
  };

  return (
    <div>
      <Header />
      <div className='home-container'>
        <CreateForm createUser={createUser} />
      </div>
    </div>
  );
};

export default Home;

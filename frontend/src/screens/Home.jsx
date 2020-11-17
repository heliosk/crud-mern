import React from 'react';

import Header from '../components/Header';
import CreateForm from '../components/CreateForm';

import '../styles/Home.scss';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='home-container'>
        <CreateForm />
      </div>
    </div>
  );
};

export default Home;

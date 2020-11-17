import React, { useState, useEffect } from 'react';

import api from '../services/api';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import UserTable from '../components/UserTable';

import '../styles/Home.scss';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    updateUsersTable();
  }, []);

  const updateUsersTable = () => {
    api.get('users').then((res) => {
      setUsers(res.data);
    });
  };

  const createUser = (body) => {
    console.log(body);
    api.post('users', body).then((res) => {
      updateUsersTable();
    });
  };

  return (
    <div>
      <Header />
      <div className='home-container'>
        <CreateForm createUser={createUser} />
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default Home;

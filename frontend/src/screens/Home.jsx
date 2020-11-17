import React, { useState, useEffect } from 'react';

import api from '../services/api';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import UserTable from '../components/UserTable';

import '../styles/Home.scss';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    updateUsersTable();
  }, []);

  const updateUsersTable = () => {
    api.get('users').then((res) => {
      setUsers(res.data);
    });
  };

  const createUser = async (body) => {
    try {
      const res = await api.post('users', body);

      if (res.status === 200) {
        updateUsersTable();
      }
    } catch (err) {
      setError(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`users/${id}`);

      updateUsersTable();
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <Header />
      {error && <div>error</div>}
      <div className='home-container'>
        <CreateForm createUser={createUser} />
        <UserTable deleteUser={deleteUser} users={users} />
      </div>
    </div>
  );
};

export default Home;

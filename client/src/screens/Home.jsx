import React, { useState, useEffect } from 'react';

import api from '../services/api';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import UserTable from '../components/UserTable';
import EditForm from '../components/EditForm';

import '../styles/Home.scss';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    updateUsersTable();
  }, []);

  const updateUsersTable = async () => {
    try {
      const res = await api.get('users');

      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (err) {
      setError(err);
    }
  };

  const createUser = async (body) => {
    try {
      await api.post('users', body);

      updateUsersTable();
    } catch (err) {
      setError(err);
    }
  };

  const updateUser = async (id, body) => {
    try {
      const res = await api.patch(`users/${id}`, body);

      if (res.status === 200) {
        updateUsersTable();
        setIsEditMode(false);
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

  const editTableUser = (user) => {
    setCurrent({
      id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
    });

    setIsEditMode(true);
  };

  const setEdit = (edit) => {
    setIsEditMode(edit);
  };

  return (
    <>
      <Header />
      {error && <div>error</div>}
      <div className='home-container'>
        {!isEditMode ? (
          <CreateForm createUser={createUser} />
        ) : (
          <EditForm
            updateUser={updateUser}
            isEditMode={isEditMode}
            setEdit={setEdit}
            current={current}
          />
        )}

        <UserTable
          deleteUser={deleteUser}
          users={users}
          editTableUser={editTableUser}
        />
      </div>
    </>
  );
};

export default Home;

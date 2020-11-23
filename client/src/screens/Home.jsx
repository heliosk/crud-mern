import React, { useState, useEffect } from 'react';

import api from '../services/api';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import UserTable from '../components/UserTable';
import EditForm from '../components/EditForm';

import '../styles/Home.scss';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState([]);
  const [current, setCurrent] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    updateUsersTable();
  }, []);

  const updateUsersTable = async () => {
    try {
      const res = await api.get('users');

      setFilter([]);
      setSearch('');
      setSort('');

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
      cpf: user.cpf,
      phone: user.phone,
    });

    setIsEditMode(true);
  };

  const setEdit = (edit) => {
    setIsEditMode(edit);
  };

  const handleSearchUsers = (e) => {
    const usersToFilter = users.slice(0);

    const filteredUsers = usersToFilter.filter((user) => {
      return user.name.includes(search) || user.email.includes(search);
    });

    if (e.target.value.length === 0) {
      setSort('');
    }

    setFilter(filteredUsers);
  };

  const handleSortName = () => {
    const currentData = filter.length > 0 ? filter : users;

    if (sort === '') {
      setSort('asc');
      currentData.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === 'asc') {
      setSort('desc');
      currentData.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      setSort('asc');
      currentData.sort((a, b) => a.name.localeCompare(b.name));
    }
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

        <div className='table-container'>
          <div className='input-field search-input'>
            <input
              type='text'
              id='search'
              name='search'
              value={search}
              onKeyUp={handleSearchUsers}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label htmlFor='search'>Buscar nome ou e-mail</label>
          </div>

          {filter.length > 0 ? (
            <UserTable
              deleteUser={deleteUser}
              users={filter}
              editTableUser={editTableUser}
              handleSortName={handleSortName}
              sort={sort}
            />
          ) : (
            <UserTable
              deleteUser={deleteUser}
              users={users}
              editTableUser={editTableUser}
              handleSortName={handleSortName}
              sort={sort}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

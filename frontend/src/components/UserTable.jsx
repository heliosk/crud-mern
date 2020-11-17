import React from 'react';

import '../styles/UserTable.scss';

const UserTable = ({ users }) => {
  console.log(users);

  return (
    <div className='user-list'>
      <table className='responsive-table'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td className='center-align '>
                  <button className='action-buttons waves-effect waves-light btn-floating green accent-4'>
                    <i className='fas fa-user-edit'></i>
                  </button>

                  <button className='action-buttons waves-effect waves-light btn-floating red lighten-1'>
                    <i className='fas fa-user-times'></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>{users[0]} Nenhum usuário cadastrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

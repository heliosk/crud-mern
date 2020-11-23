import React from 'react';

import '../styles/UserTable.scss';

const UserTable = ({
  users,
  deleteUser,
  editTableUser,
  handleSortName,
  sort,
}) => {
  return (
    <div className='user-list'>
      <table className='responsive-table'>
        <thead>
          <tr>
            <th onClick={handleSortName} className='sortable'>
              Nome {sort === 'asc' && <i className='fa fa-sort-up'></i>}
              {sort === 'desc' && <i className='fa fa-sort-down'></i>}
              {sort === '' && <i className='fas fa-sort'></i>}
            </th>
            <th>E-mail</th>
            <th>Endereço</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.cpf}</td>
                <td>{user.phone}</td>
                <td className='center-align'>
                  <button
                    className='action-buttons waves-effect btn-floating waves-light blue darken-4'
                    onClick={() => editTableUser(user)}>
                    <i className='fas fa-user-edit'></i>
                  </button>

                  <button
                    className='action-buttons waves-effect btn-floating waves-light red lighten-1'
                    onClick={() => deleteUser(user._id)}>
                    <i className='fas fa-user-times'></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='6'>
                <i className='fas fa-user-slash'></i> Nenhum usuário cadastrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

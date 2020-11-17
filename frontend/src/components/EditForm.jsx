import React, { useState, useEffect } from 'react';

import '../styles/EditForm.scss';

const EditForm = ({ current, updateUser, setEdit }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(' ');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log(current);

    setId(current.id);
    setName(current.name);
    setEmail(current.email);
    setAddress(current.address);
    setPhone(current.phone);
  }, [current]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || email === '') {
      setError('Nome e e-mail são obrigatórios.');
    } else {
      updateUser(id, { name, email, address, phone });

      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setError('');
    }
  };

  return (
    <div>
      <h6>
        <i className='fas fa-user-plus'></i> Criar usuário
      </h6>
      <div className='edit-form-container'>
        <form onSubmit={submitHandler}>
          <div className='input-field'>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Name
            </label>
          </div>

          <div className='input-field'>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              E-mail
            </label>
          </div>

          <div className='input-field'>
            <input
              type='text'
              id='address'
              name='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Endereço
            </label>
          </div>

          <div className='input-field'>
            <input
              type='text'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Telefone
            </label>
          </div>
          <button
            type='submit'
            className='waves-effect waves-light btn green accent-4'>
            <i className='fas fa-plus-circle'></i> Atualizar
          </button>
          <button
            type='button'
            className='waves-effect waves-light btn red lighten-1'
            onClick={() => setEdit()}>
            <i className='fas fa-plus-circle'></i> Cancelar
          </button>
          {error !== '' && <div className='error'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default EditForm;

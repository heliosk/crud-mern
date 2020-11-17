import React, { useState } from 'react';

import '../styles/CreateForm.scss';

const CreateForm = ({ createUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || email === '') {
      setError('Nome e e-mail são obrigatórios.');
    } else {
      createUser({
        name,
        email,
        address,
        phone,
      });

      setError('');

      Array.from(document.querySelectorAll('input')).forEach(
        (input) => (input.value = '')
      );
    }
  };

  return (
    <div>
      <h6>
        <i className='fas fa-user-plus'></i> Criar usuário
      </h6>
      <div className='create-form-container'>
        <form onSubmit={submitHandler}>
          <div className='input-field'>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name'>Name</label>
          </div>

          <div className='input-field'>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='name'>E-mail</label>
          </div>

          <div className='input-field'>
            <input
              type='text'
              id='address'
              name='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor='name'>Endereço</label>
          </div>

          <div className='input-field'>
            <input
              type='text'
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor='name'>Telefone</label>
          </div>
          <button
            type='submit'
            className='waves-effect waves-light btn green accent-4'>
            <i className='fas fa-plus-circle'></i> Criar usuário
          </button>
          {error !== '' && <div className='error'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;

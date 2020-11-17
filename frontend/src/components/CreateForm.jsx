import React, { useState } from 'react';

import '../styles/CreateForm.scss';

const CreateForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const submitHandler = () => {};
  //value={password} onChange={(e) => setPassword(e.target.value)}

  return (
    <div>
      <h6>
        <i class='fas fa-user-plus'></i> Criar usuário
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
              required
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
              required
            />
            <label htmlFor='name'>E-mail</label>
          </div>

          <div className='input-field'>
            <input
              type='text'
              id='address'
              name='address'
              value={name}
              onChange={(e) => setAddress(e.target.value)}
              required
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
              required
            />
            <label htmlFor='name'>Telefone</label>
          </div>
          <button className='waves-effect waves-light btn blue darken-3'>
            <i class='fas fa-plus-circle'></i> Criar usuário
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;

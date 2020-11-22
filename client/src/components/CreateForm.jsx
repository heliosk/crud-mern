import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import * as EmailValidator from 'email-validator';
import { isValidCpf } from '../utils/formValidator';

import '../styles/CreateForm.scss';

const CreateForm = ({ createUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || email === '') {
      setError('Nome e e-mail são obrigatórios.');
      return false;
    }

    if (!EmailValidator.validate(email)) {
      setError('E-mail não é válido.');
      return false;
    }

    if (!isValidCpf(cpf)) {
      setError('CPF não é válido.');
      return false;
    }

    createUser({
      name,
      email,
      address,
      cpf,
      phone,
    });

    setName('');
    setEmail('');
    setAddress('');
    setCpf('');
    setPhone('');
    setError('');
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
            <label htmlFor='name'>Nome</label>
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
              maxLength={40}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor='name'>Endereço</label>
          </div>

          <div className='input-field'>
            <InputMask
              mask='999.999.999-99'
              maskChar={null}
              type='text'
              id='cpf'
              name='cpf'
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <label htmlFor='name'>CPF</label>
          </div>

          <div className='input-field'>
            <InputMask
              mask='(99)99999-9999'
              maskChar={null}
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
            className='waves-light waves-effect btn blue darken-4'>
            <i className='fas fa-plus-circle'></i> Criar
          </button>
          {error !== '' && <div className='error'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;

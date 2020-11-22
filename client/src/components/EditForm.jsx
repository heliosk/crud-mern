import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import * as EmailValidator from 'email-validator';

import '../styles/EditForm.scss';

const EditForm = ({ current, updateUser, setEdit }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(' ');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setId(current.id);
    setName(current.name);
    setEmail(current.email);
    setAddress(current.address);
    setCpf(current.cpf);
    setPhone(current.phone);
  }, [current]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || email === '') {
      setError('Nome e e-mail são obrigatórios.');
    } else if (!EmailValidator.validate(email)) {
      setError('E-mail não é válido.');
      return false;
    } else {
      updateUser(id, { name, email, address, phone });

      setName('');
      setEmail('');
      setAddress('');
      setCpf('');
      setPhone('');
      setError('');
    }
  };

  return (
    <div>
      <h6>
        <i className='fas fa-user-edit'></i> Editar usuário
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
              Nome
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
              maxLength={40}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Endereço
            </label>
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
            <label htmlFor='name' className='active'>
              Telefone
            </label>
          </div>
          <button
            type='submit'
            className='waves-light waves-effect btn blue darken-4'>
            <i className='fas fa-check'></i> Atualizar
          </button>
          <button
            type='button'
            className='waves-light waves-effect  btn red lighten-1'
            onClick={() => setEdit()}>
            <i className='fas fa-times'></i> Cancelar
          </button>
          {error !== '' && <div className='error'>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default EditForm;

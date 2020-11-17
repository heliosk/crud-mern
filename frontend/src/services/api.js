import axios from 'axios';

const { REACT_APP_API } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

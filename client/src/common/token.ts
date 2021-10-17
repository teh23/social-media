import axios from 'axios';
import { Token } from './types';

const setToken = (token: Token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setToken;

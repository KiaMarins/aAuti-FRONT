import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
});

export default api;

//API_URL=http://localhost:3000 no .env
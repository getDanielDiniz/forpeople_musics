import axios from 'axios';

console.log(import.meta.env.API_BASE_URL)
const api = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
});

export default api;

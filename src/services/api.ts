import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  // baseURL: 'http://10.0.2.2:3333', // uso com dispositivo físico android
  // baseURL: 'http://192.168.0.106:3333', // uso com dispositivo físico android
});

export default api;

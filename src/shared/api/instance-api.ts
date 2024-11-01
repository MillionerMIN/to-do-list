import axios from 'axios';

export const instanceApi = axios.create({
  baseURL: process.env.VITE_BASE_URL,
  headers: {
    'API-KEY': process.env.VITE_API_KEY,
  },
});

instanceApi.interceptors.request.use(function (config) {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('sn-token')}`;
  return config;
});

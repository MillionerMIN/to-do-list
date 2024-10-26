import axios from 'axios';

export const instanceApi = axios.create({
  baseURL: process.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.VITE_AUTH_TOKEN}`,
    'API-KEY': process.env.VITE_API_KEY,
  },
});

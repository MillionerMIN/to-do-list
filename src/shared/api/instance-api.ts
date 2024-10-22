import axios from 'axios';

export const instanceApi = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  headers: {
    Authorization: 'Bearer 64f6dc92-a60b-4bfb-b6eb-07fff1337a9d',
    'API-KEY': 'c776464e-9336-49f9-96f6-6e3857c87294',
  },
});

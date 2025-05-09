// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-endpoint.com',
});

export const submitEnquiry = (data) => {
  return api.post('/enquiries', data);
};

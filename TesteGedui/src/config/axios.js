import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// Create axios instance
const service = axios.create({
  baseURL: 'http://192.168.0.100:8000/api',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  timeout: 4000,
});

// Request intercepter
service.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`; // Set token
    return config;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  },
);

// response pre-processing
service.interceptors.response.use(
  async (response) => {
    if (response.data.access_token) await AsyncStorage.setItem('token', response.data.access_token);
    return response.data;
  },
  (error) => {
    let message = 'Erro de Servidor';
    let title = '';
    const { response } = error;
    if (response) {
      message = '';
      if (response.data && response.data.message) title += `${response.data.message}\n`;
      if (response.data && response.data.errors) {
        const errorsMsg = response.data.errors;
        if (Object.entries(errorsMsg).length > 0) {
          const responseData = Object.entries(errorsMsg);
          responseData.map((item) => (`${Array.isArray(item[1]) ? item[1][0] : item[1]}`)).forEach((item) => {
            message += `${item}\n`;
          });
        }
      }
      if (response.data.error === 'invalid_grant') message = 'Login e senha incorretos';
    }
    const reject = { title, message };
    return Promise.reject(reject);
  },
);

export default service;

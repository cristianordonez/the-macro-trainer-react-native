import { LoginForm } from '../../../types/types';

const url = 'http://192.168.1.8:8080';

export const auth = {
   login: async ({ email, password }: LoginForm) => {
      const currentUrl = `${url}/api/login`;
      const fetchOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ username: email.toLowerCase(), password }),
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response.status;
   },
   checkAuth: async () => {
      const currentUrl = `${url}/api/authentication`;
      const fetchOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response.status;
   },
   logout: async () => {
      const currentUrl = `${url}/api/logout`;
      const fetchOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response.status;
   },
};

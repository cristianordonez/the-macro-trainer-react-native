import { LoginForm, SignupForm } from '../../../types/types';

const url = 'http://192.168.1.8:8080/api';

export const auth = {
   login: async ({ email, password }: LoginForm) => {
      const currentUrl = `${url}/login`;
      const fetchOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ username: email.toLowerCase(), password }),
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response;
   },
   checkAuth: async () => {
      const currentUrl = `${url}/authentication`;
      const fetchOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response;
   },
   logout: async () => {
      const currentUrl = `${url}/logout`;
      const fetchOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response.status;
   },
   createAccount: async ({ email, password }: SignupForm) => {
      const currentUrl = `${url}/signup`;
      const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, password }),
      };
      const response = await fetch(currentUrl, requestOptions);
      return response;
   },
};

import { LoginForm } from '../../../types/types';

export const login = async ({ email, password }: LoginForm) => {
   let url = 'http://192.168.1.8:8080/api/login';
   const fetchOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email.toLowerCase(), password }),
   };
   const response = await fetch(url, fetchOptions);
   return response.status;
};
